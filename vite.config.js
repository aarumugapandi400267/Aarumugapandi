import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Dynamically get base path from package.json
const __dirname = dirname(fileURLToPath(import.meta.url))
const packageJson = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf-8'))
const homepage = packageJson.homepage || ''
const basePath = homepage ? new URL(homepage).pathname : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath
})
