<script setup lang="ts">
const layoutCustomProps = useAttrs();

const sidebarContent = computed(() => {
  return layoutCustomProps["sidebar-content"];
});
</script>

<template>
  <div class="flex justify-center">
    <div class="flex">
      <!-- Sidebar (static) -->
      <aside class="sidebar w-full max-w-64 border-r p-4">
        <!-- Menu items are rendered when the app starts -->
        <nav>
          <ul v-for="(section, key) in sidebarContent" :key="key">
            <li>
              <button
                v-show="!selectedSection === key ? 'active' : 'hidden'"
                class="toggle-btn"
                @click="toggleSection(key)"
              >
                {{ section.title }}
              </button>
            </li>
          </ul>

          <!-- <ul class="sidebar-nav">
            <li
              v-for="item in sidebarContent"
              :key="item.path"
              class="sidebar-item"
            >
               Parent items with children -->
          <!-- <div v-if="item.children">
                <div
                  class="sidebar-parent"
                  :class="{ active: isActive(item.path) }"
                  @click="toggleSection(item.path)"
                >
                  <span class="sidebar-title">{{ item.title }}</span>

                  <span
                    class="sidebar-arrow"
                    :class="{ rotated: isExpanded(item.path) }"
                  >
                    ▼
                  </span>
                </div>

                Children/nested items -->

          <!-- <ul v-if="isExpanded(item.path)" class="sidebar-children">
                  <li
                    v-for="child in item.children"
                    :key="child.path"
                    class="sidebar-child"
                  >
                    <router-link
                      :to="child.path"
                      class="sidebar-link"
                      :class="{ active: isActive(child.path) }"
                    >
                      {{ child.title }}
                    </router-link>
                  </li>
                </ul>
              </div>

              Items without children -->
          <!-- <div v-else>
                <router-link
                  :to="item.path"
                  class="sidebar-link"
                  :class="{ active: isActive(item.path) }"
                >
                  {{ item.title }}
                </router-link>
              </div>
            </li>
          </ul> -->

          <a v-show="true" href="#" class="flex w-full flex-col rounded-l px-4">
            {{ sidebarContent }}
          </a>
        </nav>
      </aside>

      <!-- Main content area -->

      <main class="w-full max-w-[80vw] overflow-y-auto p-6">
        <!-- Your content goes here -->
        <div class="space-y-6">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
