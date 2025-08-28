<script setup lang="ts">
const firstLesson = await useFirstLesson();
</script>
<template>
  <NuxtLink class="font-medium underline" :href="firstLesson?.path">
    Course
  </NuxtLink>
</template>
