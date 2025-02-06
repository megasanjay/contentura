// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-16",

  content: {
    watch: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  // extends: "@nuxt-themes/typography",
  modules: ["@nuxt/ui", "@nuxt/content"],

  vite: {
    server: {
      hmr: {
        port: 3008,
      },
    },
  },
});
