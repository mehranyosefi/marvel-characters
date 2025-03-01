import type { UseFetchOptions } from "nuxt/app";
export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  const runtimeConfig = useRuntimeConfig();
  const overrideOptions = {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return useFetch((runtimeConfig.public.baseUrlApi as string) + url, {
    ...overrideOptions,
    $fetch: useNuxtApp().$api as typeof $fetch,
  });
}
