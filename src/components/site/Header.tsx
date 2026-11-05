import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO_URL, WHATSAPP_LINK } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "A Uzila", href: "/#uzila" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Casos de uso", href: "/#casos-de-uso" },
  { label: "FAQ", href: "/#faq" },
];

export function Header({ solid }: { solid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isSolid = solid ?? (pathname !== "/" || scrolled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSolid ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img
            src={LOGO_URL}
            alt="Uzila"
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 object-contain transition-all duration-300 sm:h-12 sm:w-12"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className={cn(
                "text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl",
                isSolid ? "text-foreground" : "text-primary-foreground",
              )}
            >
              Uzila
            </span>
            <span
              className={cn(
                "text-[11px] font-medium transition-colors duration-300 sm:text-xs",
                isSolid ? "text-muted-foreground" : "text-primary-foreground/70",
              )}
            >
              Multiplique tempo. Amplifique propósito.
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/contato"
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
            >
              Contato
            </Link>
          </nav>

          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/contato">Solicitar demonstração</Link>
          </Button>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              Contato
            </Link>
            <div className="mt-3 flex flex-col gap-2">
              <Button asChild variant="hero">
                <Link to="/contato" onClick={() => setOpen(false)}>
                  Solicitar demonstração
                </Link>
              </Button>
              <Button asChild variant="whatsapp">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
