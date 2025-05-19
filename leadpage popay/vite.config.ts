import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['xqr5nl-5173.csb.app'], // ✅ adicione o host aqui
  },
});

  