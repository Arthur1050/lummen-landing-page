# AGENTS.md

Guia operacional para agentes e desenvolvedores que trabalharem nesta landing page da Lummen Imóveis.

## Objetivo do Projeto

Construir uma landing page moderna, responsiva e comercialmente forte para a Lummen Imóveis, mantendo fidelidade ao design system informado, ao conteúdo do site oficial e aos assets reais da marca.

## Documentação Mapeada

- `docs/lummen-site-map.md`: mapeamento do site oficial, páginas, navegação, contatos, assets e conteúdos reaproveitados.
- `docs/design-system.md`: tokens de tipografia, cores, logo, imagens e UX writing aplicados ao projeto.
- `docs/landing-architecture.md`: estrutura da landing, componentes, dados, animações e decisões técnicas.

Leia estes documentos antes de alterar visual, copy, tokens ou arquitetura da página.

## Stack e Comandos

- Vite + React + TypeScript.
- Tailwind CSS v4.
- shadcn/radix-nova com componentes em `src/components/ui`.
- Ícones via `lucide-react`.
- Fontes via `@fontsource-variable/urbanist` e `@fontsource/lato`.

Comandos principais:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

## Regras de Implementação

- Preserve a identidade Lummen: verde escuro, verde base, acentos âmbar, fundos claros e tipografia Urbanist/Lato.
- Use `src/data/lummen.ts` como fonte local para conteúdo estruturado da marca, links, imóveis, equipe e serviços.
- Evite copy inventada que pareça depoimento, métrica pública ou promessa comercial não comprovada.
- Links externos devem apontar para o site oficial quando a ação depende do sistema imobiliário atual.
- Componentes shadcn devem continuar em `src/components/ui`; componentes de landing podem ficar em `src/App.tsx` ou ser extraídos se crescerem.
- Cards devem manter raio de borda de até `8px`, salvo necessidade explícita do design system.
- Não remova assets ou links reais sem revisar `docs/lummen-site-map.md`.

## Design e UX

- A primeira dobra deve sinalizar claramente a marca Lummen Imóveis.
- Use imagens reais do site oficial sempre que possível.
- Mantenha o tom acolhedor, claro e educativo.
- CTAs principais: encontrar imóveis, falar pelo WhatsApp, cadastrar imóvel, encomendar imóvel.
- Não use urgência artificial ou pressão de compra.
- A landing deve funcionar bem em mobile, tablet e desktop.

## Validação

Antes de finalizar mudanças relevantes:

1. Rode `pnpm build`.
2. Rode `pnpm lint` quando a alteração tocar TS/React.
3. Revise visualmente a home em desktop e mobile.
4. Confirme que links de CTA continuam apontando para URLs reais.

## Fontes Oficiais Consultadas

- Site oficial: https://lummenimoveis.com.br/
- Sitemap oficial: https://lummenimoveis.com.br/sitemap.xml
- Páginas internas: `/empresa`, `/servicos`, `/contato`, `/financiamento`, `/fichas-cadastrais`, `/cadastre-seu-imovel`, `/encomende-seu-imovel`, `/trabalhe-conosco`.
