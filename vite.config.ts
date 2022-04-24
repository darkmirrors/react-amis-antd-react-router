import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 此处也可设置直角、边框色、字体大小等
          // 'primary-color': '#645AFF',
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@core': resolve(__dirname, './src/core'),
      '@domain': resolve(__dirname, './src/domain'),
      '@config': resolve(__dirname, './src/config'),
      '@features': resolve(__dirname, './src/features'),
      '@styles': resolve(__dirname, './src/styles'),
      '@utils': resolve(__dirname, './src/utils'),
      '@public': resolve(__dirname, './src/public'),
      '@assets': resolve(__dirname, './src/assets'),
      '@pages': resolve(__dirname, './src/pages'),
      '@store': resolve(__dirname, './src/core/store'),
      '@services': resolve(__dirname, './src/services'),
      '@types': resolve(__dirname, './types'),
      // 'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
})
