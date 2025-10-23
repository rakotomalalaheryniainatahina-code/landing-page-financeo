'use client'

import { useState, useEffect } from 'react';
import { Download, Moon, Sun, Menu, X } from 'lucide-react';
import { useDarkMode } from '@/context/darkModeContext';
import Image from 'next/image';
import Images from '@/constant/images';
import Link from 'next/link';

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDownload, setMobileDownload] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Détection du scroll pour effet glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`z-50 transition-all duration-300 ${scrolled
        ? `${isDark ? ' border-gray-800' : ' border-gray-200'} backdrop-blur-xl border-b`
        : `${isDark ? 'bg-transparent border-gray-800/50' : 'bg-transparent border-gray-200/50'} backdrop-blur-md border-b`
        }`}
    >
      <nav className="w-[95%] max-w-7xl m-auto px-6 py-4 flex items-center justify-between">
        {/* Logo avec effet */}
        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Image width={500} height={500} src={Images.logo} alt="Financeo Logo" className='w-10 relative z-10 transform group-hover:scale-110 transition-transform duration-300' />
            </div>
            <p className='font-black text-xl bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] bg-clip-text text-transparent'>
              financeo
            </p>
          </a>

          {/* Menu items - Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="#features"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isDark
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              Fonctionnalités
            </a>
            <a
              href="#avantages"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isDark
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900 '
                }`}
            >
              Avantages
            </a>
          </div>
        </div>

        {/* Actions à droite */}
        <div className="flex items-center space-x-3">
          {/* Inscription Button */}
          <Link href={'/auth'} >
            <button className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] text-white rounded-xl text-sm font-semibold transition-all hover:shadow-xl hover:shadow-[#00C896]/20 hover:scale-105 duration-300">
              <span>Inscription</span>
            </button>
          </Link>

          {/* Download Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("download")}
              className={`p-2.5 hidden lg:block rounded-xl transition-all duration-300 ${isDark
                ? ' text-gray-300 bg-gray-800 hover:text-[#00C896]'
                : ' text-gray-700 bg-gray-100 hover:text-[#00C896]'
                }`}
              aria-label="Télécharger"
            >
              <Download className="w-5 h-5" />
            </button>

            {openDropdown === "download" && (
              <>
                {/* Overlay pour fermer le dropdown */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOpenDropdown(null)}
                ></div>

                {/* Dropdown content */}
                <div className={`absolute top-full right-0 mt-3 p-5 w-72 ${isDark ? 'bg-gray-800' : 'bg-white'
                  } rounded-2xl shadow-2xl z-50 border ${isDark ? 'border-gray-700' : 'border-gray-200'
                  } transform transition-all duration-300 animate-in fade-in slide-in-from-top-2`}>
                  {/* QR Code avec effet */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D87E8]/20 via-[#00C896]/20 to-[#7EE5A8]/20 rounded-xl blur-xl"></div>
                    <Image
                      src={Images.qr_code}
                      alt="QR Code"
                      width={500}
                      height={500}
                      className='relative bg-white p-4 rounded-xl shadow-lg w-full'
                    />
                  </div>

                  <p className={`text-xs text-center mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Scannez pour télécharger l'appli iOS et Android
                  </p>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] text-white rounded-xl text-sm font-semibold transition-all hover:shadow-xl hover:scale-105 duration-300">
                    Télécharger maintenant
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-xl transition-all duration-300 ${isDark
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            aria-label="Changer le thème"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileDownload(!mobileDownload)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${isDark
              ? 'hover:bg-gray-800 bg-gray-800 text-gray-300'
              : 'hover:bg-gray-100 bg-gray-100 text-gray-700'
              }`}
            aria-label="Menu mobile"
          >
            <Download className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${isDark
              ? 'hover:bg-gray-800 bg-gray-800 text-gray-300'
              : 'hover:bg-gray-100 bg-gray-100 text-gray-700'
              }`}
            aria-label="Menu mobile"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden ${isDark ? 'bg-gray-900/98' : 'bg-white/98'
          } backdrop-blur-xl border-t ${isDark ? 'border-gray-800' : 'border-gray-200'
          } animate-in slide-in-from-top duration-300`}>
          <div className="w-[95%] m-auto px-6 py-6 space-y-3">
            <a
              href="#features"
              className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all ${isDark
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Fonctionnalités
            </a>
            <a
              href="#avantages"
              className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all ${isDark
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Avantages
            </a>
            <Link href={'/auth'}>
              <button className="w-full px-5 py-3 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] text-white rounded-xl text-sm font-semibold transition-all hover:shadow-xl hover:scale-105 duration-300">
                Inscription
              </button>
            </Link>
          </div>
        </div>
      )}

      {mobileDownload && (
        <div className={`lg:hidden ${isDark ? 'bg-gray-900/98' : 'bg-white/98'
          } backdrop-blur-xl border-t p-6 ${isDark ? 'border-gray-800' : 'border-gray-200'
          } animate-in slide-in-from-top duration-300`}>
          {/* Overlay pour fermer le dropdown */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpenDropdown(null)}
          ></div>

          {/* Dropdown content */}

          {/* QR Code avec effet */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D87E8]/20 via-[#00C896]/20 to-[#7EE5A8]/20 rounded-xl blur-xl"></div>
            <Image
              src={Images.qr_code}
              width={500}
              height={500}
              alt="QR Code"
              className='relative bg-white p-4 rounded-xl shadow-lg w-full'
            />
          </div>

          <p className={`text-xs text-center mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Scannez pour télécharger l'appli iOS et Android
          </p>

          <button className="w-full px-4 py-3 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] text-white rounded-xl text-sm font-semibold transition-all hover:shadow-xl hover:scale-105 duration-300">
            Télécharger maintenant
          </button>
        </div>

      )}
    </div>
  );
};

export default Navbar;
