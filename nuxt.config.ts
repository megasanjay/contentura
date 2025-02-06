// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-16",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  // extends: "@nuxt-themes/typography",
  modules: ["@nuxt/ui", "@nuxt/content"],
});
