"use client"

import { Button } from "@/components/landing-b/ui/button"
import { AnimatedSection } from "@/components/landing-b/animated-section"
import { usePostHog } from "posthog-js/react"
import { useState } from "react"

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
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            5 productos gratis. Sin tarjeta de crédito.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
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
              {isSubmitting ? "Analizando..." : "Analizar mi tienda gratis →"}
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
