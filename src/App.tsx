import { useEffect, useState, type ComponentType } from "react"
import {
  ArrowRight,
  BadgeCheck,
  Bath,
  BedDouble,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Camera,
  Car,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  Gem,
  HeartHandshake,
  Home,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  brand,
  categories,
  faq,
  heroImages,
  navItems,
  processSteps,
  propertyHighlights,
  quickSearch,
  services,
  siteBaseUrl,
  team,
  values,
} from "@/data/lummen"
import { cn } from "@/lib/utils"

const serviceIcons = [
  Home,
  KeyRound,
  Building2,
  Search,
  Calculator,
  ClipboardCheck,
]

const valueIcons = [Target, Rocket, Gem]

const stats = [
  { label: "CRECI", value: "9862" },
  { label: "Atuação", value: "Uberaba" },
  { label: "Categorias", value: "Residencial, comercial e rural" },
  { label: "Contato direto", value: "WhatsApp, telefone e e-mail" },
]

const trustItems = [
  "Segurança documental",
  "Atendimento humanizado",
  "Conhecimento jurídico",
  "Compra, venda e locação",
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header menuOpen={menuOpen} onMenuChange={setMenuOpen} />
      <main>
        <Hero />
        <SearchPanel />
        <TrustBar />
        <FeaturedProperties />
        <Services />
        <Process />
        <About />
        <Categories />
        <Team />
        <Values />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}

