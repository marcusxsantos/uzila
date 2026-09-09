import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  LOGO_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={LOGO_URL}
            alt="Uzila"
            width={160}
            height={56}
            loading="lazy"
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Inteligência artificial que transforma conversas de WhatsApp em relações duradouras.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Links rápidos</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="/#uzila" className="transition-colors hover:text-primary">
                Conheça a Uzila
              </a>
            </li>
            <li>
              <a href="/#como-funciona" className="transition-colors hover:text-primary">
                Como funciona
              </a>
            </li>
            <li>
              <a href="/#beneficios" className="transition-colors hover:text-primary">
                Benefícios
              </a>
            </li>
            <li>
              <Link to="/contato" className="transition-colors hover:text-primary">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Soluções</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>Atendimento 24h no WhatsApp</li>
            <li>Agendamento automático</li>
            <li>Organização de clientes</li>
            <li>Lembretes e follow-up</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contato</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 break-all transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {EMAIL}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram da Uzila: ${INSTAGRAM_HANDLE}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn da Uzila"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Uzila. Todos os direitos reservados.</p>
          <Link to="/privacidade" className="transition-colors hover:text-primary">
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
