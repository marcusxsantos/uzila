import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Bot,
  MessageCircle,
  FileText,
  UserCheck,
  Trash2,
  Mail,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Server,
  Cookie,
  AlertTriangle,
  ChevronRight,
  Building2,
  RefreshCw,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { EMAIL, DPO_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/site";

const TITLE = "Política de Privacidade — Uzila";
const DESCRIPTION =
  "Conheça a Política de Privacidade da Uzila. Saiba como tratamos e protegemos com segurança os dados pessoais e as conversas no WhatsApp em estrita conformidade com a LGPD e os padrões da Meta.";
const CANONICAL_URL = "https://uzila.com.br/politica-privacidade";
const LAST_UPDATED = "5 de novembro de 2026";
const VERSION = "2.1 (Vigente)";

export const Route = createFileRoute("/politica-privacidade")({
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
  component: PoliticaPrivacidade,
});

const quickHighlights = [
  {
    icon: ShieldCheck,
    title: "Conformidade com a LGPD",
    description:
      "Tratamento 100% alinhado à Lei Geral de Proteção de Dados (Lei Federal nº 13.709/2018) e às diretrizes da ANPD.",
  },
  {
    icon: Lock,
    title: "Criptografia e Segurança",
    description:
      "Criptografia ponta a ponta e em repouso (AES-256 e TLS 1.3), garantindo confidencialidade absoluta.",
  },
  {
    icon: Bot,
    title: "Uso Ético da Inteligência Artificial",
    description:
      "Suas mensagens e dados nunca são vendidos nem utilizados para alimentar ou treinar modelos públicos de terceiros.",
  },
  {
    icon: MessageCircle,
    title: "APIs Oficiais Meta / WhatsApp",
    description:
      "Integração homologada pelo ecossistema Meta Cloud API, respeitando todos os requisitos de privacidade e governança.",
  },
];

const tableOfContents = [
  { id: "apresentacao", title: "1. Quem Somos e Apresentação" },
  { id: "papeis-lgpd", title: "2. Papéis na LGPD: Controlador e Operador" },
  { id: "dados-coletados", title: "3. Dados Pessoais que Coletamos" },
  { id: "finalidades-bases", title: "4. Finalidades e Bases Legais do Tratamento" },
  { id: "ia-processamento", title: "5. Inteligência Artificial e Processamento de Mensagens" },
  { id: "meta-whatsapp", title: "6. Integração com WhatsApp e Meta Cloud API" },
  { id: "compartilhamento", title: "7. Compartilhamento de Dados com Terceiros" },
  { id: "seguranca", title: "8. Segurança da Informação e Armazenamento" },
  { id: "retencao-descarte", title: "9. Retenção e Ciclo de Vida dos Dados" },
  { id: "direitos-titular", title: "10. Seus Direitos como Titular (Art. 18 LGPD)" },
  { id: "exclusao-dados", title: "11. Instruções para Exclusão de Dados (Meta Data Deletion)" },
  { id: "cookies", title: "12. Cookies e Tecnologias de Monitoramento" },
  { id: "transferencia-internacional", title: "13. Transferência Internacional de Dados" },
  { id: "encarregado-dpo", title: "14. Encarregado pelo Tratamento de Dados (DPO)" },
  { id: "alteracoes", title: "15. Alterações desta Política e Vigência" },
];

function PoliticaPrivacidade() {
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
                <span className="font-medium text-foreground">Política de Privacidade</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1 text-xs font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" />
                Privacidade & Conformidade LGPD
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Política de <span className="text-gradient">Privacidade</span>
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Na Uzila, acreditamos que toda grande relação é construída sobre confiança,
                transparência e respeito. Este documento explica com clareza como tratamos,
                protegemos e garantimos a segurança dos dados pessoais de visitantes do nosso site,
                clientes contratantes e usuários finais atendidos via WhatsApp.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-medium text-foreground">
                  <RefreshCw className="h-3 w-3 text-primary" />
                  Última atualização: {LAST_UPDATED}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-medium text-foreground">
                  Versão {VERSION}
                </span>
                <a
                  href={`mailto:${DPO_EMAIL}`}
                  className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline"
                >
                  <Mail className="h-3 w-3" />
                  DPO: {DPO_EMAIL}
                </a>
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
                Índice da Política
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
                <a
                  href="#exclusao-dados"
                  className="flex items-center justify-between rounded-lg bg-primary-soft px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                >
                  <span>Excluir meus dados</span>
                  <Trash2 className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN LEGAL TEXT */}
          <article className="space-y-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {/* 1. APRESENTAÇÃO */}
            <section id="apresentacao" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                1. Quem Somos e Apresentação
              </h2>
              <p className="mt-3">
                A <strong>Uzila</strong> é uma plataforma tecnológica de inteligência artificial
                especializada no atendimento, agendamento e gestão de relacionamentos via WhatsApp
                para clínicas, consultórios, salões, escritórios, lojas e prestadores de serviços em
                todo o Brasil.
              </p>
              <p className="mt-3">
                Nossa missão é aproximar marcas e clientes com tecnologia humanizada, eficiente e
                segura. Esta Política de Privacidade aplica-se ao nosso site institucional (
                <a href="https://uzila.com.br" className="text-primary hover:underline">
                  https://uzila.com.br
                </a>
                ), aos formulários de contato e demonstração, e à plataforma de inteligência
                artificial integrada ao WhatsApp.
              </p>
            </section>

            {/* 2. PAPÉIS NA LGPD */}
            <section id="papeis-lgpd" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                2. Papéis na LGPD: Controlador e Operador
              </h2>
              <p className="mt-3">
                Para fins da Lei Geral de Proteção de Dados Pessoais (LGPD — Lei Federal nº
                13.709/2018), a Uzila atua em dois papéis distintos, dependendo da natureza do
                relacionamento:
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span>Uzila como Controladora</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Atuamos como <strong>Controladora</strong> quando coletamos dados diretamente de
                    você: ao navegar em nosso site institucional, ao solicitar uma demonstração ou
                    orçamento, ao preencher formulários de contato e ao contratar nossa plataforma
                    comercialmente.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Bot className="h-4 w-4 text-brand-blue" />
                    <span>Uzila como Operadora</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Atuamos como <strong>Operadora</strong> de dados quando realizamos o
                    processamento de conversas, mensagens e agendamentos no WhatsApp em nome de
                    nossas empresas clientes (as Contratantes). Nesse caso, a empresa cliente é a
                    Controladora dos dados de seus próprios clientes e dita as regras de atendimento
                    e retenção.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. DADOS COLETADOS */}
            <section id="dados-coletados" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                3. Dados Pessoais que Coletamos
              </h2>
              <p className="mt-3">
                Coletamos apenas as informações estritamente necessárias para viabilizar o
                atendimento, a demonstração comercial e a operação técnica da plataforma. Os dados
                dividem-se em:
              </p>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">
                    A) Dados fornecidos voluntariamente por você
                  </h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-xs text-muted-foreground sm:text-sm">
                    <li>
                      <strong>Formulário de Contato e Demonstração:</strong> Nome completo, e-mail
                      de contato, número de telefone celular/WhatsApp, nome da sua empresa, volume
                      estimado de atendimentos e mensagem com a descrição da sua demanda.
                    </li>
                    <li>
                      <strong>Comunicação Direta:</strong> Informações trocadas ao nos enviar um
                      e-mail ou ao conversar conosco diretamente pelo WhatsApp oficial da Uzila.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">
                    B) Dados de conversas no WhatsApp (Operação SaaS)
                  </h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-xs text-muted-foreground sm:text-sm">
                    <li>
                      <strong>Identificadores de Mensageria:</strong> Número de telefone do
                      WhatsApp, nome de perfil público do WhatsApp e foto pública de perfil (se
                      disponibilizada pelo titular nas configurações do aplicativo).
                    </li>
                    <li>
                      <strong>Conteúdo de Atendimento:</strong> Texto das mensagens, transcrições de
                      áudios enviados para fins de compreensão da solicitação, intenção da conversa
                      (ex: dúvida, solicitação de preço, agendamento de horário) e histórico de
                      agendamentos realizados.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground">
                    C) Dados coletados automaticamente (Navegação no Site)
                  </h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-xs text-muted-foreground sm:text-sm">
                    <li>
                      <strong>Logs de Acesso:</strong> Endereço IP, data e hora de cada conexão,
                      porta lógica de origem e recursos acessados, em cumprimento estrito ao Artigo
                      15 da Lei nº 12.965/2014 (Marco Civil da Internet).
                    </li>
                    <li>
                      <strong>Dados Técnicos:</strong> Tipo e versão do navegador, sistema
                      operacional, resolução de tela e dados analíticos agregados e anonimizados de
                      uso das páginas.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. FINALIDADES E BASES LEGAIS */}
            <section id="finalidades-bases" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                4. Finalidades e Bases Legais do Tratamento
              </h2>
              <p className="mt-3">
                De acordo com o Artigo 7º da LGPD, todo tratamento de dados pessoais realizado pela
                Uzila possui uma base legal legítima e vinculada a uma finalidade específica:
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="border-b border-border bg-muted/60 text-foreground">
                      <tr>
                        <th className="p-3.5 font-semibold">Categoria de Dados</th>
                        <th className="p-3.5 font-semibold">Finalidade do Tratamento</th>
                        <th className="p-3.5 font-semibold">Base Legal (LGPD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr>
                        <td className="p-3.5 font-medium text-foreground">
                          Nome, e-mail, telefone, empresa
                        </td>
                        <td className="p-3.5">
                          Agendar demonstração, apresentar planos e dar prosseguimento comercial.
                        </td>
                        <td className="p-3.5 font-medium text-foreground">
                          Procedimentos preliminares a contrato (Art. 7º, V)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-foreground">
                          Mensagens e áudios no WhatsApp
                        </td>
                        <td className="p-3.5">
                          Executar o atendimento automatizado com IA, triagem e agendamento para o
                          cliente.
                        </td>
                        <td className="p-3.5 font-medium text-foreground">
                          Execução de contrato da empresa cliente (Art. 7º, V)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-foreground">
                          Endereço IP, data e hora de acesso
                        </td>
                        <td className="p-3.5">
                          Registro obrigatório de acessos a aplicações de internet.
                        </td>
                        <td className="p-3.5 font-medium text-foreground">
                          Cumprimento de obrigação legal (Art. 7º, II c/c Marco Civil)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-foreground">
                          Métricas agregadas e de segurança
                        </td>
                        <td className="p-3.5">
                          Prevenção a fraudes, estabilidade da plataforma e aprimoramento contínuo.
                        </td>
                        <td className="p-3.5 font-medium text-foreground">
                          Legítimo interesse (Art. 7º, IX)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 5. USO DE INTELIGÊNCIA ARTIFICIAL */}
            <section id="ia-processamento" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                5. Inteligência Artificial e Processamento de Mensagens
              </h2>
              <p className="mt-3">
                A Uzila integra modelos de inteligência artificial de última geração para
                compreender a linguagem natural, categorizar dúvidas e formular respostas precisas e
                acolhedoras no WhatsApp.
              </p>

              <div className="mt-4 space-y-3 rounded-xl border border-primary/20 bg-primary-soft/40 p-5">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span>Compromisso Ético e de Confidencialidade da IA</span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <strong>Sem treinamento público com seus dados:</strong> Os dados e conteúdos
                      das conversas processadas pela Uzila <u>NÃO</u> são utilizados para alimentar
                      ou retreinar modelos fundacionais públicos de terceiros.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <strong>Isolamento lógico:</strong> Os dados de cada cliente operam em
                      ambiente lógico isolado, garantindo que uma empresa nunca tenha acesso às
                      informações ou conversas de outra.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <strong>Transbordo e Supervisão Humana:</strong> A inteligência artificial da
                      Uzila atua como uma copiloto eficiente. Sempre que a conversa exigir
                      discernimento humano, empatia especializada ou quando o usuário solicitar, o
                      atendimento pode ser transferido imediatamente para a equipe humana.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. INTEGRAÇÃO COM WHATSAPP E META CLOUD API */}
            <section id="meta-whatsapp" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                6. Integração com WhatsApp e Meta Cloud API
              </h2>
              <p className="mt-3">
                Nossos serviços são prestados em conformidade com as diretrizes e termos da
                plataforma WhatsApp Business (Meta Platforms, Inc.). Ao interagir com a Uzila ou com
                empresas que utilizam a nossa tecnologia no WhatsApp:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  As mensagens trafegam por meio das APIs oficiais empresariais da Meta (WhatsApp
                  Cloud API / WhatsApp Business Platform).
                </li>
                <li>
                  O envio e o recebimento de mensagens respeitam os termos de serviço e a política
                  de dados da Meta, bem como os padrões de segurança mundiais de mensageria
                  corporativa.
                </li>
                <li>
                  A Uzila não tem acesso e não interfere em conversas privadas dos usuários fora do
                  número de atendimento empresarial configurado.
                </li>
              </ul>
            </section>

            {/* 7. COMPARTILHAMENTO DE DADOS */}
            <section id="compartilhamento" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                7. Compartilhamento de Dados com Terceiros
              </h2>
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-xs font-medium text-foreground sm:text-sm">
                <strong>Garantia explícita:</strong> A Uzila <u>NÃO</u> vende, aluga, troca ou
                comercializa dados pessoais com corretores de dados (data brokers), redes de
                publicidade ou quaisquer terceiros não autorizados sob nenhuma circunstância.
              </div>
              <p className="mt-4">
                O compartilhamento de dados ocorre exclusivamente com parceiros tecnológicos
                essenciais para a operação da solução, mediante contratos que exigem estrita
                confidencialidade e padrões compatíveis com a LGPD:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <strong>Provedores de Nuvem e Hospedagem:</strong> Servidores de alta
                  disponibilidade com certificações de segurança internacionais (ex: ISO/IEC 27001,
                  SOC 2 Type II).
                </li>
                <li>
                  <strong>Meta Platforms (WhatsApp Business):</strong> Responsável pela
                  infraestrutura de transporte e entrega de mensagens na rede WhatsApp.
                </li>
                <li>
                  <strong>Provedores de Inferência de IA:</strong> Modelos contratados em ambiente
                  corporativo seguro via API sem direito de uso de dados para treinamento de modelos
                  de terceiros.
                </li>
                <li>
                  <strong>Obrigação Legal ou Judicial:</strong> Em caso de determinação judicial
                  fundamentada emitida por autoridade competente brasileira ou requisição da ANPD.
                </li>
              </ul>
            </section>

            {/* 8. SEGURANÇA DA INFORMAÇÃO */}
            <section id="seguranca" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                8. Segurança da Informação e Armazenamento
              </h2>
              <p className="mt-3">
                Adotamos medidas técnicas, administrativas e organizacionais adequadas para proteger
                os dados pessoais contra perda, vazamento, alteração, destruição ou qualquer forma
                de tratamento ilícito:
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <Lock className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Criptografia Forte</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Dados em trânsito protegidos com HTTPS/TLS 1.3 e dados sensíveis em repouso
                      com algoritmo AES-256.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <UserCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Controle de Acesso (RBAC)
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Acesso restrito apenas a colaboradores autorizados sob princípio do privilégio
                      mínimo e autenticação multifator (MFA).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <Server className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Monitoramento e Logs</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Rastreamento contínuo de anomalias, auditoria de requisições e políticas
                      ativas contra intrusão.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <RefreshCw className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Backups Seguros</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Rotinas periódicas de cópias de segurança criptografadas para garantir
                      resiliência e continuidade de negócio.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. RETENÇÃO E DESCARTE */}
            <section id="retencao-descarte" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                9. Retenção e Ciclo de Vida dos Dados
              </h2>
              <p className="mt-3">
                Os dados pessoais são armazenados somente pelo tempo necessário para atingir as
                finalidades para as quais foram coletados, respeitando os prazos legais e
                regulatórios:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <strong>Dados de Leads e Contato:</strong> Mantidos enquanto houver relacionamento
                  comercial ativo ou até que o titular solicite a revogação do consentimento ou
                  exclusão.
                </li>
                <li>
                  <strong>Dados de Conversas e Atendimentos das Empresas Clientes:</strong> Retidos
                  conforme o plano contratado pela empresa cliente (Controladora) ou até o término
                  do contrato, momento em que os dados são devolvidos ou eliminados com segurança.
                </li>
                <li>
                  <strong>Registros de Conexão e Acesso (IPs):</strong> Mantidos pelo prazo estrito
                  de 6 (seis) meses, em conformidade com o Artigo 15 do Marco Civil da Internet.
                </li>
              </ul>
              <p className="mt-3">
                Após o término do período de retenção, as informações são eliminadas de forma segura
                ou submetidas a processos irreversíveis de anonimização para fins estatísticos
                internos.
              </p>
            </section>

            {/* 10. DIREITOS DO TITULAR */}
            <section id="direitos-titular" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                10. Seus Direitos como Titular (Art. 18 da LGPD)
              </h2>
              <p className="mt-3">
                A Lei Geral de Proteção de Dados assegura a você, titular dos dados, uma série de
                direitos fundamentais que podem ser exercidos de maneira simples e gratuita a
                qualquer momento:
              </p>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Confirmação da existência de tratamento dos seus dados",
                  "Acesso facilitado aos dados tratados pela Uzila",
                  "Correção de dados incompletos, inexatos ou desatualizados",
                  "Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos",
                  "Portabilidade dos dados a outro fornecedor de serviço",
                  "Eliminação dos dados pessoais tratados com base no seu consentimento",
                  "Informação sobre entidades públicas e privadas com as quais compartilhamos dados",
                  "Revogação do consentimento a qualquer momento, de forma simples e rápida",
                ].map((direito, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground">{direito}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4">
                Para exercer qualquer um desses direitos, basta enviar uma mensagem para o nosso
                Encarregado de Dados no e-mail{" "}
                <a
                  href={`mailto:${DPO_EMAIL}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {DPO_EMAIL}
                </a>
                . Responderemos em até 15 (quinze) dias, conforme previsto pela regulamentação da
                ANPD.
              </p>
            </section>

            {/* 11. INSTRUÇÕES PARA EXCLUSÃO DE DADOS (META USER DATA DELETION) */}
            <section
              id="exclusao-dados"
              className="scroll-mt-28 rounded-2xl border-2 border-primary/30 bg-card p-6 shadow-xs sm:p-8"
            >
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase">
                <Trash2 className="h-4 w-4" />
                Instruções de Exclusão de Dados
              </div>

              <h2 className="mt-2 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                11. Como Solicitar a Exclusão dos Seus Dados (Meta Data Deletion Callback &
                Instructions)
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Em conformidade com as diretrizes da <strong>Meta Platforms</strong> e o Artigo 18
                da <strong>LGPD</strong>, garantimos a todos os usuários e clientes o direito de
                requerer a exclusão completa e definitiva de seus dados pessoais associados às
                nossas integrações com WhatsApp e Facebook.
              </p>

              <div className="mt-5 space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Passo a passo para solicitar a exclusão:
                </h3>

                <ol className="list-decimal space-y-3 pl-5 text-xs text-muted-foreground sm:text-sm">
                  <li>
                    <strong>Opção 1 — Via E-mail ao Encarregado (Recomendado):</strong>
                    <br />
                    Envie um e-mail para{" "}
                    <a
                      href={`mailto:${DPO_EMAIL}?subject=Solicitacao%20de%20Exclusao%20de%20Dados%20-%20LGPD`}
                      className="font-semibold text-primary underline"
                    >
                      {DPO_EMAIL}
                    </a>{" "}
                    com o assunto <em>"Solicitação de Exclusão de Dados — LGPD/Meta"</em>,
                    informando:
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                      <li>Seu nome completo;</li>
                      <li>Número de telefone celular / WhatsApp com DDD;</li>
                      <li>Endereço de e-mail associado à solicitação;</li>
                      <li>Nome da empresa com a qual você interagiu (caso aplicável).</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Opção 2 — Via Atendimento no WhatsApp da Uzila:</strong>
                    <br />
                    Envie uma mensagem para o nosso canal de suporte em{" "}
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-whatsapp underline"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>{" "}
                    digitando o comando <em>"Solicitar exclusão de dados"</em>. Nosso atendimento
                    abrirá o protocolo imediatamente.
                  </li>
                  <li>
                    <strong>Opção 3 — Para Usuários da Meta / Facebook Login:</strong>
                    <br />
                    Acesse as Configurações do seu perfil do Facebook &gt; "Aplicativos e Sites"
                    &gt; localize "Uzila" &gt; clique em "Remover". Ao remover, você pode clicar em
                    "Ver aplicativos e sites removidos" e solicitar que a Uzila exclua seus dados.
                  </li>
                </ol>

                <div className="rounded-xl bg-muted/70 p-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Confirmação e Protocolo:</span>
                  </div>
                  <p className="mt-1">
                    Após o recebimento do pedido, enviaremos um código de protocolo de confirmação
                    em até 48 horas úteis. A exclusão definitiva dos dados e registros de conversas
                    será concluída em até 15 (quinze) dias, ressalvadas as hipóteses legais de
                    guarda obrigatória estabelecidas por lei.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. COOKIES */}
            <section id="cookies" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                12. Política de Cookies e Rastreamento
              </h2>
              <p className="mt-3">
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você
                visita um site na internet. Utilizamos cookies de forma criteriosa para:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <strong>Cookies Estritamente Necessários:</strong> Fundamentais para a segurança
                  da navegação, carregamento rápido dos recursos e integridade dos formulários. Não
                  podem ser desativados.
                </li>
                <li>
                  <strong>Cookies de Performance e Análise:</strong> Coletam métricas anônimas de
                  visualizações de página, tempo de permanência e erros de carregamento, permitindo
                  otimizar a experiência da navegação.
                </li>
              </ul>
              <p className="mt-3">
                Você pode gerenciar ou desativar os cookies diretamente nas preferências do seu
                navegador de internet (Chrome, Safari, Edge, Firefox). A desativação de cookies
                estritamente necessários pode afetar algumas funcionalidades do site.
              </p>
            </section>

            {/* 13. TRANSFERÊNCIA INTERNACIONAL */}
            <section id="transferencia-internacional" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                13. Transferência Internacional de Dados
              </h2>
              <p className="mt-3">
                Para oferecer uma infraestrutura de alta velocidade, disponibilidade ininterrupta e
                proteção contra ataques cibernéticos, podemos utilizar serviços em nuvem situados em
                centros de dados no exterior (como servidores da Cloudflare, Meta Platforms e
                provedores de nuvem certificados).
              </p>
              <p className="mt-3">
                Toda e qualquer transferência internacional de dados é realizada com base nos
                Artigos 33 e 34 da LGPD, exigindo de nossos parceiros cláusulas contratuais de
                proteção de dados, garantias de confidencialidade e níveis de segurança
                rigorosamente equivalentes aos exigidos pela legislação brasileira.
              </p>
            </section>

            {/* 14. ENCARREGADO DPO */}
            <section id="encarregado-dpo" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                14. Encarregado pelo Tratamento de Dados (DPO)
              </h2>
              <p className="mt-3">
                Em cumprimento ao Artigo 41 da LGPD, a Uzila designou um Encarregado de Proteção de
                Dados (DPO) para atuar como canal de comunicação entre a empresa, os titulares dos
                dados e a Autoridade Nacional de Proteção de Dados (ANPD).
              </p>

              <div className="mt-4 rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">
                  Canal de Comunicação do Encarregado (DPO)
                </h3>
                <dl className="mt-3 space-y-2 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="font-medium text-foreground">E-mail do DPO:</dt>
                    <dd>
                      <a href={`mailto:${DPO_EMAIL}`} className="text-primary hover:underline">
                        {DPO_EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="font-medium text-foreground">E-mail Institucional:</dt>
                    <dd>
                      <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="font-medium text-foreground">WhatsApp de Contato:</dt>
                    <dd>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="font-medium text-foreground">Prazo de Resposta:</dt>
                    <dd className="text-muted-foreground">Em até 15 (quinze) dias corridos.</dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* 15. ALTERAÇÕES */}
            <section id="alteracoes" className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                15. Alterações desta Política e Vigência
              </h2>
              <p className="mt-3">
                Buscando aprimorar continuamente nossos processos de privacidade e segurança, esta
                Política de Privacidade poderá ser atualizada periodicamente. Sempre que houver
                modificações relevantes nas finalidades ou na forma de tratamento dos dados,
                informaremos os usuários por meio de destaque em nosso site ou pelos canais de
                contato habituais.
              </p>
              <p className="mt-3">
                Recomendamos que você consulte esta página regularmente para se manter informado
                sobre como protegemos as suas informações.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Esta versão foi atualizada e entrou em vigor em {LAST_UPDATED}.
              </p>
            </section>

            {/* CALL TO ACTION BOX */}
            <section className="mt-12 rounded-2xl border border-primary/20 bg-gradient-soft p-6 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">
                    Ficou com alguma dúvida sobre privacidade?
                  </h3>
                  <p className="mt-1.5 max-w-xl text-xs text-muted-foreground sm:text-sm">
                    Nossa equipe e o nosso Encarregado de Dados estão à disposição para responder
                    qualquer dúvida ou atender solicitações de forma rápida e transparente.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="hero">
                    <a href={`mailto:${DPO_EMAIL}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Falar com o DPO
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
