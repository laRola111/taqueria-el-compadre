import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2e1a10] text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#f2cc65] mb-4 font-heading">
              El Compadre Manzano
            </h3>
            <p className="mb-4">
              El auténtico sabor mexicano que se te antoja. Preparado con amor y
              los ingredientes más frescos.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={20} className="text-[#e73a1d]" />
                <span>Calle Principal #123, Ciudad de México</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="text-[#e73a1d]" />
                <span>+52 55 1234 5678</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#e73a1d] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#e73a1d] transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} El Compadre Manzano. Desarrollado
            por <span className="text-[#f2cc65]">Arknica Solutions</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
