import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1B4B43] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Column 1 - Logo and Description */}
            <div className="space-y-6">
              <div className="flex flex-col items-start">
                <Link href="/" className="relative w-40 h-12 mb-6">
                  <Image
                    src="https://www.furlottigroup.it/wp-content/uploads/thegem-logos/logo_746bd315be2f74cd38daa9eb05f99c46_2x.png"
                    alt="Furlotti Group Logo"
                    fill
                    style={{ 
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)'
                    }}
                  />
                </Link>
              </div>
              <p className="text-white/80">
                Furlotti Group è leader nel settore del riciclo e della gestione dei rifiuti, 
                con un impegno costante verso la sostenibilità e l'innovazione.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#98FB98] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#98FB98] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#98FB98] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Column 2 - Aziende */}
            <div>
              <h3 className="text-xl font-medium mb-6">Aziende</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/80 hover:text-[#98FB98] transition-colors">Furlotti Vetro</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-[#98FB98] transition-colors">Furlotti Ambiente</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-[#98FB98] transition-colors">Mori Recycling</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-[#98FB98] transition-colors">Furlotti Omnia</Link></li>
              </ul>
            </div>

            {/* Column 3 - Documenti */}
            <div>
              <h3 className="text-xl font-medium mb-6">Documenti</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/80 hover:text-[#98FB98] transition-colors">Whistleblowing</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-[#98FB98] transition-colors">Informativa clienti</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-[#98FB98] transition-colors">Informativa fornitori</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-[#98FB98] transition-colors">Autorizzazioni e certificazioni</Link></li>
              </ul>
            </div>

            {/* Column 4 - Contatti */}
            <div>
              <h3 className="text-xl font-medium mb-6">Contatti</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#98FB98]" />
                  <span className="text-white/80">+39 0521 819723</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#98FB98]" />
                  <a href="mailto:info@furlottigroup.it" className="text-white/80 hover:text-[#98FB98] transition-colors">
                    info@furlottigroup.it
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-[#98FB98] flex-shrink-0" />
                  <div className="text-white/80">
                    <p>Via G. Micheli, 3</p>
                    <p>San Polo di Torrile (PR)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Bottom Bar */}
      <div className="bg-[#133027] text-white/60 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Furlotti Luigi S.r.l. - P.IVA 02514330345 - REA PR/244807 - Cap Soc. € 100.000 i.v.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#98FB98] transition-colors">Note Legali</Link>
              <Link href="#" className="hover:text-[#98FB98] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#98FB98] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer; 