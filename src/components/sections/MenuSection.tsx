"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importar Contexto

// Definimos SOLO la estructura visual (IDs, Imágenes y Tamaños)
// Los textos se sacarán del diccionario usando el ID.
const MENU_STRUCTURE = [
  { id: "tacos", img: "/accets/tacosmanzano.png", colSpan: "md:col-span-2 lg:col-span-1" },
  { id: "gorditas", img: "/accets/gorditas.jpg", colSpan: "md:col-span-2 lg:col-span-1" },
  { id: "plates", img: "/accets/dinner.jpg", colSpan: "md:col-span-4 lg:col-span-2" },
  { id: "tortas", img: "/accets/tortas.jpg", colSpan: "md:col-span-2 lg:col-span-1" },
  { id: "burrito", img: "/accets/burritos-2.jpg", colSpan: "md:col-span-2 lg:col-span-1" },
  { id: "sopes", img: "/accets/sopes.jpg", colSpan: "md:col-span-2 lg:col-span-1" },
  { id: "quesadillas", img: "/accets/quesadilla.jpg", colSpan: "md:col-span-2 lg:col-span-1" },
  { id: "large", img: "/accets/large-quesadilla.jpg", colSpan: "md:col-span-4 lg:col-span-2" },
];

// Lista de carnes del diccionario
const MEATS_KEYS = [
  "Pastor", "Bistec", "Fajita de Res", "Fajita de Pollo", 
  "Barbacoa", "Birria", "Carnitas", "Chicharrón", 
  "Picadillo", "Campechanos"
];

export function MenuSection() {
  const { t, language } = useLanguage(); // <--- Hook de idioma

  // Obtenemos la lista de carnes traducida del diccionario
  // NOTA: Si en el diccionario las carnes están en orden, podemos usarlas directamente.
  const meatsList = t.marquee.meats; 

  return (
    <section id="menu" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#e73a1d] font-bold text-lg uppercase tracking-widest mb-2"
          >
            {t.menu.sectionTitle}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-[#2e1a10] font-heading"
          >
            {t.menu.mainTitle}
          </motion.h3>
        </div>

        {/* BARRA DE PROTEÍNAS */}
        <motion.div 
          className="bg-[#2e1a10] text-white rounded-2xl p-6 mb-16 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#e73a1d] rounded-full blur-3xl opacity-20"></div>
          <div className="relative z-10 text-center">
            <p className="text-[#f2cc65] font-bold mb-4 uppercase tracking-wide text-sm">
              {t.menu.meatTitle}
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {meatsList.map((meat, i) => (
                <span key={i} className="text-lg md:text-xl font-heading font-medium hover:text-[#f2cc65] transition-colors cursor-default">
                  • {meat}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* GRID DE PLATOS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {MENU_STRUCTURE.map((item, index) => {
            // Accedemos dinámicamente al texto usando el ID (tacos, gorditas, etc.)
            // TypeScript puede quejarse aquí, usamos 'any' o un tipo flexible para el diccionario si es necesario, 
            // pero con la estructura actual debería funcionar si los keys coinciden.
            const itemContent = t.menu.items[item.id as keyof typeof t.menu.items];

            return (
              <motion.div
                key={item.id}
                className={`relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer ${item.colSpan}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {/* IMAGEN DE FONDO */}
                <div className="absolute inset-0 bg-gray-200">
                   {/* Placeholder */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-300 z-0">
                      {itemContent.title}
                   </div>

                  <Image
                    src={item.img}
                    alt={itemContent.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* CONTENIDO TEXTUAL */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-3xl font-bold text-white font-heading mb-2 drop-shadow-md">
                    {itemContent.title}
                  </h4>
                  
                  {/* Descripción revelada */}
                  <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <p className="text-gray-200 text-sm md:text-base leading-snug pb-2">
                      {itemContent.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-30 bg-[#f2cc65] text-[#2e1a10] w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <span className="text-xl font-bold">+</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 mt-12 text-sm">
          *{language === 'es' ? 'Imágenes con fines ilustrativos.' : 'Images for illustrative purposes.'}
        </p>

      </div>
    </section>
  );
}