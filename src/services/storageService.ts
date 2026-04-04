import { ItemLista } from '../types/item';

const CHAVE = 'lista-mercado-itens';

export function salvarItens(itens: ItemLista[]): void {
  localStorage.setItem(CHAVE, JSON.stringify(itens));
}

export function carregarItens(): ItemLista[] {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.map((item: unknown) => {
      const i = item as ItemLista;
      return { ...i, criadoEm: new Date(i.criadoEm) };
    });
  } catch {
    return [];
  }
}