import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(new URL('./src/components/$1/index.vue', import.meta.url))
      },
      {
        find: /@\/interfaces\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(new URL('./src/components/$1/index.vue', import.meta.url))
      },
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  }
})
