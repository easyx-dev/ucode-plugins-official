/**
 * 设计插件的服务端入口：宿主加载这一个文件，从这里拿接口与工具。
 *
 * 一次装配里只建一个 `DesignService`（文档按路径缓存），接口与工具共用它——否则工具改的文档
 * 与画布读的文档会是两份。
 */
import { createRoutes as createDesignRoutes } from "./routes";
import { setProjectConfigDirname } from "./dirs";
import { createDesignService } from "./service";
import { createDesignTools } from "./tools";
import type { PluginServerContext } from "./ctx";

/** 一次装配里只有一份服务：接口与工具要看到同一批文档（按路径缓存） */
let service: ReturnType<typeof createDesignService> | null = null;

const serviceOf = (ctx: PluginServerContext): ReturnType<typeof createDesignService> =>
  (service ??= createDesignService(ctx));

export const activate = (ctx: PluginServerContext): void => {
  setProjectConfigDirname(ctx.projectConfigDirname);
};

export const createRoutes = (ctx: PluginServerContext) => createDesignRoutes(ctx, serviceOf(ctx));

/** 工具：宿主按本次会话可用的工具名过滤后注册（`design_*` 由设计模式声明） */
export const createTools = (ctx: PluginServerContext, input: { sessionId: string; cwd: string }) =>
  createDesignTools(serviceOf(ctx).toolHooks(input), ctx.pi.defineTool);
