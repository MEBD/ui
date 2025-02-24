import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: "local", // Puede ser 'global' o 'local'
      generateScopedName: "ui_[name]__[local]__[hash:base64:5]",
    },
  },
  plugins: [react()],
});
