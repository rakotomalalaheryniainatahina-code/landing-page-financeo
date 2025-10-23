import { Cookie, Calendar, Shield, Settings, Eye, BarChart3, Target, CheckCircle, ArrowLeft, Info } from 'lucide-react';
import { useState } from 'react';

type CookiePreferences = {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
  [key: string]: boolean;
};

const CookiesPolicyPage = () => {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
  essential: true,
  functional: true,
  analytics: true,
  advertising: false
});

  const cookieTypes = [
    {
      id: "essential",
      icon: <Shield className="w-6 h-6" />,
      title: "Cookies essentiels",
      description: "Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.",
      required: true,
      examples: [
        "Cookie de session utilisateur",
        "Cookie d'authentification",
        "Cookie de sécurité CSRF",
        "Cookie de préférence de langue"
      ],
      duration: "Session ou 1 an",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "functional",
      icon: <Settings className="w-6 h-6" />,
      title: "Cookies fonctionnels",
      description: "Ces cookies permettent d'améliorer les fonctionnalités et la personnalisation du site.",
      required: false,
      examples: [
        "Préférences d'affichage (mode sombre/clair)",
        "Paramètres de notification",
        "Choix de devise et de format de date",
        "Préférences de tableau de bord"
      ],
      duration: "1 an",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Cookies analytiques",
      description: "Ces cookies nous aident à comprendre comment les visiteurs utilisent le site pour l'améliorer.",
      required: false,
      examples: [
        "Google Analytics (_ga, _gid)",
        "Statistiques de pages visitées",
        "Données de comportement utilisateur",
        "Taux de rebond et durée de session"
      ],
      duration: "2 ans",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "advertising",
      icon: <Target className="w-6 h-6" />,
      title: "Cookies publicitaires",
      description: "Ces cookies sont utilisés pour afficher des publicités personnalisées et pertinentes.",
      required: false,
      examples: [
        "Cookies de reciblage publicitaire",
        "Cookies de réseaux sociaux (Facebook, LinkedIn)",
        "Cookies de partenaires publicitaires",
        "Mesure de performance des campagnes"
      ],
      duration: "1 an",
      color: "from-orange-500 to-red-500"
    }
  ];

  const sections = [
    {
      id: "what-are-cookies",
      title: "1. Qu'est-ce qu'un cookie ?",
      icon: <Cookie className="w-5 h-5" />,
      content: [
        "Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et préférences sur une période donnée.",
        "Les cookies peuvent être 'permanents' (ils restent sur votre appareil jusqu'à leur date d'expiration ou jusqu'à ce que vous les supprimiez) ou 'de session' (ils sont supprimés lorsque vous fermez votre navigateur).",
        "Financeo utilise des cookies pour améliorer votre expérience, personnaliser le contenu, analyser le trafic et assurer la sécurité de la plateforme."
      ]
    },
    {
      id: "why-cookies",
      title: "2. Pourquoi utilisons-nous des cookies ?",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "Nous utilisons des cookies pour plusieurs raisons essentielles :",
        "**Fonctionnalité** : Les cookies nous permettent de reconnaître votre compte et de vous fournir un accès sécurisé à votre tableau de bord.",
        "**Personnalisation** : Ils mémorisent vos préférences (langue, devise, thème) pour vous offrir une expérience sur mesure.",
        "**Sécurité** : Les cookies nous aident à détecter les activités frauduleuses et à protéger votre compte contre les accès non autorisés.",
        "**Analyse** : Ils nous permettent de comprendre comment vous utilisez notre plateforme pour l'améliorer continuellement.",
        "**Performance** : Les cookies nous aident à optimiser la vitesse de chargement et les performances du site."
      ]
    },
    {
      id: "cookie-types",
      title: "3. Types de cookies utilisés",
      icon: <Settings className="w-5 h-5" />,
      content: [
        "Financeo utilise quatre catégories principales de cookies, chacune ayant un objectif spécifique. Vous pouvez gérer vos préférences pour chaque catégorie dans la section 'Gestion des cookies' ci-dessous."
      ]
    },
    {
      id: "third-party",
      title: "4. Cookies tiers",
      icon: <Target className="w-5 h-5" />,
      content: [
        "Certains cookies sur notre site sont placés par des services tiers. Nous travaillons avec les partenaires suivants :",
        "**Google Analytics** : Pour analyser le trafic et l'utilisation du site (cookies : _ga, _gid, _gat).",
        "**Stripe** : Pour traiter les paiements de manière sécurisée.",
        "**Intercom** : Pour fournir un support client en temps réel.",
        "**Hotjar** : Pour comprendre le comportement des utilisateurs via des cartes thermiques.",
        "Ces services tiers ont leurs propres politiques de confidentialité et peuvent utiliser des cookies pour collecter des informations. Nous vous encourageons à consulter leurs politiques respectives."
      ]
    },
    {
      id: "manage-cookies",
      title: "5. Comment gérer les cookies ?",
      icon: <Settings className="w-5 h-5" />,
      content: [
        "Vous avez plusieurs options pour gérer et contrôler les cookies :",
        "**Via notre outil de consentement** : Utilisez le gestionnaire de cookies ci-dessous pour activer ou désactiver des catégories spécifiques de cookies.",
        "**Via votre navigateur** : Tous les navigateurs modernes vous permettent de contrôler les cookies via leurs paramètres. Voici comment accéder à ces paramètres :",
        "• Chrome : Paramètres > Confidentialité et sécurité > Cookies",
        "• Firefox : Paramètres > Vie privée et sécurité > Cookies",
        "• Safari : Préférences > Confidentialité > Cookies",
        "• Edge : Paramètres > Cookies et autorisations",
        "**Suppression des cookies** : Vous pouvez supprimer tous les cookies déjà stockés sur votre appareil via les paramètres de votre navigateur.",
        "Veuillez noter que la désactivation de certains cookies peut affecter le fonctionnement du site et limiter certaines fonctionnalités."
      ]
    },
    {
      id: "duration",
      title: "6. Durée de conservation",
      icon: <Calendar className="w-5 h-5" />,
      content: [
        "La durée de conservation des cookies varie selon leur type et leur fonction :",
        "**Cookies de session** : Supprimés automatiquement lorsque vous fermez votre navigateur.",
        "**Cookies essentiels** : Conservés jusqu'à 1 an maximum.",
        "**Cookies fonctionnels** : Conservés jusqu'à 1 an.",
        "**Cookies analytiques** : Conservés jusqu'à 2 ans (conformément aux recommandations de la CNIL).",
        "**Cookies publicitaires** : Conservés jusqu'à 13 mois maximum (conformément au RGPD).",
        "Vous pouvez à tout moment supprimer les cookies de votre navigateur, ce qui réinitialisera ces durées."
      ]
    },
    {
      id: "consent",
      title: "7. Consentement",
      icon: <CheckCircle className="w-5 h-5" />,
      content: [
        "Conformément au RGPD et à la directive ePrivacy, nous demandons votre consentement avant de placer des cookies non essentiels sur votre appareil.",
        "Lors de votre première visite sur Financeo, une bannière de cookies vous est présentée pour recueillir vos préférences. Vous pouvez accepter tous les cookies, les refuser ou personnaliser vos choix.",
        "Votre consentement est stocké pendant 13 mois. Après cette période, nous vous demanderons à nouveau votre consentement.",
        "Vous pouvez modifier vos préférences à tout moment en utilisant le gestionnaire de cookies disponible en bas de page ou dans les paramètres de votre compte."
      ]
    },
    {
      id: "updates",
      title: "8. Modifications de cette politique",
      icon: <Info className="w-5 h-5" />,
      content: [
        "Nous pouvons mettre à jour cette politique de cookies de temps à autre pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.",
        "Nous vous informerons de toute modification importante via une notification sur le site ou par email.",
        "La date de dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette politique."
      ]
    },
    {
      id: "contact",
      title: "9. Nous contacter",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "Si vous avez des questions concernant notre utilisation des cookies, vous pouvez nous contacter :",
        "**Email** : privacy@financeo.com",
        "**Délégué à la protection des données** : dpo@financeo.com",
        "**Adresse postale** : Financeo SAS, 123 Avenue des Champs-Élysées, 75008 Paris, France",
        "**Téléphone** : +33 1 23 45 67 89"
      ]
    }
  ];

  const handleToggle = (id: string) => {
    if (id === 'essential') return; // Les cookies essentiels ne peuvent pas être désactivés
    setCookiePreferences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const savePreferences = () => {
    // Ici vous pouvez implémenter la logique pour sauvegarder les préférences
    alert('Vos préférences ont été enregistrées avec succès !');
  };

  return (
    <div className="min-h-screen w-[95%] m-auto ">
      {/* Header avec retour */}
      <div className=" sticky top-0 z-40 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#00C896] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br rounded-xl from-[#0D87E8] via-[#00C896] to-[#7EE5A8] py-20">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Cookie className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Politique des Cookies
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur notre utilisation des cookies
          </p>
          <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Dernière mise à jour : 19 octobre 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Conforme RGPD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Alert Important */}
        <div className=" border-l-4 border-[#0D87E8] rounded-r-xl p-6 mb-12">
          <div className="flex items-start space-x-3">
            <Info className="w-6 h-6 text-[#0D87E8] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold  mb-2">Transparence totale</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nous croyons en la transparence totale concernant l'utilisation des cookies. 
                Cette page vous explique en détail quels cookies nous utilisons, pourquoi et comment vous pouvez les gérer.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Manager Interactive */}
        <div className=" rounded-2xl shadow-xl border border-gray-200 p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0D87E8] to-[#00C896] rounded-xl flex items-center justify-center text-white">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold ">Gestionnaire de cookies</h2>
              <p className="text-sm text-gray-600">Personnalisez vos préférences de cookies</p>
            </div>
          </div>

          <div className="space-y-6">
            {cookieTypes.map((cookie) => (
              <div
                key={cookie.id}
                className="border border-gray-200 rounded-xl p-6 hover:border-[#00C896] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cookie.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                      {cookie.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold ">{cookie.title}</h3>
                        {cookie.required && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                            Requis
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{cookie.description}</p>
                      <p className="text-xs text-gray-500 mb-2">
                        <strong>Durée :</strong> {cookie.duration}
                      </p>
                      <details className="text-sm">
                        <summary className="cursor-pointer text-[#00C896] hover:text-[#0D87E8] font-medium">
                          Voir les exemples
                        </summary>
                        <ul className="mt-2 space-y-1 ml-4">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx} className="text-gray-600 text-xs flex items-start">
                              <span className="text-[#00C896] mr-2">•</span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggle(cookie.id)}
                    disabled={cookie.required}
                    className={`flex-shrink-0 ml-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      cookiePreferences[cookie.id]
                        ? 'bg-gradient-to-r from-[#0D87E8] to-[#00C896]'
                        : 'bg-gray-300'
                    } ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                        cookiePreferences[cookie.id] ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={savePreferences}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Enregistrer mes préférences
            </button>
            <button
              onClick={() => setCookiePreferences({ essential: true, functional: true, analytics: true, advertising: true })}
              className="px-6 py-3 0 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Tout accepter
            </button>
            <button
              onClick={() => setCookiePreferences({ essential: true, functional: false, analytics: false, advertising: false })}
              className="px-6 py-3   rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Tout refuser
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              id={section.id}
              className=" rounded-2xl shadow-lg border border-gray-200 p-8 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-xl flex items-center justify-center text-white mr-4">
                  {section.icon}
                </div>
                {section.title.replace(/^\d+\.\s/, '')}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex} 
                    className={`leading-relaxed ${
                      paragraph.startsWith('**') || paragraph.startsWith('•')
                        ? 'font-semibold' 
                        : 'text-gray-700'
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="">$1</strong>')
                        .replace(/^• /gm, '<span class="text-[#00C896]">• </span>')
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Des questions sur les cookies ?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions concernant notre utilisation des cookies.
          </p>
          <a
            href="mailto:privacy@financeo.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Nous contacter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;