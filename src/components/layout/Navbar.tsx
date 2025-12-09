"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react"; // Icono de WhatsApp
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Menú", href: "#menu" },
  { name: "Desayunos", href: "#breakfast" },
  { name: "Ubicación", href: "#location" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para abrir WhatsApp
  const handleOrderClick = () => {
    const phoneNumber = "15127602661";
    const message = "Hola, vengo de la web y quiero hacer un pedido.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-bold text-lg transition-colors hover:text-[#f2cc65] font-heading tracking-wide",
                isScrolled ? "text-white" : "text-[#2e1a10]"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {/* BOTÓN CONECTADO A WHATSAPP */}
          <button 
            onClick={handleOrderClick}
            className="flex items-center gap-2 bg-[#e73a1d] hover:bg-[#c92e15] text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md border-2 border-white/20"
          >
            <MessageCircle size={20} />
            <span>Pedir Ahora</span>
          </button>
        </div>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
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
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#f2cc65] font-bold text-3xl font-heading"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleOrderClick}
              className="bg-[#e73a1d] text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl flex items-center gap-3"
            >
              <MessageCircle size={24} />
              Pedir por WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}