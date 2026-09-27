import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import {
  AlarmClock,
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Building2,
  CalendarCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Clock,
  Gauge,
  Heart,
  HeartPulse,
  Layers,
  LineChart,
  Lock,
  Megaphone,
  MessageSquare,
  MessageSquareDashed,
  PlugZap,
  Quote,
  Repeat,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Store,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Reveal } from "@/components/site/Reveal";
import { HeroVideo } from "@/components/site/HeroVideo";
import { RotatingHeadline } from "@/components/site/RotatingHeadline";
import { CountUp } from "@/components/site/CountUp";
import { ContactForm } from "@/components/site/ContactForm";
import { WHATSAPP_LINK } from "@/lib/site";

const TITLE = "Uzila — IA de atendimento no WhatsApp: responda, agende e venda mais";
const DESCRIPTION =
  "A Uzila é a inteligência artificial que atende no WhatsApp 24h, agenda compromissos, organiza clientes e faz follow-up automático. Menos mensagens perdidas, mais conversões para clínicas, salões, lojas e prestadores de serviço.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uzila.com.br/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://uzila.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Uzila",
          url: "https://uzila.com.br/",
          description:
            "Plataforma de inteligência artificial para atendimento, agendamento e relacionamento via WhatsApp.",
          email: "contato@uzila.com.br",
          telephone: "+55 21 96650-3107",
          sameAs: ["https://instagram.com/uzila.ia"],
        }),
      },
    ],
  }),
  component: Home,
});

const rotatingPhrases = [
  "Transforme seu atendimento com IA.",
  "Automatize processos. Ganhe produtividade.",
  "Menos tarefas manuais. Mais inteligência.",
  "IA para transformar negócios.",
  "Seu negócio mais inteligente, ágil e conectado.",
];

const heroStats = [
  { value: 24, suffix: "h", label: "Atendimento ininterrupto" },
  { value: 3, suffix: "s", label: "Tempo médio de resposta" },
  { value: 100, suffix: "%", label: "Conversas registradas" },
];

const problems = [
  {
    icon: MessageSquareDashed,
    label: "Mensagens esquecidas",
    text: "Contatos que chegam fora do expediente e ninguém retoma no dia seguinte.",
  },
  {
    icon: AlarmClock,
    label: "Retornos atrasados",
    text: "Quanto mais demora a resposta, maior a chance do cliente fechar com outro.",
  },
  {
    icon: ClipboardList,
    label: "Orçamentos perdidos",
    text: "Propostas enviadas sem acompanhamento simplesmente esfriam.",
  },
  {
    icon: TrendingUp,
    label: "Oportunidades não aproveitadas",
    text: "Sem histórico organizado, ninguém sabe quem merece um novo contato.",
  },
];

const journey = [
  {
    number: "01",
    title: "Entendemos seu processo",
    text: "Mapeamos como sua equipe atende hoje, quais perguntas mais se repetem e onde os clientes desistem.",
  },
  {
    number: "02",
    title: "Identificamos oportunidades",
    text: "Definimos o que a IA pode assumir com segurança e o que deve continuar com o time humano.",
  },
  {
    number: "03",
    title: "Implementamos a solução",
    text: "Configuramos a Uzila no seu WhatsApp com o tom da sua marca, agenda, respostas e follow-ups.",
  },
  {
    number: "04",
    title: "Medimos e evoluímos",
    text: "Acompanhamos atendimentos, agendamentos e conversões — e ajustamos a operação todo mês.",
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "O cliente envia uma mensagem",
    text: "Um “Olá” chega no WhatsApp da sua empresa — a qualquer hora, em qualquer dia.",
  },
  {
    icon: Bot,
    title: "A Uzila entende a necessidade",
    text: "Ela interpreta o pedido com naturalidade e responde como alguém que realmente escuta.",
  },
  {
    icon: ClipboardList,
    title: "Organiza e registra as informações",
    text: "Nome, interesse, histórico e contexto ficam guardados e prontos para a sua equipe.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda e acompanha",
    text: "Marca horários, confirma compromissos e avisa o cliente antes da hora.",
  },
  {
    icon: Repeat,
    title: "Mantém a conversa ativa",
    text: "Retorna no momento certo para que nenhuma oportunidade esfrie no caminho.",
  },
  {
    icon: Megaphone,
    title: "Elaboramos campanhas para leads",
    text: "Disparamos mensagens estratégicas para quem demonstrou interesse, transformando conversas em novos negócios.",
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Mais produtividade",
    text: "Sua equipe deixa de responder o básico e passa a cuidar do que gera receita.",
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    text: "Sua empresa presente à noite, no fim de semana e nos feriados — sem plantão.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp inteligente",
    text: "Respostas naturais, no tom da sua marca, com contexto de toda a conversa anterior.",
  },
  {
    icon: CalendarClock,
    title: "Agendamento automático",
    text: "Horários marcados, confirmados e lembrados — menos faltas na agenda.",
  },
  {
    icon: Users,
    title: "Organização de clientes",
    text: "Cada contato com histórico, interesse e próximo passo definido.",
  },
  {
    icon: Bell,
    title: "Lembretes e follow-up",
    text: "A Uzila retoma o contato que a correria do dia costuma esquecer.",
  },
  {
    icon: Megaphone,
    title: "Campanhas para leads",
    text: "Mensagens estratégicas para quem já demonstrou interesse e ainda não fechou.",
  },
  {
    icon: BarChart3,
    title: "Resumo diário",
    text: "Faturamento, atendimentos e conversões do dia resumidos para decidir com dados.",
  },
];

