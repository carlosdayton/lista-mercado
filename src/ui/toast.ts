export type TipoToast = 'sucesso' | 'aviso' | 'erro' | 'info';

interface ToastOpcoes {
  duracao?: number; // ms
}

let container: HTMLElement | null = null;

function obterContainer(): HTMLElement {
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

export function mostrarToast(mensagem: string, tipo: TipoToast = 'sucesso', opcoes: ToastOpcoes = {}): void {
  const duracao = opcoes.duracao ?? 3000;
  const icones: Record<TipoToast, string> = {
    sucesso: '✓',
    aviso:   '⚠',
    erro:    '✕',
    info:    'ℹ',
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${tipo}`;
  toast.innerHTML = `
    <span class="toast-icone">${icones[tipo]}</span>
    <span class="toast-msg">${mensagem}</span>
    <div class="toast-progress"></div>
  `;

  const c = obterContainer();
  c.appendChild(toast);

  // Força o reflow para a animação de entrada funcionar
  toast.getBoundingClientRect();
  toast.classList.add('toast-visivel');

  // Barra de progresso
  const barra = toast.querySelector<HTMLElement>('.toast-progress')!;
  barra.style.transition = `width ${duracao}ms linear`;
  barra.style.width = '0%';

  const timer = setTimeout(() => fecharToast(toast), duracao);

  toast.addEventListener('click', () => {
    clearTimeout(timer);
    fecharToast(toast);
  });
}

function fecharToast(toast: HTMLElement): void {
  toast.classList.remove('toast-visivel');
  toast.classList.add('toast-saindo');
  toast.addEventListener('animationend', () => toast.remove(), { once: true });
}
