import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		pages: defineCollection({
			type: 'page',
			source: '*.md',
			schema: z.object({
				hero: z
					.object({ title: z.string(), intro: z.string() })
					.optional(),
			}),
		}),
		work: defineCollection({
			type: 'page',
			source: 'work/*.md',
			schema: z.object({
				cover: z.string(),
				coverAlt: z.string(),
				tag: z.string(),
				featured: z.boolean().default(false),
				order: z.number().default(0),
			}),
		}),
	},
})
