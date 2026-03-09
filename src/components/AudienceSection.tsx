import { motion } from "framer-motion";
import { Heart, Bone, Sun, Fingerprint, Flame, ShieldPlus } from "lucide-react";

const conditions = [
  { icon: Bone, label: "Espondilite anquilosante" },
  { icon: Fingerprint, label: "Artrite reumatoide" },
  { icon: ShieldPlus, label: "Lúpus" },
  { icon: Sun, label: "Psoríase e artrite psoriásica" },
  { icon: Flame, label: "Fibromialgia" },
  { icon: Heart, label: "Outras doenças autoimunes" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AudienceSection = () => {
  return (
    <section className="py-24 bg-section-gradient" id="para-quem">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Feito para quem vive com{" "}
            <span className="text-gradient-primary">doenças crônicas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Se você precisa acompanhar sintomas diariamente, usar medicamentos biológicos, ou entender o que causa suas crises, o LIV+ foi feito para você.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {conditions.map((cond) => (
            <motion.div
              key={cond.label}
              variants={item}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <cond.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">{cond.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSection;
