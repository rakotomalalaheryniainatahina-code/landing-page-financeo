"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import Link from "next/link";

type CookiePreferences = {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_preferences");
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    const preferences: CookiePreferences = {
      essential: true,
      functional: true,
      analytics: true,
      advertising: true,
    };
    localStorage.setItem("cookie_preferences", JSON.stringify(preferences));
    setVisible(false);
  };

  const refuseAll = () => {
    const preferences: CookiePreferences = {
      essential: true, // toujours actif
      functional: false,
      analytics: false,
      advertising: false,
    };
    localStorage.setItem("cookie_preferences", JSON.stringify(preferences));
    setVisible(false);
  };

  const customize = () => {
    window.location.href = "/cookies"; // redirige vers ta page CookiesPolicyPage
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full backdrop-blur-xl border-t border-gray-200 shadow-xl z-50 px-6 py-5">
      <div className="w-[95%] m-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex lg:w-[60%] items-start space-x-3">
          <div className="flex items-center justify-center p-3 bg-gradient-to-br from-[#0D87E8] to-[#00C896] rounded-xl">
            <Cookie className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et garantir la sécurité du site. 
            Vous pouvez accepter tous les cookies, les refuser ou personnaliser vos préférences.{" "}
            <Link href="/politique-de-confidentialité" className="text-[#0D87E8] underline">
              En savoir plus
            </Link>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={refuseAll}
            className="px-4 py-2 text-sm fle font-semibold  bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
          >
            Tout refuser
          </button>
          <button
            onClick={customize}
            className="px-4 py-2 text-sm font-semibold border border-[#0D87E8] text-[#0D87E8] rounded-lg hover:bg-[#0D87E8] hover:text-white transition-all"
          >
            Personnaliser
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#0D87E8] to-[#00C896] text-white rounded-lg hover:scale-105 transition-transform"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
