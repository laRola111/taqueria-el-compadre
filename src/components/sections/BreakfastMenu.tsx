"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function BreakfastMenu() {
  const { t } = useLanguage();

  return (
    <section id="breakfast" className="py-20 relative overflow-hidden bg-white">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#fafafa] to-white" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[#e73a1d] font-bold text-lg mb-2 uppercase tracking-wide">
            {t.breakfast.title}
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#2e1a10] font-heading mb-4">
            {t.breakfast.heading}
          </h3>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            {t.breakfast.intro}
          </p>
        </div>

        {/* GRID DE DESAYUNOS: 5 imágenes reales con descripciones debajo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {t.breakfast.photoPlates.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#fafafa] rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-start">
                <h4 className="text-lg font-black text-[#2e1a10] font-heading mb-1 group-hover:text-[#e73a1d] transition-colors">
                  {item.title}
                </h4>
                {item.desc && (
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mt-2 font-medium">
                    {item.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CARDS DE DETALLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* TARJETA 1: BURRITOS & TACOS */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#fafafa] rounded-3xl p-8 border-2 border-[#f2cc65]/20 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#f2cc65] p-3 rounded-full">
                  <span className="text-3xl">🌯</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#2e1a10] font-heading uppercase tracking-wide">
                    {t.breakfast.burritoTitle}
                  </h4>
                  <p className="text-sm text-[#e73a1d] font-bold uppercase tracking-wider">
                    {t.breakfast.burritoSubtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {t.breakfast.ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 bg-white px-4 py-3 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/50 transition-colors shadow-sm">
                    <span className="w-2 h-2 bg-[#e73a1d] rounded-full" />
                    <span className="text-sm font-semibold">{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 rounded-2xl border border-yellow-100/50 text-sm text-yellow-800 font-bold">
              💡 {t.breakfast.burritoSubtitle}
            </div>
          </motion.div>

          {/* TARJETA 2: BREAKFAST PLATES */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#2e1a10] rounded-3xl p-8 text-white shadow-xl flex flex-col relative overflow-hidden group justify-between"
          >
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e73a1d] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity animate-pulse" />

            <div className="relative z-10 w-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#e73a1d] p-3 rounded-full ring-4 ring-[#e73a1d]/20">
                  <span className="text-3xl">🍳</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#f2cc65] font-heading uppercase tracking-wide">
                    {t.breakfast.platesTitle}
                  </h4>
                </div>
              </div>

              <div className="space-y-6">
                {t.breakfast.plates.map((plate, i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <h5 className="text-lg font-black text-[#f2cc65] font-heading mb-1">
                      {plate.title}
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {plate.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-[#f2cc65] text-sm md:text-base font-bold italic text-center">
                🥣 {t.breakfast.bowlFootnote}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}