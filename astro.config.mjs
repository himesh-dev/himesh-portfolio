// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  // adapter: node({
  //   mode: 'standalone',
  // }),

  // Replace with your own domain or GitHub Pages URL
  site: 'https://himesh-dev.github.io',
  base: '/himesh-portfolio', 
  
  integrations: [react(), sitemap(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});