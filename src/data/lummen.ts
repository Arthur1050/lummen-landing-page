export const siteBaseUrl = "https://lummenimoveis.com.br"

export const brand = {
  name: "Lummen Imóveis",
  tagline: "Iluminando caminhos, realizando sonhos.",
  city: "Uberaba - MG",
  creci: "CRECI 9862",
  logo:
    "https://cdn2.uso.com.br/sites/logos/924447.png",
  logoFixed:
    "https://cdn2.uso.com.br/sites/logos/924447_topofixo.png",
  favicon:
    "https://cdn2.uso.com.br/sites/favicon/924447.png",
  description:
    "Compra, venda e locação de imóveis residenciais, comerciais e rurais com segurança documental, transparência e atendimento humanizado.",
  phones: [
    {
      label: "Administração",
      number: "(34) 99143-9063",
      href: "https://api.whatsapp.com/send?phone=5534991439063",
    },
    {
      label: "Jurídico",
      number: "(34) 99288-1500",
      href: "tel:34992881500",
    },
    {
      label: "Escritório",
      number: "(34) 3025-1550",
      href: "tel:3430251550",
    },
  ],
  email: "contato@lummenimoveis.com.br",
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/EduardoMatos.Imoveis",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/lummenimoveis?igsh=MWx4dm9uYTNoamVqYg==",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@lummenimoveis",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/109393685/admin/dashboard/",
    },
  ],
}

export const heroImages = {
  main:
    "https://grupo-union.s3.amazonaws.com/sites/logos/924447/bannerdesk.png",
  office:
    "https://grupo-union.s3.amazonaws.com/sites/logos/924447/img_9322-editar%20(2).jpg",
  campaign:
    "https://grupo-union.s3.amazonaws.com/sites/logos/924447/banner%20site.png",
  services: `${siteBaseUrl}/images/servicos-canto.png`,
}

