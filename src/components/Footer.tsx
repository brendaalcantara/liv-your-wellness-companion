import { Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  "Sobre": ["Sobre o LIV+", "Funcionalidades", "Como funciona", "Para Profissionais"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-heading text-2xl font-bold text-primary-foreground">
              LIV<span className="text-mint">+</span>
            </span>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
              Seu companheiro no cuidado com doenças crônicas. Vamos juntos nessa jornada.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Rede social"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-primary-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 LIV+. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Feito com cuidado no Brasil 🇧🇷
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
