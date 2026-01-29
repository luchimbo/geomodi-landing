"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Hero({ stagger, elegantFade }) {
	const router = useRouter();
	const [storeUrl, setStoreUrl] = useState("");
	const [selectedStore, setSelectedStore] = useState(null);
	const [isChecking, setIsChecking] = useState(false);
	const [error, setError] = useState("");

	// Switch between prod and dev
	const baseUrl = "https://app.geomodi.ai";
	// const apiBaseUrl = "https://majestic-goat-313.convex.site"; // DEV
	const apiBaseUrl = "https://unique-goldfinch-537.convex.site"; // PROD

	const logos = [
		"/assets/prelaunch/tienda-nube.png",
		"/assets/prelaunch/shopify.png",
		"/assets/prelaunch/wix.png",
		"/assets/prelaunch/woo-commerce.png",
		"/assets/prelaunch/mercado-libre.png",
		"/assets/prelaunch/empretienda.png",
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
		<section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.3 }}
				className="mx-auto max-w-4xl text-center"
			>
				<motion.h1
					variants={stagger}
					className="mx-auto flex flex-col items-center text-center text-[32px] font-bold leading-tight text-white/95 md:text-[56px] font-space"
				>
					<motion.span variants={elegantFade} className="md:whitespace-nowrap">
						El 50% del tráfico de búsqueda tradicional
					</motion.span>
					<motion.span variants={elegantFade} className="md:whitespace-nowrap">
						será reemplazado por IA generativa en 2026.
					</motion.span>
				</motion.h1>
				<motion.p
					variants={elegantFade}
					transition={{ delay: 0.2 }}
					className="mt-8 text-[22px] md:text-[36px] font-light text-white/65 font-space"
				>
					¿Tu marca está preparada?
				</motion.p>

				{/* URL Input CTA */}
				<motion.form
					variants={elegantFade}
					transition={{ delay: 0.3 }}
					onSubmit={handleAnalyzeSubmit}
					className="mt-14 flex flex-col items-center justify-center gap-8 w-full"
				>
					<div className="relative w-full max-w-2xl">
						<input
							type="text"
							value={storeUrl}
							onChange={(e) => {
								setStoreUrl(e.target.value);
								setError("");
							}}
							placeholder="Ingresá URL de tu tienda"
							className="w-full rounded-[2rem] border border-emerald-400/40 bg-white/5 px-8 py-5 text-emerald-50 text-xl placeholder-emerald-400/40 focus:border-emerald-300/80 focus:outline-none focus:ring-4 focus:ring-emerald-400/10 transition-all font-space backdrop-blur-sm"
						/>
					</div>

					{/* Store Selectors */}
					<div className="w-full max-w-2xl space-y-8">
						<div className="text-center">
							<p className="text-white/60 text-lg font-space italic">
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
									className={`
                                        relative group flex items-center justify-center p-4 rounded-2xl border transition-all duration-300 h-20
                                        ${
																					selectedStore === i
																						? "bg-white border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.4)] scale-105 z-10"
																						: "bg-white/90 border-transparent hover:bg-white hover:scale-105 opacity-90 hover:opacity-100"
																				}
                                    `}
								>
									<div className="relative w-full h-full">
										<Image
											src={src}
											alt={`Store ${i + 1}`}
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
                                    rounded-full px-12 py-5 text-xl font-bold shadow-xl transition-all duration-300 font-space
                                    ${
																			storeUrl.trim() &&
																			selectedStore !== null &&
																			!isChecking
																				? "bg-emerald-400 text-black shadow-emerald-400/20 hover:bg-emerald-300 cursor-pointer"
																				: "bg-white/10 text-white/30 cursor-not-allowed border border-white/5"
																		}
                                `}
								disabled={
									!storeUrl.trim() || selectedStore === null || isChecking
								}
							>
								{isChecking ? "Verificando..." : "Analizar ahora"}
							</motion.button>
						</div>
					</div>
				</motion.form>
			</motion.div>
		</section>
	);
}
