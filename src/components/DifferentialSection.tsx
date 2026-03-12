import { motion } from "framer-motion";

const customEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: customEase },
};

const DifferentialSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Diferencial
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Mente e corpo caminham juntos.
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch] mx-auto">
              Sua mente e seu corpo não são entidades separadas. A mesma disciplina e 
              constância que transformam sua saúde física são ferramentas poderosas no 
              processo terapêutico. Minha abordagem integra o cuidado mental à sua rotina 
              de autocuidado, construindo uma base sólida para uma vida mais equilibrada 
              e consciente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
