"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TerminosPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden p-6 md:p-12">
            {/* Background glow */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[120px]" />
                <div className="absolute bottom-[-220px] right-[-260px] h-[560px] w-[560px] rounded-full bg-emerald-500/10 blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-12 group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Volver al inicio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl"
                >
                    <h1 className="text-3xl md:text-5xl font-bold font-space mb-12 text-center bg-gradient-to-r from-white via-white to-emerald-300 bg-clip-text text-transparent">
                        TÉRMINOS Y CONDICIONES DE SERVICIO - GEOMODI
                    </h1>

                    <div className="space-y-12 text-white/80 leading-relaxed text-lg">
                        <p>
                            El presente documento establece los términos de uso entre GeoModi (en adelante, "la Empresa") y el usuario (en adelante, "el Cliente") que contrata el servicio de optimización para motores de respuesta de IA.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-emerald-300 mb-6 font-space">1. NATURALEZA DEL SERVICIO</h2>
                            <p>
                                GeoModi provee una solución de software de optimización semántica y técnica (GEO/AEO). El Cliente comprende que el servicio consiste en la generación y actualización de datos estructurados mediante el procesamiento de modelos de lenguaje (LLMs) e inyección dinámica de código.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-emerald-300 mb-6 font-space">2. GESTIÓN DE SUSCRIPCIONES Y CICLO DE SERVICIO</h2>
                            <p className="mb-4">
                                Al ser GeoModi un servicio de acceso inmediato y procesamiento de datos en tiempo real, el Cliente comprende que los recursos de infraestructura e IA se asignan en el momento de la contratación.
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li><strong>Ejecución del Servicio:</strong> El servicio se considera prestado y totalmente ejecutado una vez que se inicia la optimización de los activos digitales del Cliente.</li>
                                <li><strong>Política de Cancelación:</strong> El Cliente podrá cancelar su suscripción en cualquier momento desde su panel de control para evitar futuros cargos. Mantendrá el acceso a las funciones pagas hasta el final del ciclo de facturación vigente.</li>
                                <li><strong>Reembolsos:</strong> Debido a los costos operativos de procesamiento y la naturaleza intangible del software, las cuotas ya procesadas no son sujetas a devoluciones, garantizando así la estabilidad y calidad del servicio para toda nuestra comunidad de usuarios.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-emerald-300 mb-6 font-space">3. CONTINUIDAD TÉCNICA (SCRIPT DINÁMICO)</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                <li><strong>Licencia de Uso:</strong> GeoModi otorga una licencia de uso vinculada a una suscripción activa. El servicio funciona mediante la integración de un "Script Dinámico".</li>
                                <li><strong>Estado del Servicio:</strong> En caso de cancelación o falta de pago, la inyección dinámica de datos cesará automáticamente al finalizar el período pago. El Cliente reconoce que esto retornará la configuración técnica de su tienda a su estado original previo a la optimización.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-emerald-300 mb-6 font-space">4. LIMITACIÓN DE RESPONSABILIDAD (ALGORITMOS DE TERCEROS)</h2>
                            <p className="mb-4">
                                GeoModi optimiza la información para mejorar la legibilidad por parte de motores de respuesta (SGE, LLMs, ChatGPT, etc.). No obstante, el Cliente acepta que:
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li>La Empresa no tiene control sobre los cambios en los algoritmos de terceros (Google, OpenAI, Microsoft, etc.).</li>
                                <li>El servicio es una herramienta de optimización y no garantiza una posición específica o un volumen de ventas determinado, ya que estos factores dependen de variables externas al software.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-emerald-300 mb-6 font-space">5. POLÍTICA DE USO JUSTO (FAIR USE)</h2>
                            <p>
                                La suscripción estándar está diseñada para la optimización de un (1) dominio o tienda por cuenta. El uso de la plataforma para fines de extracción masiva de datos (scraping) o el uso indebido de la API de GeoModi podrá resultar en la suspensión de la cuenta sin previo aviso.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-emerald-300 mb-6 font-space">6. JURISDICCIÓN Y LEY APLICABLE</h2>
                            <p>
                                Para cualquier controversia derivada del presente contrato, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires, República Argentina, renunciando a cualquier otro fuero o jurisdicción que pudiera corresponderles.
                            </p>
                        </section>
                    </div>
                </motion.div>

                <footer className="mt-20 py-12 text-center text-white/30 text-sm border-t border-white/5">
                    © {new Date().getFullYear()} GeoModi • Inteligencia Generativa para Marcas
                </footer>
            </div>
        </div>
    );
}
