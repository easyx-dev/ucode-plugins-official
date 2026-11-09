/**
 * 界面示例插件的服务端模块：演示「插件自有接口 + 插件工具 + 会话状态」三件事。
 *
 * 只从宿主注入的 `ctx` 取能力：`ctx.pi.defineTool` 造工具、`ctx.sessionState` 存插件自有数据、
 * `ctx.events.emit` 发插件事件。插件不 import pi、不碰数据库。
 */
import { Hono } from "hono";

const PING_KEY = "ping_count";

/** 工具：把本会话的「打过几次招呼」记在插件自己的会话状态里 */
const createMarkTool = (ctx) =>
  ctx.pi.defineTool({
    name: "showcase_mark",
    description:
      "在界面示例插件里记一次标记：累加本会话的计数并通知插件界面刷新。用于验证插件工具与会话状态通道。",
    parameters: { type: "object", properties: {}, additionalProperties: false },
    execute: async (_input, toolContext) => {
      const sessionId = toolContext?.sessionId ?? "";
      const current = ctx.sessionState.get(sessionId, PING_KEY);
      const next = Number(current ?? "0") + 1;
      ctx.sessionState.set(sessionId, PING_KEY, String(next));
      ctx.events.emit(sessionId, "marked", { count: next });
      return { content: [{ type: "text", text: `已记下第 ${next} 次标记` }] };
    },
  });

export const createRoutes = (ctx) =>
  new Hono()
    .post("/ping", (c) => c.json({ ok: true, plugin: ctx.pluginId }))
    .post("/echo", async (c) => {
      const body = await c.req.json().catch(() => ({}));
      if (typeof body.sessionId === "string") {
        ctx.events.emit(body.sessionId, "echoed", body);
      }
      return c.json({ ok: true, echo: body });
    });

export const createTools = (ctx) => [createMarkTool(ctx)];
