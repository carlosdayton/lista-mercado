import { preencherCategorias, configurarFormulario, configurarListaEventos, configurarFab } from './ui/eventos';
import { renderizarLista, renderizarResumo } from './ui/render';
import { obterPorCategoria } from './services/listaService';

document.addEventListener('DOMContentLoaded', () => {
  preencherCategorias();
  configurarFab();
  configurarFormulario();
  configurarListaEventos();
  renderizarLista(obterPorCategoria());
  renderizarResumo();

  // Registra Service Worker (PWA offline)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {/* silencioso em dev */});
  }
});