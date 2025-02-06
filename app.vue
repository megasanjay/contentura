<script setup lang="ts">
// import { watch } from "chokidar";

const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#111827" : "white",
);

const appConfig = useAppConfig();

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ href: "/favicon.ico", rel: "icon" }],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: color, key: "theme-color" },
  ],
});

useSeoMeta({
  ogImage:
    "https://kalai.fairdataihub.org/api/generate?title=Contentura&description=Some%20description%20here%0A&app=Contentura&org=eyeact",
  titleTemplate: "%s - Contentura",
  twitterCard: "summary_large_image",
  twitterImage:
    "https://kalai.fairdataihub.org/api/generate?title=Contentura&description=Some%20description%20here%0A&app=Contentura&org=eyeact",
});

// Watch for changes in the content folder and reload the nuxt app
// watch("content").on("all", async (event, path) => {
//   console.info(`[Contentura] Reloading Nuxt app due to ${event} in ${path}`);

//   await reloadNuxtApp();
// });
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <pre class="hidden">{{ appConfig }}</pre>
  </UApp>
</template>
