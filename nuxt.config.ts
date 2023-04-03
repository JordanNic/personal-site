// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: { lang: "en" },
            title: 'Jordan Nicholson - UI/UX Designer',
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                // <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
                { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' }, 
            ],
        },
    },
    css: ["@/assets/scss/app.scss"],
    builder: "vite",
})
