<script lang="ts" setup>
import CharacterModule from "@/repository/modules/character";
import type { CharacterInterface } from "~/types";

const route = useRoute();
const id = route.params.character.toString();
const character = new CharacterModule();

const { data } = await useAsyncData(() => {
  return Promise.all([
    character.getCharacterById(id),
    character.getCharacterComics(id),
    character.getCharacterSeries(id),
  ]);
});

const characterItem: ComputedRef<CharacterInterface> = computed(
  () => data.value?.[0]?.data.results[0]
);
const comicsItems = computed(() => data.value?.[1]?.data.results);
const seriesItems = computed(() => data.value?.[2]?.data.results);

useHead({
  title: characterItem.value.name,
  meta: [{ name: "description", content: characterItem.value.description }],
});
</script>

<template>
  <NuxtLayout name="default">
    <template #headerSlot>
      <div class="mt-14 flex flex-col md:flex-row gap-y-6 gap-x-10 mb-8">
        <NuxtImg
          class="rounded max-h-[180px] object-cover"
          width="180"
          height="180"
          :src="`${characterItem.thumbnail.path}.${characterItem.thumbnail.extension}`"
          :alt="`image of ${characterItem.name}`"
        />
        <div>
          <h2 v-text="characterItem.name" class="text-3xl font-semibold"></h2>
          <p class="mt-6 text-lg" v-text="characterItem.description"></p>

          <div class="flex items-center gap-x-6 flex-nowrap mt-6">
            <base-btn class="gap-x-2 px-4" outlined color="white">
              <svg class="size-6">
                <use href="/img/icons.svg#external-link"></use>
              </svg>
              <span class="capitalize pt-1 font-semibold">details</span>
            </base-btn>
            <base-btn class="gap-x-2 px-4" outlined color="white">
              <svg class="size-6">
                <use href="/img/icons.svg#external-link"></use>
              </svg>
              <span class="capitalize pt-1 font-semibold">wiki</span>
            </base-btn>
            <base-btn class="gap-x-2 px-4" outlined color="white">
              <svg class="size-6">
                <use href="/img/icons.svg#external-link"></use>
              </svg>
              <span class="capitalize pt-1 font-semibold">comiclink</span>
            </base-btn>
          </div>
        </div>
      </div>
    </template>
    <div class="py-5 px-10">
      <h3 class="font-semibold text-2xl mt-10">Comics</h3>
      <div class="grid-template mt-5">
        <base-character-item
          v-for="comic in comicsItems"
          :key="comic.id"
          :name="comic.title"
          :thumbnail="comic.thumbnail"
        />
      </div>
    </div>
    <div class="py-5 px-10">
      <h3 class="font-semibold text-2xl mt-10">Series</h3>
      <div class="grid-template mt-5">
        <base-character-item
          v-for="series in seriesItems"
          :key="series.id"
          :name="series.title"
          :thumbnail="series.thumbnail"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
