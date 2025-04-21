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
            <Link href="/" className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/Furlotti-Logo-Header 1.svg"
                alt="Furlotti Logo"
                width={48}
                height={48}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center justify-between flex-grow">
              <div className="flex space-x-2 ml-8">
                <Link href="/furlotti-vetro" className="px-4 py-2 text-white rounded-md hover:bg-white/5 transition-colors font-semibold">
                  Furlotti Vetro
                </Link>
                <Link href="/furlotti-ambiente" className="px-4 py-2 text-white rounded-md hover:bg-white/5 transition-colors font-semibold">
                  Furlotti Ambiente
                </Link>
                <Link href="/mori-recycling" className="px-4 py-2 text-white rounded-md hover:bg-white/5 transition-colors font-semibold">
                  Mori Recycling
                </Link>
                <Link href="/furlotti-omnia" className="px-4 py-2 text-white rounded-md hover:bg-white/5 transition-colors font-semibold">
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
                className="block px-4 py-2 text-white rounded-md hover:bg-white/5 transition-colors"
                onClick={toggleMenu}
              >
                Furlotti Vetro
              </Link>
              <Link
                href="/furlotti-ambiente"
                className="block px-4 py-2 text-white rounded-md hover:bg-white/5 transition-colors"
                onClick={toggleMenu}
              >
                Furlotti Ambiente
              </Link>
              <Link
                href="/mori-recycling"
                className="block px-4 py-2 text-white rounded-md hover:bg-white/5 transition-colors"
                onClick={toggleMenu}
              >
                Mori Recycling
              </Link>
              <Link
                href="/furlotti-omnia"
                className="block px-4 py-2 text-white rounded-md hover:bg-white/5 transition-colors"
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