# Arquitetura da Landing

## Arquivos Principais

- `src/App.tsx`: estrutura completa da landing e componentes de seção.
- `src/data/lummen.ts`: dados estruturados extraídos do site oficial.
- `src/index.css`: Tailwind, tokens, fontes e animações.
- `src/components/ui/*`: componentes shadcn/radix-nova.
- `index.html`: metadados SEO, idioma e favicon da marca.

## Seções

1. Header fixo
   - Logo oficial.
   - Navegação por âncoras.
   - CTA para imóveis e WhatsApp.
   - Menu mobile.

2. Hero
   - Imagem real de banner.
   - H1 com `Lummen Imóveis`.
   - Slogan oficial.
   - CTAs para comprar e falar com equipe.
   - Estatísticas qualitativas: CRECI, atuação, categorias e contato direto.

3. Busca rápida
   - Inputs e selects shadcn.
   - Direciona para o sistema atual de imóveis.
   - Ações rápidas: comprar, alugar, condomínios e código.

4. Barra de confiança
   - Segurança documental.
   - Atendimento humanizado.
   - Conhecimento jurídico.
   - Compra, venda e locação.

5. Imóveis em destaque
   - Cards com imóveis reais da vitrine atual.
   - Links para as páginas oficiais.
   - Imagens, preços, localização e specs.

6. Serviços
   - Comprar, alugar, cadastrar imóvel, encomendar imóvel, financiamento e fichas cadastrais.
   - Cards com ícones Lucide e CTA.

7. Processo
   - Jornada em quatro passos.
   - Traduz o diferencial jurídico/documental em experiência simples.

8. Sobre
   - Texto institucional baseado na página `/empresa`.
   - Imagem real institucional.
   - Destaques de atuação.

9. Categorias
   - Residenciais, rurais e imóveis que aceitam financiamento.
   - Imagens oficiais de categoria.

10. Equipe
   - Corretores reais com fotos e CRECI quando disponível.
   - Links para as páginas de imóveis por corretor.

11. Missão, visão e valores
   - Textos extraídos da home atual.

12. FAQ
   - Perguntas derivadas do conteúdo oficial e das páginas internas.

13. Contato
   - Telefones, e-mail, WhatsApp, cadastro e encomenda de imóvel.

14. Footer
   - Logo com área de respiro em fundo escuro.
   - Links úteis e redes sociais.

## Dados

`src/data/lummen.ts` centraliza:

- URLs base.
- Marca, logo, contatos e redes.
- Navegação.
- Busca rápida.
- Imóveis em destaque.
- Serviços.
- Categorias.
- Equipe.
- Valores.
- Processo.
- FAQ.

Ao atualizar dados, prefira alterar este arquivo antes de mexer nos componentes.

## Animações

Fluxo:

1. Elementos com `data-reveal` começam ocultos.
2. O `IntersectionObserver` em `App.tsx` adiciona `is-visible`.
3. `src/index.css` faz transição de opacidade e deslocamento.

Classes especiais:

- `.animate-rise`
- `.hero-compass`
- `.property-card`
- `.service-card`
- `.process-step`
- `.category-card`
- `.team-card`
- `.value-card`
- `.contact-grid`

## Responsividade

Breakpoints tratados:

- Desktop: grid amplo, hero em duas colunas, equipe em quatro colunas.
- Tablet: cards em duas colunas.
- Mobile: menu colapsável, seções em uma coluna, equipe compacta com imagem lateral.

Pontos de atenção:

- Texto de cards deve quebrar corretamente.
- Inputs da busca viram grid vertical em telas menores.
- CTA flutuante de WhatsApp permanece acessível.

## Validação Atual

Build aprovado:

```bash
pnpm build
```

Observação:

- `tsconfig.app.json` e `tsconfig.json` usam `ignoreDeprecations: "6.0"` para silenciar a depreciação de `baseUrl` no TypeScript 6.
