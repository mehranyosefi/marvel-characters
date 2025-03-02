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
  <div class="root-element 2xl:container">
    <slot name="header">
      <UiHeader />
    </slot>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"> footer </slot>
    </footer>
  </div>
</template>
