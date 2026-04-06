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
  var UNIDADES_VALIDAS = ["un", "kg", "g", "L", "ml", "cx", "pct", "dz"];
  function isItemValido(item) {
    if (typeof item !== "object" || item === null) return false;
    const i = item;
    return typeof i["id"] === "string" && i["id"].length > 0 && typeof i["nome"] === "string" && i["nome"].length > 0 && typeof i["categoria"] === "string" && typeof i["quantidade"] === "number" && i["quantidade"] > 0 && typeof i["unidade"] === "string" && UNIDADES_VALIDAS.includes(i["unidade"]) && typeof i["comprado"] === "boolean";
  }
  function salvarItens(itens2) {
    localStorage.setItem(CHAVE, JSON.stringify(itens2));
  }
  function carregarItens() {
    try {
      const raw = localStorage.getItem(CHAVE);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter(isItemValido).map((item) => ({ ...item, criadoEm: new Date(item.criadoEm) }));
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
  function atualizarItem(id, dados) {
    const index = itens.findIndex((i) => i.id === id);
    if (index === -1) return;
    itens[index] = { ...itens[index], ...dados };
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
  function obterTodos() {
    return itens;
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
    const itensComPreco = itens.filter((i) => i.preco != null);
    const totalEstimado = itensComPreco.length > 0 ? itens.reduce((sum, i) => sum + (i.preco ?? 0), 0) : null;
    return { total: itens.length, comprados, pendentes: itens.length - comprados, totalEstimado };
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
  function escaparHtml(texto) {
    return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function formatarPreco(valor) {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
  }
  function renderizarResumo() {
    const { total, comprados, pendentes, totalEstimado } = obterResumo();
    const el = document.getElementById("resumo");
    const pct = total > 0 ? Math.round(comprados / total * 100) : 0;
    document.title = pendentes > 0 ? `(${pendentes}) Lista do Mercado` : "Lista do Mercado";
    const ticketHtml = totalEstimado != null ? `
    <div class="resumo-ticket">
      <span class="ticket-label">Total estimado</span>
      <span class="ticket-valor">${formatarPreco(totalEstimado)}</span>
    </div>` : "";
    el.innerHTML = `
    <div class="resumo-stats">
      <span class="resumo-item"><strong>${total}</strong> itens</span>
      <span class="resumo-item ok"><strong>${comprados}</strong> comprados</span>
      <span class="resumo-item pend"><strong>${pendentes}</strong> pendentes</span>
    </div>
    ${ticketHtml}
    <div class="progress-wrap">
      <div class="progress-bar">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
      <span class="progress-pct">${pct}%</span>
    </div>
  `;
  }
  function renderizarItem(item) {
    const nomeEscapado = escaparHtml(item.nome);
    const notaHtml = item.nota ? `<span class="item-nota">${escaparHtml(item.nota)}</span>` : "";
    const precoLabel = item.preco != null ? formatarPreco(item.preco) : "R$ \u2014";
    const precoClass = item.preco != null ? "item-preco" : "item-preco sem-preco";
    return `
    <li class="item${item.comprado ? " comprado" : ""}" data-id="${item.id}">
      <button class="btn-check" data-id="${item.id}" aria-label="marcar como comprado">
        ${item.comprado ? `<svg width="12" height="12" viewBox="0 0 12 12"><polyline points="1.5,6 4.5,9.5 10.5,2.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ""}
      </button>
      <div class="item-info">
        <span class="item-nome">${nomeEscapado}</span>
        ${notaHtml}
        <span class="item-qtd">${item.quantidade} ${item.unidade}</span>
      </div>
      <span class="${precoClass}" data-id="${item.id}" data-preco="${item.preco ?? ""}"
        title="Clique para editar pre\xE7o" role="button" tabindex="0"
        aria-label="pre\xE7o: ${precoLabel}">${precoLabel}</span>
      <button class="btn-remover" data-id="${item.id}" aria-label="remover item">
        <svg width="12" height="12" viewBox="0 0 12 12"><line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </li>
  `;
  }
  function renderizarLista(porCategoria) {
    const container2 = document.getElementById("lista");
    const categorias = Object.values(Categoria).filter((cat) => porCategoria[cat].length > 0);
    if (categorias.length === 0) {
      container2.innerHTML = `
      <div class="vazio">
        <div class="vazio-icone">\u{1F6D2}</div>
        <p class="vazio-titulo">Sua lista est\xE1 vazia</p>
        <p class="vazio-sub">Digite no campo acima para adicionar itens</p>
      </div>
    `;
      return;
    }
    container2.innerHTML = categorias.map((cat) => {
      const itens2 = porCategoria[cat];
      const itensOrdenados = [...itens2].sort((a, b) => {
        if (a.comprado === b.comprado) return 0;
        return a.comprado ? 1 : -1;
      });
      const qtdComprados = itens2.filter((i) => i.comprado).length;
      const tudo = qtdComprados === itens2.length;
      return `
      <section class="categoria${tudo ? " concluida" : ""}">
        <div class="categoria-header">
          <span class="categoria-icone">${iconeCategoria[cat]}</span>
          <span class="categoria-nome">${cat}</span>
          <span class="categoria-count">${qtdComprados}/${itens2.length}</span>
        </div>
        <ul class="itens">${itensOrdenados.map(renderizarItem).join("")}</ul>
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
    <div class="sugestao" data-nome="${escaparHtml(s.nome)}" data-categoria="${escaparHtml(s.categoria)}">
      <span>${escaparHtml(s.nome)}</span>
      <span class="sugestao-cat">${escaparHtml(s.categoria)}</span>
    </div>
  `).join("");
  }

  // src/ui/toast.ts
  var container = null;
  function obterContainer() {
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }
    return container;
  }
  function mostrarToast(mensagem, tipo = "sucesso", opcoes = {}) {
    const duracao = opcoes.duracao ?? 3e3;
    const icones = {
      sucesso: "\u2713",
      aviso: "\u26A0",
      erro: "\u2715",
      info: "\u2139"
    };
    const toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    toast.innerHTML = `
    <span class="toast-icone">${icones[tipo]}</span>
    <span class="toast-msg">${mensagem}</span>
    <div class="toast-progress"></div>
  `;
    const c = obterContainer();
    c.appendChild(toast);
    toast.getBoundingClientRect();
    toast.classList.add("toast-visivel");
    const barra = toast.querySelector(".toast-progress");
    barra.style.transition = `width ${duracao}ms linear`;
    barra.style.width = "0%";
    const timer = setTimeout(() => fecharToast(toast), duracao);
    toast.addEventListener("click", () => {
      clearTimeout(timer);
      fecharToast(toast);
    });
  }
  function fecharToast(toast) {
    toast.classList.remove("toast-visivel");
    toast.classList.add("toast-saindo");
    toast.addEventListener("animationend", () => toast.remove(), { once: true });
  }

  // src/ui/modal.ts
  function confirmar(mensagem, opcaoConfirmar = "Confirmar", opcaoCancelar = "Cancelar") {
    return new Promise((resolve) => {
      const backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop";
      const card = document.createElement("div");
      card.className = "modal-card";
      card.setAttribute("role", "dialog");
      card.setAttribute("aria-modal", "true");
      card.innerHTML = `
      <p class="modal-mensagem">${mensagem}</p>
      <div class="modal-acoes">
        <button class="modal-btn modal-btn-cancelar" id="modal-cancelar">${opcaoCancelar}</button>
        <button class="modal-btn modal-btn-confirmar" id="modal-confirmar">${opcaoConfirmar}</button>
      </div>
    `;
      backdrop.appendChild(card);
      document.body.appendChild(backdrop);
      backdrop.getBoundingClientRect();
      backdrop.classList.add("modal-visivel");
      function fechar(resultado) {
        backdrop.classList.remove("modal-visivel");
        backdrop.classList.add("modal-saindo");
        backdrop.addEventListener("animationend", () => {
          backdrop.remove();
          resolve(resultado);
        }, { once: true });
      }
      card.querySelector("#modal-confirmar").addEventListener("click", () => fechar(true));
      card.querySelector("#modal-cancelar").addEventListener("click", () => fechar(false));
      function onKeyDown(e) {
        if (e.key === "Escape") {
          document.removeEventListener("keydown", onKeyDown);
          fechar(false);
        }
        if (e.key === "Enter") {
          document.removeEventListener("keydown", onKeyDown);
          fechar(true);
        }
      }
      document.addEventListener("keydown", onKeyDown);
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) fechar(false);
      });
      setTimeout(() => card.querySelector("#modal-confirmar")?.focus(), 50);
    });
  }

  // src/services/modelosService.ts
  var CHAVE2 = "lista-mercado-modelos";
  function gerarId2() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  function salvarModelo(nome, itens2) {
    const modelos = obterModelos();
    const modelo = { id: gerarId2(), nome, criadoEm: /* @__PURE__ */ new Date(), itens: [...itens2] };
    modelos.push(modelo);
    localStorage.setItem(CHAVE2, JSON.stringify(modelos));
    return modelo;
  }
  function obterModelos() {
    try {
      const raw = localStorage.getItem(CHAVE2);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.map((m) => ({
        ...m,
        criadoEm: new Date(m["criadoEm"])
      }));
    } catch {
      return [];
    }
  }
  function removerModelo(id) {
    const modelos = obterModelos().filter((m) => m.id !== id);
    localStorage.setItem(CHAVE2, JSON.stringify(modelos));
  }
  function aplicarModelo(id) {
    const modelo = obterModelos().find((m) => m.id === id);
    if (!modelo) return;
    limparTudo();
    modelo.itens.forEach((item) => adicionarItem(item));
  }

  // src/ui/modelos.ts
  function criarBackdrop() {
    const el = document.createElement("div");
    el.className = "modal-backdrop";
    return el;
  }
  function fecharBackdrop(backdrop) {
    backdrop.classList.remove("modal-visivel");
    backdrop.classList.add("modal-saindo");
    backdrop.addEventListener("animationend", () => backdrop.remove(), { once: true });
  }
  function abrirModalSalvar() {
    const itens2 = obterTodos();
    if (itens2.length === 0) {
      mostrarToast("Lista vazia \u2014 adicione itens primeiro", "aviso");
      return;
    }
    const backdrop = criarBackdrop();
    const card = document.createElement("div");
    card.className = "modal-card";
    card.setAttribute("role", "dialog");
    card.innerHTML = `
    <p class="modal-mensagem">Dar um nome para este modelo:</p>
    <input id="input-nome-modelo" type="text" class="input-nome-modelo"
      placeholder="Ex: Lista semanal, Churrasco..." autocomplete="off" />
    <p class="modal-preview-info">${itens2.length} ${itens2.length === 1 ? "item ser\xE1 salvo" : "itens ser\xE3o salvos"}</p>
    <div class="modal-acoes" style="margin-top:16px">
      <button class="modal-btn modal-btn-cancelar" id="mc-cancelar">Cancelar</button>
      <button class="modal-btn modal-btn-confirmar" id="mc-salvar">Salvar</button>
    </div>
  `;
    backdrop.appendChild(card);
    document.body.appendChild(backdrop);
    backdrop.getBoundingClientRect();
    backdrop.classList.add("modal-visivel");
    const inputNome = card.querySelector("#input-nome-modelo");
    setTimeout(() => inputNome.focus(), 50);
    const fechar = () => fecharBackdrop(backdrop);
    function salvar() {
      const nome = inputNome.value.trim();
      if (!nome) {
        inputNome.style.borderColor = "var(--red)";
        inputNome.focus();
        return;
      }
      const itensModelo = itens2.map(({ nome: nome2, categoria, quantidade, unidade, nota }) => ({ nome: nome2, categoria, quantidade, unidade, ...nota ? { nota } : {} }));
      salvarModelo(nome, itensModelo);
      fechar();
      mostrarToast(`Modelo "${nome}" salvo!`, "sucesso");
    }
    card.querySelector("#mc-cancelar").addEventListener("click", fechar);
    card.querySelector("#mc-salvar").addEventListener("click", salvar);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) fechar();
    });
    inputNome.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        salvar();
      }
      if (e.key === "Escape") fechar();
    });
  }
  function abrirModalModelos(onAtualizar) {
    const backdrop = criarBackdrop();
    const card = document.createElement("div");
    card.className = "modal-card modal-modelos";
    card.setAttribute("role", "dialog");
    backdrop.appendChild(card);
    document.body.appendChild(backdrop);
    backdrop.getBoundingClientRect();
    backdrop.classList.add("modal-visivel");
    const fechar = () => fecharBackdrop(backdrop);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) fechar();
    });
    function renderizar() {
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
          ${modelos.map((m) => `
            <li class="modelo-item" data-id="${m.id}">
              <div class="modelo-info">
                <span class="modelo-nome">${escaparHtml(m.nome)}</span>
                <span class="modelo-meta">${m.itens.length} ${m.itens.length === 1 ? "item" : "itens"} \xB7 ${m.criadoEm.toLocaleDateString("pt-BR")}</span>
              </div>
              <div class="modelo-btns">
                <button class="btn-acao btn-carregar-modelo" data-id="${m.id}">Carregar</button>
                <button class="btn-acao danger btn-del-modelo" data-id="${m.id}" title="Excluir">\u2715</button>
              </div>
            </li>
          `).join("")}
        </ul>
        <div class="modal-acoes" style="margin-top:16px">
          <button class="modal-btn modal-btn-cancelar" id="mc-fechar">Fechar</button>
        </div>
      `;
      }
      card.querySelector("#mc-fechar")?.addEventListener("click", fechar);
      card.querySelectorAll(".btn-carregar-modelo").forEach((btn) => {
        btn.addEventListener("click", () => {
          aplicarModelo(btn.dataset["id"]);
          fechar();
          onAtualizar();
          mostrarToast("Modelo carregado!", "sucesso");
        });
      });
      card.querySelectorAll(".btn-del-modelo").forEach((btn) => {
        btn.addEventListener("click", async () => {
          const ok = await confirmar("Excluir este modelo?", "Excluir", "Cancelar");
          if (ok) {
            removerModelo(btn.dataset["id"]);
            renderizar();
            mostrarToast("Modelo exclu\xEDdo", "aviso");
          }
        });
      });
    }
    renderizar();
  }
  function configurarModelos(onAtualizar) {
    document.getElementById("btn-salvar-modelo")?.addEventListener("click", abrirModalSalvar);
    document.getElementById("btn-modelos")?.addEventListener("click", () => abrirModalModelos(onAtualizar));
  }

  // src/ui/eventos.ts
  function atualizar() {
    renderizarLista(obterPorCategoria());
    renderizarResumo();
  }
  function configurarFab() {
    const fab = document.getElementById("fab");
    const form = document.getElementById("form-adicionar");
    const fechar = document.getElementById("btn-fechar");
    const input = document.getElementById("input-nome");
    function abrirForm() {
      fab.style.display = "none";
      form.classList.add("aberto");
      input.focus();
    }
    function fecharForm() {
      form.classList.remove("aberto");
      fab.style.display = "flex";
      renderizarSugestoes([]);
    }
    fab.addEventListener("click", abrirForm);
    fechar.addEventListener("click", fecharForm);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && form.classList.contains("aberto")) fecharForm();
    });
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
    const inputNota = document.getElementById("input-nota");
    const selectCat = document.getElementById("select-categoria");
    const selectUnidade = document.getElementById("select-unidade");
    const sugestoesEl = document.getElementById("sugestoes");
    const fab = document.getElementById("fab");
    const form = document.getElementById("form-adicionar");
    inputNome.addEventListener("input", () => renderizarSugestoes(buscarSugestoes(inputNome.value)));
    document.addEventListener("click", (e) => {
      if (!sugestoesEl.contains(e.target) && e.target !== inputNome) renderizarSugestoes([]);
    });
    sugestoesEl.addEventListener("click", (e) => {
      const target = e.target.closest(".sugestao");
      if (!target) return;
      const nome = target.dataset["nome"] ?? "";
      const categoria = target.dataset["categoria"];
      const sugestao = buscarSugestoes(nome).find((s) => s.nome === nome);
      inputNome.value = nome;
      selectCat.value = categoria;
      if (sugestao) {
        inputQtd.value = String(sugestao.quantidade);
        selectUnidade.value = sugestao.unidade;
      }
      renderizarSugestoes([]);
      inputNome.focus();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = inputNome.value.trim();
      const categoria = selectCat.value;
      const quantidade = Number(inputQtd.value);
      const unidade = selectUnidade.value;
      const nota = inputNota?.value.trim() || void 0;
      if (!nome || quantidade <= 0) return;
      adicionarItem({ nome, categoria, quantidade, unidade, ...nota ? { nota } : {} });
      atualizar();
      mostrarToast(`"${nome}" adicionado!`, "sucesso");
      inputNome.value = "";
      inputQtd.value = "1";
      if (inputNota) inputNota.value = "";
      renderizarSugestoes([]);
      form.classList.remove("aberto");
      fab.style.display = "flex";
    });
  }
  function editarPrecoInline(el) {
    if (el.querySelector("input")) return;
    const id = el.dataset["id"];
    const valorAtual = el.dataset["preco"] ?? "";
    el.innerHTML = "";
    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.step = "0.01";
    input.value = valorAtual;
    input.className = "input-preco-inline";
    input.placeholder = "0,00";
    el.appendChild(input);
    input.focus();
    input.select();
    let salvo = false;
    function salvar() {
      if (salvo) return;
      salvo = true;
      const raw = parseFloat(input.value.replace(",", "."));
      const preco = !isNaN(raw) && raw > 0 ? raw : void 0;
      atualizarItem(id, { preco });
      atualizar();
    }
    input.addEventListener("blur", salvar);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        salvar();
      }
      if (e.key === "Escape") {
        salvo = true;
        atualizar();
      }
    });
  }
  function configurarListaEventos() {
    document.getElementById("lista").addEventListener("click", (e) => {
      const target = e.target;
      const precoEl = target.closest(".item-preco");
      if (precoEl) {
        editarPrecoInline(precoEl);
        return;
      }
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
    document.getElementById("lista").addEventListener("keydown", (e) => {
      const precoEl = e.target.closest(".item-preco");
      if (precoEl && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        editarPrecoInline(precoEl);
      }
    });
    document.getElementById("btn-limpar-comprados").addEventListener("click", () => {
      removerComprados();
      atualizar();
      mostrarToast("Itens comprados removidos", "aviso");
    });
    document.getElementById("btn-limpar-tudo").addEventListener("click", async () => {
      const ok = await confirmar("Tem certeza que deseja limpar toda a lista?", "Limpar tudo", "Cancelar");
      if (ok) {
        limparTudo();
        atualizar();
        mostrarToast("Lista limpa!", "aviso");
      }
    });
    document.getElementById("btn-compartilhar")?.addEventListener("click", () => {
      const itens2 = obterTodos();
      if (itens2.length === 0) {
        mostrarToast("A lista est\xE1 vazia!", "aviso");
        return;
      }
      const porCategoria = {};
      itens2.forEach((item) => {
        if (!porCategoria[item.categoria]) porCategoria[item.categoria] = [];
        const status = item.comprado ? "\u2713" : "\u2610";
        const precoStr = item.preco != null ? ` (R$ ${item.preco.toFixed(2).replace(".", ",")})` : "";
        const notaStr = item.nota ? ` [${item.nota}]` : "";
        porCategoria[item.categoria].push(`  ${status} ${item.nome} \u2014 ${item.quantidade} ${item.unidade}${precoStr}${notaStr}`);
      });
      const linhas = ["\u{1F6D2} Lista do Mercado", ""];
      Object.entries(porCategoria).forEach(([cat, itensLinha]) => {
        linhas.push(`\u{1F4CC} ${cat}`);
        linhas.push(...itensLinha);
        linhas.push("");
      });
      navigator.clipboard.writeText(linhas.join("\n").trim()).then(() => mostrarToast("Lista copiada!", "sucesso")).catch(() => mostrarToast("N\xE3o foi poss\xEDvel copiar", "erro"));
    });
    const btnModo = document.getElementById("btn-modo-compras");
    const btnSair = document.getElementById("btn-sair-modo");
    btnModo?.addEventListener("click", () => {
      document.body.classList.add("modo-compras");
      mostrarToast("Modo compras ativado \u2014 toque nos itens para marcar", "info");
    });
    btnSair?.addEventListener("click", () => {
      document.body.classList.remove("modo-compras");
    });
    configurarModelos(atualizar);
  }

  // src/main.ts
  document.addEventListener("DOMContentLoaded", () => {
    preencherCategorias();
    configurarFab();
    configurarFormulario();
    configurarListaEventos();
    renderizarLista(obterPorCategoria());
    renderizarResumo();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
      });
    }
  });
})();
