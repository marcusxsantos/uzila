import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Scale,
  ShieldCheck,
  Bot,
  MessageCircle,
  CreditCard,
  Lock,
  RefreshCw,
  ChevronRight,
  AlertTriangle,
  Building2,
  CheckCircle2,
  Mail,
  Zap,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/site";

const TITLE = "Termos de Uso — Uzila";
const DESCRIPTION =
  "Leia os Termos de Uso e Serviço da Uzila. Condições gerais para contratação, acesso e utilização da nossa plataforma de inteligência artificial para atendimento no WhatsApp.";
const CANONICAL_URL = "https://uzila.com.br/termos";
const LAST_UPDATED = "5 de novembro de 2026";
const VERSION = "2.1 (Vigente)";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: TermosDeUso,
});

const quickHighlights = [
  {
    icon: Bot,
    title: "Plataforma SaaS de IA",
    description:
      "Licença de uso de software como serviço para automação inteligente de conversas e agendamentos no WhatsApp.",
  },
  {
    icon: MessageCircle,
    title: "Conformidade com a Meta",
    description:
      "Operação estritamente alinhada às políticas comerciais e diretrizes anti-spam da Meta e do WhatsApp Business.",
  },
  {
    icon: Lock,
    title: "Seus Dados Pertencem a Você",
    description:
      "A base de clientes e conversas da sua empresa são confidenciais. Nunca vendemos nem usamos seus dados para treinar IAs públicas.",
  },
  {
    icon: Scale,
    title: "Segurança Jurídica & LGPD",
    description:
      "Contrato em estrita observância à Lei Geral de Proteção de Dados, Marco Civil da Internet e Código Civil Brasileiro.",
  },
];

const tableOfContents = [
  { id: "definicoes", title: "1. Definições Gerais" },
  { id: "aceite", title: "2. Aceite e Vinculação Contratual" },
  { id: "objeto", title: "3. Objeto dos Serviços e Funcionalidades" },
  { id: "cadastro-acesso", title: "4. Cadastro, Acesso e Segurança da Conta" },
  { id: "politicas-whatsapp", title: "5. Condições de Uso e Diretrizes da Meta / WhatsApp" },
  { id: "usos-proibidos", title: "6. Regras de Conduta e Usos Proibidos (Anti-Spam)" },
  { id: "inteligencia-artificial", title: "7. Inteligência Artificial: Diretrizes e Supervisão" },
  { id: "planos-pagamento", title: "8. Planos, Demonstrações e Condições Comerciais" },
  { id: "propriedade-intelectual", title: "9. Propriedade Intelectual e Titularidade dos Dados" },
  { id: "sla-suporte", title: "10. Nível de Serviço (SLA), Disponibilidade e Suporte" },
  { id: "limitacao-responsabilidade", title: "11. Limitação de Responsabilidade" },
  { id: "privacidade-lgpd", title: "12. Privacidade e Proteção de Dados Pessoais" },
  { id: "suspensao-rescisao", title: "13. Suspensão, Rescisão e Encerramento" },
  { id: "alteracoes-termos", title: "14. Alterações destes Termos de Uso" },
  { id: "foro", title: "15. Legislação Aplicável e Foro de Eleição" },
];

