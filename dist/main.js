"use strict";
(() => {
  // src/enums/categoria.ts
  var Categoria = /* @__PURE__ */ ((Categoria2) => {
    Categoria2["Graos"] = "Gr\xE3os e Cereais";
    Categoria2["Hortifruti"] = "Hortifr\xFAti";
    Categoria2["Carnes"] = "Carnes e Frios";
    Categoria2["Laticinios"] = "Latic\xEDnios";
    Categoria2["Bebidas"] = "Bebidas";
    Categoria2["Padaria"] = "Padaria";
    Categoria2["Higiene"] = "Higiene Pessoal";
    Categoria2["Limpeza"] = "Limpeza";
    Categoria2["Outros"] = "Outros";
    return Categoria2;
  })(Categoria || {});

  // src/data/itensSugeridos.ts
  var ITENS_SUGERIDOS = [
    // ── Grãos e Cereais ──────────────────────────────────
    { nome: "Arroz", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 5, unidade: "kg" },
    { nome: "Feij\xE3o carioca", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "kg" },
    { nome: "Feij\xE3o preto", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "kg" },
    { nome: "Macarr\xE3o espaguete", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 2, unidade: "pct" },
    { nome: "Macarr\xE3o parafuso", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "pct" },
    { nome: "Farinha de trigo", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "kg" },
    { nome: "Farinha de mandioca", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "kg" },
    { nome: "Aveia em flocos", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "pct" },
    { nome: "Lentilha", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 500, unidade: "g" },
    { nome: "Gr\xE3o-de-bico", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 500, unidade: "g" },
    { nome: "Milho de canjica", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 500, unidade: "g" },
    { nome: "A\xE7\xFAcar refinado", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 2, unidade: "kg" },
    { nome: "A\xE7\xFAcar mascavo", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 500, unidade: "g" },
    { nome: "Sal refinado", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "kg" },
    { nome: "Caf\xE9 mo\xEDdo", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 500, unidade: "g" },
    { nome: "\xD3leo de soja", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 2, unidade: "L" },
    { nome: "Azeite de oliva", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 500, unidade: "ml" },
    { nome: "Vinagre", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 750, unidade: "ml" },
    { nome: "Molho de tomate", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 3, unidade: "un" },
    { nome: "Extrato de tomate", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 2, unidade: "un" },
    { nome: "Shoyu", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "un" },
    { nome: "Caldo de carne", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "cx" },
    { nome: "Caldo de galinha", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "cx" },
    { nome: "Fermento em p\xF3", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "un" },
    { nome: "Amido de milho", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 500, unidade: "g" },
    { nome: "Fub\xE1", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "kg" },
    { nome: "Biscoito cream cracker", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 2, unidade: "pct" },
    { nome: "Biscoito maisena", categoria: "Gr\xE3os e Cereais" /* Graos */, quantidade: 1, unidade: "pct" },
    // ── Hortifrúti ───────────────────────────────────────
    { nome: "Banana", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "kg" },
    { nome: "Ma\xE7\xE3", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "kg" },
    { nome: "Laranja", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "kg" },
    { nome: "Mam\xE3o", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "un" },
    { nome: "Uva", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 500, unidade: "g" },
    { nome: "Lim\xE3o", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 6, unidade: "un" },
    { nome: "Tomate", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "kg" },
    { nome: "Cebola", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "kg" },
    { nome: "Alho", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "un" },
    { nome: "Batata", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 2, unidade: "kg" },
    { nome: "Cenoura", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "kg" },
    { nome: "Alface", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "un" },
    { nome: "Couve", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "un" },
    { nome: "Br\xF3colis", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "un" },
    { nome: "Abobrinha", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 2, unidade: "un" },
    { nome: "Berinjela", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "un" },
    { nome: "Piment\xE3o", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 2, unidade: "un" },
    { nome: "Pepino", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 2, unidade: "un" },
    { nome: "Beterraba", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 500, unidade: "g" },
    { nome: "Batata-doce", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "kg" },
    { nome: "Mandioca", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "kg" },
    { nome: "Milho verde", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 2, unidade: "un" },
    { nome: "Espinafre", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "un" },
    { nome: "Cheiro-verde", categoria: "Hortifr\xFAti" /* Hortifruti */, quantidade: 1, unidade: "un" },
    // ── Carnes e Frios ───────────────────────────────────
    { nome: "Frango inteiro", categoria: "Carnes e Frios" /* Carnes */, quantidade: 2, unidade: "kg" },
    { nome: "Peito de frango", categoria: "Carnes e Frios" /* Carnes */, quantidade: 1, unidade: "kg" },
    { nome: "Coxinha da asa", categoria: "Carnes e Frios" /* Carnes */, quantidade: 1, unidade: "kg" },
    { nome: "Carne mo\xEDda", categoria: "Carnes e Frios" /* Carnes */, quantidade: 500, unidade: "g" },
    { nome: "Ac\xE9m", categoria: "Carnes e Frios" /* Carnes */, quantidade: 1, unidade: "kg" },
    { nome: "Costela bovina", categoria: "Carnes e Frios" /* Carnes */, quantidade: 1, unidade: "kg" },
    { nome: "Fil\xE9 de til\xE1pia", categoria: "Carnes e Frios" /* Carnes */, quantidade: 500, unidade: "g" },
    { nome: "Atum em lata", categoria: "Carnes e Frios" /* Carnes */, quantidade: 3, unidade: "un" },
    { nome: "Sardinha em lata", categoria: "Carnes e Frios" /* Carnes */, quantidade: 2, unidade: "un" },
    { nome: "Salsicha", categoria: "Carnes e Frios" /* Carnes */, quantidade: 500, unidade: "g" },
    { nome: "Lingui\xE7a calabresa", categoria: "Carnes e Frios" /* Carnes */, quantidade: 500, unidade: "g" },
    { nome: "Presunto fatiado", categoria: "Carnes e Frios" /* Carnes */, quantidade: 200, unidade: "g" },
    { nome: "Peito de peru", categoria: "Carnes e Frios" /* Carnes */, quantidade: 200, unidade: "g" },
    { nome: "Bacon", categoria: "Carnes e Frios" /* Carnes */, quantidade: 200, unidade: "g" },
    { nome: "Ovos", categoria: "Carnes e Frios" /* Carnes */, quantidade: 1, unidade: "dz" },
    // ── Laticínios ───────────────────────────────────────
    { nome: "Leite integral", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 6, unidade: "L" },
    { nome: "Leite desnatado", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 2, unidade: "L" },
    { nome: "Manteiga", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 1, unidade: "un" },
    { nome: "Margarina", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 1, unidade: "un" },
    { nome: "Queijo mussarela", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 300, unidade: "g" },
    { nome: "Queijo prato", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 300, unidade: "g" },
    { nome: "Requeij\xE3o", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 1, unidade: "un" },
    { nome: "Creme de leite", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 2, unidade: "un" },
    { nome: "Leite condensado", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 2, unidade: "un" },
    { nome: "Iogurte natural", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 4, unidade: "un" },
    { nome: "Iogurte grego", categoria: "Latic\xEDnios" /* Laticinios */, quantidade: 2, unidade: "un" },
    // ── Bebidas ──────────────────────────────────────────
    { nome: "\xC1gua mineral 5L", categoria: "Bebidas" /* Bebidas */, quantidade: 2, unidade: "un" },
    { nome: "\xC1gua mineral 500ml", categoria: "Bebidas" /* Bebidas */, quantidade: 6, unidade: "un" },
    { nome: "Suco de laranja", categoria: "Bebidas" /* Bebidas */, quantidade: 1, unidade: "L" },
    { nome: "Refrigerante cola", categoria: "Bebidas" /* Bebidas */, quantidade: 2, unidade: "L" },
    { nome: "Refrigerante lim\xE3o", categoria: "Bebidas" /* Bebidas */, quantidade: 2, unidade: "L" },
    { nome: "Cerveja", categoria: "Bebidas" /* Bebidas */, quantidade: 1, unidade: "cx" },
    { nome: "Vinho tinto", categoria: "Bebidas" /* Bebidas */, quantidade: 1, unidade: "un" },
    { nome: "Ch\xE1 em saquinhos", categoria: "Bebidas" /* Bebidas */, quantidade: 1, unidade: "cx" },
    { nome: "Achocolatado", categoria: "Bebidas" /* Bebidas */, quantidade: 1, unidade: "L" },
    // ── Padaria ──────────────────────────────────────────
    { nome: "P\xE3o de forma", categoria: "Padaria" /* Padaria */, quantidade: 1, unidade: "un" },
    { nome: "P\xE3o franc\xEAs", categoria: "Padaria" /* Padaria */, quantidade: 10, unidade: "un" },
    { nome: "P\xE3o de hot dog", categoria: "Padaria" /* Padaria */, quantidade: 1, unidade: "pct" },
    { nome: "P\xE3o de hamburguer", categoria: "Padaria" /* Padaria */, quantidade: 1, unidade: "pct" },
    { nome: "Tapioca", categoria: "Padaria" /* Padaria */, quantidade: 500, unidade: "g" },
    { nome: "Granola", categoria: "Padaria" /* Padaria */, quantidade: 500, unidade: "g" },
    // ── Higiene Pessoal ──────────────────────────────────
    { nome: "Papel higi\xEAnico", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "pct" },
    { nome: "Sabonete", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 4, unidade: "un" },
    { nome: "Shampoo", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "un" },
    { nome: "Condicionador", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "un" },
    { nome: "Creme dental", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 2, unidade: "un" },
    { nome: "Escova de dente", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 2, unidade: "un" },
    { nome: "Fio dental", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "un" },
    { nome: "Desodorante", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 2, unidade: "un" },
    { nome: "Absorvente", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 2, unidade: "pct" },
    { nome: "Aparelho de barbear", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 2, unidade: "un" },
    { nome: "Creme de barbear", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "un" },
    { nome: "Algod\xE3o", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "pct" },
    { nome: "Cotonete", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "cx" },
    { nome: "Hidratante corporal", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "un" },
    { nome: "Protetor solar", categoria: "Higiene Pessoal" /* Higiene */, quantidade: 1, unidade: "un" },
    // ── Limpeza ──────────────────────────────────────────
    { nome: "Detergente", categoria: "Limpeza" /* Limpeza */, quantidade: 3, unidade: "un" },
    { nome: "Esponja de lavar", categoria: "Limpeza" /* Limpeza */, quantidade: 4, unidade: "un" },
    { nome: "Sab\xE3o em p\xF3", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "kg" },
    { nome: "Amaciante", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "L" },
    { nome: "\xC1gua sanit\xE1ria", categoria: "Limpeza" /* Limpeza */, quantidade: 2, unidade: "L" },
    { nome: "Desinfetante", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "L" },
    { nome: "Multiuso spray", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "un" },
    { nome: "Limpa vidros", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "un" },
    { nome: "Pano de prato", categoria: "Limpeza" /* Limpeza */, quantidade: 2, unidade: "un" },
    { nome: "Saco de lixo 30L", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "pct" },
    { nome: "Saco de lixo 60L", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "pct" },
    { nome: "Papel toalha", categoria: "Limpeza" /* Limpeza */, quantidade: 2, unidade: "un" },
    { nome: "Luva de borracha", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "un" },
    { nome: "Desentupidor", categoria: "Limpeza" /* Limpeza */, quantidade: 1, unidade: "un" }
  ];
  function buscarSugestoes(texto) {
    if (texto.length < 2) return [];
    const lower = texto.toLowerCase();
    return ITENS_SUGERIDOS.filter((item) => item.nome.toLowerCase().includes(lower)).slice(0, 6);
  }

  // src/services/storageService.ts
  var CHAVE = "lista-mercado-itens";
  function salvarItens(itens2) {
    localStorage.setItem(CHAVE, JSON.stringify(itens2));
  }
  function carregarItens() {
    try {
      const raw = localStorage.getItem(CHAVE);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.map((item) => {
        const i = item;
        return { ...i, criadoEm: new Date(i.criadoEm) };
      });
    } catch {
      return [];
    }
  }

  // src/services/listaService.ts
  var itens = carregarItens();
  function gerarId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  function persistir() {
    salvarItens(itens);
  }
  function adicionarItem(dados) {
    const novo = {
      ...dados,
      id: gerarId(),
      comprado: false,
      criadoEm: /* @__PURE__ */ new Date()
    };
    itens.push(novo);
    persistir();
    return novo;
  }
  function alternarComprado(id) {
    const item = itens.find((i) => i.id === id);
    if (!item) return;
    item.comprado = !item.comprado;
    persistir();
  }
  function removerItem(id) {
    itens = itens.filter((i) => i.id !== id);
    persistir();
  }
  function removerComprados() {
    itens = itens.filter((i) => !i.comprado);
    persistir();
  }
  function limparTudo() {
    itens = [];
    persistir();
  }
  function obterPorCategoria() {
    const vazio = Object.values(Categoria).reduce((acc, cat) => {
      acc[cat] = [];
      return acc;
    }, {});
    return itens.reduce((acc, item) => {
      acc[item.categoria].push(item);
      return acc;
    }, vazio);
  }
  function obterResumo() {
    const comprados = itens.filter((i) => i.comprado).length;
    return { total: itens.length, comprados, pendentes: itens.length - comprados };
  }

  // src/ui/render.ts
  var iconeCategoria = {
    ["Gr\xE3os e Cereais" /* Graos */]: "\u{1F33E}",
    ["Hortifr\xFAti" /* Hortifruti */]: "\u{1F966}",
    ["Carnes e Frios" /* Carnes */]: "\u{1F969}",
    ["Latic\xEDnios" /* Laticinios */]: "\u{1F95B}",
    ["Bebidas" /* Bebidas */]: "\u{1F964}",
    ["Padaria" /* Padaria */]: "\u{1F35E}",
    ["Higiene Pessoal" /* Higiene */]: "\u{1F9F4}",
    ["Limpeza" /* Limpeza */]: "\u{1F9F9}",
    ["Outros" /* Outros */]: "\u{1F4E6}"
  };
  function renderizarResumo() {
    const { total, comprados, pendentes } = obterResumo();
    const el = document.getElementById("resumo");
    const pct = total > 0 ? Math.round(comprados / total * 100) : 0;
    el.innerHTML = `
    <div class="resumo-stats">
      <span class="resumo-item"><strong>${total}</strong> itens</span>
      <span class="resumo-item ok"><strong>${comprados}</strong> comprados</span>
      <span class="resumo-item pend"><strong>${pendentes}</strong> pendentes</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${pct}%"></div>
    </div>
  `;
  }
  function renderizarItem(item) {
    return `
    <li class="item${item.comprado ? " comprado" : ""}" data-id="${item.id}">
      <button class="btn-check" data-id="${item.id}" aria-label="marcar como comprado">
        ${item.comprado ? `<svg width="12" height="12" viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9.5 10.5,2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ""}
      </button>
      <div class="item-info">
        <span class="item-nome">${item.nome}</span>
        <span class="item-qtd">${item.quantidade} ${item.unidade}</span>
      </div>
      <button class="btn-remover" data-id="${item.id}" aria-label="remover item">
        <svg width="12" height="12" viewBox="0 0 12 12"><line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </li>
  `;
  }
  function renderizarLista(porCategoria) {
    const container = document.getElementById("lista");
    const categorias = Object.values(Categoria).filter(
      (cat) => porCategoria[cat].length > 0
    );
    if (categorias.length === 0) {
      container.innerHTML = `
      <div class="vazio">
        <div class="vazio-icone">\u{1F6D2}</div>
        <p class="vazio-titulo">Sua lista est\xE1 vazia</p>
        <p class="vazio-sub">Digite no campo acima para adicionar itens</p>
      </div>
    `;
      return;
    }
    container.innerHTML = categorias.map((cat) => {
      const itens2 = porCategoria[cat];
      const qtdComprados = itens2.filter((i) => i.comprado).length;
      const tudo = qtdComprados === itens2.length;
      return `
      <section class="categoria${tudo ? " concluida" : ""}">
        <div class="categoria-header">
          <span class="categoria-icone">${iconeCategoria[cat]}</span>
          <span class="categoria-nome">${cat}</span>
          <span class="categoria-count">${qtdComprados}/${itens2.length}</span>
        </div>
        <ul class="itens">${itens2.map(renderizarItem).join("")}</ul>
      </section>
    `;
    }).join("");
  }
  function renderizarSugestoes(sugestoes) {
    const el = document.getElementById("sugestoes");
    if (sugestoes.length === 0) {
      el.innerHTML = "";
      el.style.display = "none";
      return;
    }
    el.style.display = "block";
    el.innerHTML = sugestoes.map((s) => `
    <div class="sugestao" data-nome="${s.nome}" data-categoria="${s.categoria}">
      <span>${s.nome}</span>
      <span class="sugestao-cat">${s.categoria}</span>
    </div>
  `).join("");
  }

  // src/ui/eventos.ts
  function atualizar() {
    renderizarLista(obterPorCategoria());
    renderizarResumo();
  }
  function preencherCategorias() {
    const select = document.getElementById("select-categoria");
    select.innerHTML = "";
    Object.values(Categoria).forEach((cat) => {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      select.appendChild(opt);
    });
  }
  function configurarFormulario() {
    const inputNome = document.getElementById("input-nome");
    const inputQtd = document.getElementById("input-qtd");
    const selectCat = document.getElementById("select-categoria");
    const selectUnidade = document.getElementById("select-unidade");
    const sugestoesEl = document.getElementById("sugestoes");
    inputNome.addEventListener("input", () => {
      const sugestoes = buscarSugestoes(inputNome.value);
      renderizarSugestoes(sugestoes);
    });
    document.addEventListener("click", (e) => {
      if (!sugestoesEl.contains(e.target) && e.target !== inputNome) {
        renderizarSugestoes([]);
      }
    });
    sugestoesEl.addEventListener("click", (e) => {
      const target = e.target.closest(".sugestao");
      if (!target) return;
      const nome = target.dataset["nome"] ?? "";
      const categoria = target.dataset["categoria"];
      const sugestoes = buscarSugestoes(nome);
      const sugestao = sugestoes.find((s) => s.nome === nome);
      inputNome.value = nome;
      selectCat.value = categoria;
      if (sugestao) {
        inputQtd.value = String(sugestao.quantidade);
        selectUnidade.value = sugestao.unidade;
      }
      renderizarSugestoes([]);
      inputNome.focus();
    });
    const form = document.getElementById("form-adicionar");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = inputNome.value.trim();
      const categoria = selectCat.value;
      const quantidade = Number(inputQtd.value);
      const unidade = selectUnidade.value;
      if (!nome || quantidade <= 0) return;
      adicionarItem({ nome, categoria, quantidade, unidade });
      atualizar();
      inputNome.value = "";
      inputQtd.value = "1";
      renderizarSugestoes([]);
      inputNome.focus();
    });
  }
  function configurarListaEventos() {
    document.getElementById("lista").addEventListener("click", (e) => {
      const target = e.target;
      const btn = target.closest("button");
      if (!btn) return;
      const id = btn.dataset["id"];
      if (!id) return;
      if (btn.classList.contains("btn-check")) {
        alternarComprado(id);
        atualizar();
      }
      if (btn.classList.contains("btn-remover")) {
        removerItem(id);
        atualizar();
      }
    });
    document.getElementById("btn-limpar-comprados").addEventListener("click", () => {
      removerComprados();
      atualizar();
    });
    document.getElementById("btn-limpar-tudo").addEventListener("click", () => {
      if (confirm("Tem certeza que deseja limpar toda a lista?")) {
        limparTudo();
        atualizar();
      }
    });
  }

  // src/main.ts
  document.addEventListener("DOMContentLoaded", () => {
    preencherCategorias();
    configurarFormulario();
    configurarListaEventos();
    renderizarLista(obterPorCategoria());
    renderizarResumo();
  });
})();
