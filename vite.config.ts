import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const build_date = new Date().toISOString().replace(/[^0-9]/g, '')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
    build: {
        sourcemap: false,
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                entryFileNames: `[name]-[hash]-${build_date}.js`,
                chunkFileNames: `assets/[name]-[hash]-${build_date}.js`,
                assetFileNames: `assets/[name]-[hash]-${build_date}.[ext]`,
                /*manualChunks(id) {
                  const HugeLibraries = ['jspdf', 'libphonenumber-js', 'v-calendar']; // modify as required based on libraries in use
                  if (HugeLibraries.some((libName) => id.includes(`node_modules/${libName}`))) {
                    return id.toString().split("node_modules/")[1].split("/")[0].toString();
                  }
                }*/
            }
        }
    }
})
