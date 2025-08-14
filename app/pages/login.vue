<script lang="ts" setup>
const { title } = useCourse();
</script>

<template>
  <div class="h-9 w-full max-w-2xl">
    <h1>Log in to {{ title }}</h1>
    <button class="rounded bg-blue-300 px-4 py-2 font-bold text-white">
      Log in with Github
    </button>
  </div>
</template>

<style></style>
