import {YOUTUBE_API_KEY} from 'astro:env/server'
import {defineCollection, z} from 'astro:content'

const youtube_playlist_video_schema = z.object({
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
})

const essential_react_16 = defineCollection({
	loader: async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaM-yvNRB9MrZkLxF9GsB30C&key=${YOUTUBE_API_KEY}`
		)
		const data = await response.json()
		return data.items.map((item) => ({
			...item,
			order: String(item.snippet.position + 1).padStart(2, '0'),
			snippet: {
				...item.snippet,
				title: item.snippet.title.split(
					' | Essential React'
				)[0],
			},
		}))
	},
	schema: youtube_playlist_video_schema,
})

const function_components_15 = defineCollection({
	loader: async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaONEho4fp4Ka4t_9zyk9fID&key=${YOUTUBE_API_KEY}`
		)
		const data = await response.json()
		console.log(data)

		return data.items.map((item) => ({
			...item,
			order: String(item.snippet.position + 1).padStart(2, '0'),
			snippet: {
				...item.snippet,
				title: item.snippet.title.split(
					' | Function Components'
				)[0],
			},
		}))
	},
	schema: youtube_playlist_video_schema,
})

export const collections = {
	essential_react_16,
	function_components_15,
}
