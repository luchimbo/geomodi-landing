"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PrelaunchPage() {
    const router = useRouter();
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const logos = [
        '/assets/prelaunch/tienda-nube.png',
        '/assets/prelaunch/shopify.png',
        '/assets/prelaunch/wix.png',
        '/assets/prelaunch/woo-commerce.png',
        '/assets/prelaunch/mercado-libre.png',
        '/assets/prelaunch/empretienda.png',
    ];

    const isButtonActive = selectedLogo !== null && inputValue.trim() !== "";

    const handleNextStep = () => {
        if (!isButtonActive) return;

        if (selectedLogo === 0) {
            const trimmedUrl = inputValue.trim();
            const encodedUrl = encodeURIComponent(trimmedUrl);
            window.location.href = `https://app.geomodi.ai?pending_url=${encodedUrl}`;
            return;
        }

        const logoSrc = logos[selectedLogo];
        // Encode to base64
        const logoBase64 = btoa(logoSrc);
        const pageBase64 = btoa(inputValue);

        router.push(`/prelaunch-soon?logo=${logoBase64}&page=${pageBase64}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] via-[#F3E5F5] to-[#E1BEE7] flex flex-col items-center justify-center p-4 relative overflow-hidden font-space">

            {/* Background gradient effects - attempting to match the soft glow */}
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

            <div className="w-full max-w-3xl text-center space-y-16 mt-10">

                <div className="space-y-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#1A237E] tracking-tight">
                        Ingresa el URL de tu tienda
                    </h1>
                    <div className="relative max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="mitienda.com.ar"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full px-6 py-4 rounded-lg bg-[#9FA8DA]/30 text-[#1A237E] placeholder-[#5C6BC0] focus:outline-none focus:ring-2 focus:ring-[#7986CB]  text-lg italic shadow-inner backdrop-blur-sm transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1A237E] tracking-tight">
                        Selecciona la plataforma de tu tienda
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        {logos.map((src, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedLogo(i)}
                                className={`
                                    rounded-2xl p-6 flex items-center justify-center transition-all duration-300 h-28 w-full group shadow-md border border-white/20
                                    ${selectedLogo === i ? 'bg-[#D1C4E9] shadow-lg scale-105 ring-2 ring-[#7986CB]' : 'bg-[#E0E0E0]/80 backdrop-blur-sm hover:bg-[#D1C4E9] hover:shadow-lg'}
                                `}
                            >
                                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform">
                                    <Image
                                        src={src}
                                        alt={`Platform ${i + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <Link href="/prelaunch-soon?other" className="text-[#4527A0] underline text-base hover:text-[#5E35B1] transition-colors">
                        Utilizo otra plataforma
                    </Link>
                </div>


            </div>

            <div className="fixed bottom-8 right-8">
                <button
                    disabled={!isButtonActive}
                    onClick={handleNextStep}
                    className={`
                        text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all
                        ${isButtonActive ? 'bg-[#29765E] hover:bg-[#1E5645] cursor-pointer' : 'bg-[#7F848C] opacity-70 cursor-not-allowed'}
                    `}
                >
                    Siguiente paso
                </button>
            </div>
        </div>
    );
}