function Header({
  menuOpen,
  onMenuChange,
}: {
  menuOpen: boolean
  onMenuChange: (open: boolean) => void
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#f7f7f7]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Lummen Imóveis">
          <span className="flex h-12 w-40 items-center rounded-[8px] bg-white px-3 shadow-sm ring-1 ring-black/5">
            <img
              src={brand.logo}
              alt="Lummen Imóveis"
              className="h-auto max-h-9 w-full object-contain"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#2b3036]/72 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild className="h-10 px-3 text-primary">
            <a href={`${siteBaseUrl}/imoveis`} target="_blank" rel="noreferrer">
              Ver imóveis
            </a>
          </Button>
          <Button asChild className="h-10 bg-primary px-4 text-primary-foreground hover:bg-[#1c5633]">
            <a href={brand.phones[0].href} target="_blank" rel="noreferrer">
              <MessageCircle />
              WhatsApp
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon-lg"
          className="ml-auto border border-primary/15 bg-white text-primary shadow-sm hover:bg-secondary lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => onMenuChange(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        className={cn(
          "grid border-t border-border bg-background transition-[grid-template-rows] duration-300 lg:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-3 font-heading text-lg font-semibold text-foreground hover:bg-muted"
                onClick={() => onMenuChange(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-3 h-11 bg-primary text-primary-foreground">
              <a href={brand.phones[0].href} target="_blank" rel="noreferrer">
                <MessageCircle />
                Falar pelo WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero-section relative min-h-[92svh] overflow-hidden pt-20">
      <img
        src={heroImages.main}
        alt="Imóvel em destaque da Lummen Imóveis"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a2c21]/72" />
      <div className="hero-texture absolute inset-0" />

      <div className="relative mx-auto grid min-h-[calc(92svh-5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="hero-copy max-w-full text-white lg:max-w-4xl">
          <Badge className="animate-rise border-white/20 bg-white/12 text-white backdrop-blur">
            <Sparkles className="size-3.5" />
            {brand.tagline}
          </Badge>
          <h1 className="animate-rise mt-7 max-w-full break-words font-heading text-5xl font-black leading-[0.92] tracking-normal text-white sm:text-7xl lg:max-w-4xl lg:text-8xl">
            Lummen Imóveis
          </h1>
          <p className="animate-rise mt-6 max-w-full text-lg leading-8 text-white/86 sm:max-w-2xl sm:text-xl">
            Sua casa própria não é um sonho distante. Encontre imóveis em Uberaba
            com curadoria, transparência e uma equipe que acompanha cada etapa da
            negociação.
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 w-full justify-center bg-accent px-5 font-bold text-[#1a1d20] hover:bg-[#ffcf33] sm:w-auto">
              <a href={`${siteBaseUrl}/comprar`} target="_blank" rel="noreferrer">
                Encontrar imóveis
                <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full justify-center border-white/28 bg-white/10 px-5 text-white hover:bg-white/18 hover:text-white sm:w-auto"
            >
              <a href={brand.phones[0].href} target="_blank" rel="noreferrer">
                Falar com a equipe
                <MessageCircle />
              </a>
            </Button>
          </div>

          <div className="hero-stats animate-rise mt-10 grid max-w-3xl gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <div className="hero-compass" aria-hidden="true">
            <div className="hero-compass-ring" />
            <div className="hero-compass-card">
              <ShieldCheck />
              <span>Compra segura começa com documentação clara.</span>
            </div>
            <div className="hero-compass-card is-second">
              <HeartHandshake />
              <span>Atendimento próximo para decisões importantes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchPanel() {
  return (
    <section id="busca" className="relative -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl" data-reveal>
        <div className="search-panel rounded-[8px] border border-border bg-card p-4 shadow-2xl shadow-[#1a2c21]/12 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Busca rápida
              </span>
              <h2 className="mt-1 font-heading text-2xl font-black text-foreground">
                Conte o que você procura
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickSearch.map((item) => (
                <Button
                  key={item.label}
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary/18 text-primary hover:bg-primary/7"
                >
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_1fr_auto]">
            <Input
              aria-label="Buscar por cidade, bairro ou código"
              placeholder="Cidade, bairro ou código"
              className="h-12 rounded-[8px] border-border bg-background"
            />
            <Select defaultValue="comprar">
              <SelectTrigger className="h-12 w-full rounded-[8px] bg-background">
                <SelectValue placeholder="Pretensão" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comprar">Comprar</SelectItem>
                <SelectItem value="alugar">Alugar</SelectItem>
                <SelectItem value="financiamento">Aceita financiamento</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="casa">
              <SelectTrigger className="h-12 w-full rounded-[8px] bg-background">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="terreno">Terreno</SelectItem>
                <SelectItem value="rural">Rural</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="uberaba">
              <SelectTrigger className="h-12 w-full rounded-[8px] bg-background">
                <SelectValue placeholder="Cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uberaba">Uberaba</SelectItem>
                <SelectItem value="uberlandia">Uberlândia</SelectItem>
                <SelectItem value="araxa">Araxá</SelectItem>
                <SelectItem value="conceicao">Conceição das Alagoas</SelectItem>
              </SelectContent>
            </Select>
            <Button asChild className="h-12 bg-primary px-5 text-primary-foreground hover:bg-[#1c5633]">
              <a href={`${siteBaseUrl}/imoveis`} target="_blank" rel="noreferrer">
                <Search />
                Buscar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {trustItems.map((item, index) => (
          <div
            key={item}
            className="trust-item"
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <CheckCircle2 />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturedProperties() {
  return (
    <section id="imoveis" className="section-band bg-[#f7f7f7] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Destaques do site atual"
          title="Imóveis com presença, contexto e caminho claro para visitar"
          description="A vitrine usa anúncios reais publicados pela Lummen, com valores, bairros e imagens extraídos do site oficial."
          actionLabel="Ver vitrine completa"
          actionHref={`${siteBaseUrl}/imoveis`}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {propertyHighlights.map((property, index) => (
            <PropertyCard
              key={property.href}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PropertyCard({
  property,
  index,
}: {
  property: (typeof propertyHighlights)[number]
  index: number
}) {
  return (
    <Card
      className="property-card rounded-[8px] border-0 bg-white p-0 shadow-sm ring-1 ring-[#2b3036]/10"
      data-reveal
      style={{ transitionDelay: `${index * 65}ms` }}
    >
      <a href={property.href} target="_blank" rel="noreferrer" className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-[8px]">
          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover transition duration-700 group-hover/card:scale-105"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <Badge className="bg-primary text-primary-foreground">{property.type}</Badge>
            <Badge className="bg-accent text-[#1a1d20]">{property.price}</Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="font-heading text-xl font-black text-foreground">
            {property.title}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {property.location}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="grid grid-cols-3 gap-2 text-sm text-[#55595e]">
            {property.specs.map((spec, specIndex) => {
              const Icon = specIndex === 0 ? BedDouble : specIndex === 1 ? Bath : Car
              return (
                <span key={spec} className="flex items-center gap-1.5 rounded-[8px] bg-muted px-2.5 py-2">
                  <Icon className="size-4 text-primary" />
                  {spec}
                </span>
              )
            })}
          </div>
        </CardContent>
      </a>
    </Card>
  )
}

function Services() {
  return (
    <section id="servicos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Serviços"
          title="Uma imobiliária para antes, durante e depois da negociação"
          description="O site atual organiza serviços para comprar, alugar, cadastrar, encomendar imóveis, simular financiamento e acelerar fichas cadastrais."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? BadgeCheck
            return (
              <Card
                key={service.title}
                className="service-card rounded-[8px] border-0 bg-white p-0 shadow-sm ring-1 ring-[#2b3036]/10"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <CardHeader>
                  <span className="service-icon">
                    <Icon />
                  </span>
                  <CardTitle className="font-heading text-2xl font-black">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-5">
                  <Button asChild variant="ghost" className="px-0 text-primary hover:bg-transparent">
                    <a href={service.href} target="_blank" rel="noreferrer">
                      Acessar serviço
                      <ArrowRight />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="process-section px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal>
            <Badge className="border-white/18 bg-white/10 text-white">
              <ShieldCheck className="size-3.5" />
              Jornada orientada
            </Badge>
            <h2 className="mt-5 max-w-xl font-heading text-4xl font-black leading-tight sm:text-5xl">
              Segurança não precisa soar distante.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/76">
              A comunicação da Lummen fica mais forte quando traduz o lado
              jurídico e documental em decisões simples, humanas e verificáveis.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="process-step"
                data-reveal
                style={{ transitionDelay: `${index * 85}ms` }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div data-reveal>
          <SectionKicker>Quem Somos</SectionKicker>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl">
            Experiência imobiliária com rigor documental e calor humano.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              Na Lummen Imóveis, comprar, vender ou alugar vai além da
              negociação: é a realização de sonhos e projetos de vida.
            </p>
            <p>
              A marca reforça experiência consolidada, conhecimento jurídico
              especializado, transparência em cada etapa e assessoria completa
              antes, durante e após a negociação.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Imóveis residenciais, comerciais e rurais",
              "Atendimento no centro de Uberaba",
              "Equipe dedicada em todas as etapas",
              "Pós-negociação com presença",
            ].map((item) => (
              <span key={item} className="about-point">
                <BadgeCheck />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="about-media" data-reveal>
          <img src={heroImages.office} alt="Equipe e espaço da Lummen Imóveis" />
          <div className="about-media-caption">
            <Users />
            <span>Atendimento humanizado e assessoria completa.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="category-section px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Categorias"
          title="Um lugar para construir sua história"
          description="A organização atual da Lummen destaca residenciais, rurais e imóveis que aceitam financiamento como caminhos de descoberta."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href={category.href}
              target="_blank"
              rel="noreferrer"
              className="category-card"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <img src={category.image} alt={category.title} />
              <span>{category.title}</span>
              <p>{category.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="equipe" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Equipe"
          title="Corretores com rosto, nome e caminho direto para imóveis"
          description="A landing valoriza a equipe exibida no site atual e mantém links para as respectivas vitrines de atendimento."
          actionLabel="Falar com atendimento"
          actionHref={brand.phones[0].href}
        />

        <div className="team-strip mt-10">
          {team.map((member, index) => (
            <a
              key={member.href}
              href={member.href}
              target="_blank"
              rel="noreferrer"
              className="team-card"
              data-reveal
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <img src={member.image} alt={member.name} />
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="values-section px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = valueIcons[index] ?? Gem
            return (
              <div
                key={value.title}
                className="value-card"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Icon />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-reveal>
          <SectionKicker>Dúvidas comuns</SectionKicker>
          <h2 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-5xl">
            Respostas claras, sem jargão imobiliário.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            O tom segue a própria diretriz da marca: acolhedor, educativo e
            motivacional, com foco no que a pessoa precisa decidir.
          </p>
        </div>

        <Accordion type="single" collapsible className="rounded-[8px] border bg-white px-5" data-reveal>
          {faq.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="font-heading text-lg font-bold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="contact-section px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div data-reveal>
          <Badge className="border-white/20 bg-white/10 text-white">
            <Mail className="size-3.5" />
            Contato
          </Badge>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl font-black leading-tight sm:text-5xl">
            Vamos encontrar o imóvel certo para o seu próximo capítulo.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/76">
            Prefere comprar, alugar, cadastrar ou encomendar um imóvel? A equipe
            da Lummen recebe sua demanda e orienta o caminho mais simples.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 bg-accent px-5 font-bold text-[#1a1d20] hover:bg-[#ffcf33]">
              <a href={brand.phones[0].href} target="_blank" rel="noreferrer">
                <MessageCircle />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-white/24 bg-white/8 px-5 text-white hover:bg-white/16 hover:text-white"
            >
              <a href={`${siteBaseUrl}/contato`} target="_blank" rel="noreferrer">
                Abrir formulário
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>

        <div className="contact-grid" data-reveal>
          {brand.phones.map((phone) => (
            <a key={phone.label} href={phone.href} target="_blank" rel="noreferrer">
              <Phone />
              <span>{phone.label}</span>
              <strong>{phone.number}</strong>
            </a>
          ))}
          <a href={`mailto:${brand.email}`}>
            <Mail />
            <span>E-mail</span>
            <strong>{brand.email}</strong>
          </a>
          <a href={`${siteBaseUrl}/cadastre-seu-imovel`} target="_blank" rel="noreferrer">
            <Building2 />
            <span>Proprietários</span>
            <strong>Cadastre seu imóvel</strong>
          </a>
          <a href={`${siteBaseUrl}/encomende-seu-imovel`} target="_blank" rel="noreferrer">
            <Search />
            <span>Busca sob medida</span>
            <strong>Encomende seu imóvel</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#1a1d20] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-[8px] bg-white p-3">
              <img src={brand.logo} alt="Lummen Imóveis" className="h-10 w-36 object-contain" />
            </span>
            <p className="mt-5 max-w-md leading-7 text-white/68">{brand.description}</p>
            <p className="mt-3 text-sm font-bold text-accent">{brand.creci}</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-black">Facilidades</h3>
            <div className="mt-4 grid gap-2">
              {["Home", "Imóveis", "Serviços", "Institucional", "Contato"].map((item) => (
                <a key={item} href={`${siteBaseUrl}/${item === "Home" ? "" : item.toLowerCase()}`} target="_blank" rel="noreferrer" className="text-white/68 hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-black">Redes sociais</h3>
            <div className="mt-4 flex gap-2">
              {brand.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="social-link"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/54">
          <span>Landing page moderna para Lummen Imóveis.</span>
          <a href={siteBaseUrl} target="_blank" rel="noreferrer" className="hover:text-white">
            Fonte: site oficial
          </a>
        </div>
      </div>
    </footer>
  )
}

function FloatingContact() {
  return (
    <a
      href={brand.phones[0].href}
      target="_blank"
      rel="noreferrer"
      className="floating-contact"
      aria-label="Falar com a Lummen Imóveis pelo WhatsApp"
    >
      <MessageCircle />
    </a>
  )
}

function SectionIntro({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  eyebrow: string
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
}) {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
      <div>
        <SectionKicker>{eyebrow}</SectionKicker>
        <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight text-foreground sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
      {actionLabel && actionHref ? (
        <Button asChild variant="outline" className="h-11 shrink-0 border-primary/20 text-primary">
          <a href={actionHref} target="_blank" rel="noreferrer">
            {actionLabel}
            <ArrowRight />
          </a>
        </Button>
      ) : null}
    </div>
  )
}

function SectionKicker({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-primary">
      <span className="h-px w-8 bg-accent" />
      {children}
    </span>
  )
}

function SocialIcon({ label }: { label: string }) {
  const icons: Record<string, ComponentType<{ className?: string }>> = {
    Facebook: Share2,
    Instagram: Camera,
    YouTube: Play,
    LinkedIn: BriefcaseBusiness,
  }
  const Icon = icons[label] ?? ExternalLink
  return <Icon className="size-4" />
}

export default App
