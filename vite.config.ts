import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages normalmente publica o site numa subpasta: /<repo>/
  // Em produção, o Vite usa `base` para gerar URLs corretas para assets e rotas.
  // Configure via env var (ex: VITE_BASE=/amanda-caroline/) ou caia no default.
  base: process.env.VITE_BASE ?? (mode === "production" ? "/amanda-caroline/" : "/"),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
