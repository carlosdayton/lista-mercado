"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarItem = adicionarItem;
exports.alternarComprado = alternarComprado;
exports.atualizarItem = atualizarItem;
exports.removerItem = removerItem;
exports.removerComprados = removerComprados;
exports.limparTudo = limparTudo;
exports.obterTodos = obterTodos;
exports.obterPorCategoria = obterPorCategoria;
exports.obterResumo = obterResumo;
const categoria_1 = require("../enums/categoria");
const storageService_1 = require("./storageService");
let itens = (0, storageService_1.carregarItens)();
function gerarId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
function persistir() {
    (0, storageService_1.salvarItens)(itens);
}
function adicionarItem(dados) {
    const novo = {
        ...dados,
        id: gerarId(),
        comprado: false,
        criadoEm: new Date()
    };
    itens.push(novo);
    persistir();
    return novo;
}
function alternarComprado(id) {
    const item = itens.find(i => i.id === id);
    if (!item)
        return;
    item.comprado = !item.comprado;
    persistir();
}
function atualizarItem(id, dados) {
    const index = itens.findIndex(i => i.id === id);
    if (index === -1)
        return;
    itens[index] = { ...itens[index], ...dados };
    persistir();
}
function removerItem(id) {
    itens = itens.filter(i => i.id !== id);
    persistir();
}
function removerComprados() {
    itens = itens.filter(i => !i.comprado);
    persistir();
}
function limparTudo() {
    itens = [];
    persistir();
}
function obterTodos() {
    return itens;
}
function obterPorCategoria() {
    const vazio = Object.values(categoria_1.Categoria).reduce((acc, cat) => {
        acc[cat] = [];
        return acc;
    }, {});
    return itens.reduce((acc, item) => {
        acc[item.categoria].push(item);
        return acc;
    }, vazio);
}
function obterResumo() {
    const comprados = itens.filter(i => i.comprado).length;
    return { total: itens.length, comprados, pendentes: itens.length - comprados };
}
