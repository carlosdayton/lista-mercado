import { preencherCategorias, configurarFormulario, configurarListaEventos, configurarFab } from './ui/eventos';
import { configurarAuthFallback } from './ui/auth';

document.addEventListener('DOMContentLoaded', () => {
  preencherCategorias();
  configurarFab();
  configurarFormulario();
  configurarListaEventos();
  
  // Isso agora gerencia a tela inteira (login e carregamento inicial pós-login)
  configurarAuthFallback();

  // Registra Service Worker (PWA offline)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {/* silencioso em dev */});
  }
});