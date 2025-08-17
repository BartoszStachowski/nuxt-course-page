export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxtjs/supabase"],
  css: ["@/assets/css/main.css"],
  supabase: {
    redirect: false,
  },
});
