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
      name: 'MDXEditorUtils',
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
        '@trussworks/react-uswds',
        'focus-trap-react',
        '@uswds/uswds',
        'unified',
        'remark-parse',
        'remark-stringify',
        'mdast-util-from-markdown',
        'mdast-util-mdx-jsx',
        'mdast-util-gfm',
        'micromark-extension-mdx-jsx',
        'unist-util-visit'
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