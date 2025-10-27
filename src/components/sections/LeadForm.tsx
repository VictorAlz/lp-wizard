import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail, Phone, User } from "lucide-react";

export const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Inscrição realizada! 🎉",
      description: "Nossa equipe entrará em contato em breve via WhatsApp.",
    });

    setFormData({ name: "", email: "", whatsapp: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="lead-form" className="py-20 px-4 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pronto para <span className="text-accent">Inovar?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deixe seus dados para falar com nossa equipe e garantir seus bônus exclusivos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-border shadow-xl">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground flex items-center gap-2">
              <User className="w-4 h-4" />
              Nome Completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Melhor E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-foreground flex items-center gap-2">
              <Phone className="w-4 h-4" />
              WhatsApp (com DDD)
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(22) 99999-9999"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-14 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Quero meus bônus! 🚀"}
          </Button>

          <p className="text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            Seus dados estão seguros. Não enviamos spam.
          </p>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Ao se inscrever, você concorda em receber comunicações da CASE EJ sobre cursos e eventos.
          </p>
        </div>
      </div>
    </section>
  );
};
