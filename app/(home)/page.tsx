import { Benefits } from '@/common/features';
import FeaturesCarousel from '@/common/FeaturesCarousel';
import Navbar from '@/common/NavBar';
import Images from '@/constant/images';
import {
  TrendingUp,
  Shield,
  Download,
  ChevronRight,
  Check,
} from 'lucide-react';
import Image from 'next/image';


function App() {

  return (
    <>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div className="min-h-screen transition-colors duration-300 w-[95%] m-auto">
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>Gérez vos finances intelligemment</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Prenez le contrôle de votre
                    <span className="bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] bg-clip-text text-transparent"> argent</span>
                  </h1>

                  <p className="text-xl text-slate-600 leading-relaxed">
                    Une application mobile complète pour suivre vos dépenses, gérer vos budgets et atteindre vos objectifs financiers en toute simplicité.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group px-8 py-4 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Télécharger gratuitement</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold border-2 border-slate-200 hover:border-purple-500 hover:shadow-lg transition-all duration-300">
                      Voir la démo
                    </button>
                  </div>

                  <div className="flex items-center space-x-8 pt-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-slate-600">100% sécurisé</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-slate-600">Sans publicité</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative z-10 flex justify-center">
                    <Image width={6000} height={6000} src={Images.section1} alt="section1" className="w-[80%]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Toutes les fonctionnalités dont vous avez besoin
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Une suite complète d'outils pour maîtriser vos finances personnelles
                </p>
              </div>
              <FeaturesCarousel />
            </div>
          </section>

          <div id='avantages'>
            <Benefits />
          </div>

          <section className="max-w-4xl mx-auto text-center py-20 px-6">
            <h1 className="text-4xl font-bold mb-4 text-[#0D87E8]">Bienvenue sur Financeo</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Financeo est une plateforme intelligente de gestion financière et d’éducation à la finance.
              Elle permet aux utilisateurs de suivre leurs dépenses, de planifier leurs budgets,
              et d’apprendre à mieux gérer leur argent grâce à des cours et outils interactifs.
            </p>
            <p className="mt-4 text-gray-600">
              Notre mission est de rendre la gestion financière accessible à tous, avec des outils simples,
              intuitifs et adaptés aux besoins des particuliers comme des professionnels.
            </p>
            <a
              href="#"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Commencer maintenant
            </a>
          </section>

        </div>
      </div>
    </>
  );
}

export default App;