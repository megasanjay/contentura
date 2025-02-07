<script setup lang="ts">
import AppColorModeButton from "./AppColorModeButton.vue";

const appConfig = useAppConfig();

const navbar = computed(() => appConfig.custom.app.navbar);
</script>

<template>
  <header class="border-b border-gray-200 dark:border-gray-800">
    <div class="mx-auto flex items-center justify-between px-4 py-2">
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/"
          class="hover:text-primary-500 flex items-center gap-1 text-lg font-bold transition-all"
        >
          <img class="w-auto" :src="navbar.logo.src" :alt="navbar.logo.alt" />

          {{ navbar.title }}
        </NuxtLink>

        <div class="ml-4 flex items-center gap-3">
          <NuxtLink
            v-for="item in navbar.items.left"
            :key="item.href"
            :to="item.href"
            class="hover:text-primary-500 flex items-center gap-1 text-base font-medium transition-all"
          >
            <Icon v-if="item.icon" :name="item.icon" />

            <span v-if="item.label">
              {{ item.label }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink
          v-for="item in navbar.items.middle"
          :key="item.href"
          :to="item.href"
          class="hover:text-primary-500 flex items-center gap-1 text-base font-medium transition-all"
        >
          <Icon v-if="item.icon" :name="item.icon" />

          <span v-if="item.label">
            {{ item.label }}
          </span>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink
          v-for="item in navbar.items.right"
          :key="item.href"
          :to="item.href"
          class="hover:text-primary-500 flex items-center gap-1 text-base font-medium transition-all"
        >
          <Icon v-if="item.icon" :name="item.icon" size="20" />

          <span v-if="item.label">
            {{ item.label }}
          </span>
        </NuxtLink>

        <AppColorModeButton />

        <UInput
          v-if="navbar.showSearchBar"
          icon="i-lucide-search"
          placeholder="Search..."
        />
      </div>
    </div>
  </header>
</template>
