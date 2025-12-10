"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importante

export function MeatMarquee() {
  const { t } = useLanguage(); // <--- Hook de idioma

  // Usamos la lista del diccionario (t.marquee.meats)
  const meatsList = [...t.marquee.meats, ...t.marquee.meats, ...t.marquee.meats, ...t.marquee.meats];

  return (
    <section className="bg-[#e73a1d] py-6 overflow-hidden shadow-inner border-y-4 border-[#2e1a10] relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {meatsList.map((meat, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-white font-black text-2xl md:text-4xl uppercase font-heading tracking-widest drop-shadow-md">
                {meat}
              </span>
              <span className="text-[#f2cc65] text-3xl">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}