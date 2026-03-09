import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const DownloadSection = () => {
  return (
    <section className="py-24 bg-download-gradient relative overflow-hidden" id="download">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-mint/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground">
              Comece sua jornada de cuidado agora
            </h2>
            <p className="text-lg text-muted-foreground">
              Baixe o LIV+ gratuitamente e transforme a forma como você cuida da sua saúde. Você não está sozinho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 gap-3" asChild>
                <a href="#" aria-label="Baixar na Google Play">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.11 12l2.588-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302-8.635-8.635z"/></svg>
                  Google Play
                </a>
              </Button>
              <Button variant="hero" size="lg" className="text-base px-8 py-6 gap-3" asChild>
                <a href="#" aria-label="Baixar na App Store">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  App Store
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Respire. Estamos com você. 💙
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={appMockup}
              alt="Baixe o aplicativo LIV+"
              className="w-60 sm:w-72 animate-float drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
