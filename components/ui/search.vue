<script setup lang="ts">
import getCharacters from "@/repository/modules/character";
import type { CharacterInterface } from "~/types";
const activeMenu = shallowRef<boolean>(false);

const searchInput = shallowRef<string>("");
const character = new getCharacters();
const searchItems = ref<CharacterInterface[]>([]);
const searchLoading = shallowRef<boolean>(false);

async function triggerSearch() {
  if (searchInput.value.length <= 2) return;
  searchLoading.value = true;
  activeMenu.value = true;
  searchItems.value = [];
  const { data, status, error } = await character.getCharactersByName(
    searchInput.value
  );
  if (error.value)
    throw createError({
      message: error.value.message,
      status: error.value.status,
      fatal: true,
    });
  if (status.value === "success") {
    const res = data.value.data.results;

    if (res.length) searchItems.value = res;
  }
  searchLoading.value = false;
}

watch(searchInput, (val: string) => {
  if (val.length < 2) activeMenu.value = false;
});
</script>

<template>
  <div class="search">
    <base-menu
      :active="activeMenu"
      @deactivate="activeMenu = false"
      id="exseption-deactive"
    >
      <template #activator>
        <div
          class="bg-gray-600 p-6 rounded"
          :class="{ 'rounded-b-none': activeMenu }"
        >
          <base-input
            v-model="searchInput"
            @hanldeEnterDown="triggerSearch()"
            class="gap-x-2"
            placeholder="Search for characters..."
          >
            <template #append>
              <base-btn
                class="size-14"
                @click="triggerSearch()"
                :is-loading="false"
              >
                <img src="/img/search-normal.svg" class="size-5" />
              </base-btn>
            </template>
          </base-input>
        </div>
      </template>
      <template #items>
        <div
          class="min-h-20 max-h-60 overflow-y-auto rounded-b p-4"
          v-click-outside:exseption-deactive="() => (activeMenu = false)"
        >
          <template v-if="searchLoading">
            <div class="loader size-9 mx-auto mt-5"></div>
          </template>
          <template v-else>
            <div v-if="!searchItems.length" class="text-center mt-6 text-lg">
              !موردی پیدا نشد
            </div>
            <div
              v-else
              class="flex flex-col items-center md:flex-row md:gap-x-4"
            >
              <nuxt-link
                v-for="character in searchItems"
                :key="character.id"
                :to="`/characters/${character.id}`"
              >
                <base-character-item
                  :name="character.name"
                  :thumbnail="character.thumbnail"
                  class="search__characterItem"
                ></base-character-item>
              </nuxt-link>
            </div>
          </template>
        </div>
      </template>
    </base-menu>
  </div>
</template>

<style scoped>
@reference "~/assets/styles/main.css";
.search__characterItem :deep(img) {
  @apply size-28;
}
.search__characterItem :deep(div) {
  @apply text-center;
}
</style>
