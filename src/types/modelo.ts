import { Categoria } from '../enums/categoria';
import { Unidade } from './item';

export interface ItemModelo {
  nome: string;
  categoria: Categoria;
  quantidade: number;
  unidade: Unidade;
  nota?: string;
}

export interface ModeloLista {
  id: string;
  nome: string;
  criadoEm: Date;
  itens: ItemModelo[];
}
