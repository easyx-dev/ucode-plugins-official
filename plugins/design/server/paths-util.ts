/** 路径小工具：与内核 `platform/paths` 的口径一致，插件自带一份（不跨进程依赖内核模块）。 */
import { homedir } from "node:os";
import { resolve, sep } from "node:path";

/** 把 `~` 展开成用户主目录；不是 `~` 开头原样返回 */
export const expandHome = (path: string): string => {
  if (path === "~") return homedir();
  if (path.startsWith(`~${sep}`) || path.startsWith("~/")) return resolve(homedir(), path.slice(2));
  return path;
};

/** `child` 是否落在 `parent` 之内（含自身）；两侧都按解析后的绝对路径比 */
export const isInsidePath = (parent: string, child: string): boolean => {
  const base = resolve(parent);
  const target = resolve(child);
  return target === base || target.startsWith(base.endsWith(sep) ? base : `${base}${sep}`);
};
