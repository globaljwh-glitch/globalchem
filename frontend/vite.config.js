// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({
server:{
    host: '0.0.0.0',
    port: 5443, // or whatever you're using
    strictPort: true,
     
	hmr: {
      protocol: 'wss', // or 'ws' if not using SSL
      host: 'www.globalchemicalscorp.com',
      port: 5443,
    },
    allowedHosts: ['globalchemicalscorp.com','www.globalchemicalscorp.com','temp.globalchemicalscorp.com','admin1.globalchemicalscorp.com']
  },
 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['images/favicon.png', 'images/favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Global Chemical Corporation',
        short_name: 'GCC',
        description: 'Global Chemical Corporation',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'images/global-logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'images/global-logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'images/global-logo-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ],
        screenshots: [
        {
          "src": "screenshots/website.jpg",
          "sizes": "1280x720",
          "type": "image/png",
          "form_factor": "wide"
        },
        {
        "src": "screenshots/mobile.jpg",
        "sizes": "360x640",
        "type": "image/png",
        "form_factor": "narrow"
      },
      ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust this value as needed
  }
});

