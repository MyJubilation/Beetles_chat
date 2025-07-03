// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 确保导入path模块

export default defineConfig({
  plugins: [vue()],
  server: {
	  // port: 3010,
      proxy: {
        '/api': {
          target: 'http://chat.beetles.icu:8080', // 你的后端地址
		  // target: 'http://localhost:8080',
          changeOrigin: true, // 改变请求头中的 host 为 target
          rewrite: (path) => path.replace(/^\/api/, '') // 重写路径（可选）
        },
      },
    },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 配置@指向src目录
    }
  },
})