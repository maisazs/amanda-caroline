import { motion } from "framer-motion";
import { Eye, ShieldCheck, Sprout, Heart } from "lucide-react";

const benefits = [
  { icon: Eye, title: "Clareza emocional", desc: "Compreenda melhor seus sentimentos e reações." },
  { icon: ShieldCheck, title: "Gestão da ansiedade", desc: "Desenvolva estratégias para lidar com pensamentos acelerados." },
  { icon: Heart, title: "Autoestima fortalecida", desc: "Construa uma relação mais saudável consigo mesma(o)." },
  { icon: Sprout, title: "Hábitos saudáveis", desc: "Integre o cuidado mental à sua rotina de bem-estar." },
];

const customEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: customEase },
};

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <motion.div {...fadeUp} className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Benefícios
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground max-w-2xl mx-auto">
            O que a terapia pode construir em você
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: customEase, delay: i * 0.06 }}
              className="flex gap-4"
            >
              <div className="bg-secondary rounded-lg p-2 w-fit h-fit shrink-0">
                <b.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 font-heading">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
