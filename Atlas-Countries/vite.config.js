import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',            // ← serve all assets via relative paths
  plugins: [react()],
});
