import { Categoria } from '../enums/categoria';
import { Unidade } from '../types/item';
import { buscarSugestoes } from '../data/itensSugeridos';
import { debounce } from '../utils/debounce';
import {
  adicionarItem, alternarComprado, removerItem, atualizarItem,
  removerComprados, limparTudo, obterPorCategoria, obterTodos
} from '../services/listaService';
import { renderizarLista, renderizarResumo, renderizarSugestoes } from './render';
import { mostrarToast } from './toast';
import { confirmar } from './modal';
import { configurarModelos } from './modelos';
import { Calculadora } from './calculadora';

function atualizar(): void {
  renderizarLista(obterPorCategoria());
  renderizarResumo();
}

// ── Botão flutuante ───────────────────────────────
export function configurarFab(): void {
  const fab    = document.getElementById('fab')!;
  const form   = document.getElementById('form-adicionar')!;
  const fechar = document.getElementById('btn-fechar')!;
  const input  = document.getElementById('input-nome') as HTMLInputElement;

  function abrirForm(): void { fab.style.display = 'none'; form.classList.add('aberto'); input.focus(); }
  function fecharForm(): void { form.classList.remove('aberto'); fab.style.display = 'flex'; renderizarSugestoes([]); }

  fab.addEventListener('click', abrirForm);
  fechar.addEventListener('click', fecharForm);
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && form.classList.contains('aberto')) fecharForm();
  });
}

// ── Categorias ────────────────────────────────────
export function preencherCategorias(): void {
  const select = document.getElementById('select-categoria') as HTMLSelectElement;
  select.innerHTML = '';
  Object.values(Categoria).forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat; opt.textContent = cat;
    select.appendChild(opt);
  });
}

// ── Formulário ────────────────────────────────────
export function configurarFormulario(): void {
  const inputNome     = document.getElementById('input-nome')       as HTMLInputElement;
  const inputQtd      = document.getElementById('input-qtd')        as HTMLInputElement;
  const inputNota     = document.getElementById('input-nota')        as HTMLInputElement;
  const selectCat     = document.getElementById('select-categoria') as HTMLSelectElement;
  const selectUnidade = document.getElementById('select-unidade')   as HTMLSelectElement;
  const sugestoesEl   = document.getElementById('sugestoes')!;
  const fab           = document.getElementById('fab')!;
  const form          = document.getElementById('form-adicionar') as HTMLFormElement;

  const buscarComDebounce = debounce(() => renderizarSugestoes(buscarSugestoes(inputNome.value)), 200);
  inputNome.addEventListener('input', buscarComDebounce);

  document.addEventListener('click', (e: MouseEvent) => {
    if (!sugestoesEl.contains(e.target as Node) && e.target !== inputNome) renderizarSugestoes([]);
  });

  sugestoesEl.addEventListener('click', (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('.sugestao') as HTMLElement | null;
    if (!target) return;
    const nome      = target.dataset['nome'] ?? '';
    const categoria = target.dataset['categoria'] as Categoria;
    const sugestao  = buscarSugestoes(nome).find(s => s.nome === nome);
    inputNome.value = nome;
    selectCat.value = categoria;
    if (sugestao) { inputQtd.value = String(sugestao.quantidade); selectUnidade.value = sugestao.unidade; }
    renderizarSugestoes([]);
    inputNome.focus();
  });

  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    const nome      = inputNome.value.trim();
    const categoria = selectCat.value as Categoria;
    const quantidade = Number(inputQtd.value);
    const unidade   = selectUnidade.value as Unidade;
    const nota      = inputNota?.value.trim() || undefined;
    if (!nome || quantidade <= 0) return;

    adicionarItem({ nome, categoria, quantidade, unidade, ...(nota ? { nota } : {}) });
    atualizar();
    mostrarToast(`"${nome}" adicionado!`, 'sucesso');

    inputNome.value = '';
    inputQtd.value  = '1';
    if (inputNota) inputNota.value = '';
    renderizarSugestoes([]);
    form.classList.remove('aberto');
    fab.style.display = 'flex';
  });
}

