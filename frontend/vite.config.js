import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: process.env.serverURL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/user/, "/user"),
      },
      "/candidate": {
        target: process.env.serverURL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/candidate/, "/candidate"),
      },
    },
  },
});
