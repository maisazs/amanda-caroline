import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import amandaHero from "@/assets/amanda-hero.png";
import bgAmanda from "@/assets/bg-amanda.png";
import bgTablet from "@/assets/bg-tablet.png";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma sessão.";

const customEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: customEase },
};

const HeroSection = () => {
  return (
    <section className="relative pt-8 pb-10 md:pb-20 lg:pb-32 min-h-[95vh] rounded-b-[24px] lg:rounded-b-[62px] overflow-hidden">
      {/* BG mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:opacity-100 opacity-0 transition-opacity"
        style={{ backgroundImage: `url(${bgAmanda})` }}
        aria-hidden
      />
      {/* BG tablet+ */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:opacity-0 opacity-100 transition-opacity"
        style={{ backgroundImage: `url(${bgTablet})` }}
        aria-hidden
      />
      <div className="container-page relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between mb-[60%] md:mb-[40%] lg:mb-[175px]">
          <span className="font-heading text-lg font-semibold text-[#FBFAF9] tracking-tight">
            Amanda Caroline
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/amandacaroline.psi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FBFAF9] hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button variant="cta" size="default" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agendar sessão
              </a>
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl lg:text-[3.5rem] font-semibold text-[#FBFAF9] mb-6">
              Cuidar da mente é o alicerce do seu bem-estar.
            </h1>
            <p className="text-lg text-[#e7d0b8] mb-8 max-w-[50ch]">
              Encontre equilíbrio e disciplina para sua saúde emocional com
              acompanhamento psicológico online ou presencial.
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <Button variant="cta" size="xl" asChild className="bg-[#e7d0b8] text-secondary-foreground hover:bg-[#e7d0b8]/80">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar minha sessão
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild className="bg-transparent">
                <a
                  href="https://instagram.com/amandacaroline.psi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 text-[#e7d0b8] hover:bg-[#e7d0b8]/80"
                >
                  <Instagram className="w-4 h-4" />
                  @amandacaroline.psi
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
