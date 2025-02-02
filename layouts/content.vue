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
    <aside class="w-full max-w-64 border-r p-4">
      <!-- Menu items are rendered when the app starts -->
      <nav>
        <ul v-for="item in sidebarContent" :key="item.stem">
          <li>
            <!-- Parent items with children -->
            <div v-if="item.children">
              <div
                class="flex cursor-pointer items-center justify-between rounded-md p-1 hover:bg-gray-100"
                :class="{
                  'text-primary-500': currentPath.includes(item.stem),
                }"
              >
                <span class="font-medium">{{ item.title }}</span>

                <Icon name="mingcute:right-fill" size="20" />
              </div>

              <ul v-if="item.children" class="ml-4 font-normal">
                <li
                  v-for="child in item.children"
                  :key="child.stem"
                  class="mb-1 flex items-center rounded-md p-1 hover:bg-slate-100 hover:text-gray-900"
                >
                  <NuxtLink
                    :to="child.path"
                    class="w-full"
                    :class="{
                      'text-primary-500': currentPath.includes(child.stem),
                    }"
                  >
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Items without children -->
            <div v-else>
              <NuxtLink :to="item.path">
                {{ item.title }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content area -->

    <main class="w-full max-w-[80vw] overflow-y-auto p-6">
      <pre> route {{ route.path }} {{ typeof route.path }} </pre>

      <slot />
    </main>
  </div>
</template>
