index
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const routeParams = route.params.slug as string[];
// const routePath = routeParams.join("/");

// const { data: page } = await useAsyncData(() =>
//   queryCollection("docs").path(routePath).first(),
// );

const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("docs");
});

// useSeoMeta({
//   title: page.value?.title,
//   description: page.value?.description,
// });

const sidebarContent = computed(() => {
  return "children" in data.value[0] ? data.value[0].children : [];
});
</script>

<template>
  <NuxtLayout name="content" :sidebar-content="sidebarContent">
    <pre>{{ sidebarContent }} {{ routeParams }}</pre>
  </NuxtLayout>
</template>
