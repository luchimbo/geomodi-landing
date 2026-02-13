"use client";
import {
	AnimatePresence,
	domMax,
	LazyMotion,
	useReducedMotion,
} from "framer-motion";
import dynamic from "next/dynamic";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useFeatureFlagVariantKey } from "posthog-js/react";
import { usePostHog } from "posthog-js/react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
// Components
import Navbar from "@/components/Navbar";

const VideoSection = dynamic(() => import("@/components/VideoSection"), {
	ssr: false,
});
const SolutionsSection = dynamic(
	() => import("@/components/SolutionsSection"),
	{ ssr: false },
);
const WhatIsGeoModiSection = dynamic(
	() => import("@/components/WhatIsGeoModiSection"),
	{ ssr: false },
);
const CTASection = dynamic(() => import("@/components/CTASection"), {
	ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const NewsletterModal = dynamic(() => import("@/components/NewsletterModal"), {
	ssr: false,
});

const PageB = dynamic(() => import("@/app/page-b"), { ssr: false });

const EXPERIMENT_FLAG = "landing-page-experiment";
const TIMEOUT_MS = 3000;

function LoadingSkeleton() {
	return (
		<div className="min-h-screen bg-black flex items-center justify-center">
			<div className="animate-pulse flex flex-col items-center gap-4">
				<div className="h-8 w-48 bg-white/10 rounded-lg" />
				<div className="h-4 w-64 bg-white/5 rounded-lg" />
			</div>
		</div>
	);
}

function VariantA() {
	const reduce = useReducedMotion();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const elegantFade = {
		hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
		show: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
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
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify([
								{
									"@context": "https://schema.org",
									"@type": "Organization",
									name: "GeoModi",
									url: "https://geomodi.ai",
									logo: "https://geomodi.ai/logo_high_res.png",
									description:
										"Líderes en Generative Engine Optimization (GEO). Optimizamos tu TiendaNube para ChatGPT y buscadores de IA.",
									address: {
										"@type": "PostalAddress",
										addressCountry: "AR",
									},
								},
								{
									"@context": "https://schema.org",
									"@type": "WebSite",
									"name": "GeoModi",
									"url": "https://geomodi.ai",
									"description": "Optimiza la visibilidad de tu marca en la era de la IA generativa. Transforma tu catálogo de TiendaNube para que ChatGPT, Gemini y Claude te recomienden.",
									"publisher": {
										"@type": "Organization",
										"name": "GeoModi",
										"logo": {
											"@type": "ImageObject",
											"url": "https://geomodi.ai/logo_high_res.png"
										}
									}
								}
							]),
						}}
					></script>
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

function ABTestRouterInner() {
	const searchParams = useSearchParams();
	const variantParam = searchParams.get("variant"); // ?variant=control or ?variant=test
	const variant = useFeatureFlagVariantKey(EXPERIMENT_FLAG);
	const posthog = usePostHog();
	const experimentTracked = useRef(false);
	const [timedOut, setTimedOut] = useState(false);

	// Timeout fallback: if PostHog doesn't respond in 3s, show control
	useEffect(() => {
		if (variant !== undefined) return;
		const timer = setTimeout(() => setTimedOut(true), TIMEOUT_MS);
		return () => clearTimeout(timer);
	}, [variant]);

	// Track $experiment_viewed once when variant is resolved (only if not forced via query param)
	useEffect(() => {
		if (variant && posthog && !experimentTracked.current && !variantParam) {
			experimentTracked.current = true;
			posthog.capture("$experiment_viewed", {
				$feature_flag: EXPERIMENT_FLAG,
				$feature_flag_response: variant,
			});
		}
	}, [variant, posthog, variantParam]);

	// If variant is forced via query param, use it immediately
	if (variantParam === "control") {
		return <VariantA />;
	}

	if (variantParam === "test") {
		return <PageB />;
	}

	// Loading state: only on first visit while flags load (~300ms)
	if (variant === undefined && !timedOut) {
		return <LoadingSkeleton />;
	}

	// Route to the correct variant based on PostHog feature flag
	if (variant === "test") {
		return <PageB />;
	}

	return <VariantA />;
}

export default function ABTestRouter() {
	return (
		<Suspense fallback={<LoadingSkeleton />}>
			<ABTestRouterInner />
		</Suspense>
	);
}
