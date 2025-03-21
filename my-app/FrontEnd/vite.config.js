import { defineConfig, } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),],
    build: {
        outDir: './dist'
    },
    server: {
        hmr: true,
        watch: {
            usePolling: true,
        },
        proxy: {
            // '/api': {
            //     target: 'http://localhost:3001',
            //     changeOrigin: true,
            //     rewrite: (path,) => path.replace(/^\/api/, '',),
            // },
        },
        allowedHosts: ['app'],
    },
},)
