import type { NitroFetchOptions } from "nitropack";
export function useCustomFetch<T>(
  url: string,
  fetchOptions?: NitroFetchOptions<"json">
): Promise<T> {
  const runtimeConfig = useRuntimeConfig();
  const overridedOptions = {
    ...fetchOptions,
    headers: {
      ...fetchOptions?.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return $fetch(url, {
    ...overridedOptions,
    baseURL: runtimeConfig.public.baseUrlApi,
  });
}
