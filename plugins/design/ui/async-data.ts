/** 取数小工具：key + reloadToken，与内核 `hooks/use-async-data` 同形（插件自带一份）。 */
import { useCallback, useEffect, useState } from "react";

export type AsyncData<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  reload: () => void;
};

export const useAsyncData = <T>(key: string, load: () => Promise<T>, reloadToken = 0): AsyncData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(0);

  const reload = useCallback(() => setToken((value) => value + 1), []);

  useEffect(() => {
    if (!key) return;
    let alive = true;
    setLoading(true);
    load()
      .then((result) => {
        if (!alive) return;
        setData(result);
        setError(null);
      })
      .catch((cause: unknown) => {
        if (!alive) return;
        setError(cause instanceof Error ? cause.message : String(cause));
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `load` 每次渲染都是新函数，按 key 与 token 取数
  }, [key, reloadToken, token]);

  return { data, error, loading, reload };
};
