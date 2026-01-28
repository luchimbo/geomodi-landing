"use client";
import React, { useState } from "react";
import { useReducedMotion, LazyMotion, domMax, AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function PricingPage() {
    const reduce = useReducedMotion();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const plans = [
        {
            name: "Starter",
            description: "Ideal para probar cómo la IA ve tu marca",
            credits: "1 crédito de bienvenida",
            price: "$0",
            includes: "1 producto optimizado",
            buttonText: "Probar gratis",
            link: "https://app.geomodi.ai/",
            highlight: false,
            color: "bg-[#E6E6FA]/40",
            textColor: "text-[#1A0B5E]",
        },
        {
            name: "PRO",
            description: "Para tiendas que quieren aparecer y mantenerse visibles en IA",
            credits: "150 créditos por mes",
            originalPrice: "$80.000 / mes",
            price: "$39.999 por mes",
            includes: "Hasta 150 productos optimizados por mes",
            note: "1 crédito = 1 producto optimizado y activo",
            buttonText: "Suscribirme ahora",
            link: "#",
            highlight: true,
            color: "bg-[#E6E6FA]",
            textColor: "text-[#1A0B5E]",
            tag: "MÁS ELEGIDO"
        }
    ];

    return (
        <LazyMotion features={domMax}>
            <div className="min-h-screen bg-gradient-to-br from-[#F5F3FF] via-[#F0FDF4] to-[#F5F3FF] text-[#1A0B5E] font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
                <Navbar
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    reduce={reduce}
                    theme="light"
                />

                <main className="relative pt-32 pb-20 px-4">
                    {/* Background Decorative Blobs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            animate={reduce ? {} : {
                                scale: [1, 1.4, 1],
                                x: [0, 100, 0],
                                y: [0, 50, 0],
                            }}
                            transition={reduce ? {} : {
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-[-15%] left-[-15%] w-[900px] h-[900px] bg-violet-500/15 rounded-full blur-[180px]"
                        />
                        <motion.div
                            animate={reduce ? {} : {
                                scale: [1.3, 1, 1.3],
                                x: [0, -120, 0],
                                y: [0, -80, 0],
                            }}
                            transition={reduce ? {} : {
                                duration: 18,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-[-15%] right-[-15%] w-[1000px] h-[1000px] bg-emerald-400/10 rounded-full blur-[200px]"
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-4xl mx-auto items-stretch">
                            {plans.map((plan, index) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    className={`group relative flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl transition-all hover:translate-y-[-8px] backdrop-blur-xl border border-white/40 ${plan.highlight
                                        ? "bg-[#E6E6FA] ring-1 ring-[#1A0B5E]/10 z-20 shadow-violet-200/50"
                                        : "bg-[#E6E6FA]/40 hover:bg-[#E6E6FA]/60 z-10"
                                        } ${!plan.tag ? "md:mt-[44px]" : ""}`}
                                >
                                    {/* Gloss Reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 pointer-events-none" />

                                    {/* Shine Effect */}
                                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine transition-all duration-700" />

                                    {plan.tag && (
                                        <div className="bg-[#1A0B5E] text-white py-3 text-xs font-bold tracking-[0.2em] uppercase relative z-10 w-full text-center h-[44px]">
                                            {plan.tag}
                                        </div>
                                    )}

                                    <div className="p-10 md:p-12 flex flex-col flex-1 text-left relative z-10 min-h-[600px]">
                                        <div className="mb-0">
                                            <div className="mb-8 min-h-[90px]">
                                                <span className="text-sm font-medium uppercase tracking-wider opacity-60">Plan</span>
                                                <h2 className="text-4xl font-bold font-space mt-1">{plan.name}</h2>
                                            </div>

                                            <div className="min-h-[80px] mb-4">
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
                                                {plan.originalPrice ? (
                                                    <p className="text-lg line-through text-[#3E3E70]/50 font-space mb-1">
                                                        {plan.originalPrice}
                                                    </p>
                                                ) : (
                                                    <div className="text-lg font-space mb-1 h-[28px]" />
                                                )}
                                                <p className="text-3xl font-bold font-space leading-none">{plan.price}</p>
                                            </div>
                                        </div>

                                        <Link
                                            href={plan.link}
                                            className={`w-full py-5 rounded-3xl font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 mt-auto text-center block ${plan.highlight
                                                ? "bg-[#1A0B5E] text-white hover:bg-[#2A1B7E] shadow-[#1A0B5E]/30 border-2 border-transparent"
                                                : "bg-[#1A0B5E]/5 border-2 border-[#1A0B5E] text-[#1A0B5E] hover:bg-[#1A0B5E]/10"
                                                }`}
                                        >
                                            {plan.buttonText}
                                        </Link>
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
        </LazyMotion>
    );
}
