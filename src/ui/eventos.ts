import { Categoria } from '../enums/categoria';
import { Unidade } from '../types/item';
import { ITENS_SUGERIDOS, buscarSugestoes } from '../data/itensSugeridos';
import {
  adicionarItem, alternarComprado, removerItem,
  removerComprados, limparTudo, obterPorCategoria
} from '../services/listaService';
import { renderizarLista, renderizarResumo, renderizarSugestoes } from './render';

function atualizar(): void {
  renderizarLista(obterPorCategoria());
  renderizarResumo();
}

export function preencherCategorias(): void {
  const select = document.getElementById('select-categoria') as HTMLSelectElement;
  
  // Limpa qualquer option residual
  select.innerHTML = '';
  
  Object.values(Categoria).forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

export function configurarFormulario(): void {
  const inputNome     = document.getElementById('input-nome')        as HTMLInputElement;
  const inputQtd      = document.getElementById('input-qtd')         as HTMLInputElement;
  const selectCat     = document.getElementById('select-categoria')  as HTMLSelectElement;
  const selectUnidade = document.getElementById('select-unidade')    as HTMLSelectElement;
  const sugestoesEl   = document.getElementById('sugestoes')!;

  // Autocompletar — busca no banco de itens enquanto digita
  inputNome.addEventListener('input', () => {
    const sugestoes = buscarSugestoes(inputNome.value);
    renderizarSugestoes(sugestoes);
  });

  // Fechar sugestões ao clicar fora
  document.addEventListener('click', (e: MouseEvent) => {
    if (!sugestoesEl.contains(e.target as Node) && e.target !== inputNome) {
      renderizarSugestoes([]);
    }
  });

  // Clique numa sugestão — preenche o formulário automaticamente
  sugestoesEl.addEventListener('click', (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('.sugestao') as HTMLElement | null;
    if (!target) return;

    const nome      = target.dataset['nome'] ?? '';
    const categoria = target.dataset['categoria'] as Categoria;

    // Busca a sugestão completa para pegar quantidade e unidade padrão
    const sugestoes = buscarSugestoes(nome);
    const sugestao  = sugestoes.find(s => s.nome === nome);

    inputNome.value         = nome;
    selectCat.value         = categoria;
    if (sugestao) {
      inputQtd.value        = String(sugestao.quantidade);
      selectUnidade.value   = sugestao.unidade;
    }

    renderizarSugestoes([]);
    inputNome.focus();
  });

  // Submissão do formulário
  const form = document.getElementById('form-adicionar') as HTMLFormElement;
  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    const nome      = inputNome.value.trim();
    const categoria = selectCat.value as Categoria;
    const quantidade = Number(inputQtd.value);
    const unidade   = selectUnidade.value as Unidade;

    if (!nome || quantidade <= 0) return;

    adicionarItem({ nome, categoria, quantidade, unidade });
    atualizar();

    // Limpa nome e quantidade, mantém categoria e unidade
    inputNome.value = '';
    inputQtd.value  = '1';
    renderizarSugestoes([]);
    inputNome.focus();
  });
}

export function configurarListaEventos(): void {
  // Event delegation — um listener para todos os botões da lista
  document.getElementById('lista')!.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const btn    = target.closest('button') as HTMLButtonElement | null;
    if (!btn) return;

    const id = btn.dataset['id'];
    if (!id) return;

    if (btn.classList.contains('btn-check'))   { alternarComprado(id); atualizar(); }
    if (btn.classList.contains('btn-remover')) { removerItem(id);       atualizar(); }
  });

  // Botão remover comprados
  document.getElementById('btn-limpar-comprados')!.addEventListener('click', () => {
    removerComprados();
    atualizar();
  });

  // Botão limpar tudo
  document.getElementById('btn-limpar-tudo')!.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja limpar toda a lista?')) {
      limparTudo();
      atualizar();
    }
  });
}