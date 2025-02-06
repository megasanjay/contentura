<template>
  <pre :class="$props.class">
    {{  props }}
    <slot /></pre>
</template>

<script setup lang="ts">
const props = defineProps({
  class: {
    default: null,
    type: String,
  },
  code: {
    default: "",
    type: String,
  },
  filename: {
    default: null,
    type: String,
  },
  highlights: {
    default: () => [],
    type: Array as () => number[],
  },
  language: {
    default: null,
    type: String,
  },
  meta: {
    default: null,
    type: String,
  },
});
</script>

<style>
pre code .line {
  display: block;
}
</style>
