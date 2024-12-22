import {YOUTUBE_API_KEY} from 'astro:env/server'
import {defineCollection, z} from 'astro:content'

const essential_react_16 = defineCollection({
	loader: async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaM-yvNRB9MrZkLxF9GsB30C&key=${YOUTUBE_API_KEY}`
		)
		const data = await response.json()
		return data.items.map((item) => ({
			...item,
			order: String(item.snippet.position + 1).padStart(2, '0'),
		}))
	},
	schema: z.object({
		id: z.string(),
		order: z.string(),
		snippet: z.object({
			title: z.string(),
			description: z.string(),
			position: z.number(),
			thumbnails: z.object({
				default: z.object({
					url: z.string(),
				}),
			}),
		}),
		contentDetails: z.object({
			videoId: z.string(),
		}),
	}),
})

export const collections = {essential_react_16}
