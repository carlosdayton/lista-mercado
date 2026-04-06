import * as esbuild from 'esbuild';
import dotenv from 'dotenv';

dotenv.config();

const isDev = process.argv.includes('--watch');

const url = 'https://kspvwthqhsfhxokfysnm.supabase.co';
// Ensure the anon key is populated, else fallback safely to avoid syntax errors
const anon = process.env.SERVICE_ROLE || '';

esbuild.context({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist/main.js',
  target: 'es2020',
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify(url),
    'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(anon),
  }
}).then(ctx => {
  if (isDev) {
    ctx.watch();
    console.log('Watching for changes...');
  } else {
    ctx.rebuild().then(() => {
      console.log('Build completed!');
      ctx.dispose();
    });
  }
}).catch(() => process.exit(1));
