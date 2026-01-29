"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, ShieldCheck } from "lucide-react";

export default function WhatIsGeoModiSection() {
    return (
        <section className="py-24 px-4 bg-black relative" id="soluciones">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-2xl md:text-3xl font-bold font-space text-white mb-6">¿Qué es GEOMODI?</h2>
                    <p className="text-white/70 text-lg md:text-xl font-space leading-relaxed max-w-3xl">
                        Es el motor de Generative Engine Optimization (GEO) que traduce tu e-commerce al idioma de la IA. Transformamos tus productos en entidades de autoridad para que ChatGPT, Gemini y Claude te recomienden como la opción número uno.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold font-space text-white mb-10">¿Qué hacemos por tu marca?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {/* Visibilidad Generativa */}
                        <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-white/10">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                                <Sparkles className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold font-space text-white mb-3 tracking-tight">Visibilidad Generativa</h3>
                            <p className="text-white/60 font-space text-[15px] leading-relaxed">
                                Presencia en las respuestas directas de los nuevos buscadores de IA.
                            </p>
                        </div>

                        {/* Autoridad E-E-A-T */}
                        <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-white/10">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                                <Terminal className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold font-space text-white mb-3 tracking-tight">Autoridad E-E-A-T</h3>
                            <p className="text-white/60 font-space text-[15px] leading-relaxed">
                                Inyección de datos técnicos y fuentes externas que Google y los LLMs validan.
                            </p>
                        </div>

                        {/* Cero Alucinaciones */}
                        <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-white/10">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold font-space text-white mb-3 tracking-tight">Datos Reales Garantizados</h3>
                            <p className="text-white/60 font-space text-[15px] leading-relaxed">
                                Estructura de datos para que la IA nunca invente información de los productos.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <p className="text-xl md:text-2xl font-space font-medium leading-relaxed text-white/90">
                        En 2026, si la IA no cita a la marca, no existe. <span className="text-emerald-400">GEOMODI</span> otorga la ventaja del primer movimiento para <span className="text-emerald-400">dominar el mercado antes que la competencia.</span>
                    </p>
                </motion.div>

                {/* Microsoft Authority Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-12 flex flex-col items-center justify-center gap-4"
                >
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
                        <img
                            src="/microsoft-advertising-logo.png"
                            alt="Microsoft Advertising"
                            className="h-8 w-auto object-contain brightness-0 invert opacity-90"
                        />
                        <div className="h-8 w-[1px] bg-white/20 mx-2"></div>
                        <span className="text-sm md:text-base text-white/80 font-space font-light tracking-wide">
                            Tecnología alineada con los nuevos estándares de Microsoft Bing y OpenAI
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
