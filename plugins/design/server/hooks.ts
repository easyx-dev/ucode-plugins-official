/**
 * 设计能力的内核口径：只有类型，不含实现。
 *
 * 抽成插件之后「会话出池 / 归档」这类进程生命周期回调宿主还不提供（见 docs/plugin-ui.md「已知边界」），
 * 所以这里只剩工具入口；文档的落盘靠防抖写盘与画布的 flush 兜住。
 */
import type { DesignToolHooks } from "./types";

export type DesignHooks = {
  /** 工具入口：一个会话一份，闭包着会话身份与工作目录 */
  toolHooks: (input: { sessionId: string; cwd: string }) => DesignToolHooks;
};
