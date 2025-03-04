import { defineStore } from "pinia";
import { md5 } from "~/utility";

export const useAppStore = defineStore("app", () => {
  const runtimeConfig = useRuntimeConfig();

  const paramsObject = Object.fromEntries(compoutedUrlParams());

  function compoutedUrlParams() {
    const ts = "1";
    return new URLSearchParams({
      ts,
      apikey: runtimeConfig.public.apikey,
      hash: md5(
        ts + runtimeConfig.public.privatekey + runtimeConfig.public.apikey
      ),
    });
  }

  return {
    paramsObject,
    compoutedUrlParams,
  };
});
