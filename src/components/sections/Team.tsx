import { Users } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    { name: "Membro 1", role: "Instrutor de IA" },
    { name: "Membro 2", role: "Especialista em Web" },
    { name: "Membro 3", role: "Mentor de Projetos" },
    { name: "Membro 4", role: "Coordenador" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Nossa <span className="text-accent">Equipe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os especialistas que vão guiar sua jornada na tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-square mb-4 rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <Users className="w-16 h-16 text-primary/40 group-hover:text-accent/60 transition-colors" />
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
