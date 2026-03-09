import { motion } from "framer-motion";
import { Lock, Shield, Eye, UserCheck } from "lucide-react";

const items = [
  { icon: Shield, title: "Conformidade LGPD", desc: "O LIV+ segue rigorosamente a Lei Geral de Proteção de Dados." },
  { icon: Lock, title: "Dados criptografados", desc: "Seus dados de saúde são criptografados e nunca vendidos." },
  { icon: Eye, title: "Você no controle", desc: "Você controla quem acessa suas informações." },
  { icon: UserCheck, title: "Autorização obrigatória", desc: "Compartilhamento com médicos sempre requer sua autorização." },
];

const PrivacySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Seus dados, suas regras
          </h2>
          <p className="text-muted-foreground text-lg">
            Segurança e privacidade são prioridades absolutas no LIV+.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card shadow-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-semibold font-heading text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
