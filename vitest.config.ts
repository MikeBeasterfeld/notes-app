/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react-swc'
import { mergeConfig } from 'vite'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./setupTests.ts'],
    },
})
