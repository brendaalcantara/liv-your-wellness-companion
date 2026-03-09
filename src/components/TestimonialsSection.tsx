import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana C.",
    condition: "Espondilite anquilosante",
    text: "O LIV+ mudou a forma como lido com minha doença. Agora consigo mostrar pro meu médico exatamente como foram meus dias.",
  },
  {
    name: "Roberto M.",
    condition: "Artrite reumatoide",
    text: "Finalmente um app que entende que nem todo dia é igual. O modo crise me ajuda demais nos dias ruins.",
  },
  {
    name: "Juliana S.",
    condition: "Lúpus",
    text: "Simples, bonito e acolhedor. Não preciso ser expert em tecnologia pra usar. Recomendo muito.",
  },
];

const TestimonialsSection = () => {
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
            O que dizem sobre o LIV+
          </h2>
          <p className="text-muted-foreground text-lg">
            Histórias reais de quem encontrou mais qualidade de vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card shadow-card border border-border/50 relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-mint text-mint" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.condition}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
