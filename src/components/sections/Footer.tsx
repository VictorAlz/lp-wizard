import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              CASE <span className="text-accent">EJ</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Empresa Júnior de Tecnologia da FEMASS. Educação tecnológica de qualidade e sem fins lucrativos.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/70">Macaé, Rio de Janeiro</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contato@caseej.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  contato@caseej.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Redes Sociais</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://business.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors group"
                aria-label="Google Meu Negócio"
              >
                <MapPin className="w-5 h-5 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} CASE EJ - FEMASS. Todos os direitos reservados.</p>
            <p>
              Desenvolvido com{" "}
              <span className="text-accent">❤</span> pela equipe CASE EJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
