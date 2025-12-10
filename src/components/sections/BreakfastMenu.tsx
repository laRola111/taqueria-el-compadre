"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";

const INGREDIENTS = [
  "Huevos / Eggs", "Tocino / Bacon", "Chorizo", "Jamón / Ham",
  "Salchicha / Sausage", "Papas / Potatoes", "Frijoles / Beans",
  "Queso / Cheese", "Nopales / Cactus"
];

export function BreakfastMenu() {
  return (
    <section id="breakfast" className="py-20 relative overflow-hidden bg-white">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#fafafa] to-white" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#e73a1d] font-bold text-lg mb-2 uppercase tracking-wide">
            Breakfast / Desayunos
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#2e1a10] font-heading">
            Para Empezar el Día
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
                  Arma tu Taco o Burrito
                </h4>
                <p className="text-gray-500 text-sm">Build Your Own</p>
              </div>
            </div>

            <div className="mb-6 relative h-48 w-full rounded-2xl overflow-hidden bg-gray-200">
               {/* Placeholder para foto de Burrito abierto */}
               <Image 
                 src="/accets/burritos.jpg" 
                 alt="Breakfast Burrito"
                 fill
                 className="object-cover"
               />
            </div>

            <p className="text-[#2e1a10] font-medium mb-4">
              Elige tus ingredientes favoritos. Nosotros lo hacemos gigante:
            </p>

            <ul className="grid grid-cols-2 gap-3">
              {INGREDIENTS.map((ing, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm">
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
            className="bg-[#2e1a10] rounded-3xl p-8 text-white shadow-xl flex flex-col relative overflow-hidden"
          >
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e73a1d] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#e73a1d] p-3 rounded-full">
                  <span className="text-3xl">🍳</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#f2cc65] font-heading">
                    Chilaquiles Rojos
                  </h4>
                  <p className="text-gray-400 text-sm">Tradicionales</p>
                </div>
              </div>

              <div className="mb-6 relative h-64 w-full rounded-2xl overflow-hidden bg-gray-800">
                 {/* Placeholder para foto de Chilaquiles */}
                 <Image 
                   src="/accets/chilaquiles.jpg" 
                   alt="Chilaquiles Rojos"
                   fill
                   className="object-cover hover:scale-105 transition-transform duration-500"
                 />
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                Totopos crujientes bañados en nuestra salsa roja casera, servidos con:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f2cc65] rounded-full" />
                  Huevo al gusto (Eggs)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f2cc65] rounded-full" />
                  Frijoles Refritos (Beans)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f2cc65] rounded-full" />
                  Queso Fresco & Crema
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}