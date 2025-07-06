import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import { createHtmlPlugin } from 'vite-plugin-html';

/*
export default defineConfig({
  plugins: [react(),
    createHtmlPlugin({
      minify: false,
      entry: '/src/main.tsx',
      template: 'index.html',
      inject: {
        data: {
          preloadImages: `
            <link rel="preload" as="image" href="/images/doors/bg-large.webp" type="image/webp" />
            <link rel="preload" as="image" href="/images/doors/bg-medium.webp" type="image/webp" />
            <link rel="preload" as="image" href="/images/doors/bg-small.webp" type="image/webp" />
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
*/
export default defineConfig({
  plugins: [
    react(),
   /* {
      name: 'html-preload-inject',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          const preload = `
     <!--       <link rel="preload" as="image" href="/images/doors/bg-large.webp" type="image/webp">
            <link rel="preload" as="image" href="/images/doors/bg-medium.webp" type="image/webp">-->
            <link rel="preload" as="image" href="/images/doors/bg-small.webp" type="image/webp">
          `;
          return html.replace(
            /<title>(.*?)<\/title>/,
            `<title>$1</title>\n${preload}`
          );
        },
      },
    },*/
  ],
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
});