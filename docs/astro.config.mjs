import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Next.js Hands-on",
      social: {
        github: "https://github.com/nonoakij/next-js-hands-on",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
  ],
})
