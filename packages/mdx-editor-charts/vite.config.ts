import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MDXEditorCharts',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.js'}`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mdxeditor/editor',
        '@sijanbhattarai/mdx-editor-core',
        '@sijanbhattarai/mdx-editor-utils',
        'next',
        'next/dynamic'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime'
        }
      }
    },
    target: 'esnext',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@sijanbhattarai/mdx-editor-core': resolve(__dirname, '../mdx-editor-core/src'),
      '@sijanbhattarai/mdx-editor-utils': resolve(__dirname, '../mdx-editor-utils/src')
    }
  }
});