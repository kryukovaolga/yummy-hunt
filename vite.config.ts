import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true, // Enables global test and expect
    environment: "jsdom", // Simulates browser-like environment
    setupFiles: "./src/tests/setup.ts", // (Optional) Setup file
    exclude: [...configDefaults.exclude, "node_modules"], // Exclude node_modules from tests
  },
});
