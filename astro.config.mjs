import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://friendlybearlabs.com",
  output: "static",
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(), prefetch(), icon({
    include: {
      tabler: ["*"]
    }
  }), partytown()],
  experimental: {
    assets: true,
    viewTransitions: true
  }
});