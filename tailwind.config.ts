import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'; // Import the Flowbite plugin

const config: Config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    'node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin // Use the imported plugin
  ]
};

export default config;
