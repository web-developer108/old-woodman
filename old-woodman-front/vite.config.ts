import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],

                    ui: ['react-i18next', 'simplebar-react'],
                },
            },
        },
    },
});