"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preencherCategorias = preencherCategorias;
exports.configurarFormulario = configurarFormulario;
exports.configurarListaEventos = configurarListaEventos;
const categoria_1 = require("../enums/categoria");
const itensSugeridos_1 = require("../data/itensSugeridos");
const listaService_1 = require("../services/listaService");
const render_1 = require("./render");
function atualizar() {
    (0, render_1.renderizarLista)((0, listaService_1.obterPorCategoria)());
    (0, render_1.renderizarResumo)();
}
function preencherCategorias() {
    const select = document.getElementById('select-categoria');
    // Limpa qualquer option residual
    select.innerHTML = '';
    Object.values(categoria_1.Categoria).forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });
}
function configurarFormulario() {
    const inputNome = document.getElementById('input-nome');
    const inputQtd = document.getElementById('input-qtd');
    const selectCat = document.getElementById('select-categoria');
    const selectUnidade = document.getElementById('select-unidade');
    const sugestoesEl = document.getElementById('sugestoes');
    // Autocompletar — busca no banco de itens enquanto digita
    inputNome.addEventListener('input', () => {
        const sugestoes = (0, itensSugeridos_1.buscarSugestoes)(inputNome.value);
        (0, render_1.renderizarSugestoes)(sugestoes);
    });
    // Fechar sugestões ao clicar fora
    document.addEventListener('click', (e) => {
        if (!sugestoesEl.contains(e.target) && e.target !== inputNome) {
            (0, render_1.renderizarSugestoes)([]);
        }
    });
    // Clique numa sugestão — preenche o formulário automaticamente
    sugestoesEl.addEventListener('click', (e) => {
        const target = e.target.closest('.sugestao');
        if (!target)
            return;
        const nome = target.dataset['nome'] ?? '';
        const categoria = target.dataset['categoria'];
        // Busca a sugestão completa para pegar quantidade e unidade padrão
        const sugestoes = (0, itensSugeridos_1.buscarSugestoes)(nome);
        const sugestao = sugestoes.find(s => s.nome === nome);
        inputNome.value = nome;
        selectCat.value = categoria;
        if (sugestao) {
            inputQtd.value = String(sugestao.quantidade);
            selectUnidade.value = sugestao.unidade;
        }
        (0, render_1.renderizarSugestoes)([]);
        inputNome.focus();
    });
    // Submissão do formulário
    const form = document.getElementById('form-adicionar');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = inputNome.value.trim();
        const categoria = selectCat.value;
        const quantidade = Number(inputQtd.value);
        const unidade = selectUnidade.value;
        if (!nome || quantidade <= 0)
            return;
        (0, listaService_1.adicionarItem)({ nome, categoria, quantidade, unidade });
        atualizar();
        // Limpa nome e quantidade, mantém categoria e unidade
        inputNome.value = '';
        inputQtd.value = '1';
        (0, render_1.renderizarSugestoes)([]);
        inputNome.focus();
    });
}
function configurarListaEventos() {
    // Event delegation — um listener para todos os botões da lista
    document.getElementById('lista').addEventListener('click', (e) => {
        const target = e.target;
        const btn = target.closest('button');
        if (!btn)
            return;
        const id = btn.dataset['id'];
        if (!id)
            return;
        if (btn.classList.contains('btn-check')) {
            (0, listaService_1.alternarComprado)(id);
            atualizar();
        }
        if (btn.classList.contains('btn-remover')) {
            (0, listaService_1.removerItem)(id);
            atualizar();
        }
    });
    // Botão remover comprados
    document.getElementById('btn-limpar-comprados').addEventListener('click', () => {
        (0, listaService_1.removerComprados)();
        atualizar();
    });
    // Botão limpar tudo
    document.getElementById('btn-limpar-tudo').addEventListener('click', () => {
        if (confirm('Tem certeza que deseja limpar toda a lista?')) {
            (0, listaService_1.limparTudo)();
            atualizar();
        }
    });
}
