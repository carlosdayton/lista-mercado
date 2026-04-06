import * as esbuild from 'esbuild';
import fs from 'fs';

const isDev = process.argv.includes('--watch');

let url = process.env.PROJECT_URL || '';
let anon = process.env.SERVICE_ROLE || '';

// Apenas se tiver o arquivo (Modo Local/PC), ele usa nosso Scanner forte que ignora quebras e lixos inseridos pelo usuário.
// Na nuvem da Vercel o arquivo não existe, então ele usa direto as variaveis de cima!
if (fs.existsSync('.env') && (!url || !anon)) {
  const envFile = fs.readFileSync('.env', 'utf8');
  for (const line of envFile.split('\n')) {
    if (line.includes('PROJECT_URL')) {
      const match = line.match(/(https:\/\/[A-Za-z0-9_-]+\.supabase\.co)/);
      if (match) url = match[1];
    }
    if (line.includes('SERVICE_ROLE') || line.includes('ANON_KEY') || line.includes('PUBLISHABLE')) {
      const matchJwt = line.match(/(eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)/);
      if (matchJwt) anon = matchJwt[1];
      else {
        const matchSb = line.match(/(sb_publishable_[A-Za-z0-9_]+)/);
        if (matchSb) anon = matchSb[1];
      }
    }
  }
}

console.log("Extracted URL:", url ? "OK" : "MISSING");
console.log("Extracted ANON:", anon ? "OK" : "MISSING");

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
