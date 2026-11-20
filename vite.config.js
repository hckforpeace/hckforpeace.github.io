import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // User site served from the domain root (hckforpeace.github.io), so base is '/'.
  // A project site would need base: '/<repo-name>/' or every asset 404s.
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