const services = [
  {
    icon: Bot,
    title: "Atendimento com IA no WhatsApp",
    text: "Assistente treinada com as informações do seu negócio para responder dúvidas, qualificar contatos e encaminhar o que precisa de atenção humana.",
    bullets: ["Respostas 24/7", "Tom de voz da marca", "Transferência para o time"],
  },
  {
    icon: CalendarCheck,
    title: "Agenda e confirmações",
    text: "Marcação de horários, confirmação automática e lembretes que reduzem faltas e remarcações de última hora.",
    bullets: ["Agendamento automático", "Lembretes programados", "Reagendamento simples"],
  },
  {
    icon: Megaphone,
    title: "Campanhas e reativação de leads",
    text: "Disparos segmentados para quem pediu orçamento, sumiu ou já é cliente — com mensagens pensadas para gerar resposta.",
    bullets: ["Segmentação por interesse", "Recuperação de orçamentos", "Pós-venda ativo"],
  },
  {
    icon: LineChart,
    title: "Painel e resumo diário",
    text: "Indicadores de atendimento, agendamentos e conversões enviados todos os dias para acompanhar a operação de perto.",
    bullets: ["Resumo diário", "Histórico completo", "Visão de conversão"],
  },
];

const differentials = [
  {
    icon: Target,
    title: "Implantação sob medida",
    text: "Nada de robô genérico: a Uzila é configurada com os serviços, preços e regras do seu negócio.",
  },
  {
    icon: PlugZap,
    title: "Começa a operar rápido",
    text: "Processo de implantação enxuto, com acompanhamento próximo desde o primeiro atendimento.",
  },
  {
    icon: Heart,
    title: "Conversa humana",
    text: "Linguagem natural e acolhedora, com passagem para a equipe sempre que o caso pedir.",
  },
  {
    icon: Layers,
    title: "Escala sem aumentar o time",
    text: "Atenda 10 ou 1.000 conversas no mesmo dia sem perder qualidade nem contratar mais gente.",
  },
  {
    icon: ShieldCheck,
    title: "Operação confiável",
    text: "Todo atendimento registrado, com histórico rastreável e regras claras do que a IA pode fazer.",
  },
  {
    icon: Lock,
    title: "Privacidade em primeiro lugar",
    text: "Dados usados apenas para o atendimento do seu negócio, seguindo boas práticas da LGPD.",
  },
];

const useCases = [
  {
    icon: HeartPulse,
    title: "Clínicas",
    text: "Agendamentos, confirmações e retorno de pacientes sem fila de espera no WhatsApp.",
  },
  {
    icon: Stethoscope,
    title: "Consultórios",
    text: "Cada paciente recebe atenção, mesmo quando a recepção está ocupada.",
  },
  {
    icon: Scissors,
    title: "Salões de beleza",
    text: "Horários organizados e lembretes que reduzem faltas e desmarcações.",
  },
  {
    icon: Store,
    title: "Lojas",
    text: "Dúvidas respondidas na hora e orçamentos que voltam para o cliente.",
  },
  {
    icon: Building2,
    title: "Escritórios",
    text: "Triagem de contatos, reuniões agendadas e follow-up de propostas.",
  },
  {
    icon: Wrench,
    title: "Empresas de serviços",
    text: "Do primeiro contato ao pós-venda, nenhuma solicitação fica pelo caminho.",
  },
];

