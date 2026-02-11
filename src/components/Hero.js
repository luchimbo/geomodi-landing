"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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

		if (selectedStore === 0 || selectedStore === 3) {
			// Check if it's actually a TiendaNube or WooCommerce store
			setIsChecking(true);
			try {
				const response = await fetch(
					`${apiBaseUrl}/api/detect-platform?url=${encodeURIComponent(trimmedUrl)}`,
				);
				const data = await response.json();

				// Check if API detected a supported platform (tiendanube or woocommerce)
				const supportedPlatforms = ["tiendanube", "woocommerce"];

				if (!response.ok) {
					setError("Hubo un problema. Por favor verifica la URL!");
					setIsChecking(false);
					return;
				}

				// If platform is not supported, redirect to prelaunch-soon like other platforms
				if (!supportedPlatforms.includes(data.platform)) {
					const logoSrc = logos[selectedStore];
					const logoBase64 = btoa(logoSrc);
					const pageBase64 = btoa(trimmedUrl);
					router.push(`/prelaunch-soon?logo=${logoBase64}&page=${pageBase64}`);
					return;
				}

				// Auto-select the detected platform for the user
				if (data.platform === 'tiendanube') {
					setSelectedStore(0);
				} else if (data.platform === 'woocommerce') {
					setSelectedStore(3);
				}

				// If it's a supported platform, proceed with redirect to app
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
		<section
			className={`min-h-fit md:min-h-screen flex flex-col items-start md:items-center justify-start md:justify-center pt-24 md:pt-0 px-4 pb-6 md:pb-0 relative overflow-hidden ${showStoreSelectors ? "mt-0 md:pt-[110px]" : "pt-24 md:pt-[160px]"}`}
		>
			{/* Aesthetic Background Elements */}
			<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
				{/* Mesh Gradient Overlay */}
				<div
					className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] opacity-20"
					style={{
						backgroundImage: "radial-gradient(circle at 20% 30%, #4c1d95 0%, transparent 40%), radial-gradient(circle at 80% 70%, #064e3b 0%, transparent 45%), radial-gradient(circle at 50% 50%, #1e1b4b 0%, transparent 60%)",
						filter: "blur(80px)"
					}}
				/>
				{/* Noise Texture */}
				<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
			</div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.3 }}
				className="mx-auto max-w-5xl text-center relative z-10"
			>
				<motion.h1
					variants={stagger}
					className="mx-auto flex flex-col items-center text-center text-[26px] md:text-[64px] font-bold leading-[1.2] md:leading-[1.1] text-white tracking-tight font-space"
				>
					<motion.span variants={elegantFade} className="md:whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
						2 de cada 3 búsquedas en Google
					</motion.span>
					<motion.span variants={elegantFade} className="md:whitespace-nowrap text-emerald-400">
						serán reemplazadas por IA este año.
					</motion.span>
				</motion.h1>
				<motion.p
					variants={elegantFade}
					transition={{ delay: 0.2 }}
					className="mt-2 md:mt-8 text-[15px] md:text-[36px] font-light text-white/65 font-space"
				>
					¡No te quedes afuera!
				</motion.p>

				{/* URL Input CTA */}
				<motion.form
					variants={elegantFade}
					transition={{ delay: 0.3 }}
					onSubmit={handleAnalyzeSubmit}
					className="mt-3 md:mt-8 flex flex-col items-center justify-center gap-3 md:gap-8 w-full"
				>
					<div className="relative w-full max-w-2xl">
						<motion.label
							variants={elegantFade}
							htmlFor="store-url-input"
							className="block text-emerald-400/80 text-center mb-2 md:mb-6 font-space text-[11px] md:text-[14px] uppercase tracking-[0.15em] font-medium"
						>
							Ingresa URL de tu tienda
						</motion.label>
						<div className="relative group/input">
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
								className="w-full rounded-2xl md:rounded-[2.5rem] text-center border border-white/10 bg-white/5 px-8 pt-4 pb-4 md:pt-6 md:pb-6 pr-12
								 text-emerald-50 text-[18px] md:text-2xl placeholder-emerald-400/20 focus:border-emerald-400/40 focus:outline-none focus:ring-1 focus:ring-emerald-400/20 transition-all font-space backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.3)]"
							/>
							{/* Input Highlight Glow */}
							<div className="absolute inset-0 rounded-2xl md:rounded-[2.5rem] bg-emerald-400/5 opacity-0 group-focus-within/input:opacity-100 transition-opacity pointer-events-none" />

							{isDebouncing && (
								<div className="absolute right-6 top-1/2 -translate-y-1/2">
									<svg
										className="animate-spin h-6 w-6 text-emerald-400"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								</div>
							)}
						</div>
					</div>

					{/* Store Selectors */}
					<div
						className={`w-full max-w-2xl space-y-8 ${showStoreSelectors ? "block" : "hidden"}`}
					>
						<div className="text-center">
							<p className="text-white/60 text-base md:text-lg font-space italic">
								Selecciona tu plataforma de E-commerce
							</p>
						</div>
						<div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
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
                                        relative group flex items-center justify-center p-4 rounded-xl border transition-all duration-500 h-20 overflow-hidden
                                        ${selectedStore === i
											? "bg-white border-white shadow-[0_0_30px_rgba(52,211,153,0.3)] scale-105 z-10"
											: "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 scale-100 opacity-70 hover:opacity-100"
										}
                                    `}
								>
									{/* Selection Indicator */}
									{selectedStore === i && (
										<motion.div
											layoutId="selection-glow"
											className="absolute inset-0 bg-emerald-400/10 pointer-events-none"
										/>
									)}
									<div className="relative w-full h-full z-10">
										<Image
											src={src}
											alt={`Logo de ${logoNames[i]} - Plataforma de e-commerce`}
											fill
											className={`object-contain transition-all duration-500 ${selectedStore === i ? "opacity-100 grayscale-0" : "opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"}`}
										/>
									</div>
								</button>
							))}
						</div>

						<div className="flex flex-col items-center gap-8">
							<Link
								href="/prelaunch-soon?other"
								className="text-white/30 text-xs md:text-sm hover:text-emerald-400 transition-colors uppercase tracking-widest font-medium"
							>
								Otras plataformas
							</Link>

							{error && (
								<motion.div
									id="url-error-message"
									role="alert"
									aria-live="polite"
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-red-400 text-sm text-center px-6 py-4 rounded-xl bg-red-500/10 border border-red-500/20 max-w-md backdrop-blur-sm"
								>
									{error}
								</motion.div>
							)}

							<motion.button
								type="submit"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className={`
                                    rounded-full px-12 py-4 md:py-6 text-[18px] md:text-xl font-bold shadow-2xl transition-all duration-500 font-space tracking-tight
                                    ${storeUrl.trim() &&
										selectedStore !== null &&
										!isChecking
										? "bg-emerald-400 text-black shadow-emerald-400/20 hover:bg-emerald-300 hover:shadow-emerald-300/40 cursor-pointer"
										: "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
									}
                                `}
								disabled={
									!storeUrl.trim() || selectedStore === null || isChecking
								}
							>
								{isChecking ? "Verificando..." : "Analizar mi tienda →"}
							</motion.button>
						</div>
					</div>
				</motion.form>
			</motion.div>
		</section>
	);
}
