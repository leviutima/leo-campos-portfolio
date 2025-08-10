// src/components/Header.tsx
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Logo Leonardo Campos - English Teacher"
            className="w-[85px] transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-playfair font-bold text-xl text-luxury-green tracking-tight hidden sm:block">
            Leonardo Campos
          </span>
        </a>

        {/* Links / Social */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-gray-600 hover:text-luxury-green transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-luxury-green transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={22} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-luxury-green transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={22} />
          </a>
        </div>
      </nav>
    </header>
  );
}
