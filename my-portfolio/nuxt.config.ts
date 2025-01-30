// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"], // Ensure this points to the right file
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" }
      ]
    }
  },
  devtools: { enabled: true }
})
