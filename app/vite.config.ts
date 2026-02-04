import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "product-list-with-cart/styles.css": path.resolve(__dirname, "../ui/dist/styles.css"),
      "product-list-with-cart": path.resolve(__dirname, "../ui/src/index.ts"),
    },
  },
})
