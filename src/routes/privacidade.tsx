import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { EMAIL } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Uzila" },
      {
        name: "description",
        content:
          "Saiba como a Uzila coleta, utiliza e protege os dados pessoais de quem entra em contato com a nossa plataforma de atendimento por WhatsApp.",
      },
      { property: "og:title", content: "Política de Privacidade — Uzila" },
      {
        property: "og:description",
        content: "Como a Uzila coleta, utiliza e protege os dados dos seus clientes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
