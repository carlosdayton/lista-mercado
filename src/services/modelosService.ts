import { ModeloLista, ItemModelo } from '../types/modelo';
import { adicionarItem, limparTudo } from './listaService';
import { supabase } from './supabase';
import { checkSession } from './authService';

let modelosGlobais: ModeloLista[] = [];
let userId: string | null = null;

export async function inicializarModelos(): Promise<void> {
  const user = await checkSession();
  userId = user?.id || null;
  if (!userId) {
    modelosGlobais = [];
    return;
  }

  const { data, error } = await supabase.from('modelos').select('*').order('criado_em', { ascending: true });
  if (!error && data) {
    modelosGlobais = data.map(db => ({
      id: db.id,
      nome: db.nome,
      criadoEm: new Date(db.criado_em),
      itens: db.itens as ItemModelo[]
    }));
  }
}

export function salvarModelo(nome: string, itens: ItemModelo[]): ModeloLista | null {
  if (!userId) return null;

  const modelo: ModeloLista = { 
    id: crypto.randomUUID(), 
    nome, 
    criadoEm: new Date(), 
    itens: [...itens] 
  };
  
  modelosGlobais.push(modelo);

  supabase.from('modelos').insert({
    id: modelo.id,
    user_id: userId,
    nome: modelo.nome,
    itens: modelo.itens
  }).then();

  return modelo;
}

export function obterModelos(): ModeloLista[] {
  return modelosGlobais;
}

export function removerModelo(id: string): void {
  modelosGlobais = modelosGlobais.filter(m => m.id !== id);
  supabase.from('modelos').delete().eq('id', id).then();
}

export function aplicarModelo(id: string): void {
  const modelo = modelosGlobais.find(m => m.id === id);
  if (!modelo) return;
  
  limparTudo();
  
  // Como o adicionarItem é otimista, adiciona direto na tela e dispara syncs pro Supabase em background
  modelo.itens.forEach(item => adicionarItem(item));
}
