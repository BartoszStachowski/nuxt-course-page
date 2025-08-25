<script lang="ts" setup>
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const logout = async () => {
  const { error } = await auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo('/login');
};

const name = computed(() => user.value?.user_metadata.user_name);

const profile = computed(() => user.value?.user_metadata.avatar_url);
</script>

<template>
  <div v-if="user" class="flex items-center space-x-3 bg-white p-3 rounded">
    <img
      class="border-2 border-blue-400 rounded-full w-12 h-12"
      :src="profile"
      alt="user avatar"
    />
    <div class="text-right">
      <div class="font-medium">{{ name }}</div>
      <button class="text-slate-500 text-sm underline" @click="logout">
        Log out
      </button>
    </div>
  </div>
</template>

<style></style>
