"use client"

import { Button } from "@/components/landing-b/ui/button"
import { GridPattern } from "@/components/landing-b/ui/grid-pattern"
import * as motion from "motion/react-client"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex flex-col">
      {/* Background Effects */}
      <GridPattern className="opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-4 w-full">
        {/* Centered Content - Positioned higher */}
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

          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <Button size="lg">
              Analiza tu tienda gratis
            </Button>
            <div className="text-sm text-muted-foreground/70">
              <p className="md:hidden">Sin tarjeta de crédito. Sin compromisos</p>
              <div className="hidden md:block">
                <p>Sin tarjeta de crédito</p>
                <p>Sin compromisos</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Image - Emerges from bottom, full width on mobile, margins on desktop */}
      <motion.div
        className="relative mt-auto w-full md:mx-auto md:max-w-6xl lg:max-w-7xl h-[350px] md:h-[350px] lg:h-[400px] max-h-[45vh] overflow-hidden bg-transparent border-t border-border/50 shadow-lg md:border-x md:rounded-t-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
