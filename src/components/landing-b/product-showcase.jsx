import { SectionWrapper } from "@/components/landing-b/section-wrapper"
import { AnimatedSection } from "@/components/landing-b/animated-section"
import { CriteriaIndicator } from "@/components/landing-b/criteria-indicator"

const features = [
  {
    title: "Análisis avanzado",
    description:
      "GeoModi utiliza algoritmos avanzados de análisis para determinar qué tan atractiva es tu publicación para las IAs más populares",
    image: null,
    customComponent: "criteria",
  },
  {
    title: "Optimización de publicaciones",
    description:
      "Tras lograr un entendimiento completo de tu producto, nuestro sistema optimiza tu publicación para que sea irresistible para la IA",
    image: "/assets/landing-b/screenshots/Optimizar.png",
  },
  {
    title: "Conectá tu tienda en 1 clic",
    description:
      "Compatible con:",
    image: null,
    logos: [
      { src: "/assets/landing-b/screenshots/Logo_TN.png", alt: "Tienda Nube", name: "Tienda Nube" },
      { src: "/assets/landing-b/screenshots/Logo_Woo.png", alt: "WooCommerce", name: "WooCommerce" },
    ],
    comingSoon: "Próximamente: Shopify, PrestaShop y más",
  },
]

export function ProductShowcase() {
  return (
    <SectionWrapper id="funcionalidades" className="scroll-mt-20">
      <div className="flex flex-col gap-24">
        {features.map((feature, i) => (
          <AnimatedSection
            key={feature.title}
            delay={0.1}
            variant={i % 2 === 0 ? "slide-right" : "slide-left"}
          >
            <div
              className={`${feature.logos
                ? "flex flex-col items-center text-center gap-6"
                : `grid items-center gap-8 md:grid-cols-2 ${i % 2 === 1 ? "md:direction-rtl" : ""}`
                }`}
            >
              <div className={`${feature.logos ? "text-center" : `text-center md:text-left ${i % 2 === 1 ? "md:order-2" : ""}`}`}>
                <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className={!feature.logos && i % 2 === 1 ? "md:order-1" : ""}>
                {feature.customComponent === "criteria" ? (
                  <CriteriaIndicator />
                ) : feature.image ? (
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border/50 shadow-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : feature.logos ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-12 md:gap-16">
                      {feature.logos.map((logo, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="h-28 md:h-36 w-auto object-contain opacity-90 rounded-md"
                          />
                          <span className="text-base font-medium text-foreground">{logo.name}</span>
                        </div>
                      ))}
                    </div>
                    {feature.comingSoon && (
                      <p className="text-sm text-muted-foreground/60 italic mt-2">
                        {feature.comingSoon}
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}
