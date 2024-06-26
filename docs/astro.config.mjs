import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nonoakij.github.io",
  base: "/next-js-hands-on",
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
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "External-links",
          items: [
            {
              label: "Next.js",
              link: "https://nextjs.org",
            },
            {
              label: "pnpm",
              link: "https://pnpm.io",
            },
            {
              label: "Biome",
              link: "https://biome.sh",
            },
          ],
        },
      ],
    }),
  ],
});
