"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, Menu, X } from "lucide-react";

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
            <header className="fixed top-0 left-0 right-0 z-[100] mx-auto max-w-6xl px-3 pt-4 md:px-4 md:pt-6">
                <nav className={`mx-auto flex items-center justify-between rounded-[2rem] border border-white/10 bg-[#1A0B5E] px-4 py-3 shadow-xl shadow-[#1A0B5E]/20 backdrop-blur-sm transition-all duration-300 md:rounded-full md:px-6 ${isMenuOpen ? "rounded-[2rem]" : ""}`}>
                    <div className="flex w-full items-center justify-between gap-4">
                        <div className="flex flex-1 items-center">
                            <Link href="/" className="hover:opacity-80 transition-opacity">
                                <img src="/logo.png" alt="GEOMODI" className="h-5 w-auto brightness-200 md:h-6" />
                            </Link>
                        </div>

                        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-white/70">
                            <Link href="/#soluciones" className="text-sm font-medium hover:text-white transition-colors">
                                Soluciones
                            </Link>
                            <Link href="/pricing" className="text-sm font-medium hover:text-white transition-colors">
                                Planes
                            </Link>
                        </div>

                        <div className="flex items-center gap-3 md:flex-1 md:justify-end">
                            <Link
                                href="/"
                                className="hidden sm:block rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-400/20 hover:bg-emerald-200"
                            >
                                Volver
                            </Link>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white md:hidden"
                            >
                                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#1A0B5E] p-6 shadow-2xl backdrop-blur-3xl md:hidden"
                            >
                                <div className="flex flex-col gap-6">
                                    <Link
                                        href="/#soluciones"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                    >
                                        Soluciones
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                    >
                                        Planes
                                    </Link>
                                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                        <button className="w-full rounded-2xl bg-emerald-300 py-4 font-bold text-black shadow-lg">
                                            Volver al inicio
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>

            <main className="relative pt-32 pb-20 px-4">
                {/* Background Decorative Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.4, 1],
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 15, // Made slower
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-[-15%] left-[-15%] w-[900px] h-[900px] bg-violet-500/15 rounded-full blur-[180px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1.3, 1, 1.3],
                            x: [0, -120, 0],
                            y: [0, -80, 0],
                        }}
                        transition={{
                            duration: 18, // Made slower
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-[-15%] right-[-15%] w-[1000px] h-[1000px] bg-emerald-400/10 rounded-full blur-[200px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            x: [0, 80, 0],
                            y: [0, -100, 0],
                        }}
                        transition={{
                            duration: 22, // Made slower
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-1/2 left-1/4 w-[700px] h-[700px] bg-violet-400/10 rounded-full blur-[160px]"
                    />
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-4xl mx-auto items-end">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className={`group relative flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl transition-all hover:translate-y-[-8px] backdrop-blur-xl border border-white/40 ${plan.highlight
                                    ? "bg-[#E6E6FA] ring-1 ring-[#1A0B5E]/10 z-20 shadow-violet-200/50"
                                    : "bg-[#E6E6FA]/40 hover:bg-[#E6E6FA]/60 z-10"
                                    }`}
                            >
                                {/* Gloss Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none" />

                                {/* Shine Effect */}
                                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                                {plan.tag && (
                                    <div className="bg-[#1A0B5E] text-white py-3 text-xs font-bold tracking-[0.2em] uppercase relative z-10 w-full text-center">
                                        {plan.tag}
                                    </div>
                                )}

                                <div className="p-10 md:p-12 flex flex-col flex-1 text-left relative z-10 min-h-[600px]">
                                    <div className="mb-0">
                                        <div className="mb-8 min-h-[90px]">
                                            <span className="text-sm font-medium uppercase tracking-wider opacity-60">Plan</span>
                                            <h2 className="text-4xl font-bold font-space mt-1">{plan.name}</h2>
                                        </div>

                                        <div className="min-h-[80px] mb-8">
                                            <p className="text-lg text-[#3E3E70] leading-relaxed">
                                                {plan.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-10 mb-10 flex-1">
                                        <div className="min-h-[60px]">
                                            <h4 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-60">Créditos</h4>
                                            <p className="text-[#1A0B5E] text-lg font-medium font-space">{plan.credits}</p>
                                        </div>
                                        <div className="min-h-[100px]">
                                            <h4 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-60">Incluye</h4>
                                            <p className="text-[#1A0B5E] text-lg font-medium font-space leading-tight">{plan.includes}</p>
                                            {plan.note ? (
                                                <p className="text-xs text-[#1A0B5E]/70 mt-1 italic leading-tight font-space">{plan.note}</p>
                                            ) : (
                                                <div className="h-[16px]" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-60">Precio</h4>
                                            <p className="text-3xl font-bold font-space leading-none">{plan.price}</p>
                                        </div>
                                    </div>

                                    <button
                                        className={`w-full py-5 rounded-3xl font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 mt-auto ${plan.highlight
                                            ? "bg-[#1A0B5E] text-white hover:bg-[#2A1B7E] shadow-[#1A0B5E]/30 border-2 border-transparent"
                                            : "bg-[#1A0B5E]/5 border-2 border-[#1A0B5E] text-[#1A0B5E] hover:bg-[#1A0B5E]/10"
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
