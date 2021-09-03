import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 ‘@’ 指向 ‘src' 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 4000,
    open: true,
    cors: true,

    proxy: {
      '/api': {
        target: 'http://xxx.xxx:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/')
      }
    }
  }
})
