import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    sourcemap: false,            // 🔥 IMPORTANT: prevents :62:801 URLs
    minify: "esbuild",           // faster & smaller bundles
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
  },

  server: {
    open: true,
  },
});
