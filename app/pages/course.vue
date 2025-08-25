<script setup lang="ts">
const { chapters, title } = useCourse();

definePageMeta({
  // layout: false,
});

const handleError = async (clearError: () => void) => {
  await navigateTo(
    '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3/',
  );
  clearError();
};
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4 w-full">
      <h1 class="text-3xl">
        <span class="font-medium">
          <span class="font-bold">{{ title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-row flex-grow justify-center">
      <div
        class="flex flex-col bg-white mr-4 p-8 rounded-md min-w-[20ch] max-w-[30ch]"
      >
        <h3>Chapters</h3>
        <div
          class="flex flex-col space-y-1 mb-4"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 -mx-4 px-4 py-1 font-normal no-underline"
            :to="lesson.path"
            :class="{
              'font-bold text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="bg-white p-12 rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error, clearError }">
            <p>
              Oh no, something went wrong with the lesson!
              <code>{{ error.message }}</code>
            </p>
            <p>
              <button
                class="bg-gray-500 px-4 py-2 font-bold text-white hover:cursor-pointer"
                @click="handleError(clearError)"
              >
                Reset
              </button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>
