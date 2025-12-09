"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// --- DATOS DEL MENÚ ---
const MEATS = [
  "Pastor", "Bistec", "Fajita de Res", "Fajita de Pollo", 
  "Barbacoa", "Birria", "Carnitas", "Chicharrón", 
  "Picadillo", "Campechanos"
];

const MENU_ITEMS = [
  {
    id: "tacos",
    title: "Tacos",
    description: "Clásicos y deliciosos. Tortilla de maíz o harina con tu carne preferida, cilantro y cebolla.",
    imageSrc: "/images/menu/tacos.jpg",
    colSpan: "md:col-span-2 lg:col-span-1", // Ocupa 1 espacio
  },
  {
    id: "gorditas",
    title: "Gorditas",
    description: "Masa de maíz doradita rellena de guiso y queso derretido.",
    imageSrc: "/images/menu/gorditas.jpg",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "plates",
    title: "Dinner Plates",
    description: "¡Para el hambre grande! Tu carne favorita servida con arroz, frijoles, ensalada y tortillas.",
    imageSrc: "/images/menu/plate.jpg",
    colSpan: "md:col-span-4 lg:col-span-2", // Destacado (ocupa 2 espacios)
  },
  {
    id: "tortas",
    title: "Tortas",
    description: "Bolillo crujiente, mayonesa, aguacate, frijoles y carne al gusto.",
    imageSrc: "/images/menu/torta.jpg",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "burrito",
    title: "Burritos",
    description: "Tortilla de harina gigante, arroz, frijoles y carne. ¡Un gigante!",
    imageSrc: "/images/menu/burrito.jpg",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "sopes",
    title: "Sopes",
    description: "Base gruesa de maíz con bordes pellizcados, frijoles, lechuga y crema.",
    imageSrc: "/images/menu/sopes.jpg",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    description: "Tortilla de harina doblada con mucho queso fundido. Sola o con carne.",
    imageSrc: "/images/menu/quesadilla.jpg",
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "large-quesadilla",
    title: "Quesadilla Grande",
    description: "Doble porción, doble sabor. La favorita para compartir (o no).",
    imageSrc: "/images/menu/large-quesadilla.jpg",
    colSpan: "md:col-span-4 lg:col-span-2", // Destacado
  },
];

// --- COMPONENTE ---
export function MenuSection() {
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
            Menú de Comidas
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-[#2e1a10] font-heading"
          >
            Antojitos Mexicanos
          </motion.h3>
        </div>

        {/* BARRA DE PROTEÍNAS (Informativa) */}
        <motion.div 
          className="bg-[#2e1a10] text-white rounded-2xl p-6 mb-16 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#e73a1d] rounded-full blur-3xl opacity-20"></div>
          <div className="relative z-10 text-center">
            <p className="text-[#f2cc65] font-bold mb-4 uppercase tracking-wide text-sm">
              Disponibles para todos los platillos
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {MEATS.map((meat, i) => (
                <span key={i} className="text-lg md:text-xl font-heading font-medium hover:text-[#f2cc65] transition-colors cursor-default">
                  • {meat}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* GRID DE PLATOS (Galería) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {MENU_ITEMS.map((item, index) => (
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
                 {/* Placeholder gris si no hay imagen, quítalo cuando subas las fotos */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-300 z-0">
                    {item.title}
                 </div>

                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                />
                {/* Gradiente oscuro siempre visible para leer texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* CONTENIDO (Texto sobre la imagen) */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-3xl font-bold text-white font-heading mb-2 drop-shadow-md">
                  {item.title}
                </h4>
                
                {/* Descripción que se revela/destaca al hover */}
                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-gray-200 text-sm md:text-base leading-snug pb-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Icono decorativo esquina superior */}
              <div className="absolute top-4 right-4 z-30 bg-[#f2cc65] text-[#2e1a10] w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                <span className="text-xl font-bold">+</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-12 text-sm">
          *Imágenes con fines ilustrativos. La presentación puede variar.
        </p>

      </div>
    </section>
  );
}