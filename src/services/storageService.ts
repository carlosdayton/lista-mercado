import { ItemLista } from '../types/item';

const CHAVE = 'lista-mercado-itens';

const UNIDADES_VALIDAS = ['un', 'kg', 'g', 'L', 'ml', 'cx', 'pct', 'dz'];

function isItemValido(item: unknown): item is Omit<ItemLista, 'criadoEm'> & { criadoEm: unknown } {
  if (typeof item !== 'object' || item === null) return false;
  const i = item as Record<string, unknown>;
  return (
    typeof i['id'] === 'string' && i['id'].length > 0 &&
    typeof i['nome'] === 'string' && i['nome'].length > 0 &&
    typeof i['categoria'] === 'string' &&
    typeof i['quantidade'] === 'number' && i['quantidade'] > 0 &&
    typeof i['unidade'] === 'string' && UNIDADES_VALIDAS.includes(i['unidade'] as string) &&
    typeof i['comprado'] === 'boolean'
  );
}

export function salvarItens(itens: ItemLista[]): void {
  localStorage.setItem(CHAVE, JSON.stringify(itens));
}

export function carregarItens(): ItemLista[] {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(isItemValido)
      .map((item) => ({ ...item, criadoEm: new Date(item.criadoEm as string) }));
  } catch {
    return [];
  }
}