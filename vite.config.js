import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1500, // Increase chunk size warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-markdown')) return 'react-markdown';
            if (id.includes('react-router-dom')) return 'react-router-dom';
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('react')) return 'react-vendor';
          }
        }
      }
    }
  },
  base: "./",
});
