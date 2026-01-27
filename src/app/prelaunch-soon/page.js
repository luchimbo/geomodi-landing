import Image from 'next/image';

export default function PrelaunchSoonPage() {
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

                    <button className="bg-[#1A237E] text-white px-8 py-3 rounded-full font-medium text-sm md:text-base hover:bg-[#283593] transition-colors shadow-lg">
                        Avisame cuando esté disponible
                    </button>
                </div>

            </div>
        </div>
    );
}
