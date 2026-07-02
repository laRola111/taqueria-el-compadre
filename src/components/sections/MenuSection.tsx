"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importar Contexto

// Estructura visual del menú con las nuevas fotografías del restaurante
// Categoría A: Platos con foto real confirmada (hasPhoto: true)
// Categoría B: Espacio reservado para foto pendiente (hasPhoto: false)
const MENU_STRUCTURE = [
  // Fila 1: Tacos + Burrito
  { id: "tacos",                img: "/assets/tacos.png",                    colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: true  },
  { id: "burrito",              img: "/assets/burito.png",                   colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: true  },
  // Fila 2: Tortas + Quesadilla grande
  { id: "tortas",               img: "/assets/Tortas.png",                   colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: true  },
  { id: "quesadillas",          img: "/assets/quesadillas.png",              colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: true  },
  // Fila 3: Quesa Birria + Quesadillas pequeñas + Platos de carne (foto pendiente)
  { id: "chile_relleno",        img: "",                                     colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: false },
  { id: "quesadillas_pequenas", img: "",                                     colSpan: "md:col-span-2 lg:col-span-1", hasPhoto: false },
  { id: "bistec",               img: "",                                     colSpan: "md:col-span-2 lg:col-span-2", hasPhoto: false },
  // Fila 4: Platillos especiales del día (ancho completo, foto real confirmada)
  { id: "fajitas",              img: "/assets/Fajitas-de-Pollo.png",         colSpan: "md:col-span-4 lg:col-span-4", hasPhoto: true  },
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
                {/* FOTO — o espacio reservado si no hay foto */}
                {item.id === "tortas" ? (
                  // Custom rendering for Tortas: 1 photo and text divided into 2 columns (4 tortas)
                  <div className="flex flex-col w-full h-full">
                    <div className="relative h-64 w-full flex-shrink-0 bg-[#2e1a10]">
                      <Image
                        src={item.img}
                        alt={itemContent.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-6 flex-1 bg-white">
                      <div className="border-b border-gray-100 pb-3">
                        <h4 className="text-2xl font-black text-[#e73a1d] font-heading">
                          {itemContent.title}
                        </h4>
                      </div>
                      
                      {language === 'es' ? (
                        // Spanish layout
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#2e1a10]">
                          <div className="space-y-6">
                            <div>
                              <h5 className="font-extrabold text-lg border-b border-[#f2cc65] pb-1 mb-2 font-heading">Tortas lunch</h5>
                              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">De pan de telera. Con su carne de su elección.</p>
                              <p className="text-xs text-gray-500"><strong className="text-xs font-bold text-[#e73a1d]">Acompañado con:</strong> Frijoles, cebolla, cilantro, jalapeño, aguacate, queso, mayonesa</p>
                            </div>
                            
                            <div>
                              <h5 className="font-extrabold text-lg border-b border-[#f2cc65] pb-1 mb-2 font-heading">Torta milanesa</h5>
                              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">Milanesa de pollo empanizado.</p>
                              <p className="text-xs text-gray-500"><strong className="text-xs font-bold text-[#e73a1d]">Su acompañado:</strong> Frijol, lechuga, cebolla, tomate, jalapeño, aguacate, queso Monterey, mayonesa</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h5 className="font-extrabold text-lg border-b border-[#f2cc65] pb-1 mb-2 font-heading">Tortas fajitas y más</h5>
                              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">Beef / Chicken / Jamón / Salchicha / Huevo estrellado / Huevo al gusto!</p>
                              <p className="text-xs text-gray-500"><strong className="text-xs font-bold text-[#e73a1d]">Acompañado con:</strong> Frijoles, lechuga, tomate, cebolla, jalapeño, aguacate, mayonesa, queso</p>
                            </div>

                            <div>
                              <h5 className="font-extrabold text-lg border-b border-[#f2cc65] pb-1 mb-2 font-heading">Torta cubana</h5>
                              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">Con milanesa de pollo, salchicha, jamón.</p>
                              <p className="text-xs text-gray-500"><strong className="text-xs font-bold text-[#e73a1d]">Su acompañado:</strong> Frijol, lechuga, cebolla, tomate, jalapeño, aguacate, queso Monterey, mayonesa</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // English layout
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#2e1a10]">
                          <div className="space-y-6">
                            <div>
                              <h5 className="font-extrabold text-lg border-b border-[#f2cc65] pb-1 mb-2 font-heading">Lunch Tortas</h5>
                              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">Telera bread with your choice of meat.</p>
                              <p className="text-xs text-gray-500"><strong className="text-xs font-bold text-[#e73a1d]">Served with:</strong> Beans, onion, cilantro, jalapeño, avocado, cheese, mayonnaise</p>
                            </div>
                            
                            <div>
                              <h5 className="font-extrabold text-lg border-b border-[#f2cc65] pb-1 mb-2 font-heading">Milanesa Torta</h5>
                              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">Breaded chicken milanesa.</p>
                              <p className="text-xs text-gray-500"><strong className="text-xs font-bold text-[#e73a1d]">Served with:</strong> Beans, lettuce, onion, tomato, jalapeño, avocado, Monterey cheese, mayonnaise</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h5 className="font-extrabold text-lg border-b border-[#f2cc65] pb-1 mb-2 font-heading">Fajitas Tortas & More</h5>
                              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">Beef / Chicken / Ham / Sausage / Fried egg / Egg your way!</p>
                              <p className="text-xs text-gray-500"><strong className="text-xs font-bold text-[#e73a1d]">Served with:</strong> Beans, lettuce, tomato, onion, jalapeño, avocado, mayonnaise, cheese</p>
                            </div>

                            <div>
                              <h5 className="font-extrabold text-lg border-b border-[#f2cc65] pb-1 mb-2 font-heading">Cuban Torta</h5>
                              <p className="text-gray-600 text-sm leading-relaxed mb-2 font-medium">With breaded chicken milanesa, sausage, ham.</p>
                              <p className="text-xs text-gray-500"><strong className="text-xs font-bold text-[#e73a1d]">Served with:</strong> Beans, lettuce, onion, tomato, jalapeño, avocado, Monterey cheese, mayonnaise</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-4 pt-4 border-t border-gray-100 text-center text-[#e73a1d] font-bold italic text-sm">
                        {language === 'es' 
                          ? '¡Que tus tardes sean tan especiales como las tortas que vas a probar!' 
                          : 'May your afternoons be as special as the tortas you are going to try!'
                        }
                      </div>
                    </div>
                  </div>
                ) : item.id === "fajitas" ? (
                  // Custom rendering for Daily Specials with 1 photo and description below
                  <div className="flex flex-col w-full h-full">
                    {item.hasPhoto && (
                      <div className="relative h-64 w-full flex-shrink-0 bg-[#2e1a10]">
                        <Image
                          src={item.img}
                          alt={itemContent.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 md:p-8 flex flex-col gap-6 w-full bg-white">
                      <div className="border-b border-gray-100 pb-3 flex items-center gap-3">
                        <span className="text-3xl">✨</span>
                        <h4 className="text-2xl md:text-3xl font-black text-[#e73a1d] font-heading">
                          {itemContent.title}
                        </h4>
                      </div>

                    {language === 'es' ? (
                      // Spanish Layout
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#2e1a10]">
                        {/* 1. Enchiladas de mole */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">1. Enchiladas de mole</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Tres ricas enchiladas bañadas en salsa de mole poblano con queso fresco arriba, acompañadas con frijoles y arroz.</p>
                          <p className="text-xs text-gray-500 font-bold"><strong className="text-xs font-bold text-[#e73a1d]">Elige tu opción:</strong> Picadillo / pollo tinga / queso fresco.</p>
                        </div>

                        {/* 2. Enchiladas en salsa verde */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">2. Enchiladas en salsa verde</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Tres ricas enchiladas bañadas en salsa verde de tomatillo, acompañadas de queso fresco, frijoles y arroz.</p>
                          <p className="text-xs text-gray-500 font-bold"><strong className="text-xs font-bold text-[#e73a1d]">Elige tu opción:</strong> Picadillo / pollo tinga / queso fresco.</p>
                        </div>

                        {/* 3. Chuletas de puerco en salsa */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">3. Chuletas de puerco en salsa</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Dos chuletas de puerco bañadas en salsa con dos huevos estrellados al gusto, acompañado con su arroz y frijoles.</p>
                        </div>

                        {/* 4. Chiles poblanos rellenos */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">4. Chiles poblanos rellenos</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Chile frito capeado de huevo con su salsa de tomate / jalapeño / cebolla / ajo con una pizca de orégano! Acompañado con arroz y frijoles.</p>
                          <p className="text-xs text-gray-500 font-bold"><strong className="text-xs font-bold text-[#e73a1d]">Pídelo de:</strong> Picadillo / queso fresco / pollo tinga.</p>
                          <div className="mt-1 pt-1 border-t border-gray-200/50 text-[11px] text-gray-500 flex items-center justify-between font-bold">
                            <span>Tortilla: Harina o maíz</span>
                          </div>
                        </div>

                        {/* 5. Costilla de puerco en salsa de tomatillo y nopales */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">5. Costilla de puerco en salsa de tomatillo y nopales</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Rico guisado en salsa con costilla de puerco en pedazos y nopales, acompañado con su arroz y frijoles.</p>
                          <div className="mt-1 pt-1 border-t border-gray-200/50 text-[11px] text-gray-500 flex items-center justify-between font-bold">
                            <span>Tortilla: Harina o maíz</span>
                          </div>
                        </div>

                        {/* 6. Plato de mole poblano rojo */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">6. Plato de mole poblano rojo</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Rico platillo de mole con sus piezas de pollo (muslo o pierna), acompañado con su arroz y su tortilla hecha a mano.</p>
                        </div>

                        {/* 7. Sábado de menudo de res */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm md:col-span-2 lg:col-span-1">
                          <h5 className="font-black text-lg text-[#e73a1d] font-heading">7. Sábado de menudo de res</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Panza y patita de res, cocinado en caldo estilo Veracruz con su verdura que le da un toque especial, su cebolla / cilantro / chile serrano / limón y sus tortillas hechas a mano.</p>
                        </div>
                      </div>
                    ) : (
                      // English Layout
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#2e1a10]">
                        {/* 1. Mole Enchiladas */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">1. Mole Enchiladas</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Three delicious enchiladas bathed in poblano mole sauce with fresh cheese on top, served with beans and rice.</p>
                          <p className="text-xs text-gray-500 font-bold"><strong className="text-xs font-bold text-[#e73a1d]">Choose your option:</strong> Picadillo / chicken tinga / fresh cheese.</p>
                        </div>

                        {/* 2. Green Salsa Enchiladas */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">2. Green Salsa Enchiladas</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Three delicious enchiladas bathed in green tomatillo salsa, served with fresh cheese, beans, and rice.</p>
                          <p className="text-xs text-gray-500 font-bold"><strong className="text-xs font-bold text-[#e73a1d]">Choose your option:</strong> Picadillo / chicken tinga / fresh cheese.</p>
                        </div>

                        {/* 3. Pork Chops in Salsa */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">3. Pork Chops in Salsa</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Two pork chops bathed in salsa with two sunny-side-up eggs cooked to your liking, served with rice and beans.</p>
                        </div>

                        {/* 4. Stuffed Poblano Peppers */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">4. Stuffed Poblano Peppers</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Fried egg-battered poblano pepper in tomato salsa with jalapeño, onion, garlic, and a pinch of oregano. Served with rice and beans.</p>
                          <p className="text-xs text-gray-500 font-bold"><strong className="text-xs font-bold text-[#e73a1d]">Choose fillings:</strong> Picadillo / fresh cheese / chicken tinga.</p>
                          <div className="mt-1 pt-1 border-t border-gray-200/50 text-[11px] text-gray-500 flex items-center justify-between font-bold">
                            <span>Tortilla: Flour or corn</span>
                          </div>
                        </div>

                        {/* 5. Pork Ribs in Tomatillo and Cactus Salsa */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">5. Pork Ribs in Tomatillo & Cactus</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Rich pork rib stew cooked in a flavorful tomatillo and cactus salsa, served with rice and beans.</p>
                          <div className="mt-1 pt-1 border-t border-gray-200/50 text-[11px] text-gray-500 flex items-center justify-between font-bold">
                            <span>Tortilla: Flour or corn</span>
                          </div>
                        </div>

                        {/* 6. Red Mole Plate */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm">
                          <h5 className="font-black text-lg text-[#2e1a10] font-heading">6. Red Mole Plate</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Delicious chicken pieces (thigh or drumstick) in red mole poblano sauce, served with rice and handmade tortillas.</p>
                        </div>

                        {/* 7. Saturday: Beef Menudo */}
                        <div className="space-y-2 bg-[#fafafa] p-5 rounded-2xl border border-gray-100 hover:border-[#f2cc65]/30 transition-all shadow-sm md:col-span-2 lg:col-span-1">
                          <h5 className="font-black text-lg text-[#e73a1d] font-heading">7. Saturday: Beef Menudo</h5>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">Beef tripe and foot cooked in Veracruz-style broth with veggies, topped with onion, cilantro, serrano pepper, lime, and served with handmade tortillas.</p>
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
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