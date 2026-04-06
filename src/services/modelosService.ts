import { ModeloLista, ItemModelo } from '../types/modelo';
import { adicionarItem, limparTudo } from './listaService';

const CHAVE = 'lista-mercado-modelos';

function gerarId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function salvarModelo(nome: string, itens: ItemModelo[]): ModeloLista {
  const modelos = obterModelos();
  const modelo: ModeloLista = { id: gerarId(), nome, criadoEm: new Date(), itens: [...itens] };
  modelos.push(modelo);
  localStorage.setItem(CHAVE, JSON.stringify(modelos));
  return modelo;
}

export function obterModelos(): ModeloLista[] {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return (parsed as Array<Record<string, unknown>>).map(m => ({
      ...(m as Omit<ModeloLista, 'criadoEm'>),
      criadoEm: new Date(m['criadoEm'] as string),
    }));
  } catch {
    return [];
  }
}

export function removerModelo(id: string): void {
  const modelos = obterModelos().filter(m => m.id !== id);
  localStorage.setItem(CHAVE, JSON.stringify(modelos));
}

export function aplicarModelo(id: string): void {
  const modelo = obterModelos().find(m => m.id === id);
  if (!modelo) return;
  limparTudo();
  modelo.itens.forEach(item => adicionarItem(item));
}
