import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.test.*', '**/*.spec.*', '**/test/**', '**/tests/**']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MdxEditorUI',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mdxeditor/editor',
        '@trussworks/react-uswds',
        '@sijanbhattarai/mdx-editor-core'
      ],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@mdxeditor/editor': 'MdxEditor',
          '@trussworks/react-uswds': 'ReactUswds',
          '@sijanbhattarai/mdx-editor-core': 'MdxEditorCore'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  }
})