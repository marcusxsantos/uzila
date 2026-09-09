import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fale com a Uzila" },
      {
        name: "description",
        content:
          "Solicite uma demonstração da Uzila. Fale com nosso time pelo WhatsApp (21) 96650-3707 ou envie sua mensagem pelo formulário.",
      },
      { property: "og:title", content: "Contato — Fale com a Uzila" },
      {
        property: "og:description",
        content: "Agende uma demonstração da IA de atendimento no WhatsApp da Uzila.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-gradient-soft pt-28 pb-20 sm:pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Vamos começar essa <span className="text-gradient">conversa?</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Conte um pouco sobre a sua empresa e mostramos, na prática, como a Uzila cuida de cada
              atendimento no WhatsApp.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="card-surface flex items-center gap-4 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-whatsapp text-primary-foreground">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">WhatsApp</span>
                  <span className="block font-semibold">{WHATSAPP_DISPLAY}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="card-surface flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">E-mail</span>
                  <span className="block break-all font-semibold">{EMAIL}</span>
                </span>
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="card-surface flex items-center gap-4 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">Instagram</span>
                  <span className="block font-semibold">{INSTAGRAM_HANDLE}</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
