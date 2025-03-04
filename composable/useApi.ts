import type { UseFetchOptions } from "nuxt/app";
export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  const runtimeConfig = useRuntimeConfig();
  const overridedOptions = {
    ...options,
    headers: {
      ...options?.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return useFetch(url, {
    baseURL: runtimeConfig.public.baseUrlApi,
    ...overridedOptions,
    $fetch: useNuxtApp().$api as typeof $fetch,
  });
}
