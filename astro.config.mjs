// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    // Get rid of prefix when using real domain
    "/website/resources": "/website",
    "/signup": "https://airtable.com/app7H902kTEPSGVDw/pag2xZxhI3yfQwrXv/form",
    "/submit-proposal":
      "https://airtable.com/app7H902kTEPSGVDw/paghle5GsxnomNFPL/form",
    "slack-channel": "https://hackclub.slack.com/archives/C07GUTVD20G",
  },
});
