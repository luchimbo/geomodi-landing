"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/landing-b/ui/button"
import { usePostHog } from "posthog-js/react"

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Precios", href: "#pricing" },
  { label: "Preguntas", href: "#faq" },
]

export function Navbar() {
  const posthog = usePostHog()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/95 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center">
          <img
            src="/assets/landing-b/logos/LogoGeomodi.png"
            alt="GeoModi"
            className="h-6 w-auto"
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button
            size="sm"
            asChild
          >
            <a
              href="https://app.geomodi.ai"
              onClick={() => posthog?.capture("navbar_cta_click", { label: "Comenzar gratis" })}
            >
              Comenzar gratis
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background/95 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="mt-2 w-full"
            asChild
          >
            <a
              href="https://app.geomodi.ai"
              onClick={() => posthog?.capture("navbar_cta_click", { label: "Comenzar gratis" })}
            >
              Comenzar gratis
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
