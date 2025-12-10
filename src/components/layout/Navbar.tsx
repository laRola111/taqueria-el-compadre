"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext"; // Hook para usar el idioma

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Extraemos las traducciones (t), el idioma actual y la función para cambiarlo
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función inteligente para WhatsApp (mensaje según idioma)
  const handleOrderClick = () => {
    const phoneNumber = "15127602661";
    const message = language === 'es' 
      ? "Hola, vengo de la web y quiero hacer un pedido." 
      : "Hello, I'm coming from the website and I'd like to place an order.";
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Definimos los links usando el diccionario (t)
  const navLinks = [
    { name: t.navbar.home, href: "#hero" },
    { name: t.navbar.menu, href: "#menu" },
    { name: t.navbar.breakfast, href: "#breakfast" },
    { name: t.navbar.location, href: "#location" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#2e1a10]/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="relative z-50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logomanzano.png"
              alt="El Compadre Manzano Logo"
              width={80}
              height={80}
              className="object-contain w-16 h-16 md:w-20 md:h-20"
              priority
            />
          </motion.div>
        </Link>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-bold text-lg transition-colors hover:text-[#f2cc65] font-heading tracking-wide",
                // Si no hay scroll, texto oscuro (para verse en fondo claro). Si hay scroll, texto blanco.
                isScrolled ? "text-white" : "text-[#2e1a10]"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Selector de Idioma (Toggle) */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "font-bold text-sm px-3 py-1 rounded-full transition-all border flex items-center gap-1",
              isScrolled 
                ? "bg-white/10 text-white border-white/20 hover:bg-white/20" 
                : "bg-[#2e1a10]/10 text-[#2e1a10] border-[#2e1a10]/20 hover:bg-[#2e1a10]/20"
            )}
          >
            {language === 'es' ? '🇺🇸 EN' : '🇲🇽 ES'}
          </button>
          
          {/* Botón de Acción (WhatsApp) */}
          <button 
            onClick={handleOrderClick}
            className="flex items-center gap-2 bg-[#e73a1d] hover:bg-[#c92e15] text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md border-2 border-white/20"
          >
            <MessageCircle size={20} />
            <span>{t.navbar.cta}</span>
          </button>
        </div>

        {/* BOTÓN HAMBURGUESA (Móvil) */}
        <button
          className={cn(
            "md:hidden p-2 z-50 transition-colors",
            isMobileMenuOpen || isScrolled ? "text-white" : "text-[#2e1a10]"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL (Pantalla completa) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-[#2e1a10] z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#f2cc65] font-bold text-3xl font-heading"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Toggle Idioma en Móvil (Más grande) */}
            <button
              onClick={toggleLanguage}
              className="text-white font-bold text-xl border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition"
            >
              {language === 'es' ? 'Switch to English 🇺🇸' : 'Cambiar a Español 🇲🇽'}
            </button>

            <button 
              onClick={handleOrderClick}
              className="bg-[#e73a1d] text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl flex items-center gap-3 active:scale-95 transition-transform"
            >
              <MessageCircle size={24} />
              {t.navbar.cta}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}