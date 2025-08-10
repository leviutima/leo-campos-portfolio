// src/components/Header.tsx
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Página inicial"
        >
          <img
            src={logo}
            alt="Logo Leonardo Campos - English Teacher"
            className="w-[75px] md:w-[85px] transition-transform duration-300 group-hover:scale-105"
          />
          <span className=" font-bold text-lg md:text-xl text-green-800 tracking-tight hidden sm:block">
            Leonardo Campos
          </span>
        </a>

        {/* Redes sociais */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-gray-600 hover:text-luxury-green transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-green-800" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-luxury-green transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-green-800 " />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-luxury-green transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-green-800" />
          </a>
        </div>
      </nav>
    </header>
  );
}
