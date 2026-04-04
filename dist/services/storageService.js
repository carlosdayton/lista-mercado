"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salvarItens = salvarItens;
exports.carregarItens = carregarItens;
const CHAVE = 'lista-mercado-itens';
function salvarItens(itens) {
    localStorage.setItem(CHAVE, JSON.stringify(itens));
}
function carregarItens() {
    try {
        const raw = localStorage.getItem(CHAVE);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed))
            return [];
        return parsed.map((item) => {
            const i = item;
            return { ...i, criadoEm: new Date(i.criadoEm) };
        });
    }
    catch {
        return [];
    }
}
