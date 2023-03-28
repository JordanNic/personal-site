// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Jordan Nicholson - UI/UX Designer',
            htmlAttrs: { lang: "en" },
        },
    },
    css: ["@/assets/scss/app.scss"],
    builder: "vite",
})
