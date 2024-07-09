import type { Options } from "tsup";

export default {
  entryPoints: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
} as Options;
