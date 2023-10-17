export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Kanban - Manage your tasks",
    },
  },
  colorMode: {
    preference: "system",
    classSuffix: "",
  },
  modules: [
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
  ],
  css: ["/assets/css/main.css"],
  supabase: {
    redirect: false,
  },
});
