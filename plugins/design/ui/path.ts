/** 路径小工具：插件只需要这几个（与内核 `utils/path` 同口径） */
export const baseName = (path: string): string => path.slice(path.lastIndexOf("/") + 1);

export const dirName = (path: string): string => {
  const index = path.lastIndexOf("/");
  return index <= 0 ? "/" : path.slice(0, index);
};

/** 相对会话工作目录：在目录内给相对路径，否则给原路径（跨项目时不编一个假的相对路径） */
export const relativeToCwd = (cwd: string, path: string): string => {
  if (cwd && path.startsWith(`${cwd}/`)) return path.slice(cwd.length + 1);
  return path;
};
