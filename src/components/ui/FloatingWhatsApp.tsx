"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phoneNumber = "15127602661"; // Formato internacional sin +
  const message = "Hola, me gustaría hacer un pedido en Taquería El Compadre Manzano.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors border-2 border-white/20"
    >
      <MessageCircle size={28} fill="white" />
      <span className="font-bold hidden md:inline">Pide por WhatsApp</span>
    </motion.a>
  );
}