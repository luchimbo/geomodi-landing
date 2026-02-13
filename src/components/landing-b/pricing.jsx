import { Check } from "lucide-react"
import { Button } from "@/components/landing-b/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/landing-b/ui/card"
import { Badge } from "@/components/landing-b/ui/badge"
import { SectionWrapper } from "@/components/landing-b/section-wrapper"
import { AnimatedSection } from "@/components/landing-b/animated-section"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Starter",
    price: "Gratis",
    period: "",
    description: "Ideal para arrancar",
    features: [
      "5 Análisis de productos",
      "5 Productos optimizados",
    ],
    cta: "Comenzar gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$39.999",
    period: "/mes",
    originalPrice: "$80.000/mes",
    description: "Para negocios en crecimiento",
    features: [
      "150 análisis de productos por mes",
      "150 productos optimizados por mes",
      "Integración con Tienda Nube y WooCommerce",
    ],
    cta: "Empezar ahora",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <SectionWrapper id="pricing" className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Nuestros planes
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Elegí el plan que se adapta a tu negocio. Sin costos ocultos. Sin sorpresas.
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {tiers.map((tier, i) => (
          <AnimatedSection key={tier.name} delay={i * 0.1}>
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
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  {tier.originalPrice && (
                    <div className="mb-1">
                      <span className="text-lg text-muted-foreground line-through">
                        {tier.originalPrice}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}
