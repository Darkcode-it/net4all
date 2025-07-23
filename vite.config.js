import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/net4all/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico', 
        'apple-touch-icon.jpg', 
        'masked-icon.svg',
        '192.jpg',
        '512.jpg'
      ],
      manifest: {
        name: 'Net4All',
        short_name: 'Net4All',
        description: 'پلتفرم آموزشی شبکه و امنیت سایبری',
        theme_color: '#667eea',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        lang: 'fa-IR',
        dir: 'rtl',
        start_url: '/net4all/',
        scope: '/net4all/',
        icons: [
          {
            src: '192.jpg',
            sizes: '192x192',
            type: 'image/jpg'
          },
          {
            src: '512.jpg',
            sizes: '512x512',
            type: 'image/jpg'
          },
          {
            src: '512.jpg',
            sizes: '512x512',
            type: 'image/jpg',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,jpg,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://[^/]+/net4all/'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'app-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(ico|png|svg|json)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'asset-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
      }
    })
  ]
})