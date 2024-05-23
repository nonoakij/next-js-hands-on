import { useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function useAction<T extends (...arg: any[]) => Promise<any>>(
  action: T,
) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = async (...arg: Parameters<T>) => {
    setIsLoading(true);
    const res = await action(...arg);
    setIsLoading(false);
    return res;
  };
  return [dispatch, isLoading] as const;
}
