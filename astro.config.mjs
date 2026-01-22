import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.ekonomirum.se",
  base: "/",
  outDir: "./docs",
  integrations: [sitemap()],
});