const remembers = [
  "Retorno ao cliente",
  "Orçamento enviado",
  "Reunião agendada",
  "Follow-up automático",
  "Recuperação de oportunidades",
];

const socialProof = [
  {
    quote:
      "Queremos que cada pessoa que manda mensagem para a sua empresa sinta que foi ouvida — e que nenhuma oportunidade termine em uma conversa esquecida.",
    author: "Uzila",
    role: "Nosso compromisso com cada cliente",
  },
];

const proofPoints = [
  { icon: Clock, label: "Resposta imediata, 24 horas por dia" },
  { icon: CheckCircle2, label: "Nenhuma conversa sem registro" },
  { icon: CalendarClock, label: "Agenda organizada automaticamente" },
  { icon: BarChart3, label: "Resultados acompanhados todo dia" },
];

const marquee = [
  "Clínicas",
  "Consultórios",
  "Salões de beleza",
  "Lojas",
  "Escritórios",
  "Prestadores de serviço",
  "E-commerce",
  "Academias",
];

const faqs = [
  {
    q: "A Uzila substitui minha equipe de atendimento?",
    a: "Não. A Uzila assume o atendimento repetitivo — dúvidas frequentes, agendamentos, confirmações e follow-up — e transfere para a sua equipe sempre que a conversa exige decisão humana. O time ganha tempo para o que realmente gera receita.",
  },
  {
    q: "Quanto tempo leva para começar a funcionar?",
    a: "Depois de entendermos seu processo e reunirmos as informações do negócio (serviços, horários, regras e tom de voz), a configuração é rápida. Acompanhamos os primeiros atendimentos de perto e ajustamos as respostas com você.",
  },
  {
    q: "Preciso trocar meu número de WhatsApp?",
    a: "Avaliamos o cenário do seu negócio na demonstração e indicamos o melhor caminho de configuração, preservando o histórico e a identidade do seu atendimento.",
  },
  {
    q: "A IA responde do jeito da minha empresa?",
    a: "Sim. A Uzila é configurada com o vocabulário, os serviços e as regras da sua operação. O objetivo é que o cliente sinta que está falando com a sua empresa, não com um robô genérico.",
  },
  {
    q: "Como acompanho os resultados?",
    a: "Você recebe um resumo diário com faturamento, atendimentos e conversões, além do histórico completo de cada conversa para consultar quando precisar.",
  },
  {
    q: "Serve para o meu segmento?",
    a: "A Uzila atende negócios que vendem e agendam pelo WhatsApp: clínicas, consultórios, salões, lojas, escritórios e prestadores de serviço. Se o seu segmento não está na lista, fale com a gente — avaliamos o caso.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. HERO — IMPACTO INICIAL */}
        <section className="relative isolate min-h-[92svh] overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
          <HeroVideo />

          <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="glass-panel inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-primary-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                Inteligência artificial para atendimento no WhatsApp
              </span>

              <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.06] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Toda grande relação começa com uma conversa.
              </h1>

              <div className="mt-5 min-h-[3.2rem] text-xl font-semibold sm:min-h-[2.6rem] sm:text-2xl">
                <RotatingHeadline phrases={rotatingPhrases} className="text-gradient-light" />
              </div>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                A Uzila atende no WhatsApp 24 horas por dia, agenda compromissos, organiza cada
                cliente e faz o follow-up que sua equipe não tem tempo de fazer. Menos mensagens
                perdidas, mais atendimentos concluídos e mais receita no fim do mês.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg" className="relative overflow-hidden">
                  <Link to="/contato">
                    Quero transformar meu atendimento
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    <MessageSquare />
                    Falar com um especialista
                  </a>
                </Button>
              </div>

              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="glass-panel px-4 py-4">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-2xl font-extrabold text-primary-foreground sm:text-3xl">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </dd>
                    <p className="mt-1 text-[0.7rem] leading-tight text-primary-foreground/75 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Faixa de segmentos */}
        <section
          aria-label="Segmentos atendidos"
          className="border-y border-border bg-muted/40 py-5"
        >
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
              {[...marquee, ...marquee].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. CADA CONVERSA IMPORTA */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Cada conversa importa
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Todos os dias, pessoas entram em contato pelo WhatsApp da sua empresa. Algumas estão
                prontas para comprar, outras precisam de uma informação simples para decidir. O que
                acontece nos primeiros minutos define quem fecha com você e quem procura o
                concorrente.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-10">
              <p className="mx-auto max-w-3xl rounded-3xl bg-primary-soft px-6 py-8 text-xl font-semibold text-primary sm:text-2xl">
                Cada conversa pode se tornar uma oportunidade.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 3. O PROBLEMA */}
        <section className="relative overflow-hidden bg-muted/50 py-20 sm:py-28">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                O tempo passa. As conversas também.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Empresas são feitas de pessoas — e pessoas têm dias corridos. Enquanto a equipe
                  atende, produz e resolve, o WhatsApp acumula mensagens sem resposta.
                </p>
                <p>
                  O resultado aparece no caixa: orçamentos que não voltam, agendas com buracos e
                  clientes que nunca mais respondem.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((item, index) => (
                <Reveal key={item.label} delay={index * 90}>
                  <div className="card-surface h-full p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. A SOLUÇÃO — CONHEÇA A UZILA */}
        <section id="uzila" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                A solução
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Inteligência para transformar conversas em relações.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                A Uzila recebe contatos, entende necessidades, organiza informações, acompanha
                clientes, agenda compromissos, lembra retornos e conecta empresa e cliente — sempre
                com linguagem natural e o tom da sua marca.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-14">
              <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
                {["Cliente", "Uzila", "Empresa", "Conversão"].map((label, index, all) => (
                  <Fragment key={label}>
                    <div className="card-surface px-6 py-7 text-center text-base font-semibold">
                      <span className="text-gradient">{label}</span>
                    </div>
                    {index < all.length - 1 ? (
                      <div className="hidden justify-center text-primary md:flex">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180} className="mt-14">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-1 shadow-lift">
                <div className="relative flex flex-col items-center gap-6 rounded-[calc(var(--radius-3xl)-4px)] bg-background px-6 py-10 text-center sm:px-10 sm:py-14">
                  <div className="absolute inset-0 bg-glow opacity-60" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-3xl bg-gradient-brand text-primary-foreground shadow-soft">
                    <Heart className="h-7 w-7" />
                  </span>
                  <div className="relative max-w-2xl">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      Propósito que move resultados
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      Acreditamos que cada negócio carrega um propósito maior. Por isso criamos
                      tecnologia que multiplica: mais tempo para quem lidera, mais atenção para quem
                      atende e mais oportunidades para quem sonha. Fazemos mais com menos — para que
                      o impacto cresça sem que as pessoas se esgotem.
                    </p>
                  </div>
                  <p className="relative inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Tecnologia com propósito
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. COMO FUNCIONA — JORNADA DE IMPLANTAÇÃO */}
        <section id="como-funciona" className="scroll-mt-24 bg-muted/50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Como funciona</h2>
              <p className="mt-4 text-muted-foreground">
                Uma implantação guiada, em quatro etapas, do diagnóstico à evolução contínua.
              </p>
            </Reveal>

            <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {journey.map((item, index) => (
                <Reveal as="li" key={item.number} delay={index * 90} className="h-full">
                  <div className="card-surface relative h-full overflow-hidden p-7">
                    <span className="text-4xl font-extrabold leading-none text-gradient">
                      {item.number}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mx-auto mt-20 max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                O que acontece em cada conversa
              </h3>
              <p className="mt-4 text-muted-foreground">
                Seis etapas simples entre o primeiro “Olá” e um cliente bem atendido.
              </p>
            </Reveal>

            <ol className="relative mx-auto mt-12 max-w-3xl space-y-6 border-l border-border pl-6 sm:pl-10">
              {steps.map((step, index) => (
                <Reveal as="li" key={step.title} delay={index * 80} className="relative">
                  <span className="absolute -left-[2.35rem] top-6 grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft sm:-left-[3.55rem]">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <div className="card-surface p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Etapa {index + 1}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. BENEFÍCIOS */}
        <section id="beneficios" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Por que transformar seu atendimento agora?
              </h2>
              <p className="mt-4 text-muted-foreground">
                O que sua empresa ganha quando cada conversa é respondida, registrada e acompanhada.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <div className="card-surface group h-full p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="mt-12 text-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contato">
                  Conhecer a solução
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* 7. PRODUTOS E SERVIÇOS */}
        <section id="solucoes" className="scroll-mt-24 bg-muted/50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Soluções
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                O que a Uzila entrega para a sua operação
              </h2>
              <p className="mt-4 text-muted-foreground">
                Quatro frentes que funcionam juntas dentro do mesmo WhatsApp.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {services.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="card-surface h-full p-8">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. DIFERENCIAIS */}
        <section id="diferenciais" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Por que escolher a Uzila
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tecnologia de ponta com implantação próxima e linguagem humana.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {differentials.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="hover-lift card-surface h-full p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CASOS DE USO */}
        <section id="casos-de-uso" className="scroll-mt-24 bg-muted/50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Casos de uso</h2>
              <p className="mt-4 text-muted-foreground">
                Como a Uzila reduz a perda de clientes em cada segmento.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="card-surface h-full p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10. A UZILA LEMBRA */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A Uzila lembra</h2>
              <p className="mt-4 text-muted-foreground">
                Os acompanhamentos que costumam ficar para depois passam a acontecer sozinhos.
              </p>
              <ul className="mt-8 space-y-3">
                {remembers.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <Bell className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="rounded-3xl bg-gradient-brand p-8 text-2xl font-semibold leading-snug text-primary-foreground shadow-lift sm:p-10 sm:text-3xl">
                “Nenhuma boa oportunidade deveria terminar em uma mensagem esquecida.”
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* 11. PROVA SOCIAL / COMPROMISSO */}
        <section className="bg-muted/50 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-medium text-primary">
                <Clock className="h-3.5 w-3.5" />
                Sua empresa sempre presente
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                A inteligência artificial não substitui pessoas. Ela aproxima pessoas.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Enquanto sua equipe cria, atende, negocia e resolve problemas, a Uzila continua
                presente, pronta para receber cada nova conversa e devolver ao time apenas o que
                precisa de decisão humana.
              </p>
            </Reveal>

            {socialProof.map((item, index) => (
              <Reveal key={item.author} delay={120 + index * 80} className="mt-12">
                <figure className="card-surface p-8 sm:p-10">
                  <Quote className="h-8 w-8 text-primary" />
                  <blockquote className="mt-4 text-lg leading-relaxed text-foreground sm:text-xl">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{item.author}</span> —{" "}
                    {item.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proofPoints.map((item, index) => (
                <Reveal key={item.label} delay={index * 70}>
                  <div className="card-surface flex h-full items-start gap-3 p-5">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="min-w-0 text-sm font-medium text-foreground">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 12. TECNOLOGIA QUE APROXIMA */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <span className="animate-float mx-auto grid h-14 w-14 place-items-center justify-self-center rounded-3xl bg-gradient-brand text-primary-foreground shadow-soft">
                <Heart className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Tecnologia que aproxima pessoas.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Acreditamos que a tecnologia pode tornar as relações mais humanas. Ela ajuda
                empresas a ouvir melhor, responder melhor e estar presentes nos momentos que
                realmente importam.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 13. FAQ */}
        <section id="faq" className="scroll-mt-24 bg-muted/50 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Perguntas frequentes
              </h2>
              <p className="mt-4 text-muted-foreground">
                Dúvidas comuns de quem está avaliando automatizar o atendimento no WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-10">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base font-semibold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* 14. CTA FINAL */}
        <section id="contato" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-4xl bg-gradient-brand px-6 py-14 shadow-lift sm:px-12">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="max-w-xl text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl">
                    Do primeiro “Olá” a uma nova oportunidade.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                    Agende uma demonstração gratuita e veja, com exemplos do seu próprio negócio,
                    como a Uzila responde, agenda e acompanha cada cliente no WhatsApp.
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {[
                      "Demonstração sem compromisso",
                      "Diagnóstico do seu atendimento atual",
                      "Plano de implantação sob medida",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-primary-foreground/90"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" variant="secondary">
                      <Link to="/contato">Começar agora</Link>
                    </Button>
                    <Button asChild size="lg" variant="whatsapp">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="rounded-3xl bg-card p-6 shadow-lift sm:p-8">
                  <h3 className="text-lg font-semibold">Solicite sua demonstração</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Preencha os dados e falamos com você pelo WhatsApp.
                  </p>
                  <div className="mt-5">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
