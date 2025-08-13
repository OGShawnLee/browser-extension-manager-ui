import React from '@vitejs/plugin-react'
import UnoCSS from "unocss/vite";
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [React(), UnoCSS()],
})
