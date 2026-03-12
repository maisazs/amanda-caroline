import { motion } from "framer-motion";
import amandaAbout from "@/assets/amanda-about.png";

const customEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: customEase },
};

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="flex justify-center md:justify-start">
            <img
              src={amandaAbout}
              alt="Amanda Caroline em seu consultório"
              className="w-full max-w-sm rounded-xl image-outline object-cover aspect-[3/4]"
              loading="lazy"
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Sobre
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Uma jornada guiada pela disciplina e acolhimento.
            </h2>
            <div className="space-y-4 text-muted-foreground max-w-[55ch]">
              <p>
                Sou Amanda Caroline, psicóloga clínica e atleta Wellness de fisiculturismo natural. 
                Acredito que a mesma disciplina e constância que transformam o corpo são ferramentas 
                poderosas no cuidado da mente.
              </p>
              <p>
                Minha abordagem integra o cuidado emocional à sua rotina de autocuidado, 
                construindo uma base sólida para uma vida mais equilibrada e consciente. 
                Atendo online — para sua comodidade — e presencialmente na Chácara Santo Antônio, São Paulo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
