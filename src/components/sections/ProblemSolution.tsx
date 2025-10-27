import { AlertCircle, CheckCircle2 } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="space-y-6 p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-destructive" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">O Problema</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Cursos tradicionais são <strong>teóricos demais</strong>?
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                <span>Professores distantes e inacessíveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                <span>Conteúdo desatualizado do mercado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">✗</span>
                <span>Falta de prática em projetos reais</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold">Nossa Solução</h2>
            </div>
            <p className="text-lg">
              Nosso método de <strong className="text-accent">consultoria educacional</strong> garante que você aprenda
              aplicando em projetos reais, com apoio direto de especialistas.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" />
                <span>Mentoria próxima e acessível</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" />
                <span>Conteúdo alinhado com o mercado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" />
                <span>Aprendizado baseado em projetos reais</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
