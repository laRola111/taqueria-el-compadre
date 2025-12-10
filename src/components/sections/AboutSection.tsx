"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // <--- ¡Esto faltaba!
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* TEXTO */}
          <motion.div 
            className="flex-1 space-y-6 w-full order-1 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#e73a1d] font-bold text-lg uppercase tracking-widest mb-2">
              {t.about.title}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2e1a10] font-heading leading-tight">
              {t.about.heading}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              {t.about.text}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl md:text-4xl mb-2">🌽</span>
                <span className="font-bold text-[#2e1a10] text-sm md:text-base text-center">
                  {t.about.cards[0]}
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl md:text-4xl mb-2">🔥</span>
                <span className="font-bold text-[#2e1a10] text-sm md:text-base text-center">
                  {t.about.cards[1]}
                </span>
              </div>
            </div>
          </motion.div>

          {/* IMAGEN (Diseño Original + Fix Responsive) */}
          <motion.div 
            className="flex-1 w-full relative order-2 md:order-2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Contenedor: Altura ajustada (300px en móvil, 500px en PC) */}
            <div className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] shadow-2xl border-4 border-white rotate-2 mx-auto max-w-md md:max-w-full overflow-hidden">
               
               {/* Imagen Real */}
               <Image 
                 src="/accets/manzanoLocal.png"
                 alt="Nuestro Local El Compadre Manzano"
                 fill
                 className="object-cover hover:scale-105 transition-transform duration-500"
               />

            </div>
            
            {/* Badge Flotante (Abajo Izquierda - Diseño Original Restaurado) */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-[#2e1a10] text-white p-4 md:p-6 rounded-full shadow-xl w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-center font-bold text-xs md:text-sm leading-tight rotate-12 border-4 border-[#e73a1d] whitespace-pre-line z-20">
              {t.about.badge}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}