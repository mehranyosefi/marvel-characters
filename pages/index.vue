<script lang="ts" setup>
import { useAppStore } from "~/composable/useAppStore";
import { usePagination } from "~/composable/usePagination";

useHead({
  title: "index page",
  meta: [
    { name: "description", content: "index page of marvel characters website" },
  ],
});

const appStore = useAppStore();

//TODO Ability to fetch data with block navigation option on usePagination
const {
  changePage,
  page,
  totalPages,
  paginationNumbers,
  data: dataResult,
  loading,
  limit,
} = usePagination(`/characters?${appStore.compoutedUrlParams()}`);
</script>

<template>
  <NuxtLayout name="default">
    <template #headerSlot>
      <div class="header__searchbar mt-5">
        <ui-search></ui-search>
      </div>
    </template>
    <div class="grid-template py-5 px-10">
      <template v-if="!loading">
        <nuxt-link
          v-for="character in dataResult?.results"
          :key="character.id"
          :to="`/characters/${character.id}`"
        >
          <base-character-item
            :name="character.name"
            :thumbnail="character.thumbnail"
          />
        </nuxt-link>
      </template>
      <template v-else>
        <div
          class="rounded p-3 border border-gray-500"
          v-for="i in limit"
          :key="i"
        >
          <div class="animate-pulse">
            <div class="w-full h-96 rounded bg-gray-500"></div>
            <div class="w-44 h-5 rounded bg-gray-500 mt-5"></div>
          </div>
        </div>
      </template>
    </div>
    <ui-pagination
      v-show="totalPages"
      class="mt-16 my-10"
      :page="page"
      @changePage="changePage"
      :total-pages="totalPages"
      :paginationNumbers="paginationNumbers"
    />
  </NuxtLayout>
</template>

<style scoped></style>
