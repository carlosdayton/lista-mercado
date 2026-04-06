import { ItemLista, DadosCriacaoItem, DadosAtualizacaoItem, ItensPorCategoria } from '../types/item';
import { Categoria } from '../enums/categoria';
import { salvarItens, carregarItens } from './storageService';

let itens: ItemLista[] = carregarItens();

function gerarId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function persistir(): void {
  salvarItens(itens);
}

export function adicionarItem(dados: DadosCriacaoItem): ItemLista {
  const novo: ItemLista = {
    ...dados,
    id: gerarId(),
    comprado: false,
    criadoEm: new Date()
  };
  itens.push(novo);
  persistir();
  return novo;
}

export function alternarComprado(id: string): void {
  const item = itens.find(i => i.id === id);
  if (!item) return;
  item.comprado = !item.comprado;
  persistir();
}

export function atualizarItem(id: string, dados: DadosAtualizacaoItem): void {
  const index = itens.findIndex(i => i.id === id);
  if (index === -1) return;
  itens[index] = { ...itens[index], ...dados };
  persistir();
}

export function removerItem(id: string): void {
  itens = itens.filter(i => i.id !== id);
  persistir();
}

export function removerComprados(): void {
  itens = itens.filter(i => !i.comprado);
  persistir();
}

export function limparTudo(): void {
  itens = [];
  persistir();
}

export function obterTodos(): ItemLista[] {
  return itens;
}

export function obterPorCategoria(): ItensPorCategoria {
  const vazio = Object.values(Categoria).reduce((acc, cat) => {
    acc[cat] = [];
    return acc;
  }, {} as ItensPorCategoria);

  return itens.reduce((acc, item) => {
    acc[item.categoria].push(item);
    return acc;
  }, vazio);
}

export function obterResumo(): { total: number; comprados: number; pendentes: number; totalEstimado: number | null } {
  const comprados = itens.filter(i => i.comprado).length;
  const itensComPreco = itens.filter(i => i.preco != null);
  const totalEstimado = itensComPreco.length > 0
    ? itens.reduce((sum, i) => sum + (i.preco ?? 0), 0)
    : null;
  return { total: itens.length, comprados, pendentes: itens.length - comprados, totalEstimado };
}