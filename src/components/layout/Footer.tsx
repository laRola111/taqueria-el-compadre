"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/info";
import { useLanguage } from "@/context/LanguageContext"; // <--- Hook Bilingüe

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2e1a10] text-white pt-16 pb-8 border-t-8 border-[#e73a1d]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading text-[#f2cc65]">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t.footer.brandDesc}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#e73a1d] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#e73a1d] transition-colors">
                <Facebook size={20} />
              </a>
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
                <MapPin className="text-[#e73a1d] mt-1" size={20} />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#e73a1d]" size={20} />
                <a href={`tel:+1${BUSINESS_INFO.phone.replace(/-/g, "")}`} className="hover:text-white">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#e73a1d]" size={20} />
                <div className="flex flex-col">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <span key={i} className="text-sm">
                      <span className="font-bold">{h.days}:</span> {h.time}
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
            {t.footer.rights} <span className="text-[#f2cc65]">Arknica Solutions</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}