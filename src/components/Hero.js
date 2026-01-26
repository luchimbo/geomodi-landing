"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero({ stagger, elegantFade }) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mx-auto max-w-4xl text-center"
            >
                <motion.h1
                    variants={stagger}
                    className="mx-auto flex flex-col items-center text-center text-[32px] font-bold leading-tight text-white/95 md:text-[56px] font-space"
                >
                    <motion.span variants={elegantFade} className="md:whitespace-nowrap">
                        Domina el <span className="text-emerald-300">GEO</span>: Optimizá tu TiendaNube
                    </motion.span>
                    <motion.span variants={elegantFade} className="md:whitespace-nowrap">
                        para aparecer en ChatGPT y buscadores de IA.
                    </motion.span>
                </motion.h1>
                <motion.p
                    variants={elegantFade}
                    transition={{ delay: 0.2 }}
                    className="mt-8 text-[22px] md:text-[36px] font-light text-white/65 font-space"
                >
                    El 50% del tráfico de búsqueda será reemplazado por IA. ¿Estás listo?
                </motion.p>

                {/* URL Input CTA */}
                <motion.div
                    variants={elegantFade}
                    transition={{ delay: 0.3 }}
                    className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <div className="relative w-full max-w-lg">
                        <input
                            type="text"
                            placeholder="Ingresá URL de tu producto"
                            className="w-full rounded-2xl border border-emerald-400/40 bg-white/5 px-6 py-4 text-emerald-50 text-base placeholder-emerald-400/40 focus:border-emerald-300/80 focus:outline-none focus:ring-2 focus:ring-emerald-300/10 transition-all font-space md:px-8 md:py-5 md:text-lg"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full rounded-2xl bg-emerald-300 px-8 py-4 text-base font-bold text-black shadow-xl shadow-emerald-400/20 hover:bg-emerald-200 transition-colors sm:w-auto md:px-10 md:py-5 md:text-lg whitespace-nowrap font-space"
                    >
                        Analizar ahora
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
