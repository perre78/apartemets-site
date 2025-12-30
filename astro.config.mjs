import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://perre78.github.io",      // VIKTIGT: domän utan repo-namn
  base: isProd ? "/ekonomirum/" : "/",    // repo-namnet i prod
  outDir: "./docs",

  integrations: [
    sitemap(),
  ],
});
