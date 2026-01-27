"use client";
import React from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function CTASection() {
    const [email, setEmail] = React.useState("");
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formEmailSource = e.target.elements.email.value;
        if (formEmailSource && !isLoading) {
            setIsLoading(true);
            try {
                // Optimized for Client-Side Google Apps Script (Avoids CORS preflight)
                await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify({
                        email: formEmailSource,
                        platform: "Landing CTA",
                        storeUrl: "Ingreso Directo",
                        timestamp: new Date().toISOString()
                    }),
                });

                // Since 'no-cors' doesn't allow reading the response, we assume success if no exception is thrown
                setIsSubmitted(true);
                toast.success("¡Registro exitoso! Pronto nos contactaremos.");
                e.target.reset();
                setTimeout(() => {
                    setIsSubmitted(false);
                    setIsLoading(false);
                }, 3000);
            } catch (error) {
                console.error('Error:', error);
                toast.error("Hubo un error al enviar tu email. Intenta de nuevo.");
                setIsLoading(false);
            }
        }
    };

    const ease = [0.22, 1, 0.36, 1];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1.2, ease }}
                className="w-full bg-[#3110C3] py-24 md:py-32 relative overflow-hidden border-y border-white/10 shadow-[0_0_80px_rgba(49,16,195,0.3)]"
            >
                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-[36px] font-bold leading-tight text-white md:text-[52px] font-space">
                        ¿Estás listo para llevar tu marca al siguiente nivel?
                    </h2>
                    <p className="mt-8 text-xl text-white/80 md:text-2xl font-light">
                        Trabajá directamente con nuestro equipo experto para crear tu estrategia de contenidos.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
                        <div className="relative w-full max-w-md">
                            <input
                                name="email"
                                type="email"
                                placeholder="Ingresá tu email"
                                required
                                className="w-full rounded-2xl border border-white/20 bg-white/10 px-8 py-5 text-white text-lg placeholder-white/50 backdrop-blur-xl focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/20 transition-all font-space"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isLoading}
                            className="w-full rounded-2xl bg-emerald-300 px-10 py-5 text-lg font-bold text-black shadow-lg shadow-emerald-300/25 hover:bg-emerald-200 transition-colors sm:w-auto whitespace-nowrap disabled:opacity-50 font-space"
                        >
                            {isLoading ? 'Enviando...' : isSubmitted ? '¡Listo!' : 'Comenzar ahora'}
                        </motion.button>
                    </form>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-[120px]" />
                <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
            </motion.div>

            {/* Bottom LOGO Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, delay: 0.1 }}
                className="mt-12 md:mt-32 w-full max-w-2xl px-6 md:px-8 flex justify-center"
            >
                <img
                    src="/logo_high_res.png"
                    alt="Logo de GeoModi - Expertos en Generative Engine Optimization (GEO)"
                    className="w-full h-auto max-w-[280px] md:max-w-none object-contain opacity-90 select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    loading="lazy"
                    decoding="async"
                />
            </motion.div>
        </section>
    );
}
