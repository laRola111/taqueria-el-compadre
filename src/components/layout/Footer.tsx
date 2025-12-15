"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/info";
import { useLanguage } from "@/context/LanguageContext";

// Icono personalizado para TikTok (Lucide no lo tiene)
const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2e1a10] text-white pt-16 pb-8 border-t-8 border-[#e73a1d]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca y Redes */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading text-[#f2cc65]">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t.footer.brandDesc}
            </p>
            
            {/* Redes Sociales Dinámicas */}
            <div className="flex gap-4 pt-4">
              {/* Instagram */}
              {BUSINESS_INFO.social.instagram && (
                <a 
                  href={BUSINESS_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#e73a1d] hover:text-white transition-all transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
              )}

              {/* Facebook */}
              {BUSINESS_INFO.social.facebook && (
                <a 
                  href={BUSINESS_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#e73a1d] hover:text-white transition-all transform hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
              )}

              {/* TikTok */}
              {BUSINESS_INFO.social.tiktok && (
                <a 
                  href={BUSINESS_INFO.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#e73a1d] hover:text-white transition-all transform hover:scale-110"
                >
                  <TikTokIcon size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#f2cc65]">{t.footer.navTitle}</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#hero" className="hover:text-white transition-colors">{t.navbar.home}</Link></li>
              <li><Link href="#menu" className="hover:text-white transition-colors">{t.navbar.menu}</Link></li>
              <li><Link href="#breakfast" className="hover:text-white transition-colors">{t.navbar.breakfast}</Link></li>
              <li><Link href="#location" className="hover:text-white transition-colors">{t.navbar.location}</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#f2cc65]">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#e73a1d] mt-1 shrink-0" size={20} />
                <a 
                  href={BUSINESS_INFO.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#e73a1d] shrink-0" size={20} />
                <a href={`tel:+1${BUSINESS_INFO.phone.replace(/-/g, "")}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#e73a1d] shrink-0" size={20} />
                <div className="flex flex-col">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <span key={i} className="text-sm">
                      <span className="font-bold text-gray-200">{h.days}:</span> {h.time}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. <br className="md:hidden"/>
            {t.footer.rights} <span className="text-[#f2cc65]">Rueda La Rola Media</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}