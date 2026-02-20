"use client"

import { Button } from "@/components/landing-b/ui/button"
import { AnimatedSection } from "@/components/landing-b/animated-section"
import { usePostHog } from "posthog-js/react"
import { useState } from "react"
import * as motion from "motion/react-client"

const baseUrl = "https://app.geomodi.ai"

export function FinalCTA() {
  const posthog = usePostHog()
  const [storeUrl, setStoreUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedUrl = storeUrl.trim()
    if (!trimmedUrl || isSubmitting) return

    setIsSubmitting(true)

    posthog?.capture("cta_click", {
      label: "Analizar mi tienda gratis",
      source: "final_cta",
      store_url: trimmedUrl,
    })

    const encodedUrl = encodeURIComponent(trimmedUrl)
    window.location.href = `${baseUrl}?pending_url=${encodedUrl}`
  }

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

          {/* Simplified URL Input */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
          >
            <input
              type="text"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              placeholder="www.mitienda.com"
              aria-label="URL de tu tienda online"
              className="w-full sm:flex-1 rounded-xl border border-border bg-card px-5 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all shadow-sm"
            />
            <Button
              type="submit"
              size="xl"
              disabled={!storeUrl.trim() || isSubmitting}
              className={`w-full sm:w-auto rounded-xl whitespace-nowrap transition-all duration-300 ${!storeUrl.trim() || isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
            >
              {isSubmitting ? "Analizando..." : "Analizar gratis →"}
            </Button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground/70">
            5 productos gratis. Sin tarjeta de crédito.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
