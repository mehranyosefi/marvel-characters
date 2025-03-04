import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    // pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxt/image", "@pinia/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/styles/main.css"],
  runtimeConfig: {
    public: {
      baseUrlApi: process.env.NUXT_BASE_URL_API,
      apikey: process.env.NUXT_API_KEY,
      privatekey: process.env.NUXT_PRIVATE_KEY,
    },
  },
  image: {
    // force ipx, as otherwise it would default to using Netlify Image CDN (which probably is better to use, but issue is about ipx)
    provider: "ipx",
    domains: ["secure.woonuxt.com"],
  },
});
