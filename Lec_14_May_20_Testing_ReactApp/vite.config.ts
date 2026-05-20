import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // important for DOM APIs  
    globals: true, // for global describe/it/expect etc.  
    setupFiles: './src/setupTests.ts', // for jest-dom etc.  
  },
})
