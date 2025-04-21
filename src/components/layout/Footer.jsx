import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1B4B43] text-white py-24">
        <div className="container mx-auto px-6">
          {/* Logo */}
          <div className="mb-16">
            <div className="w-[200px] h-16 relative">
              <Image
                src="https://www.furlottigroup.it/wp-content/uploads/thegem-logos/logo_746bd315be2f74cd38daa9eb05f99c46_2x.png"
                alt="Furlotti Group Logo"
                fill
                style={{ 
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  objectPosition: 'left'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            {/* Column 1 - UNITÀ */}
            <div>
              <h3 className="text-3xl font-medium mb-4 whitespace-nowrap">UNITÀ</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-base text-white/80 hover:text-[#98FB98] transition-colors">Furlotti Vetro</Link></li>
                <li><Link href="#" className="text-base text-white/80 hover:text-[#98FB98] transition-colors">Furlotti Ambiente</Link></li>
                <li><Link href="#" className="text-base text-white/80 hover:text-[#98FB98] transition-colors">Mori Recycling</Link></li>
                <li><Link href="#" className="text-base text-white/80 hover:text-[#98FB98] transition-colors">Furlotti Omnia</Link></li>
              </ul>
            </div>

            {/* Column 2 - PRENOTA */}
            <div>
              <h3 className="text-3xl font-medium mb-4 whitespace-nowrap">PRENOTA</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-base text-white/80 hover:text-[#98FB98] transition-colors">Impianto via Micheli</Link></li>
                <li><Link href="#" className="text-base text-white/80 hover:text-[#98FB98] transition-colors">Impianto via Romagnoli</Link></li>
              </ul>
            </div>

            {/* Column 3 - CONTATTI */}
            <div>
              <h3 className="text-3xl font-medium mb-4 whitespace-nowrap">CONTATTI</h3>
              <ul className="space-y-2">
                <li className="text-base text-white/80">+39 0521 819723</li>
                <li className="text-base text-white/80">info@furlottigroup.it</li>
              </ul>
            </div>

            {/* Column 4 - SEDI LEGALI E OPERATIVE */}
            <div>
              <h3 className="text-3xl font-medium mb-4 whitespace-nowrap">SEDI LEGALI E OPERATIVE</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-base text-white/80 hover:text-[#98FB98] transition-colors">Via G. Micheli, 3 San Polo di Torrile PR</Link></li>
                <li><Link href="#" className="text-base text-white/80 hover:text-[#98FB98] transition-colors">Via L. Romagnoli, 38 San Polo di Torrile PR</Link></li>
              </ul>
            </div>
          </div>

          {/* Links and CTA section */}
          <div>
            <div className="border-t border-white/20 pt-16 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white/60">
                <Link href="#" className="text-base hover:text-[#98FB98] transition-colors underline underline-offset-4">
                  Whistleblowing
                </Link>
                <span>-</span>
                <Link href="#" className="text-base hover:text-[#98FB98] transition-colors underline underline-offset-4">
                  Informativa clienti
                </Link>
                <span>-</span>
                <Link href="#" className="text-base hover:text-[#98FB98] transition-colors underline underline-offset-4">
                  Informativa fornitori
                </Link>
                <span>-</span>
                <Link href="#" className="text-base hover:text-[#98FB98] transition-colors underline underline-offset-4">
                  Autorizzazioni e certificazioni
                </Link>
              </div>
              <Link 
                href="#" 
                className="bg-white hover:bg-white/90 text-[#1B4B43] px-6 py-3 rounded-lg text-base font-semibold transition-colors"
              >
                Lavora con noi
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Bottom Bar */}
      <div className="bg-[#133027] text-white/60 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-base">
              Furlotti Luigi S.r.l. - P.IVA 02514330345 - REA PR/244807 - Cap Soc. € 100.000 i.v.
            </p>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-base hover:text-[#98FB98] transition-colors underline underline-offset-4">
                Note Legali
              </Link>
              <span className="text-white/40">-</span>
              <Link href="#" className="text-base hover:text-[#98FB98] transition-colors underline underline-offset-4">
                Privacy Policy
              </Link>
              <span className="text-white/40">-</span>
              <Link href="#" className="text-base hover:text-[#98FB98] transition-colors underline underline-offset-4">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer; 