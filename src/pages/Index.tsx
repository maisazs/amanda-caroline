import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ForWhomSection from "@/components/ForWhomSection";
import DifferentialSection from "@/components/DifferentialSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ForWhomSection />
      <DifferentialSection />
      <ServicesSection />
      <BenefitsSection />
      <CtaSection />
      <Footer />
      <MobileCta />
    </div>
  );
};

export default Index;
