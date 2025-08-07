import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MDXEditorDatasets',
      formats: ['es'],
      fileName: (format) => `index.js`
    },
    rollupOptions: {
      external: [],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    },
    target: 'esnext',
    sourcemap: true
  }
});