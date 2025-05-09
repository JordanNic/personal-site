// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxtjs/mdc',
		'@nuxt/image'
	],
	devtools: { enabled: true },
	content: {
		documentDriven: true,
	},
	app: {
		head: {
			htmlAttrs: { lang: 'en' },
			title: 'Jordan Nicholson - Product Designer',
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				// <meta name="description" content="Hi I'm Jordan, a Product Designer from the UK">
				{
					name: 'description',
					content: "Hi I'm Jordan, a Product Designer from the UK",
				},
			],
			link: [
				// <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
				{
					rel: 'stylesheet',
					href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
				},
			],
		},
	},
	css: ['@/assets/scss/app.scss'],
	builder: 'vite',
	compatibilityDate: '2024-12-18',
})
