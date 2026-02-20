"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/landing-b/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/landing-b/ui/card"
import { Badge } from "@/components/landing-b/ui/badge"
import { SectionWrapper } from "@/components/landing-b/section-wrapper"
import { AnimatedSection } from "@/components/landing-b/animated-section"
import { cn } from "@/lib/utils"
import { usePostHog } from "posthog-js/react"

const tiers = [
  {
    name: "Starter",
    price: "$20",
    geos: "20 Geos",
    bonus: null,
    products: "40 productos",
    costPerProduct: "$0.50 por producto",
    features: [
      "20 créditos Geos",
      "Optimiza hasta 40 productos",
    ],
    cta: "Comenzar con Starter",
    link: "https://app.geomodi.ai/signup",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$100",
    geos: "120 Geos",
    bonus: "+20%",
    products: "240 productos",
    costPerProduct: "$0.42 por producto",
    features: [
      "120 créditos Geos (+20% bonus)",
      "Optimiza hasta 240 productos",
    ],
    cta: "Elegir Growth",
    link: "https://app.geomodi.ai/signup",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$500",
    geos: "700 Geos",
    bonus: "+40%",
    products: "1.400 productos",
    costPerProduct: "$0.36 por producto",
    features: [
      "700 créditos Geos (+40% bonus)",
      "Optimiza hasta 1.400 productos",
    ],
    cta: "Elegir Pro",
    link: "https://app.geomodi.ai/signup",
    highlighted: false,
  },
  {
    name: "Agency",
    price: "$2.000",
    geos: "4.000 Geos",
    bonus: "+100%",
    products: "8.000 productos",
    costPerProduct: "$0.25 por producto",
    features: [
      "4.000 créditos Geos (+100% bonus)",
      "Optimiza hasta 8.000 productos",
    ],
    cta: "Contactar ventas",
    link: "https://app.geomodi.ai/signup",
    highlighted: false,
  },
]

export function Pricing() {
  const posthog = usePostHog()
  return (
    <SectionWrapper id="pricing" className="scroll-mt-20">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Packs de créditos
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprá créditos "Geos" y usálos para optimizar tus productos. 1 optimización = 0.5 Geos.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier, i) => (
          <AnimatedSection key={tier.name} delay={i * 0.08}>
            <Card
              interactive
              className={cn(
                "relative flex h-full flex-col",
                tier.highlighted && [
                  "scale-[1.02] md:scale-105",
                  "shadow-lg",
                  "border-primary/30",
                ]
              )}
            >
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-0">
                  Más popular
                </Badge>
              )}
              <CardHeader className="pb-3">
                <CardTitle>{tier.name}</CardTitle>
                <div className="mt-3">
                  <div>
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">USD</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm font-medium text-primary">{tier.geos}</span>
                    {tier.bonus && (
                      <Badge variant="secondary" className="text-xs px-1.5 py-0">
                        {tier.bonus}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <ul className="space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground/70">
                  {tier.costPerProduct}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a
                    href={tier.link}
                    onClick={() => posthog?.capture("pricing_cta_click", { tier: tier.name, label: tier.cta })}
                  >
                    {tier.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}
