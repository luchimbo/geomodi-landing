import { SectionWrapper } from "@/components/landing-b/section-wrapper"
import { AnimatedSection } from "@/components/landing-b/animated-section"
import { Card, CardContent } from "@/components/landing-b/ui/card"

const logos = ["Vercel", "Stripe", "Linear", "Notion", "Figma", "GitHub"]

const testimonials = [
  {
    quote: "This platform transformed how our team ships products. We're 3x faster now.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
  },
  {
    quote: "The best developer experience I've ever had. It just works.",
    author: "Marcus Johnson",
    role: "Lead Engineer, StartupXYZ",
  },
  {
    quote: "We migrated in a weekend and never looked back. Incredible tooling.",
    author: "Elena Rodriguez",
    role: "VP Engineering, ScaleUp",
  },
]

export function SocialProof() {
  return (
    <SectionWrapper className="bg-muted/50">
      <AnimatedSection>
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by industry leaders
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.author} delay={i * 0.1}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="mb-4 text-muted-foreground italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}
