<script setup lang="ts">
import getCharacters from "@/repository/modules/character";
const activeMenu = shallowRef<boolean>(false);

const searchInput = shallowRef<string>("");
const character = new getCharacters();

async function triggerSearch() {
  if (searchInput.value.length <= 2) return;
  try {
    const { data, status, error } = await character.getCharactersByName(
      searchInput.value
    );
  } catch (e) {
    console.log(e);
  }
  console.log(data);
}
</script>

<template>
  <div class="search">
    <base-menu :active="activeMenu">
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
                class="size-10"
                @click="triggerSearch()"
                :is-loading="false"
              >
                <NuxtImg src="/img/search-normal.svg" class="size-4"></NuxtImg>
              </base-btn>
            </template>
            <template #items> items </template>
          </base-input>
        </div>
      </template>
    </base-menu>
  </div>
</template>

<style scoped></style>
