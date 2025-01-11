import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/01_11_Calendar/',
  build: {
      outDir: 'docs',
      emptyOutDir: true
    }
})
