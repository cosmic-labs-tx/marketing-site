import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://friendlybearlabs.com",
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), prefetch(), icon({ include: { tabler: ["*"] } })],
  experimental: {
    assets: true,
    viewTransitions: true,
  },
});
