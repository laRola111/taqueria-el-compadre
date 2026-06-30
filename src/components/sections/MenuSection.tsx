"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importar Contexto

// Estructura visual del menú con las nuevas fotografías del restaurante
// Categoría A: Platos con foto real confirmada (hasPhoto: true)
// Categoría B: Espacio reservado para foto pendiente (hasPhoto: false)
const MENU_STRUCTURE = [
  // Fila 1: Tacos + Burrito
  { id: "tacos",         img: "/assets/tacos.png",                    colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: true  },
  { id: "burrito",       img: "/assets/burito.png",                   colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: true  },
  // Fila 2: Sopes + Tortas + Quesadilla grande
  { id: "sopes",         img: "/assets/sopes.png",                    colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: true  },
  { id: "tortas",        img: "/assets/Tortas.png",                   colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: true  },
  { id: "quesadillas",   img: "/assets/quesadillas.png",              colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: true  },
  // Fila 3: Quesa Birria + Quesadillas pequeñas + Platos de carne (foto pendiente)
  { id: "chile_relleno", img: "",                                     colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: false },
  { id: "gorditas",      img: "",                                     colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: false },
  { id: "bistec",        img: "",                                     colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: false },
  // Fila 4: Platillos especiales del día (ancho completo, foto pendiente)
  { id: "fajitas",       img: "",                                     colSpan: "md:col-span-4 lg:col-span-4", hasPhoto: false },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MENU_STRUCTURE.map((item, index) => {
            const itemContent = t.menu.items[item.id as keyof typeof t.menu.items];

            return (
              <motion.div
                key={item.id}
                className={`rounded-3xl overflow-hidden shadow-lg flex flex-col bg-white ${item.colSpan}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {/* FOTO — o espacio reservado si no hay foto */}
                <div className="relative h-52 w-full flex-shrink-0 bg-[#2e1a10]">
                  {item.hasPhoto ? (
                    <Image
                      src={item.img}
                      alt={itemContent.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <span className="text-4xl opacity-30">📷</span>
                      <span className="text-[#f2cc65] font-heading font-semibold text-sm text-center px-4 opacity-50 uppercase tracking-wide">
                        {language === 'es' ? 'Foto próximamente' : 'Photo coming soon'}
                      </span>
                    </div>
                  )}
                </div>

                {/* TEXTO — siempre visible, sin hover */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h4 className="text-lg font-bold text-[#2e1a10] font-heading leading-tight">
                    {itemContent.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {itemContent.desc}
                  </p>
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