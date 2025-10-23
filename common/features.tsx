import { CheckCircle2, Lock, Zap } from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Rapide et Intuitif",
        description: "Interface fluide et réactive pour gérer vos finances en quelques secondes.",
    },
    {
        icon: Lock,
        title: "100% Sécurisé",
        description: "Vos données sont protégées avec un chiffrement de bout en bout et Face ID.",
    },
    {
        icon: CheckCircle2,
        title: "Multi-Profils",
        description: "Gérez facilement vos finances personnelles, professionnelles et familiales.",
    },
];

export const Benefits = () => {
    return (
        <section id="benefits" className="mb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] bg-clip-text text-transparent sm:text-4xl lg:text-5xl font-bold ">
                            Une expérience{" "}
                            <span className="bg-gradient-accent bg-clip-text text-transparent">
                                pensée pour vous
                            </span>
                        </h2>

                        <p className="text-lg text-muted-foreground">
                            Financeo combine simplicité et puissance pour vous offrir le meilleur outil de gestion financière.
                        </p>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl  bg-gradient-to-br from-[#0D87E8] via-[#00C896] to-[#7EE5A8]t flex items-center justify-center shadow-primary">
                                        <benefit.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full"></div>
                            <div className="relative bg-card rounded-3xl p-8 border-2 border-primary/20 shadow-glow">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-gradient-primary/10 rounded-xl">
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Solde total</div>
                                            <div className="text-2xl font-bold">2 450,00 Ar</div>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0D87E8] via-[#00C896] to-[#7EE5A8] rounded-3xl blur-3xl opacity-20"></div>
                                        <div className="space-y-3 relative z-10">
                                            {["Salaire", "Courses", "Restaurant"].map((item, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-gray-300/30 rounded-lg">
                                                    <span className="text-sm">{item}</span>
                                                    <span className="text-sm font-semibold">{i === 0 ? "+3,000 Ar" : "-" + (i * 120) + " Ar"}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrendingUp = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);
