// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxtjs/mdc',
		'@nuxt/image',
		'nuxt-clarity-analytics',
	],
	devtools: { enabled: true },
	content: {
		documentDriven: true,
	},
	vite: {
		optimizeDeps: {
			include: ['@vue/devtools-core', '@vue/devtools-kit'],
		},
	},
	app: {
		head: {
			htmlAttrs: { lang: 'en' },
			title: 'Jordan Nicholson - Senior UI/UX Designer',
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
	image: {
		screens: {
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			'2xl': 1536,
		},
		quality: 80,
		format: ['jpeg', 'jpg', 'png'],
	},
	builder: 'vite',
	compatibilityDate: '2024-12-18',
})
