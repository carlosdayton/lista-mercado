import { ItemLista, DadosCriacaoItem, DadosAtualizacaoItem, ItensPorCategoria } from '../types/item';
import { Categoria } from '../enums/categoria';
import { supabase } from './supabase';
import { checkSession } from './authService';

let itens: ItemLista[] = [];
let userId: string | null = null;

export async function inicializarLista(): Promise<void> {
  const user = await checkSession();
  userId = user?.id || null;
  
  if (!userId) {
    itens = [];
    return;
  }

  const { data, error } = await supabase.from('itens').select('*').order('criado_em', { ascending: true });
  
  if (!error && data) {
    itens = data.map(db => ({
      id: db.id,
      nome: db.nome,
      categoria: db.categoria as Categoria,
      quantidade: Number(db.quantidade),
      unidade: db.unidade,
      preco: db.preco ? Number(db.preco) : undefined,
      nota: db.nota || undefined,
      comprado: db.comprado,
      criadoEm: new Date(db.criado_em)
    }));
  }
}

export function adicionarItem(dados: DadosCriacaoItem): ItemLista | null {
  if (!userId) return null;

  const novo: ItemLista = {
    ...dados,
    id: crypto.randomUUID(),
    comprado: false,
    criadoEm: new Date()
  };
  itens.push(novo);

  // Background sync
  supabase.from('itens').insert({
    id: novo.id,
    user_id: userId,
    nome: novo.nome,
    categoria: novo.categoria,
    quantidade: novo.quantidade,
    unidade: novo.unidade,
    preco: novo.preco,
    nota: novo.nota,
    comprado: novo.comprado
  }).then(({error}) => { if (error) console.error('Erro ao sync:', error); });

  return novo;
}

export function alternarComprado(id: string): void {
  const item = itens.find(i => i.id === id);
  if (!item) return;
  
  item.comprado = !item.comprado;
  
  supabase.from('itens')
    .update({ comprado: item.comprado })
    .eq('id', id)
    .then();
}

export function atualizarItem(id: string, dados: DadosAtualizacaoItem): void {
  const index = itens.findIndex(i => i.id === id);
  if (index === -1) return;
  
  itens[index] = { ...itens[index], ...dados };
  
  supabase.from('itens')
    .update({ ...dados })
    .eq('id', id)
    .then();
}

export function removerItem(id: string): void {
  itens = itens.filter(i => i.id !== id);
  supabase.from('itens').delete().eq('id', id).then();
}

export function removerComprados(): void {
  const ids = itens.filter(i => i.comprado).map(i => i.id);
  itens = itens.filter(i => !i.comprado);
  
  if (ids.length > 0) {
    supabase.from('itens').delete().in('id', ids).then();
  }
}

export function limparTudo(): void {
  itens = [];
  if (userId) {
    supabase.from('itens').delete().eq('user_id', userId).then();
  }
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