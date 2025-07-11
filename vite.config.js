import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Folder Render will serve
    rollupOptions: {
      external: [], // Explicitly list external dependencies if needed (e.g., CDN-loaded jsPsych)
      onwarn: (warning, warn) => {
        // Suppress unresolved import warnings for CDN-loaded scripts
        if (warning.code === 'UNRESOLVED_IMPORT' && warning.message.includes('jspsych')) {
          console.warn(`Ignoring unresolved import for jsPsych (loaded via CDN): ${warning.message}`);
          return;
        }
        warn(warning); // Let other warnings pass as errors
      }
    }
  },
  // Optional: Configure server for local development to mimic Render
  server: {
    port: 3000,
    open: true,
  }
});