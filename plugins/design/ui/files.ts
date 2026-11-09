/** 项目里的设计稿清单：走插件自己的 `/files` 接口 */
import { http, react } from "@ucode/plugin-api";

import type { DesignFilesResponse } from "./api-types";
import { useAsyncData } from "./async-data";

export const useDesignFiles = (
  sessionId: string | null,
  pluginId: string,
  reloadToken = 0,
): { data: DesignFilesResponse | null; error: string | null; loading: boolean; reload: () => void } =>
  useAsyncData(
    sessionId ?? "",
    () =>
      sessionId && pluginId
        ? http.call<DesignFilesResponse>(pluginId, "files", { sessionId })
        : Promise.reject(new Error("没有选中会话")),
    reloadToken,
  );

/** 组件里要一版「当前稿的路径」时的轻量取值（不触发加载整页画面） */
export const useDesignPath = (sessionId: string | null, pluginId: string): string | null => {
  const [path, setPath] = react.useState<string | null>(null);
  react.useEffect(() => {
    if (!sessionId || !pluginId) {
      setPath(null);
      return;
    }
    let alive = true;
    void http
      .call<DesignFilesResponse>(pluginId, "files", { sessionId })
      .then((result) => {
        if (alive) setPath(result.currentPath);
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [pluginId, sessionId]);
  return path;
};
