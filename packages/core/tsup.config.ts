import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  minify: "terser",
  target: "esnext",
  outDir: "dist",
  dts: true,
});
