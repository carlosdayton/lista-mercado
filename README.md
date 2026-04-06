<div align="center">

# 🛒 Lista do Mercado

**Uma lista de compras pessoal, rápida e inteligente — que funciona offline e vive no seu celular.**

[![Deploy](https://img.shields.io/badge/Vercel-Deploy-black?style=flat-square&logo=vercel)](https://checklist-market.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![PWA](https://img.shields.io/badge/PWA-Instalável-5a0fc8?style=flat-square&logo=pwa)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)](LICENSE)

[**→ Abrir o app**](https://checklist-market.vercel.app/)

> **Nota de Arquitetura:** Você está na branch `main` (Versão Open-Source Puramente Offline e sem Login, rodando dados locais via LocalStorage). Para a versão "Premium" integrada com nuvem e login no Supabase, navegue para a branch `premium`.

</div>

---

## ✨ Funcionalidades

### 🧾 Gestão da Lista
- **Adicionar itens** com nome, categoria, quantidade e unidade
- **Autocomplete inteligente** — sugestões de mais de 200 itens comuns com categoria automática
- **Organização por categoria** — Grãos, Hortifrúti, Carnes, Laticínios, Bebidas, Padaria, Higiene, Limpeza e Outros
- **Marcar como comprado** — itens comprados vão para o final da categoria com risco no nome
- **Pendentes primeiro** — itens não comprados sempre aparecem no topo
- **Barra de progresso** — visualize o andamento das compras em tempo real
- **Contador na aba** — `(3) Lista do Mercado` para ver itens pendentes sem abrir a aba

### 📒 Detalhes por Item
- **Preço inline** — clique direto no item na lista para informar o preço unit. (sem abrir formulário)
- **Ticket estimado** — total estimado da compra calculado automaticamente
- **Notas** — adicione observações como *"marca X"*, *"só se tiver promoção"*, *"2L"*

### 📋 Modelos de Lista
- **Salvar modelo** — salva a lista atual com um nome (ex: *"Lista semanal"*, *"Churrasco"*)
- **Carregar modelo** — substitui a lista atual pelos itens do modelo com 1 clique
- **Gerenciar modelos** — visualize, carregue ou exclua templates salvos

### 🛒 Modo Compras
- **View focada no mercado** — oculta formulários e controles desnecessários
- **Itens grandes** — fonte e áreas de toque maiores, ideal para segurar o celular enquanto compra
- **Saída rápida** — botão flutuante para voltar ao modo normal

### 📤 Compartilhar
- **Copiar como texto** — gera a lista formatada por categoria (com preços e notas) e copia para o clipboard
- Pronto para colar no WhatsApp, Telegram ou e-mail

### 💾 Dados Seguros
- **Tudo local** — dados salvos no `localStorage` do navegador, sem login, sem servidor
- **Validação ao carregar** — dados corrompidos são descartados silenciosamente
- **Modal de confirmação** — confirmação estilizada antes de limpar a lista

---

## 📱 Instalando no celular (PWA)

O app é um **Progressive Web App** — pode ser instalado direto no celular como um app nativo:

1. Acesse [lista-mercado.vercel.app](https://lista-mercado.vercel.app) no **Chrome** (Android) ou **Safari** (iOS)
2. **Android:** toque no menu ⋮ → *"Instalar app"* ou *"Adicionar à tela inicial"*
3. **iOS:** toque em ![share](https://img.shields.io/badge/□↑-share-lightgrey?style=flat-square) → *"Adicionar à Tela de Início"*
4. Pronto! O app abre standalone, sem barra do browser, e **funciona offline**

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Linguagem | TypeScript 5 |
| Bundler | esbuild |
| Estilo | CSS puro com variáveis (dark mode) |
| Fonte | Inter (Google Fonts) |
| Armazenamento | localStorage |
| Deploy | Vercel |
| Offline | Service Worker (Cache-first) |

Zero frameworks, zero dependências de runtime. O bundle final tem ~40kb.

---

## 🗂️ Estrutura do projeto

```
lista-mercado/
├── src/
│   ├── main.ts                  # Entry point + registro do SW
│   ├── enums/
│   │   └── categoria.ts         # Enum das categorias
│   ├── types/
│   │   ├── item.ts              # Interfaces ItemLista, DadosCriacaoItem…
│   │   └── modelo.ts            # Interface ModeloLista
│   ├── data/
│   │   └── itensSugeridos.ts    # Banco de itens para autocomplete
│   ├── services/
│   │   ├── listaService.ts      # CRUD da lista (estado em memória + persist)
│   │   ├── storageService.ts    # Leitura/escrita no localStorage (com validação)
│   │   └── modelosService.ts    # CRUD de modelos de lista
│   └── ui/
│       ├── render.ts            # Funções de renderização do DOM
│       ├── eventos.ts           # Event listeners e lógica de UI
│       ├── modelos.ts           # Modais de salvar/carregar modelos
│       ├── toast.ts             # Sistema de notificações toast
│       └── modal.ts             # Modal de confirmação assíncrono
├── icons/
│   └── icon.svg                 # Ícone do PWA
├── dist/
│   └── main.js                  # Bundle gerado pelo esbuild
├── index.html                   # Página principal
├── style.css                    # Estilos (design system dark mode)
├── manifest.json                # Manifesto PWA
├── sw.js                        # Service Worker (offline)
├── vercel.json                  # Config de deploy
└── tsconfig.json
```

---

## 🚀 Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/carlosdayton/lista-mercado.git
cd lista-mercado

# Instale as dependências de dev (apenas TypeScript + esbuild)
npm install

# Compile em modo watch (recompila ao salvar)
npm run dev

# Em outro terminal, sirva o index.html com qualquer servidor HTTP
# Exemplo com o VS Code Live Server, ou:
npx serve .
```

> ⚠️ O Service Worker só ativa em **HTTPS** ou `localhost`. Abra como `http://localhost:PORT` para testar o PWA localmente.

### Scripts disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Compila em watch mode |
| `npm run build` | Build de produção |
| `npm run typecheck` | Valida TypeScript sem compilar |

---

## 🔒 Privacidade

Todos os dados ficam **exclusivamente no seu navegador** (`localStorage`). Nenhuma informação é enviada para servidores. O app funciona completamente offline após a primeira visita.

---

## 📄 Licença

MIT — sinta-se livre para usar, modificar e distribuir.

---

<div align="center">
  Feito com ☕ para facilitar as compras do dia a dia
</div>
