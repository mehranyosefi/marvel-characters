<script lang="ts" setup>
useHead({
  titleTemplate: `maravel - %s`,
  htmlAttrs: {
    lang: "fa",
    dir: "rtl",
  },
});
</script>

<template>
  <div class="root-element">
    <slot name="header">
      <header>header</header>
    </slot>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"> footer </slot>
    </footer>
  </div>
</template>
