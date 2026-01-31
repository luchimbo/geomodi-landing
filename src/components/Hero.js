"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Hero({ stagger, elegantFade }) {
	const router = useRouter();
	const [storeUrl, setStoreUrl] = useState("");
	const [selectedStore, setSelectedStore] = useState(null);
	const [isChecking, setIsChecking] = useState(false);
	const [error, setError] = useState("");
	const [showStoreSelectors, setShowStoreSelectors] = useState(false);
	const [isDebouncing, setIsDebouncing] = useState(false);

	// Debounce logic for store selectors visibility
	useEffect(() => {
		if (!storeUrl.trim()) {
			setShowStoreSelectors(false);
			setIsDebouncing(false);
			return;
		}

		setIsDebouncing(true);
		const timer = setTimeout(() => {
			setShowStoreSelectors(true);
			setIsDebouncing(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, [storeUrl]);

	// Switch between prod and dev
	const baseUrl = "https://app.geomodi.ai";
	// const apiBaseUrl = "https://majestic-goat-313.convex.site"; // DEV
	const apiBaseUrl = "https://unique-goldfinch-537.convex.site"; // PROD

	const logos = [
		"/assets/prelaunch/tienda-nube.png",
		"/assets/prelaunch/shopify.png",
		"/assets/prelaunch/wix.png",
		"/assets/prelaunch/woo-commerce.png",
		"/assets/prelaunch/prestashop.png",
		"/assets/prelaunch/empretienda.png",
	];

	const logoNames = [
		"TiendaNube",
		"Shopify",
		"Wix",
		"WooCommerce",
		"PrestaShop",
		"Empretienda",
	];


	const handleAnalyzeSubmit = async (e) => {
		e.preventDefault();
		const trimmedUrl = storeUrl.trim();

		if (!trimmedUrl) {
			return;
		}

		if (selectedStore === null) {
			// Default to TiendaNube or prompt selection?
			// For now, let's just do nothing or maybe default to TiendaNube logic if we want to be permissive.
			// But the user said "none selected by default", so let's require selection or handle it.
			return;
		}

		setError("");

		if (selectedStore === 0) {
			// Check if it's actually a TiendaNube store
			setIsChecking(true);
			try {
				const response = await fetch(
					`${apiBaseUrl}/api/check-tiendanube?url=${encodeURIComponent(trimmedUrl)}`,
				);
				const data = await response.json();

				if (!response.ok || !data.isTiendaNube) {
					setError(
						"Esta URL no corresponde a una tienda de TiendaNube. Por favor verifica la URL o selecciona otra plataforma.",
					);
					setIsChecking(false);
					return;
				}

				// If it's TiendaNube, proceed with redirect
				const encodedUrl = encodeURIComponent(trimmedUrl);
				window.location.href = `${baseUrl}?pending_url=${encodedUrl}`;
			} catch (err) {
				setError("Error al verificar la tienda. Por favor intenta de nuevo.");
				setIsChecking(false);
			}
		} else {
			const logoSrc = logos[selectedStore];
			const logoBase64 = btoa(logoSrc);
			const pageBase64 = btoa(trimmedUrl);
			router.push(`/prelaunch-soon?logo=${logoBase64}&page=${pageBase64}`);
		}
	};

	return (
		<section className={`min-h-screen flex flex-col items-center justify-center pt-28 md:pt-0 px-4 relative ${showStoreSelectors ? "mt-0" : "mt-[-125px]"} md:mt-0`}>
			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.3 }}
				className="mx-auto max-w-4xl text-center"
			>
				<motion.h1
					variants={stagger}
					className="mx-auto flex flex-col items-center text-center text-[28px] font-bold leading-tight text-white/95 md:text-[56px] font-space"
				>
					<motion.span variants={elegantFade} className="md:whitespace-nowrap">
						2 de cada 3 busquedas en Google serán
					</motion.span>
					<motion.span variants={elegantFade} className="md:whitespace-nowrap">
						reemplazadas por inteligencia artificial en este año.
					</motion.span>
				</motion.h1>
				<motion.p
					variants={elegantFade}
					transition={{ delay: 0.2 }}
					className="mt-8 text-[18px] md:text-[36px] font-light text-white/65 font-space"
				>
					¡No te quedes afuera!
				</motion.p>

				{/* URL Input CTA */}
				<motion.form
					variants={elegantFade}
					transition={{ delay: 0.3 }}
					onSubmit={handleAnalyzeSubmit}
					className="mt-8 flex flex-col items-center justify-center gap-8 w-full"
				>
					<div className="relative w-full max-w-2xl">
						<label
							htmlFor="store-url-input"
							className="block text-white/65 text-center mb-2 md:mb-6 font-space text-[14px]"
						>
							Ingresa URL de tu tienda
						</label>
						<input
							id="store-url-input"
							type="text"
							value={storeUrl}
							onChange={(e) => {
								setStoreUrl(e.target.value);
								setError("");
							}}
							placeholder="www.mitienda.com"
							aria-label="URL de tu tienda online"
							aria-describedby={error ? "url-error-message" : undefined}
							aria-invalid={error ? "true" : "false"}
							className="w-full rounded-[2rem] text-center md:text-left border border-emerald-400/40 bg-white/5 px-8 pt-3 pb-3 md:pt-5 md:pb-5 pr-12
							 text-emerald-50 text-[18px] md:text-xl placeholder-emerald-400/40 focus:border-emerald-300/80 focus:outline-none focus:ring-4 focus:ring-emerald-400/10 transition-all font-space backdrop-blur-sm"
						/>
						{isDebouncing && (
							<div className="absolute right-6 top-1/2 mt-3 md:mt-4 -translate-y-1/2">
								<svg className="animate-spin h-5 w-5 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
									<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
							</div>
						)}
					</div>

					{/* Store Selectors */}
					<div className={`w-full max-w-2xl space-y-8 ${showStoreSelectors ? "block" : "hidden md:block"}`}>
						<div className="text-center">
							<p className="text-white/60 text-lg font-space italic text-[16px]">
								Selecciona tu plataforma de E-commerce
							</p>
						</div>
						<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
							{logos.map((src, i) => (
								<button
									key={i}
									type="button"
									onClick={() => {
										setSelectedStore(i);
										setError("");
									}}
									aria-label={`Seleccionar plataforma ${logoNames[i]}`}
									aria-pressed={selectedStore === i}
									className={`
                                        relative group flex items-center justify-center p-4 rounded-2xl border transition-all duration-300 h-20
                                        ${selectedStore === i
											? "bg-white border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.4)] scale-105 z-10"
											: "bg-white/90 border-transparent hover:bg-white hover:scale-105 opacity-90 hover:opacity-100"
										}
                                    `}
								>
									<div className="relative w-full h-full">
										<Image
											src={src}
											alt={`Logo de ${logoNames[i]} - Plataforma de e-commerce`}
											fill
											className={`object-contain transition-all duration-300 ${selectedStore === i ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}
										/>
									</div>
								</button>
							))}
						</div>

						<div className="flex flex-col items-center gap-6">
							<Link
								href="/prelaunch-soon?other"
								className="text-white/40 text-sm hover:text-emerald-300 transition-colors underline decoration-white/10 hover:decoration-emerald-300/30"
							>
								Utilizo otra plataforma
							</Link>

							{error && (
								<motion.div
									id="url-error-message"
									role="alert"
									aria-live="polite"
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-red-400 text-sm text-center px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 max-w-md"
								>
									{error}
								</motion.div>
							)}

							<motion.button
								type="submit"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`
                                    rounded-full px-12 py-3 md:py-5 text-[18px] md:text-xl font-bold shadow-xl transition-all duration-300 font-space
                                    ${storeUrl.trim() &&
										selectedStore !== null &&
										!isChecking
										? "bg-emerald-400 text-black shadow-emerald-400/20 hover:bg-emerald-300 cursor-pointer"
										: "bg-white/10 text-white/30 cursor-not-allowed border border-white/5"
									}
                                `}
								disabled={!storeUrl.trim() || selectedStore === null || isChecking}
							>
								{isChecking ? "Verificando..." : "Analizar mi tienda"}
							</motion.button>
						</div>
					</div>
				</motion.form>
			</motion.div>
		</section>
	);
}
