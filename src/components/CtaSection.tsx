import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma sessão.";

const customEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: customEase },
};

const CtaSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container-page">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Pronto(a) para começar sua jornada?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-[50ch] mx-auto">
            O primeiro passo é o mais importante. Agende sua sessão e descubra 
            como a terapia pode fortalecer seu equilíbrio emocional.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="gap-2">
              Agendar minha sessão
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
