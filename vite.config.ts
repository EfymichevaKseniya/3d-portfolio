import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      "@navigator": path.resolve(__dirname, './src/navigator'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@models": path.resolve(__dirname, './src/models'),
      "@hooks": path.resolve(__dirname, './src/hooks'),
      "@constants": path.resolve(__dirname, './src/constants'),
    },
  },
  base: './',
  assetsInclude: ['**/*.glb'],
  plugins: [react()],
})
