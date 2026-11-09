/**
 * 文档渲染器：编辑器区里打开 `.design` 时由宿主调到这里。
 *
 * 与视图的区别只有一处：视图是「先看清单、点进画布」，文档渲染器是**直接画指定文件**——
 * 所以它先把本会话的当前稿指过去（`doc open`），再挂画布；指向失败就照实报错。
 */
import { i18n, ui } from "@ucode/plugin-api";
import type { PluginUiComponentProps } from "@ucode/plugin-api";
import { useEffect, useState } from "react";

import { DesignCanvas } from "./design-canvas";
import { DesignHostProvider, hostOf } from "./host";
import { useDesignClient } from "./host";

export function DesignDocument(props: PluginUiComponentProps) {
  const host = hostOf(props);
  const path = props.path ?? "";
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const client = useDesignClient();

  // 打开某份稿 = 把本会话的指针指过去；之后画布读的就是它
  useEffect(() => {
    if (!host.sessionId || !path) return;
    let alive = true;
    setReady(false);
    setError(null);
    void client
      .call("doc", { action: "open", path })
      .then(() => {
        if (alive) setReady(true);
      })
      .catch((cause: unknown) => {
        if (alive) setError(cause instanceof Error ? cause.message : String(cause));
      });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- 只按文件与会话重开
  }, [host.sessionId, path]);

  if (host.sessionId === null) {
    return (
      <ui.Empty
        className="h-full"
        title={i18n.t("还没有会话")}
        hint={i18n.t("设计稿挂在会话上：先发一条消息，画布才有地方落稿")}
      />
    );
  }
  if (error !== null) {
    return <ui.Empty className="h-full" title={i18n.t("这份设计稿打不开")} hint={error} />;
  }
  if (!ready) {
    return (
      <div className="flex h-full items-center justify-center">
        <ui.Spinner />
      </div>
    );
  }
  return (
    <DesignHostProvider value={host}>
      <DesignCanvas />
    </DesignHostProvider>
  );
}
