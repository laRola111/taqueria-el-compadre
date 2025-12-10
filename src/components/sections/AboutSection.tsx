"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // Mantenemos la traducción
import Image from "next/image";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#e73a1d] font-bold text-lg uppercase tracking-wide">
              {t.about.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#2e1a10] font-heading">
              {t.about.heading}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.about.text}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-100 text-center">
                <span className="block text-3xl mb-2">🌽</span>
                <span className="font-bold text-[#2e1a10]">
                  {t.about.cards[0]}
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-100 text-center">
                <span className="block text-3xl mb-2">🔥</span>
                <span className="font-bold text-[#2e1a10]">
                  {t.about.cards[1]}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Imagen Decorativa (Tu diseño original con badge abajo-izquierda) */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full bg-[#2e1a10] rounded-[2rem] p-4 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative h-full w-full bg-gray-200 rounded-2xl overflow-hidden border-4 border-white/10">
                {/* --- CAMBIO AQUÍ: Imagen Real --- */}
                <Image
                  src="/accets/manzanoLocal.png" // Asegúrate de que este archivo esté en la carpeta /public
                  alt="Nuestro Local El Compadre Manzano"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Elemento decorativo flotante */}
              <div className="absolute -top-6 -right-6 bg-[#f2cc65] text-[#2e1a10] w-28 h-28 rounded-full flex items-center justify-center font-black text-center text-sm shadow-lg border-4 border-white rotate-12 whitespace-pre-line">
                {t.about.badge}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
