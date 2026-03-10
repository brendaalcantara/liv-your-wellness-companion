# LIV+

**Seu companheiro no cuidado com doenças crônicas.**

O LIV+ é um aplicativo em desenvolvimento voltado para pessoas que vivem com doenças inflamatórias e autoimunes — como espondilite anquilosante, artrite reumatoide, lúpus e outras condições crônicas. O objetivo é oferecer uma ferramenta acolhedora, acessível e gratuita para pacientes acompanharem sua saúde com mais autonomia.

> 🚧 O app está em desenvolvimento ativo. Este repositório contém o site institucional/landing page do projeto.

---

## Sobre o projeto

A maioria dos aplicativos de saúde é genérica. O LIV+ foi pensado para quem enfrenta uma rotina com dor, fadiga, rigidez e tratamentos complexos — com uma interface simples, sem jargões, e sem cobrar por isso.

**Para pacientes, o LIV+ será sempre gratuito.**

---

## Funcionalidades previstas no app

- **Diário de sintomas** — registro rápido de dor, fadiga, rigidez, humor e BASDAI
- **Calendário de saúde** — medicamentos, aplicações, exames e consultas com lembretes inteligentes
- **Gráficos e insights** — evolução da dor, adesão ao tratamento e detecção de padrões de crise
- **Relatórios médicos** — geração automática de histórico para levar às consultas
- **Modo Crise** — acesso rápido a técnicas de respiração, checklist de emergência e contatos de apoio
- **Ferramentas de autocuidado** — mini alongamentos, meditações guiadas e sugestões de rotina
- **Modo Cuidador/Familiar** — acompanhamento por pessoa de confiança, com controle total pelo paciente
- **LIV+ Pro** *(em desenvolvimento)* — dashboard clínico para profissionais de saúde, com acesso autorizado pelo paciente via QR Code

---

## Plataformas

| Plataforma | Tipo | Status |
|---|---|---|
| Android | App nativo | Em desenvolvimento |
| iPhone | PWA (via Safari) | Em desenvolvimento |

---

## Stack do site

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:8080`

---

## Deploy

O site é publicado automaticamente via GitHub Actions na branch `gh-pages` a cada push na `main`, e servido em [home.livmais.com.br](https://home.livmais.com.br).

---

## Contato

contato@livmais.com.br
