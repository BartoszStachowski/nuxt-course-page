<script setup lang="ts">
const firstLesson = useFirstLesson();
console.log(firstLesson);
</script>
<template>
  <NuxtLink class="font-medium underline" :href="firstLesson?.path">
    Course
  </NuxtLink>
</template>
