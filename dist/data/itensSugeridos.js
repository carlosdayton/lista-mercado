"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITENS_SUGERIDOS = void 0;
exports.buscarSugestoes = buscarSugestoes;
exports.todosOsNomes = todosOsNomes;
const categoria_1 = require("../enums/categoria");
// Banco de itens essenciais do mercado organizado por categoria
exports.ITENS_SUGERIDOS = [
    // ── Grãos e Cereais ──────────────────────────────────
    { nome: 'Arroz', categoria: categoria_1.Categoria.Graos, quantidade: 5, unidade: 'kg' },
    { nome: 'Feijão carioca', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'kg' },
    { nome: 'Feijão preto', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'kg' },
    { nome: 'Macarrão espaguete', categoria: categoria_1.Categoria.Graos, quantidade: 2, unidade: 'pct' },
    { nome: 'Macarrão parafuso', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'pct' },
    { nome: 'Farinha de trigo', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'kg' },
    { nome: 'Farinha de mandioca', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'kg' },
    { nome: 'Aveia em flocos', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'pct' },
    { nome: 'Lentilha', categoria: categoria_1.Categoria.Graos, quantidade: 500, unidade: 'g' },
    { nome: 'Grão-de-bico', categoria: categoria_1.Categoria.Graos, quantidade: 500, unidade: 'g' },
    { nome: 'Milho de canjica', categoria: categoria_1.Categoria.Graos, quantidade: 500, unidade: 'g' },
    { nome: 'Açúcar refinado', categoria: categoria_1.Categoria.Graos, quantidade: 2, unidade: 'kg' },
    { nome: 'Açúcar mascavo', categoria: categoria_1.Categoria.Graos, quantidade: 500, unidade: 'g' },
    { nome: 'Sal refinado', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'kg' },
    { nome: 'Café moído', categoria: categoria_1.Categoria.Graos, quantidade: 500, unidade: 'g' },
    { nome: 'Óleo de soja', categoria: categoria_1.Categoria.Graos, quantidade: 2, unidade: 'L' },
    { nome: 'Azeite de oliva', categoria: categoria_1.Categoria.Graos, quantidade: 500, unidade: 'ml' },
    { nome: 'Vinagre', categoria: categoria_1.Categoria.Graos, quantidade: 750, unidade: 'ml' },
    { nome: 'Molho de tomate', categoria: categoria_1.Categoria.Graos, quantidade: 3, unidade: 'un' },
    { nome: 'Extrato de tomate', categoria: categoria_1.Categoria.Graos, quantidade: 2, unidade: 'un' },
    { nome: 'Shoyu', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'un' },
    { nome: 'Caldo de carne', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'cx' },
    { nome: 'Caldo de galinha', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'cx' },
    { nome: 'Fermento em pó', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'un' },
    { nome: 'Amido de milho', categoria: categoria_1.Categoria.Graos, quantidade: 500, unidade: 'g' },
    { nome: 'Fubá', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'kg' },
    { nome: 'Biscoito cream cracker', categoria: categoria_1.Categoria.Graos, quantidade: 2, unidade: 'pct' },
    { nome: 'Biscoito maisena', categoria: categoria_1.Categoria.Graos, quantidade: 1, unidade: 'pct' },
    // ── Hortifrúti ───────────────────────────────────────
    { nome: 'Banana', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'kg' },
    { nome: 'Maçã', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'kg' },
    { nome: 'Laranja', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'kg' },
    { nome: 'Mamão', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'un' },
    { nome: 'Uva', categoria: categoria_1.Categoria.Hortifruti, quantidade: 500, unidade: 'g' },
    { nome: 'Limão', categoria: categoria_1.Categoria.Hortifruti, quantidade: 6, unidade: 'un' },
    { nome: 'Tomate', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'kg' },
    { nome: 'Cebola', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'kg' },
    { nome: 'Alho', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'un' },
    { nome: 'Batata', categoria: categoria_1.Categoria.Hortifruti, quantidade: 2, unidade: 'kg' },
    { nome: 'Cenoura', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'kg' },
    { nome: 'Alface', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'un' },
    { nome: 'Couve', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'un' },
    { nome: 'Brócolis', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'un' },
    { nome: 'Abobrinha', categoria: categoria_1.Categoria.Hortifruti, quantidade: 2, unidade: 'un' },
    { nome: 'Berinjela', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'un' },
    { nome: 'Pimentão', categoria: categoria_1.Categoria.Hortifruti, quantidade: 2, unidade: 'un' },
    { nome: 'Pepino', categoria: categoria_1.Categoria.Hortifruti, quantidade: 2, unidade: 'un' },
    { nome: 'Beterraba', categoria: categoria_1.Categoria.Hortifruti, quantidade: 500, unidade: 'g' },
    { nome: 'Batata-doce', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'kg' },
    { nome: 'Mandioca', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'kg' },
    { nome: 'Milho verde', categoria: categoria_1.Categoria.Hortifruti, quantidade: 2, unidade: 'un' },
    { nome: 'Espinafre', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'un' },
    { nome: 'Cheiro-verde', categoria: categoria_1.Categoria.Hortifruti, quantidade: 1, unidade: 'un' },
    // ── Carnes e Frios ───────────────────────────────────
    { nome: 'Frango inteiro', categoria: categoria_1.Categoria.Carnes, quantidade: 2, unidade: 'kg' },
    { nome: 'Peito de frango', categoria: categoria_1.Categoria.Carnes, quantidade: 1, unidade: 'kg' },
    { nome: 'Coxinha da asa', categoria: categoria_1.Categoria.Carnes, quantidade: 1, unidade: 'kg' },
    { nome: 'Carne moída', categoria: categoria_1.Categoria.Carnes, quantidade: 500, unidade: 'g' },
    { nome: 'Acém', categoria: categoria_1.Categoria.Carnes, quantidade: 1, unidade: 'kg' },
    { nome: 'Costela bovina', categoria: categoria_1.Categoria.Carnes, quantidade: 1, unidade: 'kg' },
    { nome: 'Filé de tilápia', categoria: categoria_1.Categoria.Carnes, quantidade: 500, unidade: 'g' },
    { nome: 'Atum em lata', categoria: categoria_1.Categoria.Carnes, quantidade: 3, unidade: 'un' },
    { nome: 'Sardinha em lata', categoria: categoria_1.Categoria.Carnes, quantidade: 2, unidade: 'un' },
    { nome: 'Salsicha', categoria: categoria_1.Categoria.Carnes, quantidade: 500, unidade: 'g' },
    { nome: 'Linguiça calabresa', categoria: categoria_1.Categoria.Carnes, quantidade: 500, unidade: 'g' },
    { nome: 'Presunto fatiado', categoria: categoria_1.Categoria.Carnes, quantidade: 200, unidade: 'g' },
    { nome: 'Peito de peru', categoria: categoria_1.Categoria.Carnes, quantidade: 200, unidade: 'g' },
    { nome: 'Bacon', categoria: categoria_1.Categoria.Carnes, quantidade: 200, unidade: 'g' },
    { nome: 'Ovos', categoria: categoria_1.Categoria.Carnes, quantidade: 1, unidade: 'dz' },
    // ── Laticínios ───────────────────────────────────────
    { nome: 'Leite integral', categoria: categoria_1.Categoria.Laticinios, quantidade: 6, unidade: 'L' },
    { nome: 'Leite desnatado', categoria: categoria_1.Categoria.Laticinios, quantidade: 2, unidade: 'L' },
    { nome: 'Manteiga', categoria: categoria_1.Categoria.Laticinios, quantidade: 1, unidade: 'un' },
    { nome: 'Margarina', categoria: categoria_1.Categoria.Laticinios, quantidade: 1, unidade: 'un' },
    { nome: 'Queijo mussarela', categoria: categoria_1.Categoria.Laticinios, quantidade: 300, unidade: 'g' },
    { nome: 'Queijo prato', categoria: categoria_1.Categoria.Laticinios, quantidade: 300, unidade: 'g' },
    { nome: 'Requeijão', categoria: categoria_1.Categoria.Laticinios, quantidade: 1, unidade: 'un' },
    { nome: 'Creme de leite', categoria: categoria_1.Categoria.Laticinios, quantidade: 2, unidade: 'un' },
    { nome: 'Leite condensado', categoria: categoria_1.Categoria.Laticinios, quantidade: 2, unidade: 'un' },
    { nome: 'Iogurte natural', categoria: categoria_1.Categoria.Laticinios, quantidade: 4, unidade: 'un' },
    { nome: 'Iogurte grego', categoria: categoria_1.Categoria.Laticinios, quantidade: 2, unidade: 'un' },
    // ── Bebidas ──────────────────────────────────────────
    { nome: 'Água mineral 5L', categoria: categoria_1.Categoria.Bebidas, quantidade: 2, unidade: 'un' },
    { nome: 'Água mineral 500ml', categoria: categoria_1.Categoria.Bebidas, quantidade: 6, unidade: 'un' },
    { nome: 'Suco de laranja', categoria: categoria_1.Categoria.Bebidas, quantidade: 1, unidade: 'L' },
    { nome: 'Refrigerante cola', categoria: categoria_1.Categoria.Bebidas, quantidade: 2, unidade: 'L' },
    { nome: 'Refrigerante limão', categoria: categoria_1.Categoria.Bebidas, quantidade: 2, unidade: 'L' },
    { nome: 'Cerveja', categoria: categoria_1.Categoria.Bebidas, quantidade: 1, unidade: 'cx' },
    { nome: 'Vinho tinto', categoria: categoria_1.Categoria.Bebidas, quantidade: 1, unidade: 'un' },
    { nome: 'Chá em saquinhos', categoria: categoria_1.Categoria.Bebidas, quantidade: 1, unidade: 'cx' },
    { nome: 'Achocolatado', categoria: categoria_1.Categoria.Bebidas, quantidade: 1, unidade: 'L' },
    // ── Padaria ──────────────────────────────────────────
    { nome: 'Pão de forma', categoria: categoria_1.Categoria.Padaria, quantidade: 1, unidade: 'un' },
    { nome: 'Pão francês', categoria: categoria_1.Categoria.Padaria, quantidade: 10, unidade: 'un' },
    { nome: 'Pão de hot dog', categoria: categoria_1.Categoria.Padaria, quantidade: 1, unidade: 'pct' },
    { nome: 'Pão de hamburguer', categoria: categoria_1.Categoria.Padaria, quantidade: 1, unidade: 'pct' },
    { nome: 'Tapioca', categoria: categoria_1.Categoria.Padaria, quantidade: 500, unidade: 'g' },
    { nome: 'Granola', categoria: categoria_1.Categoria.Padaria, quantidade: 500, unidade: 'g' },
    // ── Higiene Pessoal ──────────────────────────────────
    { nome: 'Papel higiênico', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'pct' },
    { nome: 'Sabonete', categoria: categoria_1.Categoria.Higiene, quantidade: 4, unidade: 'un' },
    { nome: 'Shampoo', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'un' },
    { nome: 'Condicionador', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'un' },
    { nome: 'Creme dental', categoria: categoria_1.Categoria.Higiene, quantidade: 2, unidade: 'un' },
    { nome: 'Escova de dente', categoria: categoria_1.Categoria.Higiene, quantidade: 2, unidade: 'un' },
    { nome: 'Fio dental', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'un' },
    { nome: 'Desodorante', categoria: categoria_1.Categoria.Higiene, quantidade: 2, unidade: 'un' },
    { nome: 'Absorvente', categoria: categoria_1.Categoria.Higiene, quantidade: 2, unidade: 'pct' },
    { nome: 'Aparelho de barbear', categoria: categoria_1.Categoria.Higiene, quantidade: 2, unidade: 'un' },
    { nome: 'Creme de barbear', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'un' },
    { nome: 'Algodão', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'pct' },
    { nome: 'Cotonete', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'cx' },
    { nome: 'Hidratante corporal', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'un' },
    { nome: 'Protetor solar', categoria: categoria_1.Categoria.Higiene, quantidade: 1, unidade: 'un' },
    // ── Limpeza ──────────────────────────────────────────
    { nome: 'Detergente', categoria: categoria_1.Categoria.Limpeza, quantidade: 3, unidade: 'un' },
    { nome: 'Esponja de lavar', categoria: categoria_1.Categoria.Limpeza, quantidade: 4, unidade: 'un' },
    { nome: 'Sabão em pó', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'kg' },
    { nome: 'Amaciante', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'L' },
    { nome: 'Água sanitária', categoria: categoria_1.Categoria.Limpeza, quantidade: 2, unidade: 'L' },
    { nome: 'Desinfetante', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'L' },
    { nome: 'Multiuso spray', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'un' },
    { nome: 'Limpa vidros', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'un' },
    { nome: 'Pano de prato', categoria: categoria_1.Categoria.Limpeza, quantidade: 2, unidade: 'un' },
    { nome: 'Saco de lixo 30L', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'pct' },
    { nome: 'Saco de lixo 60L', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'pct' },
    { nome: 'Papel toalha', categoria: categoria_1.Categoria.Limpeza, quantidade: 2, unidade: 'un' },
    { nome: 'Luva de borracha', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'un' },
    { nome: 'Desentupidor', categoria: categoria_1.Categoria.Limpeza, quantidade: 1, unidade: 'un' },
];
// Retorna sugestões filtradas por texto de busca
function buscarSugestoes(texto) {
    if (texto.length < 2)
        return [];
    const lower = texto.toLowerCase();
    return exports.ITENS_SUGERIDOS
        .filter(item => item.nome.toLowerCase().includes(lower))
        .slice(0, 6); // máximo 6 sugestões
}
// Retorna todos os nomes para busca rápida
function todosOsNomes() {
    return exports.ITENS_SUGERIDOS.map(i => i.nome);
}
