import { useAPI } from "~/composable/useApi";
import type { UseFetchOptions } from "nuxt/app";
import { useAppStore } from "~/composable/useAppStore";

export default class CharacterModule {
  appStore = useAppStore();
  async getCharacters(options?: UseFetchOptions<any>) {
    return useAPI("/characters?" + this.appStore.compoutedParams(), options);
  }
  async getCharactersByName(name: string, options?: UseFetchOptions<any>) {
    return useAPI(
      `/characters?name=${name}&` + this.appStore.compoutedParams(),
      options
    );
  }
  async getCharacter(options?: UseFetchOptions<any>) {
    return useAPI("/characters?" + this.appStore.compoutedParams(), options);
  }
}
