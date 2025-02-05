<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <ContentRenderer v-if="home" :value="home" class="prose prose-slate" />

    <div v-else>Home not found</div>
  </div>
</template>
