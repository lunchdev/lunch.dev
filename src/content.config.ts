import { YOUTUBE_API_KEY } from "astro:env/server";
import { defineCollection, z } from "astro:content";

const youtube_videos = defineCollection({
  loader: async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaM-yvNRB9MrZkLxF9GsB30C&key=${YOUTUBE_API_KEY}`,
    );
    const data = await response.json();
    return data.items;
  },
  //  // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
  //  return data.map((country) => ({
  //    id: country.cca3,
  //    ...country,
  //  }));
  //},
  schema: z.object({
    id: z.string(),
    snippet: z.object({
      title: z.string(),
      description: z.string(),
    }),
    contentDetails: z.object({
      videoId: z.string(),
    }),
  }),
});

export const collections = { youtube_videos };
