<script lang="ts" setup></script>

<template>
  <header
    class="header relative bg-linear-65 py-5 px-10 from-gray-500 to-gray-800 overflow-hidden"
  >
    <slot name="prepend"></slot>
    <slot>
      <section
        class="header__spotlight absolute hidden md:block left-1/5 top-0 bottom-0 bg-red-500/32 blur-2xl rounded-full w-[150px]"
      >
        f
      </section>
      <div class="header__logo">
        <base-btn class="justify-self-start">LOGO</base-btn>
      </div>
      <div class="header__searchbar mt-8">
        <ui-search></ui-search>
      </div>
    </slot>
    <slot name="prepend"></slot>
  </header>
</template>
