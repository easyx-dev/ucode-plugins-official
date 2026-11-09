/**
 * 插件产物构建：把带界面 / 服务端模块的插件打成宿主能加载的 ESM 与 CSS。
 *
 * 约定（宿主按同样的约定读）：
 *   ui/*.tsx    → dist/ui/*.mjs    界面模块（视图 / 文档渲染器 / 提及）
 *   ui/*.css    → dist/ui/*.css    插件自带样式（宿主注入 `<link>`）
 *   server/*.ts → dist/server.mjs  服务端模块（进程内加载，自带依赖一起打进去）
 *
 * 界面模块的三个 bare specifier 一律 external：`react`、`react/jsx-runtime`、`@ucode/plugin-api`。
 * 它们由**宿主运行时**提供（服务端托管时把 import 改写成 shim 地址），插件自带 React 会让 hooks
 * 直接报 Invalid hook call。其余第三方依赖默认打进产物，插件不假设宿主装了什么。
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, copyFileSync } from "node:fs";
import { join, resolve } from "node:path";

import { build } from "esbuild";

const root = resolve(import.meta.dirname, "..");
const MANIFEST_DIR = ".ucode-plugin";

/** 由宿主提供的模块名：不打进插件产物 */
const HOST_EXTERNALS = ["react", "react/jsx-runtime", "react-dom", "react-dom/client", "@ucode/plugin-api"];

const readJson = (file) => JSON.parse(readFileSync(file, "utf8"));

/** 目录里某后缀的文件（不含子目录） */
const filesWithExtension = (dir, extension) =>
  existsSync(dir) ? readdirSync(dir).filter((name) => name.endsWith(extension)) : [];

const manifestOf = (dir) => {
  const file = join(dir, MANIFEST_DIR, "plugin.json");
  return existsSync(file) ? readJson(file) : null;
};

/** 需要构建的插件：清单声明了 `ui` 或 `server` */
const pluginsToBuild = () => {
  const groups = ["plugins", "external_plugins"];
  const result = [];
  for (const group of groups) {
    const base = join(root, group);
    if (!existsSync(base)) continue;
    for (const name of readdirSync(base)) {
      const dir = join(base, name);
      const manifest = manifestOf(dir);
      if (!manifest) continue;
      if (!manifest.ui && !manifest.server) continue;
      result.push({ name, dir, manifest });
    }
  }
  return result;
};

const buildPlugin = async ({ name, dir, manifest }) => {
  const dist = join(dir, "dist");
  rmSync(dist, { recursive: true, force: true });
  mkdirSync(join(dist, "ui"), { recursive: true });

  const uiDir = join(dir, "ui");
  const entries = filesWithExtension(uiDir, ".tsx").map((file) =>
    join(uiDir, file.replace(/\.tsx$/, ".mjs")),
  );
  for (const file of entries) {
    await build({
      entryPoints: [join(uiDir, file.split("/").pop().replace(/\.mjs$/, ".tsx"))],
      outfile: join(dist, "ui", file.split("/").pop()),
      bundle: true,
      format: "esm",
      platform: "browser",
      target: "es2022",
      jsx: "automatic",
      external: HOST_EXTERNALS,
      logLevel: "warning",
    });
  }

  // 样式原样拷：插件自己写 CSS（用宿主的 token 变量），宿主不做编译
  for (const file of filesWithExtension(uiDir, ".css")) {
    copyFileSync(join(uiDir, file), join(dist, "ui", file));
  }

  const serverDir = join(dir, "server");
  const serverEntry = ["index.ts", "index.mjs"].map((file) => join(serverDir, file)).find(existsSync);
  const declaresServer = Boolean(manifest.server);
  if (declaresServer && !serverEntry) {
    throw new Error(`${name}: 清单声明了 server，但 server/index.ts 或 server/index.mjs 不存在`);
  }
  if (declaresServer && serverEntry) {
    await build({
      entryPoints: [serverEntry],
      outfile: join(dist, "server.mjs"),
      bundle: true,
      format: "esm",
      platform: "node",
      target: "node22",
      // 服务端模块由本进程 import：宿主能解析的包（hono）不重复打包，其余自带依赖一起打进去
      external: ["hono"],
      logLevel: "warning",
    });
  }

  console.log(`✓ ${name}: ${entries.length} 个界面模块${declaresServer ? " + 服务端模块" : ""}`);
};

const targets = pluginsToBuild();
if (targets.length === 0) {
  console.log("没有需要构建的插件（清单里没有 ui / server 声明的插件就是纯资源插件）");
} else {
  for (const target of targets) await buildPlugin(target);
}
