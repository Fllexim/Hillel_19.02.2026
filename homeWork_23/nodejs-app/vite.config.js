import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "./",
  build: {
    minify: true,
    outDir: "../build",
  },
});