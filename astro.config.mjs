import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ekonomirum.se",
  base: "/",
  outDir: "./docs",
  integrations: [sitemap()],
});

