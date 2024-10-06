// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    // Get rid of prefix when using real domain
    "/website/resources": "/website",
  },
  // Comment when using real domain
  base: "/website",
});
