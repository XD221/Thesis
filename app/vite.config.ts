import { defineConfig, loadEnv } from 'vite'

export default defineConfig({
    
    root: 'src',
    //base: '/',
    server: {
        open: 'main.html',
        base: 'main.html',
    },
    build: {
        manifest: true,
        outDir: '../public',
        rollupOptions: {
            input: {
                app: 'src/main.html'
            }
        },
    },
})