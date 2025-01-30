<script setup lang="ts"></script>

<template>
  <header class="border-b border-gray-200 dark:border-gray-800">
    <div class="mx-auto flex items-center justify-start gap-4 px-6 py-2">
      <NuxtLink to="/" class="flex text-2xl font-bold"> Contentura </NuxtLink>

      <div class="flex items-center justify-center gap-3">
        <NuxtLink to="/dashboard" class="text-base font-medium">
          Docs
        </NuxtLink>

        <NuxtLink to="/profile" class="text-base font-medium"> Api </NuxtLink>

        <NuxtLink to="/settings" class="text-base font-medium"> Blog </NuxtLink>
      </div>
    </div>
  </header>
</template>
