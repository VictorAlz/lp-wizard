import { Building2, GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Sobre a <span className="text-accent">CASE EJ</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A CASE EJ é a <strong>Empresa Júnior de Tecnologia da FEMASS</strong>. Como uma instituição sem fins
              lucrativos, nossa missão é democratizar a educação tecnológica de ponta em Macaé-RJ.
            </p>
            <p className="text-lg text-muted-foreground">
              Formada por estudantes apaixonados por tecnologia e inovação, oferecemos uma abordagem única de ensino
              que combina teoria acadêmica com a prática do mercado.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Empresa Júnior</h4>
                  <p className="text-sm text-muted-foreground">
                    Vinculada à FEMASS, com rigor acadêmico e metodologia comprovada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sem Fins Lucrativos</h4>
                  <p className="text-sm text-muted-foreground">
                    Nosso objetivo é educação de qualidade e desenvolvimento da comunidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Macaé-RJ</h4>
                  <p className="text-sm text-muted-foreground">
                    Levando inovação e tecnologia para a região Norte Fluminense.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary opacity-20 blur-3xl absolute inset-0" />
            <div className="relative rounded-2xl bg-card border border-border p-8 space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="h-px bg-border" />
              <div className="text-center">
                <div className="text-6xl font-bold text-secondary mb-2">100+</div>
                <div className="text-muted-foreground">Alunos Formados</div>
              </div>
              <div className="h-px bg-border" />
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Projetos Entregues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
