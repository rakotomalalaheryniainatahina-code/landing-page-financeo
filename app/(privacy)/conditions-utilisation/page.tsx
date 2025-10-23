import { FileText, Calendar, Shield, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

const TermsConditionsPage = () => {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptation des conditions",
      content: [
        "En accédant et en utilisant Financeo, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre plateforme.",
        "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur notre plateforme. Votre utilisation continue de Financeo après ces modifications constitue votre acceptation des nouvelles conditions."
      ]
    },
    {
      id: "services",
      title: "2. Description des services",
      content: [
        "Financeo fournit une plateforme de gestion financière personnelle permettant aux utilisateurs de suivre leurs transactions, gérer leurs budgets, définir des objectifs d'épargne et analyser leurs habitudes financières.",
        "Nos services incluent, sans s'y limiter : le tableau de bord intelligent, la gestion des transactions, les budgets personnalisés, les objectifs d'épargne, les rapports détaillés et les rappels de factures.",
        "Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie de nos services à tout moment, avec ou sans préavis."
      ]
    },
    {
      id: "account",
      title: "3. Compte utilisateur",
      content: [
        "Pour utiliser Financeo, vous devez créer un compte en fournissant des informations exactes, complètes et à jour. Vous êtes responsable de la confidentialité de votre mot de passe et de toutes les activités effectuées sous votre compte.",
        "Vous devez avoir au moins 18 ans pour créer un compte. En créant un compte, vous confirmez que vous avez l'âge légal requis.",
        "Vous vous engagez à nous informer immédiatement de toute utilisation non autorisée de votre compte ou de toute autre violation de sécurité.",
        "Nous nous réservons le droit de suspendre ou de résilier votre compte si nous constatons une violation de ces conditions ou une activité suspecte."
      ]
    },
    {
      id: "data",
      title: "4. Protection des données",
      content: [
        "Nous prenons la sécurité de vos données financières très au sérieux. Toutes les données sont cryptées et stockées de manière sécurisée conformément aux normes de l'industrie.",
        "Nous ne vendons jamais vos données personnelles à des tiers. Pour plus d'informations sur la collecte et l'utilisation de vos données, veuillez consulter notre Politique de confidentialité.",
        "Vous conservez tous les droits sur vos données. Vous pouvez demander l'exportation ou la suppression de vos données à tout moment depuis les paramètres de votre compte."
      ]
    },
    {
      id: "usage",
      title: "5. Règles d'utilisation",
      content: [
        "Vous acceptez d'utiliser Financeo uniquement à des fins légales et conformément à ces conditions.",
        "Il est interdit de : utiliser la plateforme pour des activités frauduleuses, tenter d'accéder de manière non autorisée à nos systèmes, perturber le fonctionnement de la plateforme, copier ou reproduire tout contenu sans autorisation.",
        "Vous ne devez pas utiliser de bots, scripts ou tout autre moyen automatisé pour accéder à nos services sans notre autorisation écrite préalable."
      ]
    },
    {
      id: "financial",
      title: "6. Conseils financiers",
      content: [
        "Financeo fournit des outils de gestion financière et des informations générales, mais ne constitue pas un conseil financier, fiscal ou juridique professionnel.",
        "Nous ne sommes pas responsables des décisions financières que vous prenez sur la base des informations fournies par notre plateforme.",
        "Pour des conseils financiers personnalisés, nous vous recommandons de consulter un conseiller financier qualifié."
      ]
    },
    {
      id: "fees",
      title: "7. Frais et paiements",
      content: [
        "Financeo propose des services gratuits et des fonctionnalités premium payantes. Les tarifs des services premium sont clairement affichés avant tout achat.",
        "Tous les paiements sont traités de manière sécurisée par des prestataires de paiement tiers certifiés.",
        "Les remboursements sont soumis à notre politique de remboursement, disponible sur notre site web.",
        "Nous nous réservons le droit de modifier nos tarifs à tout moment, avec un préavis de 30 jours pour les abonnements en cours."
      ]
    },
    {
      id: "intellectual",
      title: "8. Propriété intellectuelle",
      content: [
        "Tous les droits de propriété intellectuelle relatifs à Financeo, y compris mais sans s'y limiter, les textes, graphiques, logos, icônes, images, clips audio et logiciels, sont la propriété de Financeo ou de ses concédants de licence.",
        "Vous disposez d'une licence limitée, non exclusive et non transférable pour utiliser notre plateforme conformément à ces conditions.",
        "Toute reproduction, distribution ou modification de notre contenu sans autorisation écrite préalable est strictement interdite."
      ]
    },
    {
      id: "liability",
      title: "9. Limitation de responsabilité",
      content: [
        "Financeo est fourni 'tel quel' sans aucune garantie explicite ou implicite. Nous ne garantissons pas que la plateforme sera sans erreur ou ininterrompue.",
        "Dans toute la mesure permise par la loi, nous déclinons toute responsabilité pour les dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de votre utilisation ou de votre incapacité à utiliser nos services.",
        "Notre responsabilité totale envers vous pour toute réclamation liée à ces conditions ne dépassera pas le montant que vous nous avez payé au cours des 12 derniers mois."
      ]
    },
    {
      id: "termination",
      title: "10. Résiliation",
      content: [
        "Vous pouvez résilier votre compte à tout moment depuis les paramètres de votre compte.",
        "Nous pouvons suspendre ou résilier votre compte immédiatement, sans préavis, si vous violez ces conditions ou si nous soupçonnons une activité frauduleuse.",
        "En cas de résiliation, vous perdrez l'accès à votre compte et à toutes les données associées, sauf si la loi l'exige autrement."
      ]
    },
    {
      id: "law",
      title: "11. Droit applicable",
      content: [
        "Ces conditions sont régies par les lois françaises, sans égard aux principes de conflits de lois.",
        "Tout litige découlant de ces conditions sera soumis à la juridiction exclusive des tribunaux de Paris, France.",
        "Si une disposition de ces conditions est jugée invalide, les autres dispositions resteront pleinement en vigueur."
      ]
    },
    {
      id: "contact",
      title: "12. Contact",
      content: [
        "Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à :",
        "Email : rakotomalalaheryniainatahina@gmail.com",
        "Adresse : Madagascar, Antananarivo",
        "Téléphone : +261 34 07 513 90"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b w-[95%] m-auto">
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
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conditions d'utilisation
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Veuillez lire attentivement ces conditions avant d'utiliser Financeo
          </p>
          <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Dernière mise à jour : 19 octobre 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Version 2.1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className=" border-l-4 border-[#0D87E8] rounded-r-xl p-6 mb-12">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-[#0D87E8] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Important</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                En utilisant Financeo, vous acceptez d'être lié par ces conditions d'utilisation.
                Si vous n'êtes pas d'accord avec l'une de ces conditions, veuillez ne pas utiliser notre plateforme.
              </p>
            </div>
          </div>
        </div>

        {/* Table des matières */}
        <div className=" rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0D87E8] to-[#00C896] rounded-lg flex items-center justify-center text-white mr-3">
              <FileText className="w-5 h-5" />
            </div>
            Table des matières
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#00C896] transition-colors group"
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{section.title}</span>
              </a>
            ))}
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
                  {index + 1}
                </div>
                {section.title.replace(/^\d+\.\s/, '')}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Des questions sur nos conditions ?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Notre équipe juridique est à votre disposition pour répondre à toutes vos questions concernant ces conditions d'utilisation.
          </p>
          <a
            href="mailto:rakotomalalaheryniainatahina@gmail.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Contactez-nous</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;