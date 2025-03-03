<script lang="ts" setup>
import { useAppStore } from "~/composable/useAppStore";
import { usePagination } from "~/composable/usePagination";
useHead({
  title: "index page",
});

const appStore = useAppStore();
const baseUrl = `/characters?${appStore.compoutedParams()}`;

const {
  changePage,
  page,
  totalPages,
  paginationNumbers,
  data: dataResult,
  loading,
  limit,
} = usePagination(baseUrl);
</script>

<template>
  <NuxtLayout name="default">
    <nuxt-link to="/test">test</nuxt-link>
    <div
      class="py-5 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10"
    >
      <template v-if="!loading">
        <base-character-item
          v-for="character in dataResult?.results"
          :key="character.id"
          :name="character.name"
          :to="character.name"
          :thumbnail="character.thumbnail"
        ></base-character-item>
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
