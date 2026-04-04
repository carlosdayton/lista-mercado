"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderizarResumo = renderizarResumo;
exports.renderizarLista = renderizarLista;
exports.renderizarSugestoes = renderizarSugestoes;
const categoria_1 = require("../enums/categoria");
const listaService_1 = require("../services/listaService");
const iconeCategoria = {
    [categoria_1.Categoria.Graos]: '🌾',
    [categoria_1.Categoria.Hortifruti]: '🥦',
    [categoria_1.Categoria.Carnes]: '🥩',
    [categoria_1.Categoria.Laticinios]: '🥛',
    [categoria_1.Categoria.Bebidas]: '🥤',
    [categoria_1.Categoria.Padaria]: '🍞',
    [categoria_1.Categoria.Higiene]: '🧴',
    [categoria_1.Categoria.Limpeza]: '🧹',
    [categoria_1.Categoria.Outros]: '📦'
};
function renderizarResumo() {
    const { total, comprados, pendentes } = (0, listaService_1.obterResumo)();
    const el = document.getElementById('resumo');
    const pct = total > 0 ? Math.round((comprados / total) * 100) : 0;
    el.innerHTML = `
    <div class="resumo-stats">
      <span class="resumo-item"><strong>${total}</strong> itens</span>
      <span class="resumo-item ok"><strong>${comprados}</strong> comprados</span>
      <span class="resumo-item pend"><strong>${pendentes}</strong> pendentes</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${pct}%"></div>
    </div>
  `;
}
function renderizarItem(item) {
    return `
    <li class="item${item.comprado ? ' comprado' : ''}" data-id="${item.id}">
      <button class="btn-check" data-id="${item.id}" aria-label="marcar como comprado">
        ${item.comprado ? `<svg width="12" height="12" viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9.5 10.5,2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}
      </button>
      <div class="item-info">
        <span class="item-nome">${item.nome}</span>
        <span class="item-qtd">${item.quantidade} ${item.unidade}</span>
      </div>
      <button class="btn-remover" data-id="${item.id}" aria-label="remover item">
        <svg width="12" height="12" viewBox="0 0 12 12"><line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </li>
  `;
}
function renderizarLista(porCategoria) {
    const container = document.getElementById('lista');
    const categorias = Object.values(categoria_1.Categoria).filter(cat => porCategoria[cat].length > 0);
    if (categorias.length === 0) {
        container.innerHTML = `
      <div class="vazio">
        <div class="vazio-icone">🛒</div>
        <p class="vazio-titulo">Sua lista está vazia</p>
        <p class="vazio-sub">Digite no campo acima para adicionar itens</p>
      </div>
    `;
        return;
    }
    container.innerHTML = categorias.map(cat => {
        const itens = porCategoria[cat];
        const qtdComprados = itens.filter(i => i.comprado).length;
        const tudo = qtdComprados === itens.length;
        return `
      <section class="categoria${tudo ? ' concluida' : ''}">
        <div class="categoria-header">
          <span class="categoria-icone">${iconeCategoria[cat]}</span>
          <span class="categoria-nome">${cat}</span>
          <span class="categoria-count">${qtdComprados}/${itens.length}</span>
        </div>
        <ul class="itens">${itens.map(renderizarItem).join('')}</ul>
      </section>
    `;
    }).join('');
}
function renderizarSugestoes(sugestoes) {
    const el = document.getElementById('sugestoes');
    if (sugestoes.length === 0) {
        el.innerHTML = '';
        el.style.display = 'none';
        return;
    }
    el.style.display = 'block';
    el.innerHTML = sugestoes.map(s => `
    <div class="sugestao" data-nome="${s.nome}" data-categoria="${s.categoria}">
      <span>${s.nome}</span>
      <span class="sugestao-cat">${s.categoria}</span>
    </div>
  `).join('');
}
