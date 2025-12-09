"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Asegúrate de tener una foto aquí o usa un placeholder

export function AboutSection() {
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
              Auténtico Sabor Casero
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#2e1a10] font-heading">
              Cocinamos con el Corazón
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              En <strong>El Compadre Manzano</strong>, cada taco, cada gordita y cada plato está preparado al momento. 
              Usamos recetas tradicionales y los ingredientes más frescos para traerte ese sabor que te hace sentir en casa.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-100 text-center">
                <span className="block text-3xl mb-2">🌽</span>
                <span className="font-bold text-[#2e1a10]">Tortillas Frescas</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-100 text-center">
                <span className="block text-3xl mb-2">🔥</span>
                <span className="font-bold text-[#2e1a10]">Salsas Caseras</span>
              </div>
            </div>
          </motion.div>

          {/* Imagen Decorativa (Placeholder hasta tener la real) */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2">
               {/* Usamos un div de color por ahora, reemplazar con <Image /> de un plato real */}
               <div className="w-full h-full bg-[#f2cc65]/20 flex items-center justify-center">
                  <span className="text-[#2e1a10]/40 font-bold text-xl">Foto del Local / Cocina</span>
               </div>
            </div>
            {/* Elemento decorativo flotante */}
            <div className="absolute -bottom-6 -left-6 bg-[#2e1a10] text-white p-6 rounded-full shadow-xl w-32 h-32 flex items-center justify-center text-center font-bold text-sm leading-tight rotate-12 border-4 border-[#e73a1d]">
              ¡Sabor<br/>100%<br/>Mexicano!
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}