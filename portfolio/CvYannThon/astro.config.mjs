import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pierrickthon.github.io',
  base: 'CvYannThon',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
