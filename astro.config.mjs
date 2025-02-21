// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/Hemanth3303/hemanth3303.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});