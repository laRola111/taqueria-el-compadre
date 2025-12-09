import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BreakfastBuilder } from "@/components/sections/BreakfastBuilder";
import { MenuSection } from "@/components/sections/MenuSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      <BreakfastBuilder />
      <MenuSection />

      <div id="location" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-text-main">
          Próximamente: Ubicación
        </h2>
      </div>

      <Footer />
    </main>
  );
}
