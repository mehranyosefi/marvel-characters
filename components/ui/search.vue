<script setup lang="ts">
const activeMenu = shallowRef<boolean>(false);
</script>

<template>
  <div class="search">
    <base-menu :active="activeMenu">
      <template #activator>
        <base-input class="gap-x-2" placeholder="Search for characters...">
          <template #append>
            <base-btn class="size-10" @click="activeMenu = !activeMenu">
              <NuxtImg src="/img/search-normal.svg" class="size-4"></NuxtImg>
            </base-btn>
          </template>
          <template #items> items </template>
        </base-input>
      </template>
    </base-menu>
  </div>
</template>
