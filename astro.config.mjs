import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://smutch.github.io',
  integrations: [tailwind(), alpinejs()]
});
