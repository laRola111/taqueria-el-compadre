import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MeatMarquee } from "@/components/sections/MeatMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { BreakfastMenu } from "@/components/sections/BreakfastMenu"; // NUEVO
import { MenuSection } from "@/components/sections/MenuSection";
import { Testimonials } from "@/components/sections/Testimonials"; // NUEVO
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#fafafa]">
      <Navbar />
      
      {/* 1. PORTADA: Impacto Visual */}
      <Hero />
      
      {/* 2. CINTA: Movimiento continuo */}
      <MeatMarquee />
      
      {/* 3. HISTORIA: Conexión emocional */}
      <AboutSection />

      {/* 4. MENÚ DESAYUNOS: Visual y claro */}
      <BreakfastMenu />
      
      {/* 5. MENÚ COMIDAS: Galería de platos */}
      <MenuSection />

      {/* 6. TESTIMONIOS: Confianza social */}
      <Testimonials />

      {/* 7. UBICACIÓN: Información final */}
      <div id="location" className="py-24 bg-white text-center border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-[#e73a1d] font-bold text-lg mb-2 uppercase tracking-wide">
            ¿Dónde estamos?
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e1a10] font-heading mb-8">
            Visítanos en el Manzano
          </h2>
          <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center relative">
             {/* Aquí podrías incrustar el iframe de Google Maps real */}
             <div className="text-gray-400 font-medium">
               📍 Mapa de Google Maps
             </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 text-[#2e1a10]">
            <div>
              <h4 className="font-bold text-lg">Dirección</h4>
              <p className="text-gray-600">123 Main St, Tu Ciudad, TX</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">Horario</h4>
              <p className="text-gray-600">Lun - Dom: 7:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}