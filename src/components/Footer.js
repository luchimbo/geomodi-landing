import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/60 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30">
                <div>
                    © {new Date().getFullYear()} GeoModi • Inteligencia Generativa para Marcas
                </div>
                <div className="flex gap-8">
                    <Link href="/terminos" className="hover:text-emerald-300 transition-colors">
                        Términos y Condiciones
                    </Link>
                </div>
            </div>
        </footer>
    );
}
