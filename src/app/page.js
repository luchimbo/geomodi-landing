"use client";
import React, { useState } from "react";
import { useReducedMotion, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
const VideoSection = dynamic(() => import("@/components/VideoSection"), { ssr: false });
const SolutionsSection = dynamic(() => import("@/components/SolutionsSection"), { ssr: false });
const WhatIsGeoModiSection = dynamic(() => import("@/components/WhatIsGeoModiSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const NewsletterModal = dynamic(() => import("@/components/NewsletterModal"), { ssr: false });

export default function GeoModiLandingReplica() {
  const reduce = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const elegantFade = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <LazyMotion features={domMax}>
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
        {/* Background glow - Static for performance */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute -top-24 md:-top-48 left-1/2 h-[300px] w-[500px] md:h-[520px] md:w-[980px] -translate-x-1/2 rounded-full bg-violet-700/30 blur-[60px] md:blur-[120px]" />
          <div className="absolute top-12 md:top-24 right-[-130px] md:right-[-260px] h-[300px] w-[300px] md:h-[560px] md:w-[560px] rounded-full bg-emerald-500/15 blur-[60px] md:blur-[120px]" />
          <div className="absolute bottom-[-110px] md:bottom-[-220px] left-[-130px] md:left-[-260px] h-[300px] w-[300px] md:h-[560px] md:w-[560px] rounded-full bg-violet-700/20 blur-[70px] md:blur-[140px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        </div>

        <div className="relative z-10">
          <Navbar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            reduce={reduce}
          />

          <main>
            <Hero stagger={stagger} elegantFade={elegantFade} />
            <VideoSection reduce={reduce} />
            <SolutionsSection stagger={stagger} cardIn={cardIn} />
            <WhatIsGeoModiSection />
            <CTASection />
          </main>

          <Footer />

          <AnimatePresence>
            {isModalOpen && (
              <NewsletterModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </LazyMotion>
  );
}
