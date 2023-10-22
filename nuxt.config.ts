export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "system",
    classSuffix: "",
  },
  app: {
    head: {
      title: "Kanban - Manage your tasks",
    },
  },
  modules: [
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/ui",
  ],
  css: ["/assets/css/main.css"],
  plugins: [],
  supabase: {
    redirect: false,
  },
});
