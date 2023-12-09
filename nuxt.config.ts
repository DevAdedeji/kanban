export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  colorMode: {
    preference: "system",
    classSuffix: "",
  },
  app: {
    head: {
      title: "Kanban - Manage your tasks",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  modules: ["@vueuse/nuxt", "@nuxt/ui", "@nuxtjs/supabase"],
  css: ["/assets/css/main.css"],
  plugins: ["@/plugins/draggable.ts"],
  runtimeConfig: {
    public: {
      frontendBaseUrl:
        process.env.NODE_ENV === "production"
          ? "https://kanban-dun.vercel.app"
          : "http://localhost:8080",
    },
  },
  supabase: {
    redirect: false,
  },
});
