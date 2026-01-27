import Image from 'next/image';
import Link from 'next/link';

export default function PrelaunchPage() {
    // Using the logos we moved. 
    const logos = [
        '/assets/prelaunch/logo-1.png',
        '/assets/prelaunch/logo-2.png',
        '/assets/prelaunch/logo-3.png',
        '/assets/prelaunch/logo-4.png',
        '/assets/prelaunch/logo-5.png',
        '/assets/prelaunch/logo-6.png',
    ];

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
                            <button key={i} className="bg-[#E0E0E0]/80 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center hover:bg-[#D1C4E9] hover:shadow-lg transition-all duration-300 h-28 w-full group shadow-md border border-white/20">
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
                        {/* Placeholder for items if needed to balance grid, though we have 6 now which is perfect for 3 cols */}
                    </div>
                </div>

                <div className="pt-4">
                    <Link href="#" className="text-[#4527A0] underline text-base hover:text-[#5E35B1] transition-colors">
                        Utilizo otra plataforma
                    </Link>
                </div>


            </div>

            <div className="fixed bottom-8 right-8">
                <button
                    disabled
                    className="bg-[#7F848C] text-white px-8 py-3 rounded-full font-medium text-lg disabled:opacity-70 disabled:cursor-not-allowed shadow-lg transition-all"
                >
                    Siguiente paso
                </button>
            </div>
        </div>
    );
}
