<script setup lang="ts">
defineProps<{
  videoId: number;
}>();
</script>

<template>
  <iframe
    class="aspect-video w-full rounded"
    :src="`https://player.vimeo.com/video/${videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>
