# Design System Aplicado

Baseado na documentação fornecida e nos tokens observados no site oficial.

## Tipografia

Arquivos:

- `src/index.css`
- `package.json`

Fontes aplicadas:

- Títulos e destaques: Urbanist via `@fontsource-variable/urbanist`.
- Texto corrido e interfaces: Lato via `@fontsource/lato`.

Tokens:

- `--font-heading`: Urbanist Variable.
- `--font-sans`: Lato.

Uso recomendado:

- Use `font-heading` para H1, H2, títulos de cards, labels expressivos e números.
- Use `font-sans` para parágrafos, inputs, botões e conteúdo informativo.
- Para hierarquia forte, combine Lato regular com Lato 900 ou Urbanist black.

## Cores

Tokens principais aplicados em `:root`:

- `--primary`: `#2B4A37`
- `--primary-foreground`: `#FFFFFF`
- `--accent`: `#FFC300`
- `--accent-foreground`: `#1A1D20`
- `--background`: `#F7F7F7`
- `--foreground`: `#2B3036`
- `--muted-foreground`: `#55595E`
- `--ring`: `#2F9055`

Tokens de marca adicionados ao tema:

- `--color-lummen-sea`: `#2F9055`
- `--color-lummen-stromboli`: `#2B4A37`
- `--color-lummen-forest`: `#1C5633`
- `--color-lummen-night`: `#1A2C21`
- `--color-lummen-mint`: `#60FD9D`
- `--color-lummen-amber`: `#FFC300`
- `--color-lummen-orange`: `#EE9F00`
- `--color-lummen-alabaster`: `#F7F7F7`
- `--color-lummen-shark`: `#2B3036`

Regra 60-30-10:

- 60%: fundos claros, branco e Alabaster.
- 30%: verde escuro, texto e blocos institucionais.
- 10%: âmbar em CTAs, badges, detalhes e destaques.

## Componentes

Componentes shadcn disponíveis:

- `Button`
- `Card`
- `Badge`
- `Input`
- `Select`
- `Textarea`
- `Separator`
- `Accordion`

Regras:

- Cards da landing devem usar `rounded-[8px]`.
- Botões primários usam `bg-primary` ou `bg-accent` conforme hierarquia.
- CTAs comerciais de maior peso usam âmbar.
- Controles de formulário seguem altura mínima de `h-12` em blocos de busca.

## Logo

Fonte:

- `https://cdn2.uso.com.br/sites/logos/924447.png`

Aplicação:

- Em fundo claro: use o logo direto.
- Em fundo escuro: coloque o logo dentro de uma área branca com respiro quando a versão invertida não estiver disponível.
- Não aplicar sombra, distorção, rotação, gradiente ou alteração de proporção no logo.

## Imagens

Direção visual:

- Usar imagens reais do site oficial.
- Priorizar casas, categorias e equipe quando a seção precisar de material visual.
- Evitar fotos genéricas de banco de imagens.
- Manter overlays escuros quando houver texto sobre imagem.

## Movimento

Animações atuais:

- `IntersectionObserver` em `src/App.tsx` adiciona `is-visible` aos elementos com `data-reveal`.
- CSS em `src/index.css` controla fade/slide suave.
- Hero usa `rise-in`.
- Elementos interativos usam hover com elevação sutil.
- O anel visual da hero usa rotação lenta.

Regras:

- Animação deve comunicar sofisticação e fluidez, sem distrair do CTA.
- Respeitar `prefers-reduced-motion`.
- Evitar efeitos que dificultem leitura, clique ou responsividade.

## UX Writing

Tom aplicado:

- Empático: fala de sonho, momento de vida e acompanhamento.
- Claro: troca jargão jurídico por segurança documental e documentação clara.
- Motivacional: reforça que a casa própria não é distante.

Evitar:

- Urgência artificial.
- Métricas sem fonte.
- Depoimentos inventados.
- Termos jurídicos complexos em texto de interface.
