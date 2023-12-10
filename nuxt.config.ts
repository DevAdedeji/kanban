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
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Kanban: Manage your tasks.",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Kanban: Manage your tasks.",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Kanban, your task management app.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://drive.google.com/uc?id=1AN1U9YUx1PQfTjvee5HrEsmZskoEFsm5",
        },
      ],
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
