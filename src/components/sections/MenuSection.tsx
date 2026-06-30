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
                {/* IMAGEN DE FONDO — foto real o espacio reservado */}
                <div className="absolute inset-0">
                  {item.hasPhoto ? (
                    <>
                      {/* Foto real del platillo */}
                      <Image
                        src={item.img}
                        alt={itemContent.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </>
                  ) : (
                    /* Espacio reservado — foto pendiente, sin mezclar imágenes */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#2e1a10]">
                      <span className="text-5xl opacity-40">📷</span>
                      <span className="text-[#f2cc65] font-heading font-bold text-xl text-center px-4 opacity-60">
                        {itemContent.title}
                      </span>
                    </div>
                  )}
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