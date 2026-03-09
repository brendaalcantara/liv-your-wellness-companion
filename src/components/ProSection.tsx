import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Activity, AlertTriangle, QrCode, Lock, FileBarChart } from "lucide-react";
import proMockup from "@/assets/pro-mockup.png";

const proFeatures = [
  { icon: Activity, text: "Dashboard clínico com evolução de BASDAI, dor e adesão" },
  { icon: AlertTriangle, text: "Alertas inteligentes de piora" },
  { icon: QrCode, text: "Acesso temporário via código/QR Code" },
  { icon: Lock, text: "Controle total pelo paciente" },
  { icon: FileBarChart, text: "Relatórios estruturados para tomada de decisão" },
];

const ProSection = () => {
  return (
    <section className="py-24 bg-pro-gradient text-primary-foreground" id="pro">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-sm font-medium mb-4">
                Para Profissionais
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
                LIV+ Pro: Ferramenta clínica para sua equipe
              </h2>
              <p className="text-primary-foreground/70 text-lg">
                Acesse informações organizadas dos seus pacientes de forma segura e ética.
              </p>
            </div>

            <div className="space-y-4">
              {proFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <span className="text-primary-foreground/90">{f.text}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#contato">Solicite Acesso ao LIV+ Pro</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={proMockup}
              alt="Dashboard clínico do LIV+ Pro mostrando dados de pacientes"
              className="w-64 sm:w-80 drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProSection;
