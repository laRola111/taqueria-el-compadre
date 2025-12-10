"use client";

import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/info";
import { useLanguage } from "@/context/LanguageContext";

export function LocationSection() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-white text-center border-t border-gray-100 relative">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#e73a1d] font-bold text-lg uppercase tracking-wide"
          >
            {t.location.pretitle}
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#2e1a10] font-heading"
          >
            {t.location.title}
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#fafafa] p-4 rounded-[2rem] shadow-xl border border-gray-100"
        >
          {/* Contenedor del Mapa */}
          <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden relative">
             <iframe 
               src={BUSINESS_INFO.mapsLink} // Asegúrate que en info.ts sea el link "embed" (src) del iframe de Google Maps
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>
          
          {/* Tarjetas de Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
             {/* Dirección */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#e73a1d] text-left">
                <h4 className="font-bold text-xl text-[#2e1a10] mb-2 flex items-center gap-2">
                  📍 {t.location.addressTitle}
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
             </div>

             {/* Horarios */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#f2cc65] text-left">
                <h4 className="font-bold text-xl text-[#2e1a10] mb-2 flex items-center gap-2">
                  🕒 {t.location.hoursTitle}
                </h4>
                {BUSINESS_INFO.hours.map((h, i) => (
                  <div key={i} className="flex flex-col text-gray-600 text-lg">
                    <span>{h.days}</span>
                    <span className="font-medium text-[#2e1a10]">{h.time}</span>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}