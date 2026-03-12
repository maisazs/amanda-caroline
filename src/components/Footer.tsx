import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-semibold text-foreground">Amanda Caroline</p>
            <p className="text-sm text-muted-foreground">Psicóloga Clínica — CRP XX/XXXXX</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/amandacaroline.psi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              <Instagram className="w-4 h-4" />
              @amandacaroline.psi
            </a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-8">
          © {new Date().getFullYear()} Amanda Caroline. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
