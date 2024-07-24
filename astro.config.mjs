import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: 'https://kamilo.dev',
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
