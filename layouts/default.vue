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
    <UiHeader>
      <slot name="headerSlot"></slot>
    </UiHeader>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
