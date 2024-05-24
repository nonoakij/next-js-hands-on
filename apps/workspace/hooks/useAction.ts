import { useCallback, useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function useAction<T extends (...arg: any[]) => Promise<any>>(
  action: T,
) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useCallback(
    async (...arg: Parameters<T>) => {
      setIsLoading(true);
      try {
        const res = await action(...arg);
        setIsLoading(false);
        return res;
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    },
    [action],
  );
  return [dispatch, isLoading] as const;
}
