import { escaparHtml } from './render';
import { confirmar } from './modal';
import { mostrarToast } from './toast';
import { salvarModelo, obterModelos, removerModelo, aplicarModelo } from '../services/modelosService';
import { obterTodos } from '../services/listaService';

function criarBackdrop(): HTMLDivElement {
  const el = document.createElement('div');
  el.className = 'modal-backdrop';
  return el;
}

function fecharBackdrop(backdrop: HTMLElement): void {
  backdrop.classList.remove('modal-visivel');
  backdrop.classList.add('modal-saindo');
  backdrop.addEventListener('animationend', () => backdrop.remove(), { once: true });
}

export function abrirModalSalvar(): void {
  const itens = obterTodos();
  if (itens.length === 0) {
    mostrarToast('Lista vazia — adicione itens primeiro', 'aviso');
    return;
  }

  const backdrop = criarBackdrop();
  const card = document.createElement('div');
  card.className = 'modal-card';
  card.setAttribute('role', 'dialog');
  card.innerHTML = `
    <p class="modal-mensagem">Dar um nome para este modelo:</p>
    <input id="input-nome-modelo" type="text" class="input-nome-modelo"
      placeholder="Ex: Lista semanal, Churrasco..." autocomplete="off" />
    <p class="modal-preview-info">${itens.length} ${itens.length === 1 ? 'item será salvo' : 'itens serão salvos'}</p>
    <div class="modal-acoes" style="margin-top:16px">
      <button class="modal-btn modal-btn-cancelar" id="mc-cancelar">Cancelar</button>
      <button class="modal-btn modal-btn-confirmar" id="mc-salvar">Salvar</button>
    </div>
  `;

  backdrop.appendChild(card);
  document.body.appendChild(backdrop);
  backdrop.getBoundingClientRect();
  backdrop.classList.add('modal-visivel');

  const inputNome = card.querySelector<HTMLInputElement>('#input-nome-modelo')!;
  setTimeout(() => inputNome.focus(), 50);

  const fechar = (): void => fecharBackdrop(backdrop);

  function salvar(): void {
    const nome = inputNome.value.trim();
    if (!nome) { inputNome.style.borderColor = 'var(--red)'; inputNome.focus(); return; }
    const itensModelo = itens.map(({ nome, categoria, quantidade, unidade, nota }) =>
      ({ nome, categoria, quantidade, unidade, ...(nota ? { nota } : {}) }));
    salvarModelo(nome, itensModelo);
    fechar();
    mostrarToast(`Modelo "${nome}" salvo!`, 'sucesso');
  }

  card.querySelector('#mc-cancelar')!.addEventListener('click', fechar);
  card.querySelector('#mc-salvar')!.addEventListener('click', salvar);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) fechar(); });
  inputNome.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') { e.preventDefault(); salvar(); }
    if (e.key === 'Escape') fechar();
  });
}

export function abrirModalModelos(onAtualizar: () => void): void {
  const backdrop = criarBackdrop();
  const card = document.createElement('div');
  card.className = 'modal-card modal-modelos';
  card.setAttribute('role', 'dialog');
  backdrop.appendChild(card);
  document.body.appendChild(backdrop);
  backdrop.getBoundingClientRect();
  backdrop.classList.add('modal-visivel');

  const fechar = (): void => fecharBackdrop(backdrop);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) fechar(); });

  function renderizar(): void {
    const modelos = obterModelos();

    if (modelos.length === 0) {
      card.innerHTML = `
        <p class="modal-titulo">Modelos salvos</p>
        <p class="modal-mensagem" style="text-align:center;padding:20px 0;color:var(--text-muted)">
          Nenhum modelo ainda.<br>Use "Salvar modelo" para criar.
        </p>
        <div class="modal-acoes"><button class="modal-btn modal-btn-cancelar" id="mc-fechar">Fechar</button></div>
      `;
    } else {
      card.innerHTML = `
        <p class="modal-titulo">Modelos salvos</p>
        <ul class="modelos-lista">
          ${modelos.map(m => `
            <li class="modelo-item" data-id="${m.id}">
              <div class="modelo-info">
                <span class="modelo-nome">${escaparHtml(m.nome)}</span>
                <span class="modelo-meta">${m.itens.length} ${m.itens.length === 1 ? 'item' : 'itens'} · ${m.criadoEm.toLocaleDateString('pt-BR')}</span>
              </div>
              <div class="modelo-btns">
                <button class="btn-acao btn-carregar-modelo" data-id="${m.id}">Carregar</button>
                <button class="btn-acao danger btn-del-modelo" data-id="${m.id}" title="Excluir">✕</button>
              </div>
            </li>
          `).join('')}
        </ul>
        <div class="modal-acoes" style="margin-top:16px">
          <button class="modal-btn modal-btn-cancelar" id="mc-fechar">Fechar</button>
        </div>
      `;
    }

    card.querySelector('#mc-fechar')?.addEventListener('click', fechar);

    card.querySelectorAll('.btn-carregar-modelo').forEach(btn => {
      btn.addEventListener('click', () => {
        aplicarModelo((btn as HTMLElement).dataset['id']!);
        fechar();
        onAtualizar();
        mostrarToast('Modelo carregado!', 'sucesso');
      });
    });

    card.querySelectorAll('.btn-del-modelo').forEach(btn => {
      btn.addEventListener('click', async () => {
        const ok = await confirmar('Excluir este modelo?', 'Excluir', 'Cancelar');
        if (ok) {
          removerModelo((btn as HTMLElement).dataset['id']!);
          renderizar();
          mostrarToast('Modelo excluído', 'aviso');
        }
      });
    });
  }

  renderizar();
}

export function configurarModelos(onAtualizar: () => void): void {
  document.getElementById('btn-salvar-modelo')?.addEventListener('click', abrirModalSalvar);
  document.getElementById('btn-modelos')?.addEventListener('click', () => abrirModalModelos(onAtualizar));
}
