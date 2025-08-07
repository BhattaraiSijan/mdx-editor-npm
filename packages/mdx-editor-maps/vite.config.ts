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
      name: 'MDXEditorMaps',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.js'}`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mdxeditor/editor',
        '@teamimpact/veda-ui',
        '@devseed-ui/theme-provider',
        '@tanstack/react-query',
        'react-router-dom',
        'next',
        'next/dynamic',
        'next/link',
        '@trussworks/react-uswds',
        'focus-trap-react',
        '@uswds/uswds',
        '@sijanbhattarai/mdx-editor-core',
        '@sijanbhattarai/mdx-editor-utils'
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
  }
});