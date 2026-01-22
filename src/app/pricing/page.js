"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = React.useState(false);

    const plans = [
        {
            name: "Starter",
            description: "Ideal para probar cómo la IA ve tu marca",
            credits: "1 crédito de bienvenida",
            price: "$0",
            includes: "1 producto optimizado",
            buttonText: "Probar gratis",
            highlight: false,
            color: "bg-[#E6E6FA]/40",
            textColor: "text-[#1A0B5E]",
        },
        {
            name: "PRO",
            description: "Para tiendas que quieren aparecer y mantenerse visibles en IA",
            credits: "150 créditos por mes",
            price: "USD 29 / mes",
            includes: "Hasta 150 productos optimizados por mes",
            note: "1 crédito = 1 producto optimizado y activo",
            buttonText: "Suscribirme ahora",
            highlight: true,
            color: "bg-[#E6E6FA]",
            textColor: "text-[#1A0B5E]",
            tag: "MÁS ELEGIDO"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5F3FF] via-[#F0FDF4] to-[#F5F3FF] text-[#1A0B5E] font-sans selection:bg-emerald-200 selection:text-emerald-900">
            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-[100] mx-auto max-w-6xl px-4 pt-6">
                <nav className="flex items-center justify-between rounded-full border border-white/10 bg-[#1A0B5E] px-6 py-3 shadow-xl shadow-[#1A0B5E]/20 backdrop-blur-sm">
                    <div className="flex items-center">
                        <Link href="/" className="hover:opacity-80 transition-opacity">
                            <img src="/logo.png" alt="GEOMODI" className="h-6 w-auto brightness-200" />
                        </Link>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            href="/"
                            className="rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-400/20 hover:bg-emerald-200"
                        >
                            Volver
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="relative pt-32 pb-20 px-4">
                {/* Background Decorative Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200/40 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[32px] md:text-[52px] font-bold font-space leading-tight mb-6"
                    >
                        Elegí cómo querés que la IA vea tu marca
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-[#3E3E70] mb-16 max-w-2xl mx-auto font-light"
                    >
                        Planes que se adaptan al tamaño de tu tienda y a cada etapa de crecimiento.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className={`relative flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] ${plan.highlight
                                    ? "border-2 border-[#1A0B5E]"
                                    : "border border-white/60"
                                    } ${plan.color}`}
                            >
                                {plan.tag && (
                                    <div className="bg-[#1A0B5E] text-white py-3 text-xs font-bold tracking-[0.2em] uppercase">
                                        {plan.tag}
                                    </div>
                                )}

                                <div className="p-10 md:p-12 flex flex-col flex-1 text-left">
                                    <div className="mb-8">
                                        <span className="text-sm font-medium uppercase tracking-wider opacity-60">Plan</span>
                                        <h2 className="text-4xl font-bold font-space mt-1">{plan.name}</h2>
                                    </div>

                                    <p className="text-lg text-[#3E3E70] mb-8 leading-relaxed">
                                        {plan.description}
                                    </p>

                                    <div className="space-y-6 mb-10 flex-1">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Créditos</h4>
                                            <p className="text-[#3E3E70]">{plan.credits}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Precio</h4>
                                            <p className="text-2xl font-bold">{plan.price}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Incluye</h4>
                                            <p className="text-[#3E3E70]">{plan.includes}</p>
                                            {plan.note && (
                                                <p className="text-xs text-[#3E3E70]/60 mt-1 italic">{plan.note}</p>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        className={`w-full py-5 rounded-3xl font-bold text-lg transition-all shadow-lg ${plan.highlight
                                            ? "bg-[#1A0B5E] text-white hover:bg-[#2A1B7E] shadow-[#1A0B5E]/20"
                                            : "bg-white/40 border-2 border-[#1A0B5E] text-[#1A0B5E] hover:bg-white/60 shadow-black/5"
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="py-12 px-4 text-center text-sm text-[#3E3E70]/40">
                © {new Date().getFullYear()} GeoModi • Inteligencia Generativa para Marcas
            </footer>
        </div>
    );
}
