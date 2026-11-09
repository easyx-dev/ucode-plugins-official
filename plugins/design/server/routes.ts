/**
 * 设计画布的接口：结构摘要、整页 drawing、选中集、文档级动作与稿子清单。
 *
 * 与内核版同一套口径，差别只有两处：
 * - 会话工作目录从**插件上下文**取（`ctx.sessions.find`），不再走内核服务；
 * - 响应是普通 JSON，不套宿主的成功 / 失败封套——插件自有协议由插件定义（客户端用 `http.call`）。
 *
 * 失败统一折成 `{ error: { code, message, hint } }` + 合适的 HTTP 状态：
 * 草稿缺失 404、引用失配 / 入参不对 400、落盘失败 500。
 */
import { Hono } from "hono";

import type {
  DesignDocResponse,
  DesignFilesResponse,
  DesignNodeDetail,
  DesignRender,
  DesignSelection,
  DesignSnapshot,
} from "./api-types";
import type { PluginServerContext } from "./ctx";
import { isDesignError } from "./errors";
import type { DesignService, DesignTarget } from "./service";
import { listProjectDesignFiles } from "./paths";

type Body = Record<string, unknown>;

/** 会话 → 工作目录；会话不存在时抛 404 */
const targetOf = (ctx: PluginServerContext, sessionId: unknown): DesignTarget => {
  const id = typeof sessionId === "string" ? sessionId : "";
  const session = id ? ctx.sessions.find(id) : null;
  if (!session) throw Object.assign(new Error(`会话不存在：${id}`), { status: 404 });
  return { sessionId: session.id, cwd: session.cwd };
};

/** 设计失败 → HTTP 状态：文档缺失 404、引用 / 入参 400、落盘 500 */
const statusOf = (error: unknown): number => {
  if (isDesignError(error)) {
    if (error.code === "not_found") return 404;
    if (error.code === "io_failed") return 500;
    return 400;
  }
  const status = (error as { status?: unknown }).status;
  return typeof status === "number" ? status : 500;
};

const messageOf = (error: unknown): { message: string; hint?: string } => {
  if (isDesignError(error)) {
    return { message: error.message, ...(error.hint ? { hint: error.hint } : {}) };
  }
  return { message: error instanceof Error ? error.message : String(error) };
};

/** 一次请求的统一包装：把设计错误折成普通 JSON 失败体 */
const handle = async <T>(work: () => Promise<T>) => {
  try {
    return { ok: true as const, data: await work() };
  } catch (error: unknown) {
    return { ok: false as const, status: statusOf(error), ...messageOf(error) };
  }
};

export const createRoutes = (ctx: PluginServerContext, design: DesignService) =>
  new Hono()
    .post("/snapshot", async (c) => {
      const body = (await c.req.json().catch(() => ({}))) as Body;
      const result = await handle<DesignSnapshot>(async () =>
        design.snapshot({
          ...targetOf(ctx, body.sessionId),
          ...(typeof body.pageId === "string" ? { pageId: body.pageId } : {}),
        }),
      );
      return result.ok ? c.json(result.data) : c.json(result, result.status as 404);
    })
    .post("/render", async (c) => {
      const body = (await c.req.json().catch(() => ({}))) as Body;
      const result = await handle<DesignRender>(async () =>
        design.render({
          ...targetOf(ctx, body.sessionId),
          ...(typeof body.pageId === "string" ? { pageId: body.pageId } : {}),
          ...(typeof body.revision === "number" ? { revision: body.revision } : {}),
        }),
      );
      return result.ok ? c.json(result.data) : c.json(result, result.status as 404);
    })
    .post("/node", async (c) => {
      const body = (await c.req.json().catch(() => ({}))) as Body;
      const result = await handle<DesignNodeDetail>(async () =>
        design.node({ ...targetOf(ctx, body.sessionId), id: String(body.id ?? "") }),
      );
      return result.ok ? c.json(result.data) : c.json(result, result.status as 404);
    })
    .post("/select", async (c) => {
      const body = (await c.req.json().catch(() => ({}))) as Body;
      const result = await handle<DesignSelection>(async () =>
        design.select({
          ...targetOf(ctx, body.sessionId),
          ids: Array.isArray(body.ids) ? body.ids.filter((id): id is string => typeof id === "string") : [],
        }),
      );
      return result.ok ? c.json(result.data) : c.json(result, result.status as 404);
    })
    .post("/doc", async (c) => {
      const body = (await c.req.json().catch(() => ({}))) as Body;
      const result = await handle<DesignDocResponse>(async () =>
        design.doc({
          ...targetOf(ctx, body.sessionId),
          action: body.action as "flush" | "reset" | "setPage" | "createPage" | "open",
          ...(typeof body.pageId === "string" ? { pageId: body.pageId } : {}),
          ...(typeof body.name === "string" ? { name: body.name } : {}),
          ...(typeof body.path === "string" ? { path: body.path } : {}),
        }),
      );
      return result.ok ? c.json(result.data) : c.json(result, result.status as 404);
    })
    .post("/files", async (c) => {
      const body = (await c.req.json().catch(() => ({}))) as Body;
      const result = await handle<DesignFilesResponse>(async () => {
        const target = targetOf(ctx, body.sessionId);
        const files = await listProjectDesignFiles(target.cwd);
        const current = await design.currentPath(target);
        return {
          files: files.map((file) => ({ ...file, current: file.path === current })),
          currentPath: current,
        };
      });
      return result.ok ? c.json(result.data) : c.json(result, result.status as 404);
    });
