<script lang="ts" setup></script>

<template>
  <header
    class="header relative z-10 py-5 px-10 bg-linear-65 from-gray-500 to-gray-800 overflow-hidden"
  >
    <slot name="prepend"></slot>
    <section
      class="header__spotlight absolute left-[3rem] bottom-[10%] md:left-[15rem] md:top-[10%] bg-red-500/32 blur-3xl rounded-full w-[200px] h-[200px] -z-10"
    ></section>
    <div class="header__logo">
      <h1>
        <nuxt-link to="/" class="inline-block w-fit">
          <!-- //TODO fix problem with nuxtimg on netlify -->
          <NuxtImg sizes="52" src="/img/logo.png" />
        </nuxt-link>
      </h1>
    </div>
    <slot></slot>
    <slot name="prepend"></slot>
  </header>
</template>

<style scoped></style>
