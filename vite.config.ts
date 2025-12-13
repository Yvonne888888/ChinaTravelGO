import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path. This allows the app to work on https://user.github.io/RepoName/
  // regardless of what the RepoName actually is, as long as HashRouter is used.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});