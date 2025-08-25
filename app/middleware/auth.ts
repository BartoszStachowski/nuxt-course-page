export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/login') return;

  if (to.params.chapterSlug === '1-chapter-1') {
    return;
  }

  return navigateTo('/login');
});
