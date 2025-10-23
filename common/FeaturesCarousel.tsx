"use client";

import { useState, useEffect } from 'react';
import { Wallet, Receipt, PieChart, BarChart3, Bell, Target } from 'lucide-react'
import Image from 'next/image';
import Images from '@/constant/images';

const FeaturesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const features = [
        {
            icon: <Wallet className="w-12 h-12" />,
            title: "Tableau de bord intelligent",
            description: "Visualisez votre solde en temps réel avec des graphiques détaillés de vos revenus et dépenses.",
            color: "from-[#0D87E8] to-[#00C896]"
        },
        {
            icon: <Receipt className="w-12 h-12" />,
            title: "Gestion des transactions",
            description: "Ajoutez et suivez toutes vos transactions avec filtres avancés par date, catégorie et montant.",
            color: "from-[#00C896] to-[#7EE5A8]"
        },
        {
            icon: <PieChart className="w-12 h-12" />,
            title: "Budgets personnalisés",
            description: "Créez des budgets mensuels par catégorie avec suivi de progression et alertes intelligentes.",
            color: "from-[#0D87E8] via-[#00C896] to-[#7EE5A8]"
        },
        {
            icon: <Target className="w-12 h-12" />,
            title: "Objectifs d'épargne",
            description: "Définissez vos objectifs financiers et recevez des suggestions pour les atteindre rapidement.",
            color: "from-[#7EE5A8] to-[#00C896]"
        },
        {
            icon: <BarChart3 className="w-12 h-12" />,
            title: "Rapports détaillés",
            description: "Analyses approfondies avec graphiques mensuels et comparaisons pour mieux comprendre vos finances.",
            color: "from-[#00C896] to-[#0D87E8]"
        },
        {
            icon: <Bell className="w-12 h-12" />,
            title: "Rappels de factures",
            description: "Ne manquez plus jamais un paiement avec nos notifications et rappels automatiques.",
            color: "from-[#0D87E8] to-[#7EE5A8]"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(nextSlide, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, currentIndex]);

    return (
        <section>
            <div className="flex flex-col-reverse mx-auto">
                {/* Carousel Container */}
                <div className='flex flex-col-reverse lg:flex-row items-center mt-9'>
                    <Image src={Images.col} width={6000} height={6000} alt="col" className='lg:w-[50%]' />
                    <div
                        className="relative"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        {/* Main Card */}
                        <div className="relative overflow-hidden">
                            <div className="relative min-h-[400px] flex items-center flex-col justify-center p-8 md:p-16">
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 ${features[currentIndex].color} opacity-5`}></div>

                                {/* Content */}
                                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                                    {/* Icon */}
                                    <div className="flex justify-center">
                                        <div className={`p-6 bg-gradient-to-br ${features[currentIndex].color} rounded-2xl text-white shadow-lg transform transition-all duration-500 hover:scale-110`}>
                                            {features[currentIndex].icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl md:text-4xl font-bold transition-all duration-500">
                                        {features[currentIndex].title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-gray-600 leading-relaxed transition-all duration-500">
                                        {features[currentIndex].description}
                                    </p>
                                </div>
                                {/* Dots Navigation */}
                                <div className="flex justify-center items-center space-x-3 mt-8">
                                    {features.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                                ? 'w-12 h-3 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8]'
                                                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                                }`}
                                            aria-label={`Aller à la diapositive ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {/* <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
                            aria-label="Précédent"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-20"
                            aria-label="Suivant"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button> */}
                    </div>



                    {/* Progress Bar */}
                    <div className="mt-6 max-w-2xl mx-auto">
                        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] transition-all duration-300"
                                style={{ width: `${((currentIndex + 1) / features.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Thumbnails Preview */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
                    {features.map((feature, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`p-4 rounded-xl border-[1.5px] transition-all duration-300 ${index === currentIndex
                                ? 'bg-gradient-to-br from-[#0D87E8]/10 via-[#00C896]/10 to-[#7EE5A8]/10  border-[#00C896] shadow-lg scale-105'
                                : '  border-gray-200 hover:border-gray-300 hover:shadow-md'
                                }`}
                        >
                            <div className={`flex justify-center mb-2 ${index === currentIndex ? 'text-[#00C896]' : 'text-gray-400'}`}>
                                {feature.icon}
                            </div>
                            <p className={`text-xs font-semibold text-center ${index === currentIndex ? '' : 'text-gray-600'}`}>
                                {feature.title}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesCarousel;