"use client"

import { Button } from "@/components/landing-b/ui/button"
import { AnimatedSection } from "@/components/landing-b/animated-section"
import { usePostHog } from "posthog-js/react"

export function FinalCTA() {
  const posthog = usePostHog()
  return (
    <section className="relative overflow-hidden bg-accent border-t border-b border-border">
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            No te quedes atrás en la era de la IA
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Mientras tus competidores siguen optimizando para Google, vos podés estar un paso adelante. Optimizá para ChatGPT, Gemini y todas las IAs que están cambiando las reglas del juego.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button
              size="lg"
              asChild
            >
              <a
                href="https://app.geomodi.ai"
                onClick={() => posthog?.capture("cta_click", { label: "Analizar mi tienda gratis", source: "final_cta" })}
              >
                Analizar mi tienda gratis
              </a>
            </Button>
            <p className="text-sm text-muted-foreground/70">
              5 productos gratis. Sin tarjeta de crédito.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
