import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    sourcemap: false,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1600,
    cssCodeSplit: false
  }
}) 