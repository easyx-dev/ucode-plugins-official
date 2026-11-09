/**
 * 界面示例插件：演示一块插件视图的最小形状。
 *
 * 三条它刻意示范的约定：
 * 1. 只从 `@ucode/plugin-api` 取能力（宿主 React、UI 原语、动作白名单、i18n）——不自带 React；
 * 2. 样式走插件自带的 CSS（`ui/view.css`），用宿主的设计 token 变量，不依赖宿主的 Tailwind 扫描；
 * 3. 视图占满主区（`layout: "full"`），自己决定内部怎么排，宿主不替它分栏。
 */
import type { PluginUiComponentProps } from "@ucode/plugin-api";
import { actions, http, i18n, react, ui } from "@ucode/plugin-api";

export function ShowcaseView({ host, narrow }: PluginUiComponentProps) {
  const { Button, ScrollArea } = ui;
  const [reply, setReply] = react.useState<string | null>(null);
  const [error, setError] = react.useState<string | null>(null);

  /** 打自己的接口：插件的数据面只能从这里碰（宿主不给别的出口） */
  const ping = async (): Promise<void> => {
    try {
      const result = await http.call<{ ok: boolean; plugin: string }>(host.pluginId, "ping");
      setReply(`${result.plugin} · ok=${String(result.ok)}`);
      setError(null);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : String(cause));
    }
  };

  return (
    <ScrollArea className="plugin-showcase">
      <div className="plugin-showcase__inner">
        <header className="plugin-showcase__head">
          <h2 className="plugin-showcase__title">{i18n.t("插件界面示例")}</h2>
          <span className="plugin-showcase__meta">{narrow ? "窄屏" : "桌面"}</span>
        </header>

        <dl className="plugin-showcase__grid">
          <dt>插件</dt>
          <dd>{host.pluginId}</dd>
          <dt>会话</dt>
          <dd>{host.sessionId ?? "草稿态（还没有会话）"}</dd>
          <dt>工作目录</dt>
          <dd>{host.cwd ?? "无"}</dd>
        </dl>

        <div className="plugin-showcase__actions">
          <Button
            size="sm"
            variant="outline"
            onClick={() => actions.notify("这条提示来自插件", "success")}
          >
            {i18n.t("弹个提示")}
          </Button>
          <Button size="sm" variant="ghost" onClick={actions.collapse}>
            {i18n.t("收起面板")}
          </Button>
          <Button size="sm" variant="outline" onClick={() => void ping()}>
            {i18n.t("打一次插件接口")}
          </Button>
        </div>

        {reply === null && error === null ? null : (
          <p className="plugin-showcase__hint">{error ?? reply}</p>
        )}

        <p className="plugin-showcase__hint">
          {i18n.t(
            "这块界面完全由插件渲染：样式来自 ui/view.css，能力来自宿主运行时的白名单。",
          )}
        </p>
      </div>
    </ScrollArea>
  );
}
