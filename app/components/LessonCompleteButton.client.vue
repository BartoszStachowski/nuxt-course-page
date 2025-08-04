<script setup lang="ts">
const modelValue = defineModel<boolean>();
</script>

<template>
  <label
    class="cursor-pointer rounded px-4 py-2 font-bold text-white"
    :class="{
      'bg-green-500': modelValue,
      'bg-gray-500': !modelValue,
    }"
  >
    <input type="checkbox" v-model="modelValue" class="hidden" />
    {{ modelValue ? "Completed!" : "Mark as complete" }}
  </label>
</template>

<style scoped>
::selection {
  display: none;
}
</style>
