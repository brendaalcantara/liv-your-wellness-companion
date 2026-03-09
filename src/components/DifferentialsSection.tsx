import { motion } from "framer-motion";
import { Check } from "lucide-react";

const diffs = [
  "Específico para doenças inflamatórias e autoimunes",
  "Interface simples, pensada para quem vive com dor e fadiga",
  "BASDAI integrado ao dia a dia",
  "Previsão de crises baseada em sintomas",
  "Compartilhamento seguro com médicos (código temporário)",
  "Privacidade total: você controla seus dados",
  "Modo offline disponível",
  "Sem venda de dados pessoais",
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 bg-section-gradient" id="diferenciais">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Por que escolher o <span className="text-gradient-primary">LIV+</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Criado com cuidado, por quem entende a rotina de quem vive com doenças crônicas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {diffs.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-card"
            >
              <div className="w-6 h-6 rounded-full bg-mint/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-mint" />
              </div>
              <span className="text-foreground font-medium">{d}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
