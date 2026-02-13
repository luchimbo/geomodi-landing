"use client"

import { Navbar } from "@/components/landing-b/navbar"
import { Hero } from "@/components/landing-b/hero"
import { TrustedBy } from "@/components/landing-b/trusted-by"
import { ProductShowcase } from "@/components/landing-b/product-showcase"
import { Benefits } from "@/components/landing-b/benefits"
import { Pricing } from "@/components/landing-b/pricing"
import { FAQ } from "@/components/landing-b/faq"
import { FinalCTA } from "@/components/landing-b/final-cta"
import { Footer } from "@/components/landing-b/footer"

export default function PageB() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <ProductShowcase />
        <Benefits />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
