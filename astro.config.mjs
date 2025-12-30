import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://perre78.github.io",
  base: isProd ? "/ekonomirum/" : "/",   // <-- viktig
  outDir: "./docs",
});
// https://astro.build/configuration