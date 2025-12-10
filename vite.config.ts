import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/ChinaTravelGo/', 
      // ... (其他配置保持不变)
      
      // *** 关键修改：强制指定 Rollup 的入口文件 (app.tsx) ***
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            app: path.resolve(__dirname, 'app.tsx'), 
          },
          // 告诉 Rollup 不要打包这些外部 CDN 依赖
          external: ['react', 'react-dom', 'react-router-dom'], 
        }
      }
      // ******************************************************
    };
});