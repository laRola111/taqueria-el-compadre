import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MeatMarquee } from "@/components/sections/MeatMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { BreakfastMenu } from "@/components/sections/BreakfastMenu";
import { MenuSection } from "@/components/sections/MenuSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationSection } from "@/components/sections/LocationSection"; // <--- Nuevo componente
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#fafafa]">
      <Navbar />
      
      {/* 1. PORTADA: Impacto y Bienvenida */}
      <Hero />
      
      {/* 2. CINTA: Variedad de carnes en movimiento */}
      <MeatMarquee />
      
      {/* 3. HISTORIA: Conexión emocional (Diseño original restaurado) */}
      <AboutSection />

      {/* 4. MENÚ DESAYUNOS: Tacos y Chilaquiles */}
      <BreakfastMenu />
      
      {/* 5. MENÚ COMIDAS: Galería visual de antojitos */}
      <MenuSection />

      {/* 6. TESTIMONIOS: Prueba social */}
      <Testimonials />

      {/* 7. UBICACIÓN: Mapa y Horarios */}
      <LocationSection />

      <Footer />
      
      {/* Botón flotante siempre visible */}
      <FloatingWhatsApp />
    </main>
  );
}