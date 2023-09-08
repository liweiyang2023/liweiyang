import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import autoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  plugins: [vue(),
  autoImport({
    imports: ['vue', 'vue-router'],
  })],
  resolve: {
    alias:[
      {
        find: '@',                                   // 别名
        replacement: resolve(__dirname, 'src'),      // 别名对应地址
      },
    ]
  }
})