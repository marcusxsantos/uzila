import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setLoading(true);

    const nome = String(data.get("nome") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const whatsapp = String(data.get("whatsapp") ?? "");
    const email = String(data.get("email") ?? "");
    const mensagem = String(data.get("mensagem") ?? "");

    const texto = [
      `Olá, Uzila! Meu nome é ${nome}.`,
      empresa ? `Empresa: ${empresa}` : "",
      `WhatsApp: ${whatsapp}`,
      `E-mail: ${email}`,
      mensagem ? `Mensagem: ${mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem pronta!", {
        description: "Vamos continuar a conversa no WhatsApp.",
      });
      window.open(
        `https://wa.me/5521966503707?text=${encodeURIComponent(texto)}`,
        "_blank",
        "noopener",
      );
      form.reset();
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="card-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" name="nome" required placeholder="Seu nome" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="empresa">Empresa</Label>
          <Input
            id="empresa"
            name="empresa"
            placeholder="Nome da sua empresa"
            autoComplete="organization"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp</Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            required
            placeholder="(00) 00000-0000"
            inputMode="tel"
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="voce@empresa.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="mensagem">Mensagem</Label>
          <Textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            placeholder="Conte um pouco sobre o seu atendimento hoje."
          />
        </div>
      </div>

      <Button type="submit" variant="hero" size="lg" className="mt-6 w-full" disabled={loading}>
        {loading ? <Loader2 className="animate-spin" /> : <Send />}
        Enviar mensagem
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Ao enviar, você continua a conversa direto no WhatsApp da Uzila.
      </p>
    </form>
  );
}
