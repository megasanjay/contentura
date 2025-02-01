<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const routeParams = route.params.slug as string[];
const routePath = routeParams.join("/");

const { data: page } = await useAsyncData(() =>
  queryCollection("docs").path(routePath).first(),
);

const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("docs");
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <pre>{{ routePath }}</pre>

    <hr />

    <nav>
      <ul v-if="data">
        <li v-for="item in data" :key="item.path">
          <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <hr />

    <ContentRenderer v-if="page" :value="page" />

    <div v-else>Page not found</div>
  </div>
</template>
