import {YOUTUBE_API_KEY} from 'astro:env/server'
import {defineCollection, z} from 'astro:content'
import {glob} from 'astro/loaders'

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

const essential_npm_6 = defineCollection({
	loader: async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaOtrktoNmFD5kfgiqrPtDnO&key=${YOUTUBE_API_KEY}`
		)
		const data = await response.json()

		return data.items.map((item) => ({
			...item,
			order: String(item.snippet.position + 1).padStart(2, '0'),
			snippet: {
				...item.snippet,
				title: item.snippet.title.split(' | Essential npm')[0],
			},
		}))
	},
	schema: youtube_playlist_video_schema,
})

const style_components_15 = defineCollection({
	loader: async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaP4YjooEcsKiBXp8EW1DnRZ&key=${YOUTUBE_API_KEY}`
		)
		const data = await response.json()

		return data.items.map((item) => ({
			...item,
			order: String(item.snippet.position + 1).padStart(2, '0'),
			snippet: {
				...item.snippet,
				title: item.snippet.title.split(
					' | Style with Components'
				)[0],
			},
		}))
	},
	schema: youtube_playlist_video_schema,
})

const react_basics_12 = defineCollection({
	loader: async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaPtjOZjylxPek7OSbJ6-Xno&key=${YOUTUBE_API_KEY}`
		)
		const data = await response.json()

		return data.items.map((item) => ({
			...item,
			order: String(item.snippet.position + 1).padStart(2, '0'),
			snippet: {
				...item.snippet,
				title: item.snippet.title.split(' | React Basics')[0],
			},
		}))
	},
	schema: youtube_playlist_video_schema,
})

const react_context_16_3 = defineCollection({
	loader: async () => {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaN10_K_wgn26jVqUSar53vz&key=${YOUTUBE_API_KEY}`
		)
		const data = await response.json()

		return data.items.map((item) => ({
			...item,
			order: String(item.snippet.position + 1).padStart(2, '0'),
			snippet: {
				...item.snippet,
				title: item.snippet.title.split(' | React Context')[0],
			},
		}))
	},
	schema: youtube_playlist_video_schema,
})

const guides = defineCollection({
	loader: glob({pattern: '**/*.md', base: './guides'}),
	schema: z.object({
		title: z.string(),
	}),
})

export const collections = {
	essential_react_16,
	function_components_15,
	essential_npm_6,
	style_components_15,
	react_basics_12,
	react_context_16_3,
	guides,
}
