import { Shield, Calendar, Lock, Eye, Database, UserCheck, AlertTriangle, ArrowLeft, Cookie, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "Chez Financeo, nous prenons la protection de votre vie privée très au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles.",
        "En utilisant notre plateforme, vous consentez à la collecte et à l'utilisation de vos informations conformément à cette politique. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser nos services.",
        "Nous nous engageons à respecter le Règlement Général sur la Protection des Données (RGPD) et toutes les lois applicables en matière de protection des données."
      ]
    },
    {
      id: "data-collection",
      title: "2. Données collectées",
      icon: <Database className="w-5 h-5" />,
      content: [
        "Nous collectons différents types de données pour vous fournir nos services :",
        "**Données d'identification** : nom, prénom, adresse email, numéro de téléphone, date de naissance.",
        "**Données de compte** : nom d'utilisateur, mot de passe crypté, préférences de compte.",
        "**Données financières** : informations sur vos transactions, budgets, objectifs d'épargne, données bancaires (stockées de manière cryptée).",
        "**Données d'utilisation** : adresse IP, type de navigateur, pages visitées, durée de visite, actions effectuées sur la plateforme.",
        "**Données de localisation** : avec votre consentement, nous pouvons collecter des données de localisation pour personnaliser nos services.",
        "**Cookies et technologies similaires** : nous utilisons des cookies pour améliorer votre expérience utilisateur."
      ]
    },
    {
      id: "data-usage",
      title: "3. Utilisation des données",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "Nous utilisons vos données personnelles pour les finalités suivantes :",
        "**Fourniture de services** : gérer votre compte, traiter vos transactions, fournir des fonctionnalités de gestion financière.",
        "**Personnalisation** : adapter nos services à vos besoins et préférences, vous proposer des recommandations pertinentes.",
        "**Communication** : vous envoyer des notifications importantes, des mises à jour de service, des newsletters (avec votre consentement).",
        "**Sécurité** : détecter et prévenir la fraude, protéger contre les activités malveillantes, assurer la sécurité de la plateforme.",
        "**Amélioration** : analyser l'utilisation de nos services pour les améliorer, développer de nouvelles fonctionnalités.",
        "**Conformité légale** : respecter nos obligations légales et réglementaires, répondre aux demandes des autorités."
      ]
    },
    {
      id: "data-sharing",
      title: "4. Partage des données",
      icon: <UserCheck className="w-5 h-5" />,
      content: [
        "Nous ne vendons jamais vos données personnelles à des tiers. Nous pouvons partager vos données dans les cas suivants :",
        "**Prestataires de services** : nous travaillons avec des partenaires de confiance pour héberger nos serveurs, traiter les paiements et fournir des services d'analyse. Ces prestataires sont contractuellement tenus de protéger vos données.",
        "**Obligations légales** : nous pouvons divulguer vos données si la loi l'exige, en réponse à des procédures judiciaires ou pour protéger nos droits et notre sécurité.",
        "**Transferts d'entreprise** : en cas de fusion, acquisition ou vente d'actifs, vos données peuvent être transférées, sous réserve de cette politique de confidentialité.",
        "**Avec votre consentement** : nous pouvons partager vos données avec d'autres tiers si vous nous y autorisez explicitement."
      ]
    },
    {
      id: "data-security",
      title: "5. Sécurité des données",
      icon: <Lock className="w-5 h-5" />,
      content: [
        "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles robustes pour protéger vos données :",
        "**Cryptage** : toutes les données sensibles sont cryptées en transit (SSL/TLS) et au repos (AES-256).",
        "**Authentification** : authentification à deux facteurs (2FA) disponible pour sécuriser votre compte.",
        "**Contrôles d'accès** : accès limité aux données personnelles, uniquement pour le personnel autorisé ayant besoin de les consulter.",
        "**Surveillance** : systèmes de détection d'intrusion et surveillance continue de notre infrastructure.",
        "**Audits réguliers** : audits de sécurité et tests de pénétration effectués régulièrement par des experts indépendants.",
        "**Formation** : notre personnel est formé aux meilleures pratiques en matière de protection des données.",
        "Malgré nos efforts, aucune méthode de transmission sur Internet n'est totalement sécurisée. Nous ne pouvons garantir une sécurité absolue."
      ]
    },
    {
      id: "data-retention",
      title: "6. Conservation des données",
      icon: <Database className="w-5 h-5" />,
      content: [
        "Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour les finalités décrites dans cette politique :",
        "**Données de compte actif** : conservées tant que votre compte est actif.",
        "**Données de compte fermé** : conservées pendant 3 ans après la fermeture du compte pour des raisons légales et de sécurité.",
        "**Données financières** : conservées pendant 10 ans conformément aux obligations comptables et fiscales.",
        "**Données marketing** : conservées jusqu'à ce que vous vous désabonniez ou retiriez votre consentement.",
        "Après les périodes de conservation, vos données sont supprimées de manière sécurisée ou anonymisées."
      ]
    },
    {
      id: "user-rights",
      title: "7. Vos droits",
      icon: <UserCheck className="w-5 h-5" />,
      content: [
        "Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :",
        "**Droit d'accès** : vous pouvez demander une copie de toutes les données que nous détenons sur vous.",
        "**Droit de rectification** : vous pouvez corriger des données inexactes ou incomplètes.",
        "**Droit à l'effacement** : vous pouvez demander la suppression de vos données dans certaines circonstances.",
        "**Droit à la limitation** : vous pouvez demander la limitation du traitement de vos données.",
        "**Droit à la portabilité** : vous pouvez recevoir vos données dans un format structuré et couramment utilisé.",
        "**Droit d'opposition** : vous pouvez vous opposer au traitement de vos données à des fins de marketing direct.",
        "**Droit de retrait du consentement** : vous pouvez retirer votre consentement à tout moment.",
        "Pour exercer vos droits, contactez-nous à rakotomalalaheryniainatahina@gmail.com. Nous répondrons dans un délai de 30 jours."
      ]
    },
    {
      id: "cookies",
      title: "8. Cookies et technologies similaires",
      icon: <Cookie className="w-5 h-5" />,
      content: [
        "Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience :",
        "**Cookies essentiels** : nécessaires au fonctionnement de la plateforme (authentification, sécurité).",
        "**Cookies de performance** : nous aident à comprendre comment vous utilisez notre plateforme pour l'améliorer.",
        "**Cookies de fonctionnalité** : mémorisent vos préférences et paramètres.",
        "**Cookies publicitaires** : utilisés pour afficher des publicités pertinentes (avec votre consentement).",
        "Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter les fonctionnalités de la plateforme."
      ]
    },
    {
      id: "third-party",
      title: "9. Services tiers",
      icon: <UserCheck className="w-5 h-5" />,
      content: [
        "Notre plateforme peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites.",
        "Nous utilisons des services tiers pour certaines fonctionnalités :",
        "**Services de paiement** : Stripe, PayPal (soumis à leurs propres politiques de confidentialité).",
        "**Services d'analyse** : Google Analytics, Mixpanel (pour comprendre l'utilisation de notre plateforme).",
        "**Services cloud** : AWS, Google Cloud (pour l'hébergement sécurisé de nos données).",
        "Nous veillons à ce que tous nos partenaires respectent des normes élevées de protection des données."
      ]
    },
    {
      id: "international",
      title: "10. Transferts internationaux",
      icon: <Database className="w-5 h-5" />,
      content: [
        "Vos données peuvent être transférées et traitées dans des pays autres que votre pays de résidence.",
        "Lorsque nous transférons des données en dehors de l'Espace Économique Européen (EEE), nous nous assurons que des garanties appropriées sont en place :",
        "**Clauses contractuelles types** : approuvées par la Commission européenne.",
        "**Certification Privacy Shield** : pour les transferts vers les États-Unis (le cas échéant).",
        "**Décisions d'adéquation** : transferts vers des pays reconnus comme offrant un niveau de protection adéquat.",
        "Nous prenons toutes les mesures raisonnables pour garantir que vos données sont traitées en toute sécurité."
      ]
    },
    {
      id: "minors",
      title: "11. Protection des mineurs",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "Financeo n'est pas destiné aux personnes de moins de 18 ans. Nous ne collectons pas sciemment de données personnelles auprès de mineurs.",
        "Si nous découvrons qu'un mineur nous a fourni des données personnelles, nous les supprimerons immédiatement.",
        "Si vous êtes parent ou tuteur et pensez que votre enfant nous a fourni des données personnelles, veuillez nous contacter à rakotomalalaheryniainatahina@gmail.com."
      ]
    },
    {
      id: "changes",
      title: "12. Modifications de la politique",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        "Nous pouvons modifier cette politique de confidentialité de temps à autre pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.",
        "Nous vous informerons de toute modification importante par email ou via une notification sur la plateforme.",
        "La date de 'Dernière mise à jour' en haut de cette page indique quand la politique a été modifiée pour la dernière fois.",
        "Votre utilisation continue de nos services après les modifications constitue votre acceptation de la nouvelle politique."
      ]
    },
    {
      id: "contact",
      title: "13. Nous contacter",
      icon: <Mail className="w-5 h-5" />,
      content: [
        "Pour toute question concernant cette politique de confidentialité ou vos données personnelles, vous pouvez nous contacter :",
        "**Délégué à la protection des données (DPO)** : rakotomalalaheryniainatahina@gmail.com",
        "**Email général** : rakotomalalaheryniainatahina@gmail.com",
        "**Courrier postal** : Madagascar, Antananarivo",
        "**Téléphone** : +261 34 07 513 90",
        "Vous avez également le droit de déposer une plainte auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés."
      ]
    }
  ];

  return (
    <div className="min-h-screen w-[95%] m-auto">
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
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez comment nous protégeons et utilisons vos données personnelles
          </p>
          <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Dernière mise à jour : 19 octobre 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>RGPD Conforme</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Alert Important */}
        <div className=" border-l-4 border-[#00C896] rounded-r-xl p-6 mb-12">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-[#00C896] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">Votre vie privée est notre priorité</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Chez Financeo, nous nous engageons à protéger vos données personnelles avec les plus hauts standards de sécurité.
                Cette politique explique de manière transparente comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </div>
          </div>
        </div>

        {/* Points clés */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className=" rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0D87E8] to-[#00C896] rounded-xl flex items-center justify-center text-white mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Cryptage total</h3>
            <p className="text-sm text-gray-600">Toutes vos données sont cryptées avec les dernières technologies (AES-256)</p>
          </div>
          <div className=" rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00C896] to-[#7EE5A8] rounded-xl flex items-center justify-center text-white mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Transparence</h3>
            <p className="text-sm text-gray-600">Vous savez toujours quelles données nous collectons et pourquoi</p>
          </div>
          <div className=" rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7EE5A8] to-[#0D87E8] rounded-xl flex items-center justify-center text-white mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold  mb-2">Vos droits</h3>
            <p className="text-sm text-gray-600">Accès, rectification, suppression : vous contrôlez vos données</p>
          </div>
        </div>

        {/* Table des matières */}
        <div className=" rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold  mb-6 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0D87E8] to-[#00C896] rounded-lg flex items-center justify-center text-white mr-3">
              <Database className="w-5 h-5" />
            </div>
            Table des matières
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                className="flex items-center space-x-3 text-gray-600 hover:text-[#00C896] transition-colors group"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#0D87E8]/10 to-[#00C896]/10 rounded-lg flex items-center justify-center group-hover:from-[#0D87E8]/20 group-hover:to-[#00C896]/20 transition-colors">
                  {section.icon}
                </div>
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
              <h2 className="text-2xl font-bold  mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-xl flex items-center justify-center text-white mr-4">
                  {section.icon}
                </div>
                {section.title.replace(/^\d+\.\s/, '')}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`leading-relaxed ${paragraph.startsWith('**')
                      ? 'font-semibold'
                      : 'text-gray-700'
                      }`}
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="">$1</strong>')
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
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Questions sur votre vie privée ?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Notre équipe dédiée à la protection des données est là pour répondre à toutes vos questions et vous aider à exercer vos droits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rakotomalalaheryniainatahina@gmail.com"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>rakotomalalaheryniainatahina@gmail.com</span>
            </a>
            <a
              href="mailto:rakotomalalaheryniainatahina@gmail.com"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              <Shield className="w-5 h-5" />
              <span>Contacter le DPO</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;