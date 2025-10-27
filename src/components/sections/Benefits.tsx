import { Users, Lightbulb, Briefcase, Heart } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Mentoria Próxima",
    description: "Suporte direto e personalizado dos nossos especialistas durante toda sua jornada.",
  },
  {
    icon: Lightbulb,
    title: "Foco em Inovação",
    description: "Aprenda as tecnologias mais atuais e relevantes para o mercado de trabalho.",
  },
  {
    icon: Briefcase,
    title: "Projetos Reais",
    description: "Trabalhe em casos práticos e construa um portfólio profissional desde o início.",
  },
  {
    icon: Heart,
    title: "Educação Acessível",
    description: "Sem fins lucrativos. Nosso objetivo é democratizar a educação tecnológica.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            O Que Você <span className="text-accent">Ganha?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os diferenciais que tornam a CASE EJ única no mercado educacional de tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
