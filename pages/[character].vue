<script lang="ts" setup></script>

<template>
  <NuxtLayout name="default">
    <nuxt-link to="/test">{{ $route.params.character }}</nuxt-link>
  </NuxtLayout>
</template>

<style scoped></style>
