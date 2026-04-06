import { Categoria } from '../enums/categoria';

export type Unidade = 'un' | 'kg' | 'g' | 'L' | 'ml' | 'cx' | 'pct' | 'dz';

export interface ItemLista {
  readonly id: string;
  nome: string;
  categoria: Categoria;
  quantidade: number;
  unidade: Unidade;
  preco?: number;       // preço unitário (opcional)
  nota?: string;        // observação (opcional)
  comprado: boolean;
  criadoEm: Date;
}

export interface ItemSugerido {
  nome: string;
  categoria: Categoria;
  quantidade: number;
  unidade: Unidade;
}

export type DadosCriacaoItem = Omit<ItemLista, 'id' | 'comprado' | 'criadoEm'>;
export type DadosAtualizacaoItem = Partial<Omit<ItemLista, 'id' | 'criadoEm'>>;
export type ItensPorCategoria = Record<Categoria, ItemLista[]>;