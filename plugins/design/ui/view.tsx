/**
 * 设计视图：清单与画布**互斥**铺在主区（没有侧栏）。
 *
 * 形态是从内核版搬过来的：进去先看本项目的稿子清单，点一份进画布，画布标签条的返回箭头回清单。
 * 与宿主的关系只剩三件事：会话 id 与工作目录（props.host）、插入到对话（白名单动作）、
 * 以及插件自己的数据面（`http.call`）。
 */
import { actions, i18n, ui } from "@ucode/plugin-api";
import type { PluginUiComponentProps } from "@ucode/plugin-api";
import { ArrowLeft, Maximize2 } from "lucide-react";
import { useState } from "react";

import { DesignCanvas } from "./design-canvas";
import { DesignFilesList } from "./design-files-list";
import { DesignHostProvider, hostOf, useOpenDesignEvents } from "./host";

/** 画布外壳：标签条（返回清单 / 稿子路径 / 放大）+ 画布本身 */
function CanvasShell({ path, onBack }: { path: string | null; onBack: () => void }) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-border px-2 text-xs text-foreground-subtle">
        <ui.IconButton label={i18n.t("返回设计稿清单")} size="icon-xs" onClick={onBack}>
          <ArrowLeft className="size-icon-sm" />
        </ui.IconButton>
        <span className="min-w-0 truncate">{path ?? i18n.t("设计稿")}</span>
        <ui.IconButton
          className="ml-auto shrink-0"
          label={i18n.t("收起面板")}
          size="icon-xs"
          onClick={actions.collapse}
        >
          <Maximize2 className="size-icon-sm" />
        </ui.IconButton>
      </div>
      <div className="min-h-0 flex-1">
        <DesignCanvas />
      </div>
    </div>
  );
}

export function DesignView(props: PluginUiComponentProps) {
  const host = hostOf(props);
  const [path, setPath] = useState<string | null>(null);

  // 清单里点开一份 → 切到画布（画布自己按「本会话当前稿」取数）
  useOpenDesignEvents((next) => setPath(next));

  return (
    <DesignHostProvider value={host}>
      {path === null ? (
        <div className="h-full min-h-0">
          <DesignFilesList onPick={setPath} />
        </div>
      ) : (
        <CanvasShell path={path} onBack={() => setPath(null)} />
      )}
    </DesignHostProvider>
  );
}