export const navItems = [
  { label: "Imóveis", href: "#imoveis" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
]

export const quickSearch = [
  { label: "Comprar", href: `${siteBaseUrl}/comprar` },
  { label: "Alugar", href: `${siteBaseUrl}/alugar` },
  { label: "Condomínios", href: `${siteBaseUrl}/condominios` },
  { label: "Código", href: `${siteBaseUrl}/imoveis` },
]

export const propertyHighlights = [
  {
    title: "Casa no Estância dos Ipês",
    type: "Venda",
    price: "R$ 1.600.000",
    location: "Estância dos Ipês, Uberaba",
    image:
      "https://cdn.uso.com.br/924447/2025/12/212eb61e380d05a7aec8fe3aced9d740.jpg",
    href: `${siteBaseUrl}/comprar/mg/uberaba/estancia-dos-ipes/casa/77748826`,
    specs: ["4 quartos", "5 banheiros", "4 vagas"],
  },
  {
    title: "Casa no Margarida Rosa",
    type: "Venda",
    price: "R$ 2.000.000",
    location: "Conjunto Margarida Rosa de Azevedo",
    image:
      "https://cdn.uso.com.br/924447/2026/01/4e44fa830e824afab957c651f9961fc3.jpg",
    href: `${siteBaseUrl}/comprar-ou-alugar/mg/uberaba/conjunto-margarida-rosa-de-azevedo/casa/77906983`,
    specs: ["3 quartos", "3 banheiros", "2 vagas"],
  },
  {
    title: "Casa no Jockey Park II",
    type: "Venda",
    price: "R$ 2.200.000",
    location: "Jockey Park II, Uberaba",
    image:
      "https://cdn.uso.com.br/924447/2025/10/1bfd5e116e945247674d507c47e5c844.jpg",
    href: `${siteBaseUrl}/comprar/mg/uberaba/jockey-park-ii/casa/77545781`,
    specs: ["3 quartos", "5 banheiros", "5 vagas"],
  },
  {
    title: "Casa no Residencial Palmeiras",
    type: "Venda",
    price: "R$ 2.500.000",
    location: "Residencial Palmeiras, Uberaba",
    image:
      "https://cdn.uso.com.br/924447/2026/03/0513d905e0c02e3df8eaba989be715fd.jpg",
    href: `${siteBaseUrl}/comprar/mg/uberaba/residencial-palmeiras/casa/78041238`,
    specs: ["3 quartos", "3 banheiros", "4 vagas"],
  },
  {
    title: "Casa no Recreio dos Bandeirantes",
    type: "Venda",
    price: "R$ 2.700.000",
    location: "Recreio dos Bandeirantes, Uberaba",
    image:
      "https://cdn.uso.com.br/924447/2026/02/366bd6fd2b9f4cece59cc46cba86e45a.jpg",
    href: `${siteBaseUrl}/comprar/mg/uberaba/recreio-dos-bandeirantes/casa/78023965`,
    specs: ["4 quartos", "3 banheiros", "2 vagas"],
  },
  {
    title: "Apartamento na Vila Arquelau",
    type: "Aluguel",
    price: "R$ 1.000",
    location: "Vila Arquelau, Uberaba",
    image:
      "https://cdn.uso.com.br/924447/2026/04/c2cb6de50f7ae035e4ee4c088e7da8c9.jpg",
    href: `${siteBaseUrl}/comprar-ou-alugar/mg/uberaba/vila-arquelau/apartamento/78294945`,
    specs: ["2 quartos", "1 banheiro", "locação"],
  },
]

export const services = [
  {
    title: "Comprar com clareza",
    description:
      "Curadoria de imóveis, leitura de documentação e acompanhamento para escolher sem pressão.",
    href: `${siteBaseUrl}/comprar`,
  },
  {
    title: "Alugar com segurança",
    description:
      "Busca objetiva, análise cadastral e contratos conduzidos com orientação próxima.",
    href: `${siteBaseUrl}/alugar`,
  },
  {
    title: "Cadastrar seu imóvel",
    description:
      "Entrada estruturada para venda, locação, temporada ou permuta com dados completos.",
    href: `${siteBaseUrl}/cadastre-seu-imovel`,
  },
  {
    title: "Encomendar imóvel",
    description:
      "Registro do imóvel ideal para a equipe encontrar opções alinhadas ao seu momento.",
    href: `${siteBaseUrl}/encomende-seu-imovel`,
  },
  {
    title: "Financiamento",
    description:
      "Apoio para simular crédito imobiliário em bancos como Caixa, Itaú, Santander e outros.",
    href: `${siteBaseUrl}/financiamento`,
  },
  {
    title: "Fichas cadastrais",
    description:
      "Formulários para propostas, locatários, fiadores e locadores com mais agilidade.",
    href: `${siteBaseUrl}/fichas-cadastrais`,
  },
]

export const categories = [
  {
    title: "Residenciais",
    subtitle: "Casas, apartamentos e condomínios para viver bem.",
    href: `${siteBaseUrl}/imoveis/residencial`,
    image: `${siteBaseUrl}/images/cat-residencial.jpg`,
  },
  {
    title: "Rurais",
    subtitle: "Sítios, chácaras, fazendas e terrenos com potencial.",
    href: `${siteBaseUrl}/imoveis/rural`,
    image: `${siteBaseUrl}/images/cat-rural.jpg`,
  },
  {
    title: "Aceitam financiamento",
    subtitle: "Imóveis selecionados para facilitar o plano de compra.",
    href: `${siteBaseUrl}/imoveis/financiamento`,
    image: `${siteBaseUrl}/images/cat-financiamento.jpg`,
  },
]

export const team = [
  {
    name: "Anderson da Silva Costa",
    role: "Consultor imobiliário",
    image: "https://cdn.uso.com.br/usuarios/344145.jpg",
    href: `${siteBaseUrl}/imoveis/corretor-nome-'ANDERSON DA SILVA COSTA'_344145`,
  },
  {
    name: "Cissa Paolla Silva do Nascimento",
    role: "CRECI 57430",
    image: "https://cdn.uso.com.br/usuarios/345566.jpg",
    href: `${siteBaseUrl}/imoveis/corretor-nome-'CISSA PAOLLA SILVA DO NASCIMENTO'_345566`,
  },
  {
    name: "Matheus Poli",
    role: "CRECI 64433",
    image: "https://cdn.uso.com.br/usuarios/343853.jpg",
    href: `${siteBaseUrl}/imoveis/corretor-nome-'Matheus Poli'_343853`,
  },
  {
    name: "Eduardo Matos",
    role: "CRECI 42382",
    image: "https://cdn.uso.com.br/usuarios/343437.jpg",
    href: `${siteBaseUrl}/imoveis/corretor-nome-EDUARDO MATOS_343437`,
  },
  {
    name: "Francelmir Mendes Peixoto Junior",
    role: "CRECI 40641",
    image: "https://cdn.uso.com.br/usuarios/344245.jpg",
    href: `${siteBaseUrl}/imoveis/corretor-nome-FRANCELMIR MENDES PEIXOTO JUNIOR_344245`,
  },
  {
    name: "Leonardo Prado Marquez",
    role: "CRECI 61955",
    image: "https://cdn.uso.com.br/usuarios/344043.jpg",
    href: `${siteBaseUrl}/imoveis/corretor-nome-LEONARDO PRADO MARQUEZ_344043`,
  },
  {
    name: "Marcos Paulo da Silva",
    role: "CRECI 63403",
    image: "https://cdn.uso.com.br/usuarios/344143.jpg",
    href: `${siteBaseUrl}/imoveis/corretor-nome-MARCOS PAULO DA SILVA_344143`,
  },
  {
    name: "Rafaela Faramiglio",
    role: "Consultora imobiliária",
    image: "https://cdn.uso.com.br/usuarios/344683.jpg",
    href: `${siteBaseUrl}/imoveis/corretor-nome-RAFAELA FARAMÍGLIO_344683`,
  },
]

export const values = [
  {
    title: "Missão",
    description:
      "Transformar a jornada de compra e venda de imóveis em uma experiência única e memorável.",
  },
  {
    title: "Visão",
    description:
      "Expandir nossa presença, mantendo a excelência e o compromisso com a satisfação do cliente.",
  },
  {
    title: "Valores",
    description:
      "Segurança, credibilidade, conhecimento de mercado e atendimento humanizado.",
  },
]

export const processSteps = [
  {
    title: "Entendimento do momento",
    description:
      "A equipe entende objetivo, orçamento, prazo e o nível de orientação que cada cliente precisa.",
  },
  {
    title: "Curadoria e documentação",
    description:
      "Imóveis, contratos e documentos são tratados com transparência para reduzir ruídos na decisão.",
  },
  {
    title: "Negociação acompanhada",
    description:
      "A Lummen conduz conversas, propostas e próximos passos com linguagem clara e acolhedora.",
  },
  {
    title: "Pós-negociação presente",
    description:
      "O atendimento continua após a assinatura, preservando confiança e tranquilidade.",
  },
]

export const faq = [
  {
    question: "A Lummen atua só com venda?",
    answer:
      "Não. O site atual apresenta compra, venda, locação, imóveis residenciais, comerciais e rurais, além de apoio para financiamento e cadastro de imóveis.",
  },
  {
    question: "Como cadastrar um imóvel?",
    answer:
      "A Lummen possui um formulário específico para proprietários informarem pretensão, finalidade, tipo, localização, valor e características do imóvel.",
  },
  {
    question: "Existe suporte para financiamento?",
    answer:
      "Sim. A área de financiamento reúne caminhos para simular crédito imobiliário em bancos que operam com essa modalidade.",
  },
  {
    question: "O atendimento jurídico aparece como diferencial?",
    answer:
      "Sim. O site destaca contato jurídico próprio e a página institucional reforça conhecimento jurídico especializado e segurança documental.",
  },
]
