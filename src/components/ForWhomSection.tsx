import { motion } from "framer-motion";
import { Brain, HeartPulse, Battery, Repeat, Scale, Sparkles } from "lucide-react";

const items = [
  { icon: Brain, label: "Ansiedade ou pensamentos acelerados" },
  { icon: HeartPulse, label: "Estresse e sobrecarga emocional" },
  { icon: Battery, label: "Esgotamento e falta de energia" },
  { icon: Repeat, label: "Dificuldade em manter hábitos saudáveis" },
  { icon: Scale, label: "Busca por mais equilíbrio na vida" },
  { icon: Sparkles, label: "Desejo de se conhecer melhor" },
];

const customEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: customEase },
};

const ForWhomSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-page">
        <motion.div {...fadeUp} className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Para quem
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground max-w-2xl mx-auto">
            A terapia pode ser o seu espaço para...
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: customEase, delay: i * 0.06 }}
              className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              <div className="bg-secondary rounded-lg p-2 w-fit mb-4">
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              <p className="text-foreground font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
