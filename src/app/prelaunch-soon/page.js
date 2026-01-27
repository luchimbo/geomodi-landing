"use client";
import React, { useState, Suspense, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

function PrelaunchContent() {
    const searchParams = useSearchParams();
    const isOther = searchParams.has('other');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Modal Form State
    const [email, setEmail] = useState("");
    const [platform, setPlatform] = useState("");
    const [storeUrl, setStoreUrl] = useState("");

    // Effect to decode params from URL
    useEffect(() => {
        if (!isOther) {
            const logoParam = searchParams.get('logo');
            const pageParam = searchParams.get('page');

            if (logoParam) {
                try {
                    const decodedLogo = atob(logoParam);
                    // Extract name from path (e.g. logo-1)
                    const platformName = decodedLogo.split('/').pop().replace('.png', '');
                    setPlatform(platformName);
                } catch (e) { console.error("Error decoding logo", e); }
            }

            if (pageParam) {
                try {
                    setStoreUrl(atob(pageParam));
                } catch (e) { console.error("Error decoding page", e); }
            }
        }
    }, [searchParams, isOther]);

    // Validation Logic
    const isFormValid = () => {
        if (isOther) {
            return email.trim() !== "" && platform.trim() !== "" && storeUrl.trim() !== "";
        }
        return email.trim() !== "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid() || isLoading) return;

        setIsLoading(true);
        try {
            await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    email,
                    platform: platform || "Other",
                    storeUrl: storeUrl || "",
                    timestamp: new Date().toISOString()
                }),
            });

            toast.success("¡Gracias! Te avisaremos en cuanto esté disponible.");
            setIsModalOpen(false);
            setEmail("");
            // Don't reset platform/storeUrl if they came from URL
        } catch (error) {
            console.error('Error:', error);
            toast.error("Hubo un error al registrarte. Intentalo de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] via-[#F3E5F5] to-[#E1BEE7] flex flex-col items-center justify-center p-4 relative overflow-hidden font-space">

            {/* Background gradient effects - Reused from /prelaunch */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full blur-[100px] opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-200 rounded-full blur-[100px] opacity-40"></div>
            </div>

            <div className="absolute top-8 left-8 md:top-12 md:left-12">
                <div className="relative w-40 h-12">
                    <Image
                        src="/assets/logo.png"
                        alt="GEOMODI"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </div>

            <div className="w-full max-w-5xl text-center space-y-12 mt-20">

                <div className="space-y-6">
                    <h1 className="text-3xl md:text-[2.8rem] font-bold text-[#1A237E] tracking-tight max-w-5xl leading-tight">
                        ¡La integración con tu plataforma de e-commerce <br className="block" /> estará disponible muy pronto!
                    </h1>
                    <p className="text-[#1A237E] text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
                        Mientras tanto, podés ver cómo GeoModi optimiza tus productos para que la IA los entienda y los recomiende.
                    </p>
                </div>

                {/* YouTube Video Embed - Styled like VideoSection */}
                <div className="w-full max-w-3xl mx-auto">
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-[0_0_100px_rgba(34,197,94,0.1)]">
                        <div className="aspect-video w-full">
                            <iframe
                                src="https://www.youtube.com/embed/DrbiO4X5Lu4?autoplay=1&mute=0&controls=1&loop=1&playlist=DrbiO4X5Lu4&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
                                title="GeoModi Preview"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="h-full w-full border-0 scale-105"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <p className="text-[#1A237E] font-medium text-base md:text-lg">
                        ¡Te ofrecemos un beneficio exclusivo cuando se habilite la integración!
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1A237E] text-white px-8 py-3 rounded-full font-medium text-sm md:text-base hover:bg-[#283593] transition-colors shadow-lg"
                    >
                        Avisame cuando esté disponible
                    </button>
                </div>

            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-2xl border border-white/40"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h3 className="text-2xl font-bold text-[#1A237E] font-space mb-6 text-center">
                                {isOther ? 'Completá tus datos' : 'Dejanos tu email'}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#1A237E]/80 mb-1 ml-1">Email de contacto</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="tu@email.com"
                                        className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E0E0E0] text-[#1A237E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7986CB] transition-all"
                                    />
                                </div>

                                {isOther && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-[#1A237E]/80 mb-1 ml-1">Plataforma de la tienda</label>
                                            <input
                                                type="text"
                                                value={platform}
                                                onChange={(e) => setPlatform(e.target.value)}
                                                placeholder="Ej: Shopify, WooCommerce"
                                                className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E0E0E0] text-[#1A237E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7986CB] transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#1A237E]/80 mb-1 ml-1">URL de la tienda</label>
                                            <input
                                                type="text"
                                                value={storeUrl}
                                                onChange={(e) => setStoreUrl(e.target.value)}
                                                placeholder="mitienda.com"
                                                className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E0E0E0] text-[#1A237E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7986CB] transition-all"
                                            />
                                        </div>
                                    </>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={!isFormValid() || isLoading}
                                        className={`
                                            w-full rounded-full py-3 font-bold text-white shadow-md transition-all
                                            ${isFormValid() && !isLoading ? 'bg-[#29765E] hover:bg-[#1E5645] transform hover:scale-[1.02]' : 'bg-gray-400 cursor-not-allowed opacity-70'}
                                        `}
                                    >
                                        {isLoading ? 'Enviando...' : 'Confirmar'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function PrelaunchSoonPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#E0F7FA]"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A237E]"></div></div>}>
            <PrelaunchContent />
        </Suspense>
    );
}
