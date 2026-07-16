// noeta-landing — the noeta.dev landing page. Static Astro build, served as a
// Cloudflare Worker with static assets (see wrangler.jsonc).
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://noeta.dev",
  output: "static",
  build: { format: "directory" },
  integrations: [
    sitemap({
      // /og is the OG-image screenshot target (deleted post-build); never index it.
      filter: (page) => !/\/og\/?$/.test(page),
      serialize(item) {
        // Match the no-trailing-slash canonical URLs BaseHead emits.
        item.url = item.url.replace(/\/$/, "");
        return item;
      },
    }),
  ],
});
