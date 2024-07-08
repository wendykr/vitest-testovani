import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    ...configDefaults,
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.ts",
  },
});
