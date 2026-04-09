
export class Calculadora {
  private static instancia: Calculadora | null = null;
  private el: HTMLElement | null = null;
  private visor: HTMLElement | null = null;
  private valorAtual: string = '0';
  private operadorPendente: string | null = null;
  private valorAnterior: number | null = null;
  private aguardandoNovoNumero: boolean = false;

  private constructor() {
    this.carregarEstado();
    this.criarDOM();
    this.configurarTeclado();
  }

  private carregarEstado(): void {
    const salvo = localStorage.getItem('calc_valor');
    if (salvo) this.valorAtual = salvo;
  }

  private salvarEstado(): void {
    localStorage.setItem('calc_valor', this.valorAtual);
  }

  public static toggle(): void {
    if (!this.instancia) this.instancia = new Calculadora();
    this.instancia.mostrar(!this.instancia.visivel());
  }

  private visivel(): boolean {
    return this.el?.classList.contains('ativa') ?? false;
  }

  private criarDOM(): void {
    const container = document.getElementById('calc-sidebar')!;
    container.innerHTML = `
      <div class="calc-card">
        <div class="calc-header">
          <span class="calc-titulo">🧮 Calculadora</span>
          <button class="calc-fechar" title="Fechar">✕</button>
        </div>
        <div class="calc-visor">${this.valorAtual}</div>
        <div class="calc-grid">
          <button class="calc-btn op-special" data-acao="limpar">AC</button>
          <button class="calc-btn op-special" data-acao="delete">⌫</button>
          <button class="calc-btn op" data-acao="operar" data-val="/">÷</button>
          <button class="calc-btn op" data-acao="operar" data-val="*">×</button>
          
          <button class="calc-btn num">7</button>
          <button class="calc-btn num">8</button>
          <button class="calc-btn num">9</button>
          <button class="calc-btn op" data-acao="operar" data-val="-">-</button>
          
          <button class="calc-btn num">4</button>
          <button class="calc-btn num">5</button>
          <button class="calc-btn num">6</button>
          <button class="calc-btn op" data-acao="operar" data-val="+">+</button>
          
          <button class="calc-btn num">1</button>
          <button class="calc-btn num">2</button>
          <button class="calc-btn num">3</button>
          <button class="calc-btn equal" data-acao="igual">=</button>
          
          <button class="calc-btn num zero">0</button>
          <button class="calc-btn num">.</button>
        </div>
      </div>
    `;
    this.el = container;
    this.visor = container.querySelector('.calc-visor');

    container.querySelector('.calc-fechar')!.addEventListener('click', () => this.mostrar(false));
    
    container.querySelector('.calc-grid')!.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('button');
      if (!btn) return;
      this.processarEntrada(btn);
    });
  }

  private configurarTeclado(): void {
    document.addEventListener('keydown', (e) => {
      if (!this.visivel()) return;

      if (e.key >= '0' && e.key <= '9') this.adicionarDigito(e.key);
      if (e.key === '.') this.adicionarDigito('.');
      if (['+', '-', '*', '/'].includes(e.key)) this.definirOperador(e.key);
      if (e.key === 'Enter' || e.key === '=') { e.preventDefault(); this.calcular(); }
      if (e.key === 'Backspace') this.apagar();
      if (e.key === 'Escape') this.mostrar(false);
      if (e.key === 'c' || e.key === 'C') this.limpar();
    });
  }

  private mostrar(exibir: boolean): void {
    const app = document.querySelector('.app')!;
    if (exibir) {
      this.el?.classList.add('ativa');
      app.classList.add('calc-aberta');
    } else {
      this.el?.classList.remove('ativa');
      app.classList.remove('calc-aberta');
    }
  }

  private processarEntrada(btn: HTMLButtonElement): void {
    const val = btn.textContent!;
    const acao = btn.dataset['acao'];

    if (!acao) {
      this.adicionarDigito(val);
    } else if (acao === 'operar') {
      this.definirOperador(btn.dataset['val']!);
    } else if (acao === 'igual') {
      this.calcular();
    } else if (acao === 'limpar') {
      this.limpar();
    } else if (acao === 'delete') {
      this.apagar();
    }
  }

  private adicionarDigito(digito: string): void {
    if (digito === '.' && this.valorAtual.includes('.')) return;

    if (this.aguardandoNovoNumero) {
      this.valorAtual = digito === '.' ? '0.' : digito;
      this.aguardandoNovoNumero = false;
    } else {
      this.valorAtual = (this.valorAtual === '0' && digito !== '.') ? digito : this.valorAtual + digito;
    }
    this.atualizarVisor();
  }

  private definirOperador(op: string): void {
    const valor = parseFloat(this.valorAtual);
    
    if (this.valorAnterior !== null && !this.aguardandoNovoNumero) {
      this.calcular();
    }
    
    this.valorAnterior = parseFloat(this.valorAtual);
    this.operadorPendente = op;
    this.aguardandoNovoNumero = true;
  }

  private calcular(): void {
    if (this.valorAnterior === null || !this.operadorPendente) return;
    const atual = parseFloat(this.valorAtual);
    let resultado = 0;
    
    switch (this.operadorPendente) {
      case '+': resultado = this.valorAnterior + atual; break;
      case '-': resultado = this.valorAnterior - atual; break;
      case '*': resultado = this.valorAnterior * atual; break;
      case '/': resultado = atual !== 0 ? this.valorAnterior / atual : 0; break;
    }
    
    this.valorAtual = String(resultado);
    this.valorAnterior = resultado;
    this.operadorPendente = null;
    this.aguardandoNovoNumero = true;
    this.atualizarVisor();
  }

  private limpar(): void {
    this.valorAtual = '0';
    this.valorAnterior = null;
    this.operadorPendente = null;
    this.aguardandoNovoNumero = false;
    this.atualizarVisor();
  }

  private apagar(): void {
    if (this.aguardandoNovoNumero) return;
    this.valorAtual = this.valorAtual.length > 1 ? this.valorAtual.slice(0, -1) : '0';
    if (this.valorAtual === '-') this.valorAtual = '0';
    this.atualizarVisor();
  }

  private atualizarVisor(): void {
    if (!this.visor) return;
    
    // Formatação básica para não quebrar o layout
    let display = this.valorAtual;
    if (display.length > 12) {
      display = parseFloat(display).toPrecision(8);
    }
    this.visor.textContent = display;
    this.salvarEstado();
  }
}
