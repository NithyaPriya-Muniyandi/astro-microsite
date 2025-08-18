    import { defineConfig } from 'astro/config';
    import tailwindcss from '@tailwindcss/vite';

    export default defineConfig({
      output: 'static',
      base: '/gy/caribbean-medical-schools/',
      prefetch: {
      prefetchAll: true
    }, 
      vite: {
        plugins: [tailwindcss()]
      }
    });

