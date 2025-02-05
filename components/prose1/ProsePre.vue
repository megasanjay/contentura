<template>
  <pre :class="$props.class"><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
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
