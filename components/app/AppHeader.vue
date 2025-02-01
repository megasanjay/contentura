<script setup lang="ts">
import AppColorModeButton from "./AppColorModeButton.vue";
</script>

<template>
  <header class="border-b border-gray-200 dark:border-gray-800">
    <div class="mx-auto flex items-center justify-start gap-4 px-6 py-2">
      <NuxtLink to="/" class="flex text-2xl font-bold"> Contentura </NuxtLink>

      <div class="flex items-center justify-center gap-3">
        <NuxtLink to="/docs" class="text-base font-medium"> Docs </NuxtLink>

        <NuxtLink to="/content" class="text-base font-medium">
          Content
        </NuxtLink>

        <NuxtLink to="/blog" class="text-base font-medium"> Blog </NuxtLink>
      </div>

      <div>
        <AppColorModeButton />
      </div>
    </div>
  </header>
</template>
