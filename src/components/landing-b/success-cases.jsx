"use client"

import { SectionWrapper } from "@/components/landing-b/section-wrapper"
import { AnimatedSection } from "@/components/landing-b/animated-section"
import { ExternalLink } from "lucide-react"

const cases = [
    {
        name: "PC MIDI Center",
        logo: "/assets/landing-b/logos/pcmidi.png",
        industry: "Instrumentos musicales y tecnología",
        url: "https://www.pcmidi.com.ar/",
        description:
            "Con un catálogo de más de 500 productos técnicos, PC MIDI Center necesitaba que las IAs entendieran y recomendaran sus sintetizadores, controladores e interfaces de audio. GeoModi optimizó sus publicaciones para que ChatGPT y otras IAs citen sus productos como referencia, generando tráfico orgánico desde búsquedas conversacionales.",
    },
    {
        name: "La Isla Vinos",
        logo: "/assets/landing-b/logos/laislavinos.png",
        industry: "Vinoteca online · +20 años de experiencia",
        url: "https://laislavinos.com/",
        description:
            "La Isla Vinos cuenta con una selección curada de bodegas y etiquetas. GeoModi les facilitó el trabajo de describir cada producto de forma optimizada, logrando que las IAs recomienden sus vinos cuando los usuarios preguntan por varietales, maridajes y bodegas argentinas.",
    },
]

export function SuccessCases() {
    return (
        <SectionWrapper id="casos-de-exito" className="scroll-mt-20">
            <AnimatedSection>
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Casos de éxito
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Empresas que ya optimizan sus productos con GeoModi y reciben tráfico desde las IAs
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
                {cases.map((caseItem, i) => (
                    <AnimatedSection
                        key={caseItem.name}
                        delay={i * 0.15}
                        variant={i % 2 === 0 ? "slide-right" : "slide-left"}
                    >
                        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-md transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] hover:border-primary/30">
                            {/* Subtle glow effect */}
                            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/5 blur-3xl transition-all duration-700 group-hover:bg-primary/10" />

                            {/* Logo */}
                            <div className="relative mb-6 flex items-center justify-center h-20">
                                <img
                                    src={caseItem.logo}
                                    alt={`Logo de ${caseItem.name}`}
                                    className="h-full max-h-16 w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </div>

                            {/* Industry tag */}
                            <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-gray-400">
                                {caseItem.industry}
                            </p>

                            {/* Description */}
                            <p className="flex-1 text-center text-gray-300 leading-relaxed text-[0.95rem]">
                                {caseItem.description}
                            </p>

                            {/* Link */}
                            <a
                                href={caseItem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary transition-colors duration-300 hover:text-primary/80"
                            >
                                Visitar tienda
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </SectionWrapper>
    )
}
