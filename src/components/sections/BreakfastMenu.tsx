"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function BreakfastMenu() {
  const { t, language } = useLanguage();

  return (
    <section id="breakfast" className="py-20 relative overflow-hidden bg-white">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#fafafa] to-white" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#e73a1d] font-bold text-lg mb-2 uppercase tracking-wide">
            {t.breakfast.title}
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#2e1a10] font-heading">
            {t.breakfast.heading}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* TARJETA 1: BURRITOS & TACOS */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#fafafa] rounded-3xl p-8 border-2 border-[#f2cc65]/20 shadow-xl flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#f2cc65] p-3 rounded-full">
                <span className="text-3xl">🌯</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#2e1a10] font-heading">
                  {t.breakfast.burritoTitle}
                </h4>
                <p className="text-gray-500 text-sm">
                  {language === 'es' ? 'Arma el tuyo' : 'Build your own'}
                </p>
              </div>
            </div>

            <div className="mb-6 relative h-48 w-full rounded-2xl overflow-hidden bg-gray-200 shadow-inner">
               <Image 
                 src="/assets/burritos.jpg" 
                 alt={t.breakfast.burritoTitle}
                 fill
                 className="object-cover"
               />
            </div>

            <p className="text-[#2e1a10] font-medium mb-4">
              {t.breakfast.burritoDesc}
            </p>

            <ul className="grid grid-cols-2 gap-3">
              {t.breakfast.ingredients.map((ing, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm hover:border-[#f2cc65] transition-colors">
                  <Plus size={14} className="text-[#e73a1d]" />
                  <span className="text-sm font-bold">{ing}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TARJETA 2: CHILAQUILES */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#2e1a10] rounded-3xl p-8 text-white shadow-xl flex flex-col relative overflow-hidden group"
          >
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e73a1d] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#e73a1d] p-3 rounded-full ring-4 ring-[#e73a1d]/20">
                  <span className="text-3xl">🍳</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#f2cc65] font-heading">
                    {t.breakfast.chilaquilesTitle}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {language === 'es' ? 'Tradicionales' : 'Traditional'}
                  </p>
                </div>
              </div>

              <div className="mb-6 relative h-64 w-full rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
                 <Image 
                   src="/assets/chilaquiles.jpg" 
                   alt={t.breakfast.chilaquilesTitle}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#2e1a10]/60 to-transparent" />
              </div>

              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                {t.breakfast.chilaquilesDesc}
              </p>
              <ul className="space-y-2">
                {t.breakfast.options.map((opt, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <span className="w-2 h-2 bg-[#f2cc65] rounded-full shadow-[0_0_8px_rgba(242,204,101,0.5)]" />
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}