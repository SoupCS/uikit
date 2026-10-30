import { basename, resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'], exclude: ['**/*.stories.tsx', '**/*.test.tsx'] }),
  ],
  css: {
    modules: {
      generateScopedName: (local, filename) => {
        const component = basename(filename).split('.')[0].toLowerCase();
        return local === 'root' ? `ui-${component}` : `ui-${component}-${local}`;
      },
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'clsx'],
    },
    sourcemap: true,
  },
});
