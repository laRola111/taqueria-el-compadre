"use client";

import { motion } from "framer-motion";

const MEATS = [
  "Pastor", "Bistec", "Fajita de Res", "Fajita de Pollo", 
  "Barbacoa", "Birria", "Carnitas", "Chicharrón", 
  "Picadillo", "Campechanos", "Nopales"
];

export function MeatMarquee() {
  return (
    <section className="bg-[#e73a1d] py-4 overflow-hidden shadow-inner border-y-4 border-[#2e1a10]">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...MEATS, ...MEATS, ...MEATS].map((meat, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-white font-black text-2xl md:text-4xl uppercase font-heading tracking-widest">
                {meat}
              </span>
              <span className="text-[#f2cc65] text-2xl">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}