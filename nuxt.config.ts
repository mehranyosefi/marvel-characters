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
  vite: {
    plugins: [tailwindcss()],
  },
  components: true,
  css: ["~/assets/styles/main.css"],
});
