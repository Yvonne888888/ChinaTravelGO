import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // 最终修复：当进行生产构建 (build) 时，使用空字符串 ''。
  // 这会生成最干净的相对路径引用，解决 GitHub Pages 子目录下的 404 错误。
  base: command === 'serve' ? '/' : '',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}));