/** 文案：直接用宿主 i18n 的 `t`（key 就是中文原文，缺译文时回落原文）。 */
import { i18n } from "@ucode/plugin-api";

/** 与 react-i18next 的 `useTranslation` 同形，移植过来的组件不用改调用点 */
export const useTranslation = (): { t: (key: string, params?: Record<string, string | number>) => string } => ({
  t: i18n.t,
});
