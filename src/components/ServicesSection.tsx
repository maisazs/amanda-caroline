import { motion } from "framer-motion";
import { Video, MapPin } from "lucide-react";

const customEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: customEase },
};

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-page">
        <motion.div {...fadeUp} className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Atendimento
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Como funciona
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0 }}
            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <div className="bg-secondary rounded-lg p-3 w-fit mb-6">
              <Video className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
              Online
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Sessões por videochamada segura</li>
              <li>Atendimento de qualquer lugar</li>
              <li>Praticidade e conforto</li>
              <li>Mesma qualidade do presencial</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <div className="bg-secondary rounded-lg p-3 w-fit mb-6">
              <MapPin className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
              Presencial
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Clínica na Chácara Santo Antônio</li>
              <li>São Paulo — SP</li>
              <li>Ambiente acolhedor e reservado</li>
              <li>Fácil acesso</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
