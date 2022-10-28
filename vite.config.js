import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  assetsInclude: ['./src/assets/**/*.*)'],
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
});
