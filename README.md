# Renovação Brasil 2030

> 🇧🇷 Português · [🇺🇸 English](#english)

---

<a id="portugues"></a>
## 🇧🇷 Português

### O que é isso?

Um portal de tela única onde você monta a sua análise do próximo ciclo da Seleção Brasileira rumo à Copa do Mundo de 2030. A base de jogadores foi montada a partir da pré-lista de 2026, incluindo atletas cortados por lesão e jovens promessas.

A ideia é simples: clique nos jogadores que você acha que o **ciclo terminou** — a foto fica em escala de cinza com "FIM DE CICLO" por cima. Clique de novo para incluí-los de volta. No final, gere e compartilhe a imagem da sua seleção direto no WhatsApp com os amigos.

### Stack

| Tecnologia | Uso |
|---|---|
| React 19 + Vite 8 | Base da aplicação |
| TypeScript 6 | Tipagem estática |
| CSS Modules | Estilização por componente |
| html-to-image | Geração da imagem de compartilhamento |
| Vitest + Testing Library | Testes unitários e de componente |

### Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Comandos disponíveis

```bash
npm run dev       # servidor de desenvolvimento com HMR
npm run build     # build de produção (tsc + vite build)
npm run preview   # preview do build de produção
npm test          # roda os testes uma vez
npm run test:watch # testes em modo watch
npm run lint      # linting com Oxlint
```

### Estrutura do projeto

```
src/
├── types/
│   └── player.ts              # modelo Player e PlayerPosition
├── utils/
│   ├── calculateAgeAtDate.ts  # calcula idade por data de referência
│   ├── slugify.ts             # geração de IDs
│   └── shareImage.ts          # captura e compartilhamento da imagem
├── data/
│   └── players.seed.ts        # ~64 jogadores com birthDate ISO
├── components/
│   ├── Header.tsx             # cabeçalho fixo com botão de compartilhamento
│   ├── PlayerCard.tsx         # card clicável por jogador
│   ├── PlayerGrid.tsx         # grid agrupado por posição
│   └── ShareCard.tsx          # layout da imagem compartilhável (oculto no DOM)
└── styles/
    └── global.css             # reset e variáveis globais
```

### Decisões técnicas

- **Idades calculadas, nunca fixas** — `birthDate` é armazenado no seed em formato ISO (`yyyy-mm-dd`); as idades (atual em 2026 e na Copa 2030) são calculadas por `calculateAgeAtDate()` no render.
- **Compartilhamento** — usa a [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) quando disponível (mobile/WhatsApp). Em browsers sem suporte, faz download direto do PNG.
- **Imagem de compartilhamento** — em vez de capturar a tela, o `ShareCard` é um componente separado com inline styles, renderizado off-screen (`position: fixed; left: -9999px`) e capturado em 800px de largura — ideal para WhatsApp.
- **IDs únicos por jogador** — gerados via `slugify(name + club)`, o que permite diferenciar jogadores com o mesmo nome em clubes diferentes (ex: Danilo do Flamengo ≠ Danilo do Botafogo).

### Testes

```bash
npm test
```

Cobre:
- `calculateAgeAtDate` — casos antes/depois do aniversário, ano bissexto
- `PlayerCard` — toggle de estado, classes CSS, acessibilidade (`aria-pressed`)
- `players.seed` — sem IDs duplicados, formato de `birthDate`, tratamento de homônimos
- `shareImage` — fallback de download e chamada da Web Share API

---

<a id="english"></a>
## 🇺🇸 English

[🇧🇷 Português](#portugues) · English

### What is this?

A single-page portal where you build your own analysis of the next Brazilian national team cycle ahead of the 2030 World Cup. The player pool is based on the 2026 pre-list, including players who were cut due to injury and young prospects.

The idea is straightforward: click on any player you think has **reached the end of their cycle** — their photo goes grayscale with "FIM DE CICLO" (end of cycle) overlaid. Click again to bring them back. When you're done, generate and share the image straight to WhatsApp.

### Stack

| Technology | Purpose |
|---|---|
| React 19 + Vite 8 | App foundation |
| TypeScript 6 | Static typing |
| CSS Modules | Component-scoped styles |
| html-to-image | Share image generation |
| Vitest + Testing Library | Unit and component tests |

### Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available scripts

```bash
npm run dev        # dev server with HMR
npm run build      # production build (tsc + vite build)
npm run preview    # preview the production build
npm test           # run tests once
npm run test:watch # tests in watch mode
npm run lint       # lint with Oxlint
```

### Project structure

```
src/
├── types/
│   └── player.ts              # Player model and PlayerPosition type
├── utils/
│   ├── calculateAgeAtDate.ts  # age calculation by reference date
│   ├── slugify.ts             # ID generation
│   └── shareImage.ts          # image capture and sharing
├── data/
│   └── players.seed.ts        # ~64 players with ISO birthDate
├── components/
│   ├── Header.tsx             # sticky header with share button
│   ├── PlayerCard.tsx         # clickable player card
│   ├── PlayerGrid.tsx         # grid grouped by position
│   └── ShareCard.tsx          # shareable image layout (hidden in DOM)
└── styles/
    └── global.css             # reset and global variables
```

### Technical decisions

- **Ages are calculated, never hardcoded** — `birthDate` is stored in the seed as ISO format (`yyyy-mm-dd`); ages (current in 2026 and at the 2030 World Cup) are computed by `calculateAgeAtDate()` at render time.
- **Sharing** — uses the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) when available (mobile/WhatsApp). Falls back to a direct PNG download on unsupported browsers.
- **Share image** — instead of screenshotting the page, `ShareCard` is a separate component with inline styles, rendered off-screen (`position: fixed; left: -9999px`) and captured at 800px width — perfect for WhatsApp.
- **Unique player IDs** — generated via `slugify(name + club)`, allowing players with the same name at different clubs to coexist (e.g. Danilo at Flamengo ≠ Danilo at Botafogo).

### Tests

```bash
npm test
```

Covers:
- `calculateAgeAtDate` — before/after birthday edge cases, leap years
- `PlayerCard` — state toggle, CSS classes, accessibility (`aria-pressed`)
- `players.seed` — no duplicate IDs, `birthDate` format, same-name player handling
- `shareImage` — download fallback and Web Share API invocation

