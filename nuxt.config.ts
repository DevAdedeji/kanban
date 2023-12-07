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
  modules: ["@vueuse/nuxt", "@nuxt/ui"],
  css: ["/assets/css/main.css"],
  plugins: ["@/plugins/draggable.ts"],
});
