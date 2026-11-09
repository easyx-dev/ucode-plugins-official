/**
 * 宿主交给插件服务端模块的能力面（与 UCode 的 `PluginServerContext` 一一对应）。
 *
 * 插件产物里不引宿主的类型包（跨进程的另一侧），所以这里镜像一份声明；改宿主那边的契约时同步这里。
 */
export type PluginServerSession = { id: string; cwd: string; name: string | null };

export type PluginServerContext = {
  readonly pluginId: string;
  readonly dataDir: string;
  /** 项目配置目录名（`.<品牌 slug>`）：设计稿落 `cwd/<它>/design` */
  readonly projectConfigDirname: string;
  readonly config: Record<string, string | number | boolean>;
  readonly logger: {
    info: (message: string, meta?: unknown) => void;
    warn: (message: string, meta?: unknown) => void;
    error: (message: string, meta?: unknown) => void;
  };
  readonly sessions: {
    find: (sessionId: string) => PluginServerSession | null;
    readonly agents: readonly unknown[];
  };
  readonly sessionState: {
    get: (sessionId: string, key: string) => string | null;
    set: (sessionId: string, key: string, value: string | null) => void;
    list: (key: string) => Array<{ sessionId: string; value: string }>;
  };
  readonly events: {
    emit: (sessionId: string, type: string, payload?: unknown) => void;
  };
  readonly pi: {
    defineTool: (definition: unknown) => unknown;
    resizeImage: (bytes: Uint8Array, mimeType: string, options?: unknown) => Promise<unknown>;
    detectSupportedImageMimeTypeFromFile: (path: string) => Promise<string | null>;
  };
};
