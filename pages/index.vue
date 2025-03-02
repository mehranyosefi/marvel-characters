<script lang="ts" setup>
import { md5 } from "~/utility";

useHead({
  title: "index page",
});

const ts = Date.now();
const apikey = "aef26d4e9f8ef60546bdf4a4fe5349b3";
const privateKey = "9bbf095a20b0c2d30afca27f797814bbef600607";
const params = new URLSearchParams({
  ts: ts,
  apikey: apikey,
  hash: md5(ts + privateKey + apikey),
});

$fetch("https://gateway.marvel.com/v1/public/characters?" + params);
</script>

<template>
  <NuxtLayout name="default">
    <div class="w-3/4 mx-auto"></div>
  </NuxtLayout>
</template>
