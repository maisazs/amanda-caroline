import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma sessão.";

const MobileCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-border md:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <Button variant="cta" size="lg" className="w-full" asChild>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          Agendar minha sessão
        </a>
      </Button>
    </div>
  );
};

export default MobileCta;
