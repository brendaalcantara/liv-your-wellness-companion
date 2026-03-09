import { motion } from "framer-motion";
import { Activity, AlertTriangle, QrCode, Lock, FileBarChart, Clock } from "lucide-react";

const proFeatures = [
  { icon: Activity, text: "Dashboard clínico com evolução de BASDAI, dor e adesão" },
  { icon: AlertTriangle, text: "Alertas inteligentes de piora do quadro clínico" },
  { icon: QrCode, text: "Acesso temporário via código/QR Code, autorizado pelo paciente" },
  { icon: Lock, text: "Controle total e privacidade garantida pelo paciente" },
  { icon: FileBarChart, text: "Relatórios estruturados para apoio à tomada de decisão" },
];

const ProSection = () => {
  return (
    <section className="py-24 bg-pro-gradient text-primary-foreground" id="pro">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-sm font-medium">
                  Para Profissionais de Saúde
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-sm font-semibold border border-amber-400/30">
                  <Clock className="w-3.5 h-3.5" />
                  Em Desenvolvimento
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
                LIV+ Pro: a ferramenta clínica que sua equipe merece
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Estamos construindo uma ferramenta dedicada a profissionais de saúde — para que você tenha acesso organizado, ético e seguro às informações dos seus pacientes, sempre com o consentimento deles.
              </p>
              <p className="text-primary-foreground/60 text-sm mt-3">
                Estamos desenhando cada detalhe para que a ferramenta chegue com qualidade — e respeite o tempo e a privacidade de cada paciente.
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProSection;
