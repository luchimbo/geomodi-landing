import { SectionWrapper } from "@/components/landing-b/section-wrapper"
import { AnimatedSection } from "@/components/landing-b/animated-section"

const logos = [
  { name: "ChatGPT", src: "/assets/landing-b/logos/ChatGPT_logo.svg.png" },
  { name: "Grok", src: "/assets/landing-b/logos/Grok.png" },
  { name: "Gemini", src: "/assets/landing-b/logos/Gemini.png" },
  { name: "Claude", src: "/assets/landing-b/logos/Claude.png" },
  { name: "Perplexity", src: "/assets/landing-b/logos/Perplexity.webp" },
  { name: "Meta AI", src: "/assets/landing-b/logos/MetaAI.png" },
]

export function TrustedBy() {
  return (
    <SectionWrapper className="bg-muted/30">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            La búsqueda por IA es el nuevo Google
          </h2>
          <p className="mt-8 md:mt-10 text-lg text-muted-foreground leading-relaxed md:text-xl">
            Los expertos afirman que en 2026 más de la mitad de las búsquedas en Google serán reemplazadas por preguntas a inteligencias artificiales como ChatGPT. Desde GeoModi, optimizamos tus publicaciones para que ChatGPT, Grok, Gemini y todas las principales IAs te recomienden
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}
