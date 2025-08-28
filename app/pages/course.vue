<script setup lang="ts">
const course = await useCourse();
const firstLesson = await useFirstLesson();

const handleError = async (clearError: () => void) => {
  await navigateTo(firstLesson?.path);
  clearError();
};
</script>

<template>
  <div>
    <div class="mb-4 flex w-full items-center justify-between">
      <h1 class="text-3xl">
        <span class="font-medium">
          <span class="font-bold">{{ course.title }}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-grow flex-row justify-center">
      <div
        class="mr-4 flex min-w-[20ch] max-w-[30ch] flex-col rounded-md bg-white p-8"
      >
        <h3>Chapters</h3>
        <div
          class="mb-4 flex flex-col space-y-1"
          v-for="chapter in course.chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="-mx-4 flex flex-row space-x-1 px-4 py-1 font-normal no-underline"
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

      <div class="w-[65ch] rounded-md bg-white p-12">
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
