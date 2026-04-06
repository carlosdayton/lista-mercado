/**
 * Modal de confirmação estilizado — substitui window.confirm()
 * Retorna uma Promise<boolean> (true = confirmou, false = cancelou)
 */
export function confirmar(mensagem: string, opcaoConfirmar = 'Confirmar', opcaoCancelar = 'Cancelar'): Promise<boolean> {
  return new Promise(resolve => {
    // Backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';

    // Card
    const card = document.createElement('div');
    card.className = 'modal-card';
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-modal', 'true');
    card.innerHTML = `
      <p class="modal-mensagem">${mensagem}</p>
      <div class="modal-acoes">
        <button class="modal-btn modal-btn-cancelar" id="modal-cancelar">${opcaoCancelar}</button>
        <button class="modal-btn modal-btn-confirmar" id="modal-confirmar">${opcaoConfirmar}</button>
      </div>
    `;

    backdrop.appendChild(card);
    document.body.appendChild(backdrop);

    // Força reflow para animação
    backdrop.getBoundingClientRect();
    backdrop.classList.add('modal-visivel');

    function fechar(resultado: boolean): void {
      backdrop.classList.remove('modal-visivel');
      backdrop.classList.add('modal-saindo');
      backdrop.addEventListener('animationend', () => {
        backdrop.remove();
        resolve(resultado);
      }, { once: true });
    }

    card.querySelector('#modal-confirmar')!.addEventListener('click', () => fechar(true));
    card.querySelector('#modal-cancelar')!.addEventListener('click', () => fechar(false));

    // Escape fecha como cancelar
    function onKeyDown(e: KeyboardEvent): void {
      if (e.key === 'Escape') {
        document.removeEventListener('keydown', onKeyDown);
        fechar(false);
      }
      if (e.key === 'Enter') {
        document.removeEventListener('keydown', onKeyDown);
        fechar(true);
      }
    }
    document.addEventListener('keydown', onKeyDown);

    // Clique no backdrop fecha como cancelar
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) fechar(false);
    });

    // Foco no botão de confirmar
    setTimeout(() => (card.querySelector('#modal-confirmar') as HTMLButtonElement)?.focus(), 50);
  });
}
