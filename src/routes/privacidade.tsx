import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { EMAIL } from "@/lib/site";

const TITLE = "Política de Privacidade — Uzila";
const DESCRIPTION =
  "Conheça a política de privacidade da Uzila e saiba como tratamos com segurança os dados pessoais de clientes e atendimentos no WhatsApp em conformidade com a LGPD.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uzila.com.br/privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://uzila.com.br/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Política de Privacidade</h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            A Uzila respeita a sua privacidade. Esta política explica quais dados coletamos, como os
            utilizamos e quais são os seus direitos.
          </p>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Dados coletados</h2>
            <p className="mt-2">
              Coletamos nome, empresa, telefone/WhatsApp, e-mail e o conteúdo das mensagens enviadas
              voluntariamente por meio dos nossos formulários e canais de atendimento.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Uso das informações</h2>
            <p className="mt-2">
              Utilizamos os dados exclusivamente para responder solicitações, apresentar a
              plataforma, agendar demonstrações e dar continuidade ao relacionamento comercial.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Compartilhamento</h2>
            <p className="mt-2">
              Não vendemos nem cedemos dados pessoais a terceiros. O compartilhamento ocorre apenas
              com fornecedores de tecnologia necessários à operação do serviço.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Seus direitos</h2>
            <p className="mt-2">
              A qualquer momento você pode solicitar acesso, correção ou exclusão dos seus dados
              pelo e-mail{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
