"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ANTOJITOS_STRUCTURE = [
  { id: "tostadas",    img: "",                     colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: false },
  { id: "empanadas",   img: "",                     colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: false },
  { id: "flautas",     img: "",                     colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: false },
  { id: "sopes",       img: "/assets/sopes.png",    colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: true  },
  { id: "gorditas",    img: "/assets/gorditas.jpg",   colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: true  },
  { id: "picaditas",   img: "",                     colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: false },
];

export function AntojitosSection() {
  const { t, language } = useLanguage();

  return (
    <section id="antojitos" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[#f2cc65]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#e73a1d] font-bold text-lg uppercase tracking-widest mb-2"
          >
            {t.antojitos.sectionTitle}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2e1a10] font-heading"
          >
            {t.antojitos.mainTitle}
          </motion.h3>
        </div>

        {/* GRID DE PLATOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {ANTOJITOS_STRUCTURE.map((item, index) => {
            const itemContent = t.antojitos.items[item.id as keyof typeof t.antojitos.items];

            return (
              <motion.div
                key={item.id}
                className={`rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-[#fafafa] border border-gray-100 ${item.colSpan}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {/* FOTO — o espacio reservado si no hay foto */}
                <div className="relative h-56 w-full flex-shrink-0 bg-[#2e1a10] overflow-hidden group">
                  {item.hasPhoto ? (
                    <Image
                      src={item.img}
                      alt={itemContent.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#2e1a10]/95">
                      <span className="text-4xl opacity-35">📷</span>
                      <span className="text-[#f2cc65] font-heading font-semibold text-xs text-center px-4 opacity-50 uppercase tracking-wide">
                        {language === 'es' ? 'Foto próximamente' : 'Photo coming soon'}
                      </span>
                    </div>
                  )}
                </div>

                {/* TEXTO */}
                <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                  <div>
                    <h4 className="text-xl font-extrabold text-[#2e1a10] font-heading leading-tight mb-2 border-b border-gray-100 pb-2">
                      {itemContent.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {itemContent.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 mt-12 text-sm italic">
          *{language === 'es' ? 'Imágenes con fines ilustrativos.' : 'Images for illustrative purposes.'}
        </p>

      </div>
    </section>
  );
}
