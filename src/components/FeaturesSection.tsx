import { motion } from "framer-motion";
import { Calendar, ClipboardList, LineChart, FileText, Bell, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Calendário de Saúde",
    desc: "Organize aplicações de medicamentos, exames e consultas em um só lugar. Receba lembretes inteligentes.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ClipboardList,
    title: "Diário de Sintomas",
    desc: "Registre dor, fadiga, rigidez, humor e BASDAI de forma rápida e visual.",
    color: "bg-mint/10 text-mint",
  },
  {
    icon: LineChart,
    title: "Gráficos Inteligentes",
    desc: "Veja a evolução da sua dor, adesão ao tratamento e identifique padrões de crises.",
    color: "bg-lavender/10 text-lavender",
  },
  {
    icon: FileText,
    title: "Relatórios Médicos",
    desc: "Gere relatórios automáticos para levar às consultas. Economize tempo e melhore a comunicação.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bell,
    title: "Modo Crise",
    desc: "Acesso rápido a técnicas de respiração, checklist de emergência e contatos de apoio.",
    color: "bg-mint/10 text-mint",
  },
  {
    icon: HeartHandshake,
    title: "Ferramentas de Autocuidado",
    desc: "Mini alongamentos, meditações rápidas e sugestões de rotina para dias difíceis.",
    color: "bg-lavender/10 text-lavender",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background" id="funcionalidades">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Tudo o que você precisa, em um só lugar
          </h2>
          <p className="text-muted-foreground text-lg">
            Funcionalidades pensadas para facilitar sua rotina e melhorar sua qualidade de vida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300 border border-border/50"
            >
              <div className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
