"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Elementos flotantes (puedes ajustarlos o quitarlos si interfieren con la foto principal)
const floatingItems = [
  { id: 1, color: "bg-[#e73a1d]", size: "w-16 h-16", x: "10%", y: "20%", delay: 0 },
  { id: 2, color: "bg-[#4eae32]", size: "w-12 h-12", x: "85%", y: "15%", delay: 1 },
  // ... puedes agregar más o usar imágenes reales aquí
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#fafafa] flex items-center justify-center pt-20"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#f2cc65]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#e73a1d]/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements (Opcional: déjalos sutiles) */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute rounded-full opacity-40 backdrop-blur-sm ${item.color} ${item.size}`}
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        />
      ))}

      {/* Contenido Principal */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        
        {/* 1. ESPACIO PARA IMAGEN PRINCIPAL (La que colocarás después) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-lg h-[300px] md:h-[400px] mb-8 flex items-center justify-center"
        >
          {/* PLACEHOLDER: Esto lo reemplazas luego con <Image src="..." /> */}
          {/* Cuando tengas la foto (ej: plato de tacos volando), descomenta la línea de abajo y borra el div placeholder */}
          
          {/* <Image src="/images/hero-tacos.png" alt="Plato Estrella" fill className="object-contain drop-shadow-2xl" priority /> */}
          
          <div className="w-64 h-64 md:w-80 md:h-80 bg-[#f2cc65] rounded-full flex items-center justify-center shadow-2xl border-8 border-white animate-pulse">
            <span className="text-[#2e1a10]/50 font-bold text-center p-4">
              Aquí va tu foto "Antigravity"<br/>(Plato Principal)
            </span>
          </div>
        </motion.div>

        {/* 2. TEXTOS (Abajo de la imagen, como pediste) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-[#e73a1d] font-bold text-xl md:text-2xl mb-2 tracking-widest uppercase font-heading">
            El Sabor que se te antoja
          </h2>
          
          {/* TÍTULO ESTILIZADO TIPO LOGO */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2e1a10] mb-6 font-heading leading-none drop-shadow-sm">
            EL COMPADRE
            <span className="block text-[#f2cc65] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] mt-[-10px] md:mt-[-20px] pb-4">
              MANZANO
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto font-medium">
            Auténtica cocina mexicana con ingredientes frescos y el sazón de casa. 
            ¡Ven y prueba la diferencia!
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-[#e73a1d] text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#c92e15] transition-all border-b-4 border-[#b92b14]"
            >
              Ver Menú
              <ArrowRight size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}