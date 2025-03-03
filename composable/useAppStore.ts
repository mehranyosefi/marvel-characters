import { defineStore } from "pinia";
import { md5 } from "~/utility";

export const useAppStore = defineStore("app", () => {
  const runtimeConfig = useRuntimeConfig();
  function compoutedParams() {
    const ts = "1";
    const params = new URLSearchParams({
      ts,
      apikey: runtimeConfig.public.apikey,
      hash: md5(
        ts + runtimeConfig.public.privatekey + runtimeConfig.public.apikey
      ),
    });
    return params;
  }

  return {
    compoutedParams,
  };
});
