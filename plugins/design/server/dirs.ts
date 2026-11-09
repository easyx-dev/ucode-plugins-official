/**
 * 设计稿的目录名。项目配置目录（`.<品牌 slug>`）由宿主在装配时注入（见 `setProjectConfigDirname`）：
 * 它是品牌相关的，插件不该硬编码。
 */

/** 设计稿目录名（位于项目配置目录下）：`<cwd>/<项目配置目录>/design` */
export const DESIGN_DIRNAME = "design";

let projectConfigDirname = ".ucode";

export const setProjectConfigDirname = (name: string): void => {
  projectConfigDirname = name;
};

export const projectConfigDirnameOf = (): string => projectConfigDirname;
