import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      } bg-[#1B4B43]`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="px-6 py-4">
          <div className="flex items-center">
            <Link href="/" className="relative w-40 h-12 flex-shrink-0">
              <Image
                src="https://www.furlottigroup.it/wp-content/uploads/thegem-logos/logo_746bd315be2f74cd38daa9eb05f99c46_2x.png"
                alt="Furlotti Group Logo"
                fill
                style={{ 
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center justify-between flex-grow">
              <div className="flex space-x-8 ml-12">
                <Link href="/furlotti-vetro" className="text-white hover:opacity-80 transition-colors">
                  Furlotti Vetro
                </Link>
                <Link href="/furlotti-ambiente" className="text-white hover:opacity-80 transition-colors">
                  Furlotti Ambiente
                </Link>
                <Link href="/mori-recycling" className="text-white hover:opacity-80 transition-colors">
                  Mori Recycling
                </Link>
                <Link href="/furlotti-omnia" className="text-white hover:opacity-80 transition-colors">
                  Furlotti Omnia
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link 
                  href="/contatti" 
                  className="px-4 py-2 text-white border-white border rounded-md hover:bg-white/10 transition-colors font-semibold"
                >
                  Contatti
                </Link>
                <Link 
                  href="/prenota" 
                  className="px-4 py-2 bg-white text-[#004D40] rounded-md hover:opacity-90 transition-colors font-semibold"
                >
                  Prenota
                </Link>
              </div>
            </div>

            <button
              className="lg:hidden ml-auto text-white hover:opacity-80"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 space-y-4">
              <Link
                href="/furlotti-vetro"
                className="block text-white hover:opacity-80 transition-colors"
                onClick={toggleMenu}
              >
                Furlotti Vetro
              </Link>
              <Link
                href="/furlotti-ambiente"
                className="block text-white hover:opacity-80 transition-colors"
                onClick={toggleMenu}
              >
                Furlotti Ambiente
              </Link>
              <Link
                href="/mori-recycling"
                className="block text-white hover:opacity-80 transition-colors"
                onClick={toggleMenu}
              >
                Mori Recycling
              </Link>
              <Link
                href="/furlotti-omnia"
                className="block text-white hover:opacity-80 transition-colors"
                onClick={toggleMenu}
              >
                Furlotti Omnia
              </Link>
              <div className="pt-4 space-y-3">
                <Link 
                  href="/contatti" 
                  className="block w-full px-4 py-2 text-center text-white border-white border rounded-md hover:bg-white/10 transition-colors font-semibold"
                >
                  Contatti
                </Link>
                <Link 
                  href="/prenota" 
                  className="block w-full px-4 py-2 text-center bg-white text-[#004D40] rounded-md hover:opacity-90 transition-colors font-semibold"
                >
                  Prenota
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 