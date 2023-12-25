import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv(
  'all',
  process.cwd()
);
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: env.VITE_BASE_URL,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// })


export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/api': {
        target: env.VITE_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^/api/, ''),
      },
    },
  },
})