/**
 * 画布状态：按会话缓存「结构摘要 + 整页 drawing + 选中集」，与内核版的 sdk store 同形。
 *
 * 两条数据来自两条通道：摘要（页面 / 节点 / 选中集）取一次，画面每次都要报「我手里是哪一版」——
 * 服务端发现没变就回 `svg: null`，画布据此跳过重绘。工具连续改十次，画布只画真正变过的那几次。
 *
 * 事件只带 revision（宿主转发的插件事件 `design_update`）：收到就带着自己的 revision 再取一次，
 * 取不到新东西就什么都不做。
 */
import { events, http, react } from "@ucode/plugin-api";

import type {
  DesignBox,
  DesignNodeSummary,
  DesignPage,
  DesignRender,
  DesignSnapshot,
} from "./api-types";


export type DesignCanvasState = {
  revision: number;
  pageId: string;
  pages: DesignPage[];
  nodes: DesignNodeSummary[];
  selection: string[];
  mentionPrefix: string;
  path: string;
  truncated: boolean;
  warning?: string;
  svg: string;
  boxes: Record<string, DesignBox>;
  bounds: DesignBox | null;
};

type CanvasEntry = { state: DesignCanvasState | null; error: string | null; pageId?: string };

/** 会话 → 画布：一份模块级缓存，插件内所有画布共享（同一会话两个标签看到同一份） */
const entries = new Map<string, CanvasEntry>();
const listeners = new Set<() => void>();
let version = 0;

const subscribe = (listener: () => void): (() => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const emitChange = (): void => {
  version += 1;
  for (const listener of listeners) listener();
};

const call = <T,>(
  pluginId: string,
  action: string,
  sessionId: string,
  body: Record<string, unknown> = {},
): Promise<T> => http.call<T>(pluginId, action, { sessionId, ...body });

const entryOf = (sessionId: string): CanvasEntry => {
  const existing = entries.get(sessionId);
  if (existing) return existing;
  const created: CanvasEntry = { state: null, error: null };
  entries.set(sessionId, created);
  return created;
};

const write = (sessionId: string, patch: Partial<CanvasEntry>): void => {
  entries.set(sessionId, { ...entryOf(sessionId), ...patch });
  emitChange();
};

/** 取一次摘要 + 画面；`revision` 与手里的一致时服务端会回 `svg: null` */
const load = async (pluginId: string, sessionId: string): Promise<void> => {
  const current = entryOf(sessionId);
  try {
    const snapshot = await call<DesignSnapshot>(pluginId, "snapshot", sessionId, {
      ...(current.pageId ? { pageId: current.pageId } : {}),
    });
    const render =
      current.state === null
        ? await call<DesignRender>(pluginId, "render", sessionId, { pageId: snapshot.pageId })
        : await call<DesignRender>(pluginId, "render", sessionId, {
            pageId: snapshot.pageId,
            revision: current.state.revision,
          });
    const incoming = render.svg === null ? snapshot.revision : render.revision;
    const previous = current.state;
    // 先到的可能后回：比手里那版旧的整份丢掉
    if (previous !== null && incoming < previous.revision) return;
    entries.set(sessionId, {
      error: null,
      pageId: snapshot.pageId,
      state: {
        revision: incoming,
        pageId: snapshot.pageId,
        pages: snapshot.pages,
        nodes: snapshot.nodes,
        selection: snapshot.selection,
        mentionPrefix: snapshot.mentionPrefix,
        path: snapshot.path,
        truncated: snapshot.truncated === true,
        ...(snapshot.warning === undefined ? {} : { warning: snapshot.warning }),
        svg: render.svg ?? previous?.svg ?? "",
        boxes: render.svg === null ? (previous?.boxes ?? {}) : render.boxes,
        bounds: render.bounds,
      },
    });
    emitChange();
  } catch (cause) {
    write(sessionId, { error: cause instanceof Error ? cause.message : String(cause) });
  }
};

/** 已经订阅过事件的插件 id：一个页面只会挂一个设计插件，按 id 去重即可 */
const subscribed = new Set<string>();

export type DesignCanvasController = {
  state: DesignCanvasState | null;
  error: string | null;
  reload: () => void;
  select: (ids: readonly string[]) => void;
  setPage: (pageId: string) => void;
  createPage: () => void;
  openFile: (path: string) => void;
};

/** 画布控制器：挂载时取一次，之后由插件事件驱动重取 */
export const useDesignCanvas = (
  sessionId: string | null,
  pluginId: string,
): DesignCanvasController => {
  react.useSyncExternalStore(subscribe, () => version);
  react.useEffect(() => {
    if (!pluginId || subscribed.has(pluginId)) return;
    subscribed.add(pluginId);
    // 工具改过文档 / 别人换了稿：按事件里的 revision 重取
    events.on(pluginId, (event) => {
      if (event.type !== "design_update" && event.type !== "opened") return;
      for (const tracked of entries.keys()) void load(pluginId, tracked);
    });
  }, [pluginId]);
  react.useEffect(() => {
    if (sessionId) void load(pluginId, sessionId);
  }, [pluginId, sessionId]);

  const entry = sessionId === null ? undefined : entries.get(sessionId);
  return {
    state: entry?.state ?? null,
    error: entry?.error ?? null,
    reload: () => {
      if (sessionId) void load(pluginId, sessionId);
    },
    select: (ids) => {
      if (!sessionId) return;
      const current = entryOf(sessionId).state;
      if (current) write(sessionId, { state: { ...current, selection: [...ids] } });
      // 失败就把服务端那份取回来：本地乐观改过的选中集不能留成「假状态」
      void call(pluginId, "select", sessionId, { ids }).catch(() => load(pluginId, sessionId));
    },
    setPage: (pageId) => {
      if (!sessionId) return;
      entries.set(sessionId, { ...entryOf(sessionId), pageId });
      void load(pluginId, sessionId);
    },
    createPage: () => {
      if (!sessionId) return;
      void call(pluginId, "doc", sessionId, { action: "createPage" }).then(() =>
        load(pluginId, sessionId),
      );
    },
    openFile: (path) => {
      if (!sessionId) return;
      void call(pluginId, "doc", sessionId, { action: "open", path }).then(() =>
        load(pluginId, sessionId),
      );
    },
  };
};
