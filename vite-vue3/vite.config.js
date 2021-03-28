import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { viteMockServe } from 'vite-plugin-mock'
import myExample from './plugins/vite-plugin-my-example'

// https://vitejs.dev/config/
export default defineConfig({
  // css: {},
  // esbuild: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'views': path.resolve(__dirname, 'src/views'),
      'comps': path.resolve(__dirname, 'src/components'),
      'api': path.resolve(__dirname, 'src/api'),
      'router': path.resolve(__dirname, 'src/router'),
      'store': path.resolve(__dirname, 'src/store'),
      'plugin': path.resolve(__dirname, 'src/plugin'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'layouts': path.resolve(__dirname, 'src/layouts')
    }
  },
  plugins: [vue(), vueJsx(), viteMockServe({
    supportTs: false
  }), legacy({
    targets: ['defaults', 'not IE 11']
  }), myExample()]
})