function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background">
      <Header solid />

      <main className="pt-28 pb-24 sm:pt-36">
        {/* HERO SECTION */}
        <section className="border-b border-border bg-gradient-soft px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
              >
                <Link to="/" className="transition-colors hover:text-primary">
                  Início
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span className="font-medium text-foreground">Termos de Uso</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-semibold text-primary">
                <Scale className="h-4 w-4" />
                Termos de Uso e Serviço
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Termos de <span className="text-gradient">Uso</span>
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Bem-vindo à Uzila. Este instrumento estabelece os termos e condições gerais para
                acesso ao nosso website, contratação e utilização da nossa plataforma de
                inteligência artificial para atendimento, agendamento e gestão de relacionamentos
                via WhatsApp.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-medium text-foreground">
                  <RefreshCw className="h-3 w-3 text-primary" />
                  Última atualização: {LAST_UPDATED}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-medium text-foreground">
                  Versão {VERSION}
                </span>
                <Link
                  to="/politica-privacidade"
                  className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Política de Privacidade
                </Link>
              </div>
            </Reveal>

            {/* Quick Highlight Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickHighlights.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 60}>
                  <div className="card-surface flex h-full flex-col p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT LAYOUT */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          {/* STICKY SIDEBAR (TABLE OF CONTENTS) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-border bg-card p-5 shadow-xs">
              <h2 className="flex items-center gap-2 text-xs font-bold tracking-wider text-foreground uppercase">
                <FileText className="h-4 w-4 text-primary" />
                Índice dos Termos
              </h2>
              <nav className="mt-4 flex flex-col space-y-1 text-xs">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-lg px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t border-border pt-4">
                <Link
                  to="/politica-privacidade"
                  className="flex items-center justify-between rounded-lg bg-primary-soft px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                >
                  <span>Política de Privacidade</span>
                  <ShieldCheck className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN LEGAL TEXT */}
          <article className="space-y-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {/* 1. DEFINIÇÕES GERAIS */}
            <section id="definicoes" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                1. Definições Gerais
              </h2>
              <p className="mt-3">
                Para fins de interpretação e aplicação deste instrumento, aplicam-se as seguintes
                definições:
              </p>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Uzila ("Nós" ou "Plataforma"):</strong> Denominação da plataforma
                  tecnológica e solução SaaS de inteligência artificial de propriedade da Uzila
                  Tecnologia.
                </li>
                <li>
                  <strong>Contratante ("Você" ou "Cliente"):</strong> Pessoa jurídica ou física que
                  contrata, acessa ou utiliza os serviços da Uzila para automação do seu canal
                  corporativo de atendimento.
                </li>
                <li>
                  <strong>Usuário Final:</strong> Pessoa física (cliente ou paciente da Contratante)
                  que envia mensagens e interage via WhatsApp com a conta de atendimento
                  administrada com o auxílio da Uzila.
                </li>
                <li>
                  <strong>Meta Platforms / WhatsApp Business:</strong> Provedora da infraestrutura
                  mundial de mensageria instantânea e das APIs oficiais do WhatsApp (WhatsApp Cloud
                  API / WhatsApp Business Platform).
                </li>
                <li>
                  <strong>Serviços:</strong> Todas as ferramentas disponibilizadas pela Uzila,
                  incluindo triagem automatizada com IA, agendamento de consultas/serviços,
                  follow-up, histórico de conversas e suporte.
                </li>
              </ul>
            </section>

            {/* 2. ACEITE */}
            <section id="aceite" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                2. Aceite e Vinculação Contratual
              </h2>
              <p className="mt-3">
                Ao acessar nosso website, solicitar uma demonstração, assinar uma proposta comercial
                ou conectar o número de WhatsApp da sua empresa à plataforma da Uzila, você declara
                ter lido, compreendido e concordado integralmente com estes{" "}
                <strong>Termos de Uso</strong> e com a nossa{" "}
                <Link
                  to="/politica-privacidade"
                  className="font-semibold text-primary hover:underline"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
              <p className="mt-3">
                Caso você esteja celebrando este contrato em nome de uma pessoa jurídica, declara
                possuir poderes bastantes e legítimos para representá-la e vinculá-la a todas as
                obrigações aqui dispostas.
              </p>
            </section>

            {/* 3. OBJETO DOS SERVIÇOS */}
            <section id="objeto" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                3. Objeto dos Serviços e Funcionalidades
              </h2>
              <p className="mt-3">
                A Uzila concede à Contratante uma licença de uso temporária, revogável, não
                exclusiva e intransferível de software como serviço (SaaS), destinada à:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <strong>Atendimento Ininterrupto 24h:</strong> Recepção de mensagens de texto e
                  áudio no WhatsApp com respostas automatizadas e contextualizadas geradas por IA.
                </li>
                <li>
                  <strong>Agendamento Inteligente:</strong> Consulta de horários disponíveis,
                  marcação, reagendamento e confirmação de compromissos conforme parâmetros
                  definidos pelo Cliente.
                </li>
                <li>
                  <strong>Organização e Follow-Up:</strong> Registro de histórico de conversas,
                  recuperação de orçamentos pendentes e lembretes automáticos para redução de não
                  comparecimentos (no-shows).
                </li>
                <li>
                  <strong>Transbordo para Atendimento Humano:</strong> Transferência fluida para
                  atendentes da equipe do Cliente sempre que solicitado pelo Usuário Final ou quando
                  a complexidade da demanda exigir.
                </li>
              </ul>
            </section>

            {/* 4. CADASTRO E ACESSO */}
            <section id="cadastro-acesso" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                4. Cadastro, Acesso e Segurança da Conta
              </h2>
              <p className="mt-3">
                Para ter acesso à plataforma e ao painel administrativo da Uzila, o Contratante
                deverá fornecer informações cadastrais verdadeiras, exatas e completas.
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">
                  Deveres de Segurança do Contratante:
                </h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-xs text-muted-foreground sm:text-sm">
                  <li>Manter a confidencialidade de seus logins, senhas e tokens de acesso;</li>
                  <li>
                    Comunicar imediatamente à Uzila qualquer suspeita de acesso não autorizado ou
                    violação de segurança;
                  </li>
                  <li>
                    Garantir que apenas colaboradores autorizados tenham acesso ao gerenciador de
                    conversas e dados de atendimento da sua empresa.
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. POLÍTICAS DO WHATSAPP / META */}
            <section id="politicas-whatsapp" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                5. Condições de Uso e Diretrizes da Meta / WhatsApp
              </h2>
              <p className="mt-3">
                A operação da Uzila utiliza as interfaces e APIs oficiais da Meta Platforms
                (WhatsApp Business Platform). Por essa razão, a Contratante obriga-se a respeitar
                integralmente:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  Os <strong>Termos de Serviço do WhatsApp Business</strong> e a{" "}
                  <strong>Política de Mensagens do WhatsApp Business</strong>;
                </li>
                <li>
                  A exigência de obtenção prévia de consentimento (opt-in) do Usuário Final para o
                  recebimento de mensagens ativas de notificação ou lembrete;
                </li>
                <li>
                  A disponibilização de opção clara para o Usuário Final cancelar o recebimento de
                  mensagens a qualquer momento (opt-out).
                </li>
              </ul>
              <div className="mt-3 rounded-lg border border-primary/20 bg-primary-soft/30 p-3.5 text-xs text-muted-foreground">
                <strong>Importante:</strong> A Uzila não se responsabiliza por eventuais restrições,
                advertências ou bloqueios impostos diretamente pela Meta à conta do WhatsApp do
                Cliente caso este descumpra as diretrizes oficiais de mensageria da plataforma da
                Meta.
              </div>
            </section>

            {/* 6. USOS PROIBIDOS */}
            <section id="usos-proibidos" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                6. Regras de Conduta e Usos Proibidos (Anti-Spam)
              </h2>
              <p className="mt-3">
                É terminantemente proibido utilizar a plataforma Uzila para qualquer uma das
                seguintes práticas:
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Disparo massivo de mensagens não solicitadas (SPAM) para listas compradas ou de terceiros",
                  "Divulgação de produtos ilícitos, armas, substâncias controladas ou esquemas fraudulentos",
                  "Envio de conteúdos difamatórios, discriminatórios, odiosos, violentos ou pornográficos",
                  "Prática de engenharia reversa, descompilação ou cópia indevida do código da plataforma",
                  "Tentativas de burlar medidas de segurança, rate limits ou protocolos da API do WhatsApp",
                  "Coleta não autorizada de dados de terceiros ou violação de direitos autorais",
                ].map((regra, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-xs sm:text-sm"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <span className="text-foreground">{regra}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                A constatação de qualquer uso proibido facultará à Uzila a suspensão imediata do
                acesso aos serviços, sem prejuízo da rescisão motivada e da apuração de perdas e
                danos.
              </p>
            </section>

            {/* 7. INTELIGÊNCIA ARTIFICIAL */}
            <section id="inteligencia-artificial" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                7. Inteligência Artificial: Diretrizes e Supervisão
              </h2>
              <p className="mt-3">
                A inteligência artificial da Uzila é alimentada com as diretrizes, catálogos de
                serviços, valores e horários parametrizados pela Contratante. Sobre o funcionamento
                da IA:
              </p>

              <div className="mt-4 space-y-3 rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Bot className="h-5 w-5 text-primary" />
                  <span>Responsabilidade e Supervisão Humana</span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground sm:text-sm">
                  <li>
                    <strong>Parametrização:</strong> O Cliente é o único responsável pela
                    veracidade, conformidade ética e atualização das informações fornecidas à IA
                    (como preços, disponibilidade de agenda, regras de atendimento e especialidades
                    profissionais).
                  </li>
                  <li>
                    <strong>Natureza Auxiliar:</strong> A IA atua como ferramenta de assistência
                    para otimização de tempo. Recomenda-se a supervisão periódica das conversas e a
                    atuação do time humano para negociações delicadas, diagnósticos ou decisões
                    clínicas/jurídicas complexas.
                  </li>
                  <li>
                    <strong>Privacidade Garantida:</strong> Os diálogos e os dados da sua empresa
                    NÃO são utilizados para o treinamento público de modelos de terceiros.
                  </li>
                </ul>
              </div>
            </section>

            {/* 8. PLANOS E PAGAMENTO */}
            <section id="planos-pagamento" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                8. Planos, Demonstrações e Condições Comerciais
              </h2>
              <p className="mt-3">
                A contratação da Uzila dar-se-á mediante a escolha de um plano de assinatura
                comercial ou proposta sob medida, cujos valores, periodicidade (mensal ou anual),
                limites de volume e formas de pagamento estarão especificados na proposta aceita
                pela Contratante.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <strong>Demonstrações Gratuitas:</strong> A Uzila poderá conceder períodos de
                  demonstração ou testes assistidos, cuja duração e escopo serão previamente
                  alinhados entre as partes.
                </li>
                <li>
                  <strong>Renovação Automática:</strong> Salvo manifestação expressa em sentido
                  contrário pelo Cliente, as assinaturas renovam-se automaticamente pelo mesmo
                  período contratado.
                </li>
                <li>
                  <strong>Atraso no Pagamento:</strong> O inadimplemento poderá acarretar a
                  suspensão temporária dos serviços após prévia notificação com prazo razoável para
                  regularização.
                </li>
              </ul>
            </section>

            {/* 9. PROPRIEDADE INTELECTUAL */}
            <section id="propriedade-intelectual" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                9. Propriedade Intelectual e Titularidade dos Dados
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span>Propriedade da Uzila</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    A Uzila detém com exclusividade todos os direitos de propriedade intelectual
                    sobre o software, código-fonte, algoritmos, interfaces, arquitetura de sistemas,
                    marcas, logotipos e metodologias desenvolvidas.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Lock className="h-4 w-4 text-brand-pink" />
                    <span>Propriedade do Cliente</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    A Contratante é e continuará sendo a única e exclusiva titular de todos os dados
                    de seus clientes, conversas, base de contatos e conteúdos trocados no canal de
                    atendimento da sua empresa.
                  </p>
                </div>
              </div>
            </section>

            {/* 10. SLA E SUPORTE */}
            <section id="sla-suporte" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                10. Nível de Serviço (SLA), Disponibilidade e Suporte
              </h2>
              <p className="mt-3">
                A Uzila emprega os melhores esforços técnicos e padrões de engenharia para manter a
                plataforma disponível de forma contínua (meta de disponibilidade de 99,5% do tempo).
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <strong>Manutenções Programadas:</strong> Eventuais janelas de manutenção serão
                  realizadas, preferencialmente, em horários de menor tráfego (madrugadas ou finais
                  de semana), com aviso prévio.
                </li>
                <li>
                  <strong>Canais de Suporte:</strong> O suporte técnico é prestado em dias úteis
                  através do WhatsApp oficial e pelo e-mail{" "}
                  <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                    {EMAIL}
                  </a>
                  .
                </li>
              </ul>
            </section>

            {/* 11. LIMITAÇÃO DE RESPONSABILIDADE */}
            <section id="limitacao-responsabilidade" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                11. Limitação de Responsabilidade
              </h2>
              <p className="mt-3">
                Nos limites autorizados pela legislação brasileira aplicável, a Uzila não responderá
                por:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  Indisponibilidades ou interrupções globais causadas diretamente pela
                  infraestrutura da Meta Platforms, WhatsApp ou operadoras de telecomunicações;
                </li>
                <li>
                  Danos decorrentes de mau uso da conta pelo Cliente, vazamento de credenciais sob
                  guarda do Contratante ou parametrização incorreta das respostas da IA;
                </li>
                <li>
                  Lucros cessantes, perdas de oportunidade comercial ou danos indiretos resultantes
                  de instabilidades de rede;
                </li>
                <li>
                  Eventos de caso fortuito ou força maior, nos moldes do Artigo 393 do Código Civil
                  Brasileiro.
                </li>
              </ul>
            </section>

            {/* 12. LGPD */}
            <section id="privacidade-lgpd" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                12. Privacidade e Proteção de Dados Pessoais
              </h2>
              <p className="mt-3">
                As partes declaram conhecer e comprometer-se a cumprir todas as obrigações da Lei
                Geral de Proteção de Dados Pessoais (LGPD — Lei Federal nº 13.709/2018).
              </p>
              <p className="mt-3">
                Os termos detalhados relativos a coleta, armazenamento, segurança, descarte e
                direitos dos titulares estão estabelecidos em nossa{" "}
                <Link to="/politica-privacidade" className="font-semibold text-primary underline">
                  Política de Privacidade
                </Link>
                , que integra este contrato para todos os fins de direito.
              </p>
            </section>

            {/* 13. SUSPENSÃO E RESCISÃO */}
            <section id="suspensao-rescisao" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                13. Suspensão, Rescisão e Encerramento
              </h2>
              <p className="mt-3">
                Qualquer das partes poderá rescindir a contratação dos serviços mediante comunicação
                prévia por escrito, respeitadas as regras de vigência e eventuais prazos contratuais
                definidos na proposta comercial aceita.
              </p>
              <p className="mt-3">
                Em caso de rescisão, a Contratante poderá solicitar a exportação segura do seu
                histórico de atendimentos e dados, procedendo-se posteriormente à eliminação dos
                dados dos servidores da Uzila conforme prazos e obrigações legais.
              </p>
            </section>

            {/* 14. ALTERAÇÕES DOS TERMOS */}
            <section id="alteracoes-termos" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                14. Alterações destes Termos de Uso
              </h2>
              <p className="mt-3">
                A Uzila reserva-se o direito de atualizar ou modificar estes Termos de Uso
                periodicamente para refletir evoluções tecnológicas, novas funcionalidades ou
                adequações legais e regulatórias.
              </p>
              <p className="mt-3">
                Alterações materiais serão comunicadas com destaque em nosso website ou por e-mail
                aos Contratantes ativos. A continuidade no uso da plataforma após as modificações
                implicará a aceitação dos novos termos.
              </p>
            </section>

            {/* 15. FORO */}
            <section id="foro" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                15. Legislação Aplicável e Foro de Eleição
              </h2>
              <p className="mt-3">
                Estes Termos de Uso são regidos e interpretados segundo as Leis da República
                Federativa do Brasil.
              </p>
              <p className="mt-3">
                Para dirimir quaisquer controvérsias oriundas deste instrumento que não possam ser
                resolvidas amigavelmente entre as partes, fica eleito o Foro da Comarca da Capital
                do Estado do Rio de Janeiro, com renúncia expressa a qualquer outro, por mais
                privilegiado que seja.
              </p>
            </section>

            {/* CALL TO ACTION BOX */}
            <section className="mt-12 rounded-2xl border border-primary/20 bg-gradient-soft p-6 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">
                    Dúvidas sobre os nossos termos e condições?
                  </h3>
                  <p className="mt-1.5 max-w-xl text-xs text-muted-foreground sm:text-sm">
                    Nossa equipe jurídica e de atendimento ao cliente está à disposição para
                    esclarecer qualquer ponto.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="hero">
                    <a href={`mailto:${EMAIL}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Falar com a equipe
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
