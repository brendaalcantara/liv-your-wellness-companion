import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    subtitle: "Sempre disponível",
    price: "R$ 0",
    cta: "Começar Grátis",
    variant: "heroOutline" as const,
    features: [
      "Registro de sintomas e medicamentos",
      "Calendário de saúde",
      "Lembretes básicos",
      "Exportação simples (até 15 dias)",
      "Sem anúncios em telas de emergência",
    ],
  },
  {
    name: "Premium",
    subtitle: "Mensal ou anual",
    price: "R$ 14,90",
    period: "/mês",
    cta: "Assinar Premium",
    variant: "hero" as const,
    highlight: true,
    features: [
      "Tudo do plano Gratuito",
      "Relatórios avançados e gráficos",
      "Análise de padrões e insights",
      "Google Fit e Apple Health",
      "Backup em nuvem",
      "Modo Cuidador/Familiar",
      "Suporte prioritário",
    ],
  },
  {
    name: "Profissional",
    subtitle: "Para médicos e clínicas",
    price: "Sob consulta",
    cta: "Falar com Equipe",
    variant: "heroOutline" as const,
    features: [
      "Dashboard clínico completo",
      "Acesso a múltiplos pacientes",
      "Alertas clínicos automatizados",
      "Gestão de equipe multidisciplinar",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-section-gradient" id="planos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Planos que cabem na sua vida
          </h2>
          <p className="text-muted-foreground text-lg">
            O básico será sempre gratuito. O plano premium ajuda a manter e melhorar o LIV+.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-card shadow-hover border-2 border-primary/30 relative"
                  : "bg-card shadow-card border border-border/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta-gradient text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Mais popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold font-heading text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} size="lg" className="w-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
