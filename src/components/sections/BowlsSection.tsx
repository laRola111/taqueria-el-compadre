"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const BOWLS = [
  { id: "bol1", img: "/assets/Gary Bowl.png" },
  { id: "bol2", img: "/assets/Kareem Bowl.png" },
  { id: "bol3", img: "/assets/Huevo con chile Bowl.png" },
];

export function BowlsSection() {
  const { t } = useLanguage();
  const bowls = t.bowls;

  return (
    <section id="bowls" className="py-24 bg-[#2e1a10] relative overflow-hidden">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#e73a1d] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f2cc65] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f2cc65] font-bold uppercase tracking-widest text-sm mb-3"
          >
            {bowls.sectionTitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white font-heading mb-4"
          >
            {bowls.mainTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-base md:text-lg"
          >
            {bowls.desc}
          </motion.p>
        </div>

        {/* GRID DE BOWLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BOWLS.map((bowl, index) => {
            const item = bowls.items[bowl.id as keyof typeof bowls.items];
            return (
              <motion.div
                key={bowl.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer h-[360px]"
              >
                {/* Imagen */}
                <Image
                  src={bowl.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-10" />

                {/* Badge "Próximamente" si no hay nombre real */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#f2cc65] text-[#2e1a10] text-xs font-black uppercase px-3 py-1 rounded-full tracking-wide shadow">
                    {bowls.badge}
                  </span>
                </div>

                {/* Contenido */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-black text-white font-heading drop-shadow mb-1">
                    {item.title}
                  </h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-gray-300 text-sm leading-snug pb-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Icono hover */}
                <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-sm border border-white/20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <span className="text-white text-xl font-bold">+</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota al pie */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          {bowls.footnote}
        </motion.p>

      </div>
    </section>
  );
}
