import { motion } from "framer-motion";
import { Smartphone, Globe, Clock } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const platforms = [
  {
    icon: Smartphone,
    title: "Android",
    description: "App nativo disponível na Google Play",
    status: "Em breve",
  },
  {
    icon: Globe,
    title: "iPhone",
    description: "PWA — instale direto pelo Safari, sem passar pela App Store",
    status: "Em breve",
  },
];

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
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-700 px-4 py-1.5 text-xs font-semibold border border-amber-200">
              <Clock className="w-3.5 h-3.5" />
              Em desenvolvimento
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
                Vem aí — para Android e iPhone
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O LIV+ está sendo cuidadosamente desenvolvido para chegar ao seu celular. App nativo para Android e mobile web para iPhone — sempre gratuito para pacientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {platforms.map((p) => (
                <div
                  key={p.title}
                  className="flex-1 flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{p.title}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">{p.description}</p>
                    <span className="inline-block mt-2 text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              Respire. Estamos construindo isso com cuidado. 💙
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
              alt="Preview do aplicativo LIV+"
              className="w-60 sm:w-72 animate-float drop-shadow-2xl opacity-90"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
