import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://friendlybearlabs.com",
  output: "static",
  integrations: [
    partytown(),
    prefetch(),
    tailwind({ applyBaseStyles: false }),
    icon({ include: { tabler: ["*"] } }),
    process.env.SITEMAP !== "false" && sitemap(),
  ],
  experimental: {
    assets: true,
    viewTransitions: true,
  },
});
