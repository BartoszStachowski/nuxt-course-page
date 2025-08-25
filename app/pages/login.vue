<script lang="ts" setup>
const { title } = useCourse();
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

const login = async () => {
  const queryParams =
    query.redirectTo !== undefined ? `?redirectTo=${query.redirectTo}` : '';
  const redirectTo = `${window.location.origin}/confirm${queryParams}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo,
    },
  });

  if (error) console.error(error);
};
</script>

<template>
  <div class="h-9 w-full max-w-2xl">
    <h1>Log in to {{ title }}</h1>
    <button
      class="rounded bg-blue-300 px-4 py-2 font-bold text-white"
      @click="login"
    >
      Log in with Github
    </button>
    <div>
      <NuxtLink class="font-medium underline" href="/"> Course </NuxtLink>
    </div>
  </div>
</template>

<style></style>
