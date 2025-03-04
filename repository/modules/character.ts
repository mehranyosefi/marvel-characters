import { useAPI } from "~/composable/useApi";
import { useCustomFetch } from "~/composable/useCustomFetch";
import { useAppStore } from "~/composable/useAppStore";
import type { UseFetchOptions } from "nuxt/app";
import type { NitroFetchOptions } from "nitropack";

export default class CharacterModule {
  appStore = useAppStore();
  private RESOURCE = "/characters";
  async getCharacters(options?: UseFetchOptions<any>) {
    return useAPI(this.RESOURCE, { ...options, ...this.appStore.paramsObject });
  }
  async getCharactersByName(name: string, options?: UseFetchOptions<any>) {
    return useAPI(this.RESOURCE, {
      ...options,
      params: { ...this.appStore.paramsObject, name },
    });
  }
  async getCharacterById(
    id: string | number,
    options?: NitroFetchOptions<"json">
  ) {
    return useCustomFetch(`${this.RESOURCE}/${id}`, {
      ...options,
      params: {
        ...this.appStore.paramsObject,
      },
    });
  }
  async getCharacterComics(
    id: string | number,
    options?: NitroFetchOptions<"json">
  ) {
    return useCustomFetch(`${this.RESOURCE}/${id}/comics`, {
      ...options,
      params: {
        ...this.appStore.paramsObject,
      },
    });
  }
  async getCharacterSeries(
    id: string | number,
    options?: NitroFetchOptions<"json">
  ) {
    return useCustomFetch(`${this.RESOURCE}/${id}/series`, {
      ...options,
      params: {
        ...this.appStore.paramsObject,
      },
    });
  }
}
