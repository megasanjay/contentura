<template>
  <NuxtLink :href="props.href" :target="props.target">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  href: {
    default: "",
    type: String,
  },
  target: {
    default: undefined,
    required: false,
    type: String as PropType<
      | "_blank"
      | "_parent"
      | "_self"
      | "_top"
      | (string & object)
      | null
      | undefined
    >,
  },
});
</script>
