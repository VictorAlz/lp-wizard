import { Gift, Rocket, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const bonuses = [
  {
    icon: Rocket,
    number: "01",
    title: "Workshop de IA Generativa",
    description: "Domine as ferramentas de inteligência artificial que estão revolucionando o mercado.",
  },
  {
    icon: Target,
    number: "02",
    title: "Sessão de Carreira Individual",
    description: "Consultoria personalizada para acelerar sua transição para a área de tecnologia.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Acesso Vitalício ao Material",
    description: "Tenha acesso permanente a todo conteúdo do curso, incluindo atualizações futuras.",
  },
];

export const Bonuses = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
            <Gift className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Oferta Exclusiva</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Inscreva-se Hoje e Desbloqueie
            <br />
            <span className="text-accent">3 Bônus Exclusivos!</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Estes bônus especiais são apenas para os primeiros inscritos. Não perca essa oportunidade!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-accent/30">{bonus.number}</div>
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{bonus.title}</h3>
                <p className="text-primary-foreground/70">{bonus.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-12 py-6 rounded-xl shadow-2xl animate-pulse-glow"
          >
            Quero Meus Bônus Agora!
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/60">
            ⏰ Vagas limitadas • Bônus válidos apenas nesta semana
          </p>
        </div>
      </div>
    </section>
  );
};