// ── Edição de preço inline ─────────────────────────
function editarPrecoInline(el: HTMLElement): void {
  if (el.querySelector('input')) return; // já editando

  const id = el.dataset['id']!;
  const valorAtual = el.dataset['preco'] ?? '';

  el.innerHTML = '';
  const input = document.createElement('input');
  input.type = 'number';
  input.min  = '0';
  input.step = '0.01';
  input.value = valorAtual;
  input.className = 'input-preco-inline';
  input.placeholder = '0,00';
  el.appendChild(input);
  input.focus();
  input.select();

  let salvo = false;
  function salvar(): void {
    if (salvo) return;
    salvo = true;
    const raw = parseFloat(input.value.replace(',', '.'));
    const preco = (!isNaN(raw) && raw > 0) ? raw : undefined;
    atualizarItem(id, { preco });
    atualizar();
  }

  input.addEventListener('blur', salvar);
  input.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') { e.preventDefault(); salvar(); }
    if (e.key === 'Escape') { salvo = true; atualizar(); }
  });
}

// ── Lista ─────────────────────────────────────────
export function configurarListaEventos(): void {
  document.getElementById('lista')!.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // Clique no preço — edição inline
    const precoEl = target.closest('.item-preco') as HTMLElement | null;
    if (precoEl) { editarPrecoInline(precoEl); return; }

    const btn = target.closest('button') as HTMLButtonElement | null;
    if (!btn) return;
    const id = btn.dataset['id'];
    if (!id) return;
    if (btn.classList.contains('btn-check'))   { alternarComprado(id); atualizar(); }
    if (btn.classList.contains('btn-remover')) { removerItem(id);       atualizar(); }
  });

  // Teclado para preço (acessibilidade)
  document.getElementById('lista')!.addEventListener('keydown', (e: KeyboardEvent) => {
    const precoEl = (e.target as HTMLElement).closest('.item-preco') as HTMLElement | null;
    if (precoEl && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      editarPrecoInline(precoEl);
    }
  });

  document.getElementById('btn-limpar-comprados')!.addEventListener('click', () => {
    removerComprados(); atualizar();
    mostrarToast('Itens comprados removidos', 'aviso');
  });

  document.getElementById('btn-limpar-tudo')!.addEventListener('click', async () => {
    const ok = await confirmar('Tem certeza que deseja limpar toda a lista?', 'Limpar tudo', 'Cancelar');
    if (ok) { limparTudo(); atualizar(); mostrarToast('Lista limpa!', 'aviso'); }
  });

  // ── Compartilhar ─────────────────────────────────
  document.getElementById('btn-compartilhar')?.addEventListener('click', () => {
    const itens = obterTodos();
    if (itens.length === 0) { mostrarToast('A lista está vazia!', 'aviso'); return; }
    const porCategoria: Record<string, string[]> = {};
    itens.forEach(item => {
      if (!porCategoria[item.categoria]) porCategoria[item.categoria] = [];
      const status = item.comprado ? '✓' : '☐';
      const precoStr = item.preco != null ? ` (R$ ${item.preco.toFixed(2).replace('.', ',')})` : '';
      const notaStr  = item.nota ? ` [${item.nota}]` : '';
      porCategoria[item.categoria].push(`  ${status} ${item.nome} — ${item.quantidade} ${item.unidade}${precoStr}${notaStr}`);
    });
    const linhas = ['🛒 Lista do Mercado', ''];
    Object.entries(porCategoria).forEach(([cat, itensLinha]) => {
      linhas.push(`📌 ${cat}`); linhas.push(...itensLinha); linhas.push('');
    });
    navigator.clipboard.writeText(linhas.join('\n').trim())
      .then(() => mostrarToast('Lista copiada!', 'sucesso'))
      .catch(() => mostrarToast('Não foi possível copiar', 'erro'));
  });

  // ── Modo compras ──────────────────────────────────
  const btnModo  = document.getElementById('btn-modo-compras');
  const btnSair  = document.getElementById('btn-sair-modo');

  btnModo?.addEventListener('click', () => {
    document.body.classList.add('modo-compras');
    mostrarToast('Modo compras ativado — toque nos itens para marcar', 'info');
  });

  btnSair?.addEventListener('click', () => {
    document.body.classList.remove('modo-compras');
  });

  // ── Calculadora ───────────────────────────────────
  document.getElementById('btn-calculadora')?.addEventListener('click', () => {
    Calculadora.toggle();
  });

  // ── Modelos ───────────────────────────────────────
  configurarModelos(atualizar);
}