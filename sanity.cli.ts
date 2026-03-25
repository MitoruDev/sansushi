import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "38q0l1x9";
const dataset = process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    autoUpdates: false,
  },
});
