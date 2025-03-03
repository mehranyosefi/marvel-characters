<script lang="ts" setup>
useHead({
  titleTemplate: `maravel - %s`,
  htmlAttrs: {
    lang: "fa",
    dir: "ltr",
  },
});
</script>

<template>
  <div class="root-element 3xl:container mx-auto">
    <slot name="header">
      <UiHeader />
    </slot>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
