import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import alpinejs from '@astrojs/alpinejs'
import robotsTxt from 'astro-robots-txt'
import tailwindcss from '@tailwindcss/vite'
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: 'https://hmginternational.com',
  integrations: [icon(),sitemap(), alpinejs(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()]
  }
})
