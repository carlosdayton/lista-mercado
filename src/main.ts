import { preencherCategorias, configurarFormulario, configurarListaEventos } from './ui/eventos';
import { renderizarLista, renderizarResumo } from './ui/render';
import { obterPorCategoria } from './services/listaService';

document.addEventListener('DOMContentLoaded', () => {
  preencherCategorias();
  configurarFormulario();
  configurarListaEventos();
  renderizarLista(obterPorCategoria());
  renderizarResumo();
});