"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Placeholder shapes for the "Antigravity" effect
const floatingItems = [
  {
    id: 1,
    color: "bg-[#e73a1d]",
    size: "w-16 h-16",
    x: "10%",
    y: "20%",
    delay: 0,
    type: "taco-shell",
  }, // Red/Salsa
  {
    id: 2,
    color: "bg-[#4eae32]",
    size: "w-12 h-12",
    x: "85%",
    y: "15%",
    delay: 1,
    type: "lime",
  }, // Green/Lime
  {
    id: 3,
    color: "bg-[#f2cc65]",
    size: "w-20 h-20",
    x: "75%",
    y: "60%",
    delay: 2,
    type: "tortilla",
  }, // Yellow/Corn
  {
    id: 4,
    color: "bg-[#2e1a10]",
    size: "w-14 h-14",
    x: "15%",
    y: "70%",
    delay: 0.5,
    type: "meat",
  }, // Brown/Meat
  {
    id: 5,
    color: "bg-[#e73a1d]",
    size: "w-8 h-8",
    x: "50%",
    y: "10%",
    delay: 1.5,
    type: "chili",
  }, // Small Chili
  {
    id: 6,
    color: "bg-[#4eae32]",
    size: "w-10 h-10",
    x: "40%",
    y: "85%",
    delay: 2.5,
    type: "cilantro",
  }, // Cilantro
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-[#fafafa] flex items-center justify-center"
    >
      {/* Background Decor / Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#f2cc65]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#e73a1d]/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements (The Antigravity Effect) */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute rounded-full opacity-60 backdrop-blur-sm ${item.color} ${item.size}`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2, // Random duration between 4-6s
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {/* Internal visual detail (e.g. seed texture placeholder) */}
          <div className="w-full h-full bg-white/10 rounded-full" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#e73a1d] font-bold text-xl md:text-2xl mb-4 tracking-wider uppercase">
            El Sabor que se te antoja
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2e1a10] mb-8 font-heading leading-tight drop-shadow-sm">
            EL COMPADRE
            <span className="block text-[#f2cc65] drop-shadow-md text-stroke">
              MANZANO
            </span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Auténtica cocina mexicana con ingredientes frescos y el sazón de
            casa. ¡Ven y prueba la diferencia!
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-[#e73a1d] text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#c92e15] transition-all"
            >
              Ver Menú
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#2e1a10]/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#e73a1d] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
