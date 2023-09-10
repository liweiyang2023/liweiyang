import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import autoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResover from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [vue(),
  autoImport({
    imports: ['vue', 'vue-router'],
    resolvers: [ElementPlusResolver(), IconsResover({ prefix: 'Icon' })],
  }),
    Components({
      resolvers: [ElementPlusResolver(), IconsResover({ enabledCollections: ['eq'] })],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias:[
      {
        find: '@',                                   // 别名
        replacement: resolve(__dirname, 'src'),      // 别名对应地址
      },
    ]
  }
})
