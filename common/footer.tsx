"use client"

import { Wallet, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/context/darkModeContext';
import Image from 'next/image';
import Images from '@/constant/images';


const Footer = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  const footerLinks = {
    legal: [
      { name: "Conditions d'utilisation", href: "/conditions-utilisation" },
      { name: "Politique de confidentialité", href: "/politique-de-confidentialite" },
      // { name: "Mentions légales", href: "mentions-legales" },
      { name: "Cookies", href: "/cookies" }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" }
  ];

  return (
    <footer className={`relative overflow-hidden mt-16 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Gradient background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8]"></div>

      <div className="w-[95%] m-auto py-16 px-6">
        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Colonne Logo et Description - Plus large */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-xl blur-lg opacity-30"></div>
                <Image src={Images.logo} height={500} width={500} alt="Financeo Logo" className='w-12 relative z-10' />
              </div>
              <p className='font-black text-2xl bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] bg-clip-text text-transparent'>
                financeo
              </p>
            </div>
            <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed max-w-md`}>
              Votre plateforme de confiance pour gérer vos finances et investir dans les cryptomonnaies en toute sécurité.
            </p>

            {/* Coordonnées avec design amélioré */}
            <div className="space-y-3 pt-2">
              <a href="mailto:rakotomalalaheryniainatahina@gmail.com" className={`flex items-center space-x-3 group ${isDark ? 'text-gray-400 hover:text-[#00C896]' : 'text-gray-600 hover:text-[#00C896]'} transition-colors`}>
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#0D87E8]/10 via-[#00C896]/10 to-[#7EE5A8]/10 group-hover:from-[#0D87E8]/20 group-hover:via-[#00C896]/20 group-hover:to-[#7EE5A8]/20 transition-all">
                  <Mail className="w-4 h-4 text-[#00C896]" />
                </div>
                <span className="text-sm font-medium">rakotomalalaheryniainatahina@gmail.com</span>
              </a>
              <a href="tel:+261340751390" className={`flex items-center space-x-3 group ${isDark ? 'text-gray-400 hover:text-[#00C896]' : 'text-gray-600 hover:text-[#00C896]'} transition-colors`}>
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#0D87E8]/10 via-[#00C896]/10 to-[#7EE5A8]/10 group-hover:from-[#0D87E8]/20 group-hover:via-[#00C896]/20 group-hover:to-[#7EE5A8]/20 transition-all">
                  <Phone className="w-4 h-4 text-[#00C896]" />
                </div>
                <span className="text-sm font-medium">+261 34 07 513 90</span>
              </a>
              <div className={`flex items-center space-x-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#0D87E8]/10 via-[#00C896]/10 to-[#7EE5A8]/10">
                  <MapPin className="w-4 h-4 text-[#00C896]" />
                </div>
                <span className="text-sm font-medium">Madagascar, Antananarivo</span>
              </div>
            </div>

            {/* Badge de sécurité */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gradient-to-r from-[#0D87E8]/5 via-[#00C896]/5 to-[#7EE5A8]/5'
              } border ${isDark ? 'border-gray-700' : 'border-[#00C896]/20'}`}>
              <Wallet className="w-4 h-4 text-[#00C896]" />
              <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Plateforme 100% Sécurisée
              </span>
            </div>
          </div>

          {/* Colonne Besoin d'informations - Plus large et design moderne */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Besoin d'informations ?
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Notre équipe est à votre disposition pour répondre à toutes vos questions sur nos services et vous accompagner.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Votre adresse email"
                className={`w-full px-4 py-3.5 pr-12 rounded-xl text-sm ${isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  } border focus:outline-none focus:border-[#00C896] focus:ring-2 focus:ring-[#00C896]/20 transition-all`}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] text-white rounded-lg transition-all hover:shadow-lg hover:scale-105">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Colonne Légal - Compacte */}
          <div className="lg:col-span-3">
            <h3 className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Légal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm ${isDark ? 'text-gray-400 hover:text-[#00C896]' : 'text-gray-600 hover:text-[#00C896]'} transition-colors hover:translate-x-1 inline-block`}
                  >
                    {link.name}
                  </a>

                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider avec gradient */}
        <div className={`h-[1px] mb-8 bg-gradient-to-r from-transparent via-gray-300 to-transparent ${isDark ? 'via-gray-700' : 'via-gray-300'}`}></div>

        {/* Section Bottom - Design modernisé */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 <span className="font-semibold text-[#00C896]">Financeo</span>. Tous droits réservés.
          </p>

          {/* Réseaux sociaux - Design amélioré */}
          <div className="flex items-center space-x-3">
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
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.name}
                className={`p-2.5 rounded-xl ${isDark
                  ? 'bg-gray-800 text-gray-400 hover:bg-gradient-to-br hover:from-[#0D87E8] hover:via-[#00C896] hover:to-[#7EE5A8] hover:text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gradient-to-br hover:from-[#0D87E8] hover:via-[#00C896] hover:to-[#7EE5A8] hover:text-white'
                  } transition-all hover:scale-110 hover:shadow-lg`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;