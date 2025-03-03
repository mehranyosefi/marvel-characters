<script lang="ts" setup>
// function compoutedParams() {
//   const ts: string = Date.now().toString();
//   const params = new URLSearchParams({
//     ts,
//     apikey: "aef26d4e9f8ef60546bdf4a4fe5349b3",
//     hash: md5(
//       ts +
//         "9bbf095a20b0c2d30afca27f797814bbef600607" +
//         "aef26d4e9f8ef60546bdf4a4fe5349b3"
//     ),
//   });
//   return params;
// }
// const { data } = await useFetch(
//   "https://gateway.marvel.com/v1/public" + "/characters?" + compoutedParams(),
//   {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   }
// );
</script>

<template>
  <nuxt-link to="/">index</nuxt-link>
</template>
<style scoped></style>
