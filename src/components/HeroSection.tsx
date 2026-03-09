import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-hero-gradient">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-lavender/8 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Em desenvolvimento
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground">
                Android · iPhone (PWA)
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight text-foreground">
              Seu companheiro no cuidado com{" "}
              <span className="text-gradient-primary">doenças crônicas</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              O LIV+ está sendo construído para quem vive com doenças inflamatórias e autoimunes — um app feito com cuidado real, para uma rotina que nem sempre é fácil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
                <a href="#funcionalidades">Conheça o app</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
                <a href="#pro">Para Profissionais</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ✨ Sempre gratuito para pacientes · Sem anúncios invasivos
            </p>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={appMockup}
                alt="LIV+ app mostrando dashboard de saúde com gráficos e calendário"
                className="w-72 sm:w-80 lg:w-96 animate-float drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
