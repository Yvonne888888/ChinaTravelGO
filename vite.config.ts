import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // 保持 base 路径，它用于 Vite 的路径拼接
      base: '/ChinaTravelGo/', 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      
      // *** 关键修改：强制指定 Rollup 的入口文件 (app.tsx) ***
      build: {
        rollupOptions: {
          input: {
            // 确保 index.html 是主入口
            main: path.resolve(__dirname, 'index.html'),
            // 明确告诉 Rollup 你的应用代码入口是 app.tsx
            app: path.resolve(__dirname, 'app.tsx'), 
          }
        }
      }
      // ******************************************************
    };
});