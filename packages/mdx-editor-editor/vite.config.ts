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
      name: 'MDXEditorMain',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.js'}`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mdxeditor/editor',
        '@lexical/react',
        'lexical',
        'next',
        'next/link',
        'next/dynamic',
        '@sijanbhattarai/mdx-editor-core',
        '@sijanbhattarai/mdx-editor-ui',
        '@sijanbhattarai/mdx-editor-utils',
        '@sijanbhattarai/mdx-editor-plugins',
        'unified',
        'remark-parse',
        'remark-stringify',
        'mdast-util-from-markdown',
        'mdast-util-mdx-jsx',
        'micromark-extension-mdx-jsx',
        'unist-util-visit',
        '@teamimpact/veda-ui',
        "@devseed-ui/theme-provider",
        "focus-trap-react",
        '@heroicons/react/24/outline'
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
      '@sijanbhattarai/mdx-editor-ui': resolve(__dirname, '../mdx-editor-ui/src'),
      '@sijanbhattarai/mdx-editor-utils': resolve(__dirname, '../mdx-editor-utils/src'),
      '@sijanbhattarai/mdx-editor-plugins': resolve(__dirname, '../mdx-editor-plugins/src')
    }
  }
});