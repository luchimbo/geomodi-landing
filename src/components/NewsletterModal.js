"use client";
import React from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function NewsletterModal({ isModalOpen, setIsModalOpen }) {
    const [email, setEmail] = React.useState("");
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    if (!isModalOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && !isLoading) {
            setIsLoading(true);
            try {
                // Optimized for Client-Side Google Apps Script (Avoids CORS preflight)
                await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain' },
                    body: JSON.stringify({
                        email,
                        platform: "Newsletter Modal",
                        storeUrl: "Ingreso Directo",
                        timestamp: new Date().toISOString()
                    }),
                });

                // Since 'no-cors' doesn't allow reading the response, we assuming success
                setIsSubmitted(true);
                toast.success("¡Suscripción exitosa!");
                setTimeout(() => {
                    setIsModalOpen(false);
                    setIsSubmitted(false);
                    setEmail("");
                    setIsLoading(false);
                }, 2500);
            } catch (error) {
                console.error('Error:', error);
                toast.error("Error al registrarte. Intenta de nuevo.");
                setIsLoading(false);
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
            onClick={() => setIsModalOpen(false)}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-[#111] p-10 shadow-2xl"
            >
                {/* Close button */}
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {!isSubmitted ? (
                    <>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white font-space mb-4 leading-tight">
                                ¿Estás listo para llevar tu marca al siguiente nivel?
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                Trabajá directamente con nuestro equipo experto para crear tu estrategia de contenidos.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Ingresá tu email"
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-white/40 focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/20 transition-all text-lg font-space"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={isLoading ? {} : { scale: 1.02 }}
                                whileTap={isLoading ? {} : { scale: 0.98 }}
                                className="w-full rounded-2xl bg-emerald-300 px-6 py-4 font-bold text-black shadow-lg shadow-emerald-300/25 hover:bg-emerald-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-3 text-lg font-space"
                            >
                                {isLoading ? 'Enviando...' : 'Comenzar ahora'}
                            </motion.button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-300/20"
                        >
                            <svg className="w-10 h-10 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white font-space mb-2">
                            ¡Gracias por suscribirte!
                        </h3>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}
