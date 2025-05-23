import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  base: "./",
});
// Optimize build for GitHub Pages/Vercel
// Configure PWA capabilities
// Set up asset optimization (SVG, fonts)
// Add bundle analyzer for production