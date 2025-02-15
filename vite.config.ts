// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', // or 'c8'
    },
  },
});