"use client"

import Images from '@/constant/images';
import { Wallet, Shield, TrendingUp, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AuthPage = () => {
    const handleGoogleLogin = () => {
        // Ici vous intégrerez la logique de connexion Google
        // Exemple avec Firebase:
        // const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider)
        console.log('Connexion avec Google');
        alert('Connexion avec Google en cours...');
    };

    const features = [
        {
            icon: <Shield className="w-5 h-5" />,
            text: "Connexion 100% sécurisée"
        },
        {
            icon: <Lock className="w-5 h-5" />,
            text: "Vos données sont protégées"
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            text: "Accès instantané"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0D87E8]/20 to-[#00C896]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#00C896]/20 to-[#7EE5A8]/20 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md relative">
                {/* Logo & Welcome */}
                <div className="text-center mb-8">
                    <div className="inline-flex relative items-center justify-center w-20">
                        <div className="relative">
                            <Link href={'/'} >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <Image width={500} height={500} src={Images.logo} alt="Financeo Logo" className='w-10 relative z-10 transform group-hover:scale-110 transition-transform duration-300' />
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] bg-clip-text text-transparent mb-3">
                        financeo
                    </h1>
                    <p className="text-xl text-gray-700 font-semibold mb-2">
                        Bienvenue sur Financeo
                    </p>
                    <p className="text-gray-600">
                        Gérez vos finances intelligemment en quelques clics
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">
                    {/* Google Login Button */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-4 py-5 px-6 bg-white border-2 border-gray-300 rounded-2xl font-semibold text-gray-800 text-lg hover:border-[#00C896] hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-6"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span>Continuer avec Google</span>
                    </button>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 text-gray-700"
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0D87E8]/10 to-[#00C896]/10 rounded-lg flex items-center justify-center text-[#00C896]">
                                    {feature.icon}
                                </div>
                                <span className="text-sm font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 pt-6">
                        <p className="text-xs text-center text-gray-500 leading-relaxed">
                            En continuant, vous acceptez nos{' '}
                            <Link href="/conditions-utilisation" className="text-[#00C896] hover:text-[#0D87E8] font-semibold underline">
                                Conditions d'utilisation
                            </Link>
                            {' '}et notre{' '}
                            <Link href="/politique-de-confidentialite" className="text-[#00C896] hover:text-[#0D87E8] font-semibold underline">
                                Politique de confidentialité
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Benefits Cards */}
                <div className="grid grid-cols-3 gap-3 mt-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
                        <div className="text-2xl mb-2">🔒</div>
                        <p className="text-xs font-semibold text-gray-700">Sécurisé</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
                        <div className="text-2xl mb-2">⚡</div>
                        <p className="text-xs font-semibold text-gray-700">Rapide</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
                        <div className="text-2xl mb-2">✨</div>
                        <p className="text-xs font-semibold text-gray-700">Simple</p>
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-8 flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Lock className="w-4 h-4 text-[#00C896]" />
                        <span>Connexion sécurisée avec cryptage SSL/TLS</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>© 2025 Financeo</span>
                        <span>•</span>
                        <Link href="/mentions-legales" className="hover:text-[#00C896]">Mentions légales</Link>
                        <span>•</span>
                        <Link href="/cookies" className="hover:text-[#00C896]">Cookies</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;