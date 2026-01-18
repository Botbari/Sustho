import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "lucide-react",
      "@tensorflow/tfjs",
      "@tensorflow-models/coco-ssd",
    ],
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
  define: {
    global: "globalThis",
  },
});
