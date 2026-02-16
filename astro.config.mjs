// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import AstroPWA from '@vite-pwa/astro';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
 
  // Replace with your own domain or GitHub Pages URL
  site: 'https://himesh-dev.github.io',
  base: '/himesh-portfolio', 
  
  integrations: [
    react(),
    sitemap(),
    robotsTxt(),
    AstroPWA({
      registerType: 'autoUpdate',
      base: '/himesh-portfolio/',
      scope: '/himesh-portfolio/',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Himesh Kumar - Portfolio',
        short_name: 'Himesh',
        description: 'Senior Frontend Engineer Portfolio',
        theme_color: '#0a0a0a',
        background_color: '#0a0a0a',
        display: 'standalone',
        start_url: '/himesh-portfolio/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024 // 10MB
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});