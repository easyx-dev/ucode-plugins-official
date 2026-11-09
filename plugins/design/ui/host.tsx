/**
 * 宿主适配层：移植过来的组件原本读内核的 Workbench / Composer / client 上下文，
 * 现在改读**插件自己持有的上下文**——由插件视图在顶层注入，深层组件用同一套 hook 名取。
 *
 * 这样移植的组件几乎不用改：`useWorkbench().sessionId`、`useComposerInsert()`、`useClient()` 都还在，
 * 只是背后的能力从「内核全局」变成了「宿主动作白名单 + 插件自有接口」。
 */
import { actions, http } from "@ucode/plugin-api";
import type { PluginUiComponentProps } from "@ucode/plugin-api";
import { createContext, type ReactNode, useContext, useEffect } from "react";

/** 插件视图能看到的宿主上下文（就是宿主给的 props） */
export type DesignHost = {
  /** 自己的插件 id（`<name>@<marketplace>`）：从哪个市场装的就是哪个，不能写死 */
  pluginId: string;
  sessionId: string | null;
  cwd: string | null;
  narrow: boolean;
};

const HostContext = createContext<DesignHost | null>(null);

export function DesignHostProvider({
  value,
  children,
}: {
  value: DesignHost;
  children: ReactNode;
}) {
  return <HostContext.Provider value={value}>{children}</HostContext.Provider>;
}

/** 与内核 `useWorkbench` 同形的子集：设计只用到会话与目录 */
export const useWorkbench = (): DesignHost => useContext(HostContext) ?? {
  pluginId: "",
  sessionId: null,
  cwd: null,
  narrow: false,
};

/**
 * 插件自有接口 + 会话：`client.apis.design.*` 的替代品。
 * 请求打到自己插件的命名空间（`/api/v1/plugins/<id>/api/*`），不经过内核。
 */
export const useDesignClient = () => {
  const host = useWorkbench();
  return {
    sessionId: host.sessionId,
    call: <T,>(action: string, body: Record<string, unknown> = {}): Promise<T> =>
      http.call<T>(host.pluginId, action, { sessionId: host.sessionId, ...body }),
  };
};

/** 取会话 id：移植代码里叫 `useClient()` 的地方其实只要这个 */
export const useClient = () => {
  const host = useWorkbench();
  return {
    apis: {
      design: {
        node: <T,>(input: { id: string }): Promise<T> =>
          http.call<T>(host.pluginId, "node", { sessionId: host.sessionId, id: input.id }),
      },
    },
  };
};

/**
 * 把选中的设计节点落进输入框：宿主只提供 `insertMention` 这一个动作，
 * 落成什么 chip 由宿主决定（内核现在的 chip 就是 `@design:` 锚点那种）。
 */
export const useComposerInsert = () => (item: { label: string; anchor: string }): void => {
  actions.insertMention({ scheme: "design", label: item.label, anchor: item.anchor });
};

/** 组件 props → 插件上下文 */
export const hostOf = (props: PluginUiComponentProps): DesignHost => ({
  pluginId: props.host.pluginId,
  sessionId: props.host.sessionId,
  cwd: props.host.cwd,
  narrow: props.narrow,
});

/**
 * 「打开某份稿」：插件视图内部的状态切换（清单 ↔ 画布）。
 * 抽成模块级回调 + 订阅，是为了让移植过来的清单组件不必逐层接 props。
 */
let openDesignHandler: ((path: string) => void) | null = null;
const openDesignListeners = new Set<(path: string) => void>();

export const setOpenDesignHandler = (handler: (path: string) => void): void => {
  openDesignHandler = handler;
};

export const openDesign = (path: string): void => {
  openDesignHandler?.(path);
  for (const listener of openDesignListeners) listener(path);
};

export const useOpenDesign = (): (path: string) => void => openDesign;

/** 订阅「打开某份稿」：视图用它把画布切过去 */
export const useOpenDesignEvents = (handler: (path: string) => void): void => {
  useEffect(() => {
    openDesignListeners.add(handler);
    return () => {
      openDesignListeners.delete(handler);
    };
  }, [handler]);
};
