import { Zap, Shield, BarChart3, Layers, Clock, Globe } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/landing-b/ui/card"
import { SectionWrapper } from "@/components/landing-b/section-wrapper"
import { AnimatedSection } from "@/components/landing-b/animated-section"

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that keeps your team moving at full speed.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance built into every layer.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and dashboards to track what matters most.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with hundreds of tools your team already uses.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and reclaim hours every week.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with edge infrastructure in 50+ regions.",
  },
]

export function Benefits() {
  return (
    <SectionWrapper id="features" className="scroll-mt-20">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Everything you need
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Powerful features to help your team succeed.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <AnimatedSection key={benefit.title} delay={i * 0.1}>
            <Card interactive className="h-full">
              <CardHeader className="text-center md:text-left">
                <benefit.icon className="mb-2 h-10 w-10 text-primary mx-auto md:mx-0" />
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}
