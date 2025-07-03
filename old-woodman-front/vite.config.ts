import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [react(),
    createHtmlPlugin({
      inject: {
        data: {
          preloadImages: `
            <link rel="preload" as="image" href="/assets/bg-large.webp" type="image/webp" />
            <link rel="preload" as="image" href="/assets/bg-medium.webp" type="image/webp" />
            <link rel="preload" as="image" href="/assets/bg-small.webp" type="image/webp" />
          `,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
})
