import { Categoria } from '../enums/categoria';
import { ItemSugerido } from '../types/item';

// Banco de itens essenciais do mercado organizado por categoria
export const ITENS_SUGERIDOS: ItemSugerido[] = [
  // ── Grãos e Cereais ──────────────────────────────────
  { nome: 'Arroz',              categoria: Categoria.Graos,      quantidade: 5,   unidade: 'kg'  },
  { nome: 'Feijão carioca',     categoria: Categoria.Graos,      quantidade: 1,   unidade: 'kg'  },
  { nome: 'Feijão preto',       categoria: Categoria.Graos,      quantidade: 1,   unidade: 'kg'  },
  { nome: 'Macarrão espaguete', categoria: Categoria.Graos,      quantidade: 2,   unidade: 'pct' },
  { nome: 'Macarrão parafuso',  categoria: Categoria.Graos,      quantidade: 1,   unidade: 'pct' },
  { nome: 'Farinha de trigo',   categoria: Categoria.Graos,      quantidade: 1,   unidade: 'kg'  },
  { nome: 'Farinha de mandioca',categoria: Categoria.Graos,      quantidade: 1,   unidade: 'kg'  },
  { nome: 'Aveia em flocos',    categoria: Categoria.Graos,      quantidade: 1,   unidade: 'pct' },
  { nome: 'Lentilha',           categoria: Categoria.Graos,      quantidade: 500, unidade: 'g'   },
  { nome: 'Grão-de-bico',       categoria: Categoria.Graos,      quantidade: 500, unidade: 'g'   },
  { nome: 'Milho de canjica',   categoria: Categoria.Graos,      quantidade: 500, unidade: 'g'   },
  { nome: 'Açúcar refinado',    categoria: Categoria.Graos,      quantidade: 2,   unidade: 'kg'  },
  { nome: 'Açúcar mascavo',     categoria: Categoria.Graos,      quantidade: 500, unidade: 'g'   },
  { nome: 'Sal refinado',       categoria: Categoria.Graos,      quantidade: 1,   unidade: 'kg'  },
  { nome: 'Café moído',         categoria: Categoria.Graos,      quantidade: 500, unidade: 'g'   },
  { nome: 'Óleo de soja',       categoria: Categoria.Graos,      quantidade: 2,   unidade: 'L'   },
  { nome: 'Azeite de oliva',    categoria: Categoria.Graos,      quantidade: 500, unidade: 'ml'  },
  { nome: 'Vinagre',            categoria: Categoria.Graos,      quantidade: 750, unidade: 'ml'  },
  { nome: 'Molho de tomate',    categoria: Categoria.Graos,      quantidade: 3,   unidade: 'un'  },
  { nome: 'Extrato de tomate',  categoria: Categoria.Graos,      quantidade: 2,   unidade: 'un'  },
  { nome: 'Shoyu',              categoria: Categoria.Graos,      quantidade: 1,   unidade: 'un'  },
  { nome: 'Caldo de carne',     categoria: Categoria.Graos,      quantidade: 1,   unidade: 'cx'  },
  { nome: 'Caldo de galinha',   categoria: Categoria.Graos,      quantidade: 1,   unidade: 'cx'  },
  { nome: 'Fermento em pó',     categoria: Categoria.Graos,      quantidade: 1,   unidade: 'un'  },
  { nome: 'Amido de milho',     categoria: Categoria.Graos,      quantidade: 500, unidade: 'g'   },
  { nome: 'Fubá',               categoria: Categoria.Graos,      quantidade: 1,   unidade: 'kg'  },
  { nome: 'Biscoito cream cracker',categoria: Categoria.Graos,   quantidade: 2,   unidade: 'pct' },
  { nome: 'Biscoito maisena',   categoria: Categoria.Graos,      quantidade: 1,   unidade: 'pct' },

  // ── Hortifrúti ───────────────────────────────────────
  { nome: 'Banana',             categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'kg'  },
  { nome: 'Maçã',               categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'kg'  },
  { nome: 'Laranja',            categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'kg'  },
  { nome: 'Mamão',              categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'un'  },
  { nome: 'Uva',                categoria: Categoria.Hortifruti, quantidade: 500, unidade: 'g'   },
  { nome: 'Limão',              categoria: Categoria.Hortifruti, quantidade: 6,   unidade: 'un'  },
  { nome: 'Tomate',             categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'kg'  },
  { nome: 'Cebola',             categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'kg'  },
  { nome: 'Alho',               categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'un'  },
  { nome: 'Batata',             categoria: Categoria.Hortifruti, quantidade: 2,   unidade: 'kg'  },
  { nome: 'Cenoura',            categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'kg'  },
  { nome: 'Alface',             categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'un'  },
  { nome: 'Couve',              categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'un'  },
  { nome: 'Brócolis',           categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'un'  },
  { nome: 'Abobrinha',          categoria: Categoria.Hortifruti, quantidade: 2,   unidade: 'un'  },
  { nome: 'Berinjela',          categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'un'  },
  { nome: 'Pimentão',           categoria: Categoria.Hortifruti, quantidade: 2,   unidade: 'un'  },
  { nome: 'Pepino',             categoria: Categoria.Hortifruti, quantidade: 2,   unidade: 'un'  },
  { nome: 'Beterraba',          categoria: Categoria.Hortifruti, quantidade: 500, unidade: 'g'   },
  { nome: 'Batata-doce',        categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'kg'  },
  { nome: 'Mandioca',           categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'kg'  },
  { nome: 'Milho verde',        categoria: Categoria.Hortifruti, quantidade: 2,   unidade: 'un'  },
  { nome: 'Espinafre',          categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'un'  },
  { nome: 'Cheiro-verde',       categoria: Categoria.Hortifruti, quantidade: 1,   unidade: 'un'  },

  // ── Carnes e Frios ───────────────────────────────────
  { nome: 'Frango inteiro',     categoria: Categoria.Carnes,     quantidade: 2,   unidade: 'kg'  },
  { nome: 'Peito de frango',    categoria: Categoria.Carnes,     quantidade: 1,   unidade: 'kg'  },
  { nome: 'Coxinha da asa',     categoria: Categoria.Carnes,     quantidade: 1,   unidade: 'kg'  },
  { nome: 'Carne moída',        categoria: Categoria.Carnes,     quantidade: 500, unidade: 'g'   },
  { nome: 'Acém',               categoria: Categoria.Carnes,     quantidade: 1,   unidade: 'kg'  },
  { nome: 'Costela bovina',     categoria: Categoria.Carnes,     quantidade: 1,   unidade: 'kg'  },
  { nome: 'Filé de tilápia',    categoria: Categoria.Carnes,     quantidade: 500, unidade: 'g'   },
  { nome: 'Atum em lata',       categoria: Categoria.Carnes,     quantidade: 3,   unidade: 'un'  },
  { nome: 'Sardinha em lata',   categoria: Categoria.Carnes,     quantidade: 2,   unidade: 'un'  },
  { nome: 'Salsicha',           categoria: Categoria.Carnes,     quantidade: 500, unidade: 'g'   },
  { nome: 'Linguiça calabresa', categoria: Categoria.Carnes,     quantidade: 500, unidade: 'g'   },
  { nome: 'Presunto fatiado',   categoria: Categoria.Carnes,     quantidade: 200, unidade: 'g'   },
  { nome: 'Peito de peru',      categoria: Categoria.Carnes,     quantidade: 200, unidade: 'g'   },
  { nome: 'Bacon',              categoria: Categoria.Carnes,     quantidade: 200, unidade: 'g'   },
  { nome: 'Ovos',               categoria: Categoria.Carnes,     quantidade: 1,   unidade: 'dz'  },

  // ── Laticínios ───────────────────────────────────────
  { nome: 'Leite integral',     categoria: Categoria.Laticinios, quantidade: 6,   unidade: 'L'   },
  { nome: 'Leite desnatado',    categoria: Categoria.Laticinios, quantidade: 2,   unidade: 'L'   },
  { nome: 'Manteiga',           categoria: Categoria.Laticinios, quantidade: 1,   unidade: 'un'  },
  { nome: 'Margarina',          categoria: Categoria.Laticinios, quantidade: 1,   unidade: 'un'  },
  { nome: 'Queijo mussarela',   categoria: Categoria.Laticinios, quantidade: 300, unidade: 'g'   },
  { nome: 'Queijo prato',       categoria: Categoria.Laticinios, quantidade: 300, unidade: 'g'   },
  { nome: 'Requeijão',          categoria: Categoria.Laticinios, quantidade: 1,   unidade: 'un'  },
  { nome: 'Creme de leite',     categoria: Categoria.Laticinios, quantidade: 2,   unidade: 'un'  },
  { nome: 'Leite condensado',   categoria: Categoria.Laticinios, quantidade: 2,   unidade: 'un'  },
  { nome: 'Iogurte natural',    categoria: Categoria.Laticinios, quantidade: 4,   unidade: 'un'  },
  { nome: 'Iogurte grego',      categoria: Categoria.Laticinios, quantidade: 2,   unidade: 'un'  },

  // ── Bebidas ──────────────────────────────────────────
  { nome: 'Água mineral 5L',    categoria: Categoria.Bebidas,    quantidade: 2,   unidade: 'un'  },
  { nome: 'Água mineral 500ml', categoria: Categoria.Bebidas,    quantidade: 6,   unidade: 'un'  },
  { nome: 'Suco de laranja',    categoria: Categoria.Bebidas,    quantidade: 1,   unidade: 'L'   },
  { nome: 'Refrigerante cola',  categoria: Categoria.Bebidas,    quantidade: 2,   unidade: 'L'   },
  { nome: 'Refrigerante limão', categoria: Categoria.Bebidas,    quantidade: 2,   unidade: 'L'   },
  { nome: 'Cerveja',            categoria: Categoria.Bebidas,    quantidade: 1,   unidade: 'cx'  },
  { nome: 'Vinho tinto',        categoria: Categoria.Bebidas,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Chá em saquinhos',   categoria: Categoria.Bebidas,    quantidade: 1,   unidade: 'cx'  },
  { nome: 'Achocolatado',       categoria: Categoria.Bebidas,    quantidade: 1,   unidade: 'L'   },

  // ── Padaria ──────────────────────────────────────────
  { nome: 'Pão de forma',       categoria: Categoria.Padaria,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Pão francês',        categoria: Categoria.Padaria,    quantidade: 10,  unidade: 'un'  },
  { nome: 'Pão de hot dog',     categoria: Categoria.Padaria,    quantidade: 1,   unidade: 'pct' },
  { nome: 'Pão de hamburguer',  categoria: Categoria.Padaria,    quantidade: 1,   unidade: 'pct' },
  { nome: 'Tapioca',            categoria: Categoria.Padaria,    quantidade: 500, unidade: 'g'   },
  { nome: 'Granola',            categoria: Categoria.Padaria,    quantidade: 500, unidade: 'g'   },

  // ── Higiene Pessoal ──────────────────────────────────
  { nome: 'Papel higiênico',    categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'pct' },
  { nome: 'Sabonete',           categoria: Categoria.Higiene,    quantidade: 4,   unidade: 'un'  },
  { nome: 'Shampoo',            categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Condicionador',      categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Creme dental',       categoria: Categoria.Higiene,    quantidade: 2,   unidade: 'un'  },
  { nome: 'Escova de dente',    categoria: Categoria.Higiene,    quantidade: 2,   unidade: 'un'  },
  { nome: 'Fio dental',         categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Desodorante',        categoria: Categoria.Higiene,    quantidade: 2,   unidade: 'un'  },
  { nome: 'Absorvente',         categoria: Categoria.Higiene,    quantidade: 2,   unidade: 'pct' },
  { nome: 'Aparelho de barbear',categoria: Categoria.Higiene,    quantidade: 2,   unidade: 'un'  },
  { nome: 'Creme de barbear',   categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Algodão',            categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'pct' },
  { nome: 'Cotonete',           categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'cx'  },
  { nome: 'Hidratante corporal',categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Protetor solar',     categoria: Categoria.Higiene,    quantidade: 1,   unidade: 'un'  },

  // ── Limpeza ──────────────────────────────────────────
  { nome: 'Detergente',         categoria: Categoria.Limpeza,    quantidade: 3,   unidade: 'un'  },
  { nome: 'Esponja de lavar',   categoria: Categoria.Limpeza,    quantidade: 4,   unidade: 'un'  },
  { nome: 'Sabão em pó',        categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'kg'  },
  { nome: 'Amaciante',          categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'L'   },
  { nome: 'Água sanitária',     categoria: Categoria.Limpeza,    quantidade: 2,   unidade: 'L'   },
  { nome: 'Desinfetante',       categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'L'   },
  { nome: 'Multiuso spray',     categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Limpa vidros',       categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Pano de prato',      categoria: Categoria.Limpeza,    quantidade: 2,   unidade: 'un'  },
  { nome: 'Saco de lixo 30L',   categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'pct' },
  { nome: 'Saco de lixo 60L',   categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'pct' },
  { nome: 'Papel toalha',       categoria: Categoria.Limpeza,    quantidade: 2,   unidade: 'un'  },
  { nome: 'Luva de borracha',   categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'un'  },
  { nome: 'Desentupidor',       categoria: Categoria.Limpeza,    quantidade: 1,   unidade: 'un'  },
];

// Retorna sugestões filtradas por texto de busca
export function buscarSugestoes(texto: string): ItemSugerido[] {
  if (texto.length < 2) return [];
  const lower = texto.toLowerCase();
  return ITENS_SUGERIDOS
    .filter(item => item.nome.toLowerCase().includes(lower))
    .slice(0, 6); // máximo 6 sugestões
}

// Retorna todos os nomes para busca rápida
export function todosOsNomes(): string[] {
  return ITENS_SUGERIDOS.map(i => i.nome);
}