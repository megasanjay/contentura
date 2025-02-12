<script setup lang="ts">
const layoutCustomProps = useAttrs();
const route = useRoute();

const currentPath = computed(() => route.path);

const sidebarContent = computed(() => {
  return layoutCustomProps["sidebar-content"];
});
</script>

<template>
  <div class="flex">
    <!-- Sidebar (static) -->
    <aside class="w-full max-w-64 border-r border-slate-200 p-4">
      <!-- Menu items are rendered when the app starts -->
      <nav>
        <ul v-for="item in sidebarContent" :key="item.path">
          <li>
            <!-- Parent items with children -->
            <div v-if="item.children">
              <div
                class="flex cursor-pointer items-center justify-between rounded-md p-1 hover:bg-gray-100"
                :class="{
                  'text-primary-500': currentPath.includes(item.path),
                }"
              >
                <span class="font-medium">{{ item.title }} </span>

                <Icon name="mingcute:right-fill" size="20" />
              </div>

              <ul v-if="item.children" class="ml-4 font-normal">
                <li
                  v-for="child in item.children"
                  :key="child.path"
                  class="mb-1 flex items-center rounded-md p-1 hover:bg-slate-100 hover:text-gray-900"
                >
                  <NuxtLink
                    :to="child.path"
                    class="w-full"
                    :class="{
                      'text-primary-500': currentPath.includes(child.path),
                    }"
                  >
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Items without children -->
            <div v-else>
              <NuxtLink
                :to="item.path"
                class="flex cursor-pointer items-center rounded-md p-1 hover:bg-gray-100"
                :class="{
                  'text-primary-500': currentPath.includes(item.path),
                }"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content area -->

    <main class="w-full max-w-[80vw] overflow-y-auto px-10 py-6">
      <slot />
    </main>
  </div>
</template>
