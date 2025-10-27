import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">FEMASS Macaé-RJ</span>
        </div>

        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
          Aprenda Tecnologia na Prática:
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
            A Consultoria Educacional
          </span>
          <br />
          que Macaé Precisava
        </h1>

        <p className="mb-8 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
          Somos a <strong className="text-accent">CASE EJ</strong>. Cursos de tecnologia com foco em inovação e projetos reais,
          aproximando você do mercado.
        </p>

        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-xl shadow-2xl animate-pulse-glow group"
        >
          Quero garantir minha vaga
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "100+", label: "Alunos Impactados" },
            { number: "20+", label: "Projetos Reais" },
            { number: "5+", label: "Anos de Experiência" },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
