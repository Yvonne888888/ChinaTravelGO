import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 修正为绝对路径：使用您的仓库名称作为基准路径
  // 确保前后都有斜杠 (/)
  base: '/ChinaTravelGO/', // <-- 请严格使用您的仓库名 ChinaTravelGO
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
