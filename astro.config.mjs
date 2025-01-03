// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            YOUTUBE_API_KEY: envField.string({
                context: 'server',
                access: 'secret',
            }),
        },
    },

    integrations: [tailwind()],
})
