import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'locales',
          dest: ''
        },
        {
          src: 'data',
          dest: ''
        }
      ]
    })
  ],
  base: '/ChinaTravelGO/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
