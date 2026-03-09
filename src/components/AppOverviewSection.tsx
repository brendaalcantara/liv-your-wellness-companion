import { motion } from "framer-motion";
import { CalendarDays, TrendingUp, Stethoscope, ShieldAlert, HeartPulse, Users } from "lucide-react";

const moments = [
  {
    icon: CalendarDays,
    color: "bg-primary/10 text-primary",
    title: "No dia a dia",
    description:
      "Registre sintomas, medicamentos e aplicações em segundos. O LIV+ aprende sua rotina e envia lembretes no momento certo — para você nunca esquecer uma dose ou consulta.",
    items: [
      "Diário de sintomas: dor, fadiga, rigidez e humor",
      "Calendário de tratamento com alertas inteligentes",
      "Registro rápido de BASDAI integrado à rotina",
    ],
  },
  {
    icon: TrendingUp,
    color: "bg-mint/10 text-mint",
    title: "Para entender sua saúde",
    description:
      "Transformamos seus registros em gráficos claros que mostram padrões, tendências e a sua evolução ao longo do tempo. Informação que gera autonomia.",
    items: [
      "Gráficos de evolução da dor e adesão ao tratamento",
      "Identificação de padrões e gatilhos de crises",
      "Insights personalizados baseados nos seus dados",
    ],
  },
  {
    icon: Stethoscope,
    color: "bg-lavender/10 text-lavender",
    title: "Na consulta médica",
    description:
      "Chegar à consulta preparado faz toda a diferença. O LIV+ gera relatórios automáticos com seu histórico completo — sem depender da memória.",
    items: [
      "Relatórios prontos para levar ao médico",
      "Histórico de sintomas e medicamentos organizado",
      "Compartilhamento seguro via código temporário",
    ],
  },
  {
    icon: ShieldAlert,
    color: "bg-primary/10 text-primary",
    title: "No momento de crise",
    description:
      "Nos dias mais difíceis, o LIV+ está ao seu lado. O Modo Crise oferece acesso imediato ao que você mais precisa — sem precisar navegar pelo app.",
    items: [
      "Técnicas de respiração e alívio guiado",
      "Checklist de emergência personalizável",
      "Contatos de apoio com um toque",
    ],
  },
  {
    icon: HeartPulse,
    color: "bg-mint/10 text-mint",
    title: "Para cuidar de si",
    description:
      "O autocuidado é parte do tratamento. O LIV+ traz sugestões gentis de rotina, mini alongamentos e meditações rápidas — pensadas para quem vive com dor e fadiga.",
    items: [
      "Mini alongamentos adaptados para dias difíceis",
      "Meditações guiadas de 2 a 5 minutos",
      "Sugestões de rotina que respeitam seus limites",
    ],
  },
  {
    icon: Users,
    color: "bg-lavender/10 text-lavender",
    title: "Com sua rede de apoio",
    description:
      "Cuidar não é tarefa solitária. O Modo Cuidador permite que alguém de confiança acompanhe sua saúde — sempre com sua autorização.",
    items: [
      "Modo Cuidador/Familiar com acesso controlado",
      "Notificações para a sua rede de apoio",
      "Privacidade total: você decide o que é compartilhado",
    ],
  },
];

const AppOverviewSection = () => {
  return (
    <section className="py-24 bg-section-gradient" id="como-funciona">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            O LIV+ com você em cada momento
          </h2>
          <p className="text-muted-foreground text-lg">
            Do registro diário à consulta médica, da crise ao autocuidado — o app foi feito para acompanhar a vida real de quem vive com uma doença crônica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {moments.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 flex flex-col gap-5"
            >
              <div className={`w-14 h-14 rounded-xl ${m.color} flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}>
                <m.icon className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-semibold font-heading text-foreground mb-2">{m.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{m.description}</p>
              </div>

              <ul className="space-y-2 mt-auto">
                {m.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint mt-1.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppOverviewSection;
