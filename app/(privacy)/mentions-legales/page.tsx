import { Building2, Calendar, User, Globe, Server, Scale, Mail, Phone, MapPin, ArrowLeft, FileText, Shield, AlertCircle } from 'lucide-react';

const LegalNoticePage = () => {
  const sections = [
    {
      id: "editor",
      title: "1. Éditeur du site",
      icon: <Building2 className="w-5 h-5" />,
      content: [
        {
          label: "Raison sociale",
          value: "Financeo SAS"
        },
        {
          label: "Forme juridique",
          value: "Société par Actions Simplifiée (SAS)"
        },
        {
          label: "Capital social",
          value: "500 000 €"
        },
        {
          label: "Siège social",
          value: "123 Avenue des Champs-Élysées, 75008 Paris, France"
        },
        {
          label: "SIRET",
          value: "123 456 789 00012"
        },
        {
          label: "RCS",
          value: "Paris B 123 456 789"
        },
        {
          label: "TVA intracommunautaire",
          value: "FR 12 123456789"
        },
        {
          label: "Code APE",
          value: "6201Z - Programmation informatique"
        }
      ]
    },
    {
      id: "director",
      title: "2. Directeur de la publication",
      icon: <User className="w-5 h-5" />,
      content: [
        {
          label: "Nom",
          value: "Jean Dupont"
        },
        {
          label: "Fonction",
          value: "Président de Financeo SAS"
        },
        {
          label: "Email",
          value: "direction@financeo.com"
        }
      ]
    },
    {
      id: "hosting",
      title: "3. Hébergement",
      icon: <Server className="w-5 h-5" />,
      content: [
        {
          label: "Hébergeur",
          value: "Amazon Web Services (AWS)"
        },
        {
          label: "Raison sociale",
          value: "Amazon Web Services EMEA SARL"
        },
        {
          label: "Siège social",
          value: "38 Avenue John F. Kennedy, L-1855 Luxembourg"
        },
        {
          label: "Téléphone",
          value: "+352 2789 0057"
        },
        {
          label: "Site web",
          value: "https://aws.amazon.com"
        }
      ]
    },
    {
      id: "contact",
      title: "4. Contact",
      icon: <Mail className="w-5 h-5" />,
      content: [
        {
          label: "Email général",
          value: "contact@financeo.com"
        },
        {
          label: "Support technique",
          value: "support@financeo.com"
        },
        {
          label: "Service commercial",
          value: "commercial@financeo.com"
        },
        {
          label: "Téléphone",
          value: "+33 1 23 45 67 89"
        },
        {
          label: "Horaires",
          value: "Du lundi au vendredi, 9h-18h (heure de Paris)"
        },
        {
          label: "Adresse postale",
          value: "Financeo SAS, 123 Avenue des Champs-Élysées, 75008 Paris, France"
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "5. Propriété intellectuelle",
      icon: <Scale className="w-5 h-5" />,
      paragraphs: [
        "L'ensemble du contenu présent sur le site Financeo (structure, textes, logos, images, vidéos, icônes, sons, logiciels, bases de données, etc.) est la propriété exclusive de Financeo SAS ou de ses partenaires.",
        "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Financeo SAS.",
        "Le nom 'Financeo', le logo et tous les autres signes distinctifs reproduits sur le site sont des marques déposées de Financeo SAS. Toute reproduction totale ou partielle de ces marques sans autorisation préalable et écrite de Financeo SAS est prohibée.",
        "Toute exploitation non autorisée du site ou de son contenu engagerait la responsabilité civile et pénale de l'utilisateur et serait susceptible d'entraîner des poursuites judiciaires à son encontre."
      ]
    },
    {
      id: "user-responsibility",
      title: "6. Responsabilité de l'utilisateur",
      icon: <User className="w-5 h-5" />,
      paragraphs: [
        "L'utilisateur reconnaît avoir pris connaissance des présentes mentions légales et s'engage à les respecter.",
        "L'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.",
        "L'utilisateur garantit qu'il détient tous les droits nécessaires sur les contenus qu'il publie sur la plateforme et qu'il ne porte pas atteinte aux droits de tiers.",
        "L'utilisateur s'engage à ne pas utiliser le site à des fins illégales, frauduleuses ou nuisibles, et à respecter les droits des autres utilisateurs et de Financeo."
      ]
    },
    {
      id: "editor-responsibility",
      title: "7. Responsabilité de l'éditeur",
      icon: <Shield className="w-5 h-5" />,
      paragraphs: [
        "Financeo s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.",
        "Toutefois, Financeo ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, Financeo décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.",
        "Financeo ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.",
        "Financeo ne pourra également être tenue responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site.",
        "Le site peut contenir des liens hypertextes vers d'autres sites. Financeo n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à l'accès, au contenu ou à l'utilisation de ces sites, ainsi qu'aux dommages pouvant résulter de leur consultation."
      ]
    },
    {
      id: "availability",
      title: "8. Disponibilité du site",
      icon: <Globe className="w-5 h-5" />,
      paragraphs: [
        "Financeo s'efforce de maintenir le site accessible 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure ou d'événement hors de son contrôle, et sous réserve d'éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement du site.",
        "Financeo se réserve le droit d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès à tout ou partie du site, afin d'en assurer la maintenance, ou pour toute autre raison, sans que l'interruption n'ouvre droit à aucune obligation ni indemnisation.",
        "En cas d'interruption prolongée, Financeo s'efforcera d'informer les utilisateurs dans les meilleurs délais."
      ]
    },
    {
      id: "personal-data",
      title: "9. Données personnelles",
      icon: <Shield className="w-5 h-5" />,
      paragraphs: [
        "La collecte et le traitement des données personnelles des utilisateurs sont effectués conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.",
        "Pour plus d'informations sur la collecte, l'utilisation et la protection de vos données personnelles, veuillez consulter notre Politique de confidentialité.",
        "Les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition aux données les concernant, qu'ils peuvent exercer en contactant le Délégué à la Protection des Données à l'adresse : dpo@financeo.com"
      ]
    },
    {
      id: "cookies",
      title: "10. Cookies",
      icon: <FileText className="w-5 h-5" />,
      paragraphs: [
        "Le site Financeo utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.",
        "Un cookie est un petit fichier texte enregistré sur votre ordinateur ou appareil mobile lors de votre visite sur le site. Les cookies peuvent être essentiels, fonctionnels, de performance ou publicitaires.",
        "Vous pouvez configurer votre navigateur pour refuser les cookies ou vous alerter lorsqu'un cookie est envoyé. Cependant, certaines parties du site peuvent ne pas fonctionner correctement si vous désactivez les cookies.",
        "Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre Politique de confidentialité."
      ]
    },
    {
      id: "applicable-law",
      title: "11. Droit applicable et juridiction",
      icon: <Scale className="w-5 h-5" />,
      paragraphs: [
        "Les présentes mentions légales sont régies par le droit français.",
        "En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.",
        "Pour tout litige relatif à l'utilisation du site Financeo, la juridiction compétente sera celle du ressort du siège social de Financeo SAS, sauf disposition légale contraire."
      ]
    },
    {
      id: "cnil",
      title: "12. CNIL",
      icon: <Shield className="w-5 h-5" />,
      paragraphs: [
        "Financeo SAS a effectué les démarches nécessaires auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) pour se conformer à la législation française sur la protection des données.",
        "Les utilisateurs ont le droit de déposer une plainte auprès de la CNIL s'ils estiment que le traitement de leurs données personnelles n'est pas conforme à la réglementation.",
        "CNIL - 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07",
        "Téléphone : +33 1 53 73 22 22",
        "Site web : https://www.cnil.fr"
      ]
    },
    {
      id: "updates",
      title: "13. Mises à jour",
      icon: <Calendar className="w-5 h-5" />,
      paragraphs: [
        "Financeo se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à les consulter régulièrement.",
        "La date de dernière mise à jour est indiquée en haut de cette page.",
        "Toute modification des mentions légales prendra effet dès leur mise en ligne. Votre utilisation continue du site après ces modifications vaut acceptation des nouvelles mentions légales."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header avec retour */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/95">
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
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0D87E8] via-[#00C896] to-[#7EE5A8] py-20">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mentions légales
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Informations légales et réglementaires sur Financeo
          </p>
          <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Dernière mise à jour : 19 octobre 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4" />
              <span>Financeo SAS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Alert Important */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-12">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Conformité légale</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
                cette page présente les mentions légales obligatoires pour tout site internet.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0D87E8] to-[#00C896] rounded-xl flex items-center justify-center text-white mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Financeo SAS</h3>
            <p className="text-sm text-gray-600">Société par Actions Simplifiée au capital de 500 000 €</p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00C896] to-[#7EE5A8] rounded-xl flex items-center justify-center text-white mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Paris, France</h3>
            <p className="text-sm text-gray-600">123 Avenue des Champs-Élysées, 75008 Paris</p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7EE5A8] to-[#0D87E8] rounded-xl flex items-center justify-center text-white mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
            <p className="text-sm text-gray-600">+33 1 23 45 67 89<br/>contact@financeo.com</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              id={section.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-xl flex items-center justify-center text-white mr-4">
                  {section.icon}
                </div>
                {section.title.replace(/^\d+\.\s/, '')}
              </h2>
              
              {/* Si c'est une section avec des champs label/value */}
              {section.content && (
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-start border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                      <div className="sm:w-1/3 font-semibold text-gray-900 mb-1 sm:mb-0">
                        {item.label}
                      </div>
                      <div className="sm:w-2/3 text-gray-700">
                        {item.value.startsWith('http') ? (
                          <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-[#00C896] hover:underline">
                            {item.value}
                          </a>
                        ) : item.value.includes('@') ? (
                          <a href={`mailto:${item.value}`} className="text-[#00C896] hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Si c'est une section avec des paragraphes */}
              {section.paragraphs && (
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Questions juridiques ?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Pour toute question concernant ces mentions légales ou tout autre aspect juridique, 
            notre service juridique est à votre disposition.
          </p>
          <a
            href="mailto:legal@financeo.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>legal@financeo.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LegalNoticePage;