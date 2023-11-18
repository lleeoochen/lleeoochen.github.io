import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  resolve: { alias: { "@": path.resolve("src/") } },
  build: { rollupOptions: { input: { app: "./index.html" } } }
});
