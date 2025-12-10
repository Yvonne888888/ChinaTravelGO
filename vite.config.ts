import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root base during local dev (serve) so preview tools/opening index.html work,
  // but keep GitHub Pages / subpath base for production builds.
  base: command === 'serve' ? '/' : '/ChinaTravelGo/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}));