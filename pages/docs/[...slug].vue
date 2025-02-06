index
<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("docs");
});

const { data: page } = await useAsyncData(() =>
  queryCollection("docs").path(route.path).first(),
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});

const sidebarContent = computed(() => {
  return data.value && "children" in data.value[0]
    ? data.value[0].children
    : [];
});
</script>

<template>
  <NuxtLayout name="content" :sidebar-content="sidebarContent">
    <div
      class="prose prose-slate prose-lg prose-pre:bg-slate-50 dark:prose-pre:bg-slate-900 prose-code:text-slate-900 dark:prose-code:text-slate-50"
    >
      <ContentRenderer v-if="page" :value="page" />

      <div v-else>Page not found</div>
    </div>

    <div>
      <ContentRenderer v-if="page" :value="page" />
    </div>
  </NuxtLayout>
</template>
