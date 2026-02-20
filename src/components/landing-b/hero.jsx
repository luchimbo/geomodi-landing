"use client"

import { Button } from "@/components/landing-b/ui/button"
import { GridPattern } from "@/components/landing-b/ui/grid-pattern"
import * as motion from "motion/react-client"
import { usePostHog } from "posthog-js/react"
import { useState } from "react"

const baseUrl = "https://app.geomodi.ai"

export function Hero() {
  const posthog = usePostHog()
  const [storeUrl, setStoreUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedUrl = storeUrl.trim()
    if (!trimmedUrl || isSubmitting) return

    setIsSubmitting(true)

    posthog?.capture("hero_cta_submit", {
      store_url: trimmedUrl,
      source: "landing_b_hero",
    })

    const encodedUrl = encodeURIComponent(trimmedUrl)
    window.location.href = `${baseUrl}?pending_url=${encodedUrl}`
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex flex-col">
      {/* Background Effects */}
      <GridPattern className="opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-4 w-full">
        {/* Centered Content */}
        <motion.div
          className="flex flex-col items-center gap-6 text-center pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            Hacemos que la IA recomiende tus productos
          </motion.h1>

          <motion.p
            className="max-w-2xl text-base text-muted-foreground leading-relaxed md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            GeoModi analiza y adapta tu tienda para que ChatGPT y el resto de IAs te recomienden en sus respuestas
          </motion.p>

          {/* URL Input + Submit */}
          <motion.form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <input
              id="hero-store-url"
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
          </motion.form>

          <motion.div
            className="text-sm text-muted-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <p className="md:hidden">Sin tarjeta de crédito. Sin compromisos</p>
            <div className="hidden md:block">
              <p>Sin tarjeta de crédito</p>
              <p>Sin compromisos</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Image */}
      <motion.div
        className="relative mt-auto w-full md:mx-auto md:max-w-6xl lg:max-w-7xl h-[350px] md:h-[350px] lg:h-[400px] max-h-[45vh] overflow-hidden bg-transparent border-t border-border/50 shadow-lg md:border-x md:rounded-t-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Mobile Image */}
        <img
          src="/assets/landing-b/hero/Hero-Mobile.png"
          alt="GeoModi Dashboard"
          className="absolute inset-0 w-full h-full object-cover object-top md:hidden"
        />
        {/* Desktop Image */}
        <img
          src="/assets/landing-b/hero/Productos.png"
          alt="GeoModi Dashboard"
          className="absolute inset-0 w-full h-full object-cover object-top hidden md:block"
        />
      </motion.div>
    </section>
  )
}
