// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-16",
  content: {
    build: {
      markdown: {
        highlight: {
          // theme: "github-light",
          theme: {
            // Theme used if `html.dark`
            dark: "github-dark",
            // Default theme (same as single string)
            default: "github-light",
            // Theme used if `html.sepia`
            sepia: "monokai",
          },
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  // extends: "@nuxt-themes/typography",

  modules: ["@nuxt/ui", "@nuxt/content"],
});
