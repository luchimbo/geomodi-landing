"use client";
import {
	AnimatePresence,
	domMax,
	LazyMotion,
	motion,
	useReducedMotion,
} from "framer-motion";
import {
	ChevronDown,
	DollarSign,
	HelpCircle,
	Lock,
	Shield,
	Target,
	Zap,
} from "lucide-react";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const faqData = [
	{
		category: "Alcance del servicio",
		icon: <Target className="w-6 h-6" />,
		questions: [
			{
				q: "¿Qué incluye exactamente el servicio GEOMODI?",
				a: "Es una tecnología de optimización masiva diseñada para integrarse directamente con TiendaNube. El sistema accede a tu catálogo completo y, mediante un motor de procesamiento avanzado, transforma las descripciones básicas en activos de alta densidad semántica optimizados para GEO. Incluye la reestructuración automática de cada ficha con jerarquía técnica, principios de respuesta directa y tablas comparativas de autoridad.",
			},
			{
				q: "¿Qué NO está incluido en el servicio GEOMODI?",
				a: "No incluye la edición de imágenes, la gestión de inventario, cambios en el diseño de la plantilla de la tienda ni la gestión de campañas publicitarias. GEOMODI se enfoca exclusivamente en la inteligencia de los textos para motores de respuesta.",
			},
			{
				q: "¿El servicio GEOMODI es estratégico, operativo o ambos?",
				a: "GEOMODI es una solución puramente operativa de alta eficiencia. Está diseñada para ser la herramienta de ejecución definitiva: vos no tenés que pensar en la estrategia de optimización ni en cómo estructurar la información para la IA; nuestra tecnología ya tiene ese conocimiento integrado. Tu único trabajo es elegir los productos y hacer clic; GEOMODI se encarga de toda la complejidad operativa de transformar tu catálogo de forma automática y masiva.",
			},
		],
	},
	{
		category: "Proceso de trabajo",
		icon: <Zap className="w-6 h-6" />,
		questions: [
			{
				q: "¿Cómo es el proceso desde que se contrata el servicio hasta la implementación?",
				a: "Es un flujo de tres pasos: 1) Vinculás tu tienda de TiendaNube. 2) El sistema importa automáticamente tu catálogo. 3) Seleccionás los productos (de forma masiva o individual) y hacés clic en Optimizar. La descripción se actualiza automáticamente en tu tienda.",
			},
			{
				q: "¿Qué necesitan de nuestro lado para empezar con GEOMODI?",
				a: "Solo la URL o el acceso a tu tienda de TiendaNube. No necesitás cargar archivos ni redactar instrucciones adicionales.",
			},
			{
				q: "¿GEOMODI trabaja sobre nuestro contenido existente o crea contenido nuevo?",
				a: "Toma tu descripción actual como insumo base y la reconstruye totalmente. No es una simple corrección; es una transformación integral que expande la información técnica y la organiza para ser citable por modelos de IA.",
			},
			{
				q: "¿El servicio GEOMODI se adapta a nuestro negocio o es un framework estándar?",
				a: "Nuestra tecnología aplica un framework de autoridad automático. El sistema identifica la categoría y vertical de cada producto de forma inteligente, adaptando la estructura semántica y el contenido técnico sin necesidad de que el usuario configure tonos o estilos manualmente.",
			},
		],
	},
	{
		category: "Resultados y expectativas",
		icon: <HelpCircle className="w-6 h-6" />,
		questions: [
			{
				q: "¿En cuánto tiempo se empiezan a ver resultados con GEOMODI?",
				a: "La actualización en tu tienda es instantánea. En cuanto a la visibilidad externa, los nuevos textos tardan unos pocos días en ser procesados por los algoritmos e impactar en los resultados de búsqueda de las IA.",
			},
		],
	},
	{
		category: "Precio, contratos y riesgo",
		icon: <DollarSign className="w-6 h-6" />,
		questions: [
			{
				q: "¿Existe un período mínimo de contratación para GEOMODI?",
				a: "No hay contratos a largo plazo. GEOMODI funciona bajo un esquema de pago mensual flexible.",
			},
			{
				q: "¿Puedo cancelar el servicio GEOMODI cuando quiera?",
				a: "Sí, podés cancelar la suscripción en cualquier momento. Los textos que ya fueron optimizados permanecen en tu TiendaNube; no se pierden al cancelar.",
			},
			{
				q: "¿Hay algún tipo de garantía o prueba inicial en GEOMODI?",
				a: "Sí, contamos con un Plan Gratuito que te permite optimizar una publicación sin costo para que valides la potencia de la tecnología antes de pasar a un plan pago.",
			},
			{
				q: "¿Cuál es el costo del servicio?",
				a: "Manejamos dos esquemas: el Plan Free, que incluye 1 optimización de prueba, y el Plan Pro, que por 29 dólares al mes te permite optimizar hasta 150 publicaciones.",
			},
		],
	},
	{
		category: "Confianza y control",
		icon: <Shield className="w-6 h-6" />,
		questions: [
			{
				q: "¿Quién es dueño del contenido optimizado o creado dentro de GEOMODI?",
				a: "El dueño absoluto es el cliente. Una vez que el sistema actualiza tu descripción en TiendaNube, ese contenido es propiedad de tu marca.",
			},
			{
				q: "¿Cómo maneja GEOMODI la confidencialidad de la información?",
				a: "GEOMODI solo accede a la información pública de tus productos para realizar la optimización. Los datos operativos de tu tienda se manejan bajo estrictos protocolos de privacidad y seguridad.",
			},
		],
	},
];

function FAQItem({ question, answer, isOpen, onClick }) {
	return (
		<div className="border-b border-white/10 last:border-0">
			<button
				onClick={onClick}
				className="w-full py-6 flex items-center justify-between text-left group transition-all"
			>
				<span
					className={`text-lg md:text-xl font-medium font-space pr-8 transition-colors ${isOpen ? "text-emerald-300" : "text-white group-hover:text-emerald-200"}`}
				>
					{question}
				</span>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
					className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${isOpen ? "bg-emerald-300 border-emerald-300 text-black" : "border-white/20 text-white/50"}`}
				>
					<ChevronDown size={20} />
				</motion.div>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
						className="overflow-hidden"
					>
						<p className="pb-8 text-white/60 text-lg leading-relaxed font-space max-w-4xl">
							{answer}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default function FAQPage() {
	const reduce = useReducedMotion();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openItems, setOpenItems] = useState({});

	const toggleItem = (category, index) => {
		setOpenItems((prev) => ({
			...prev,
			[`${category}-${index}`]: !prev[`${category}-${index}`],
		}));
	};

	return (
		<LazyMotion features={domMax}>
			<div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
				{/* Background glow - Optimized for performance */}
				<div className="pointer-events-none fixed inset-0 z-0">
					<div className="absolute top-0 right-[-10%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-emerald-500/10 blur-[80px] md:blur-[150px]" />
					<div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-violet-700/15 blur-[80px] md:blur-[150px]" />
				</div>

				<div className="relative z-10">
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								"@context": "https://schema.org",
								"@type": "FAQPage",
								mainEntity: faqData.flatMap((section) =>
									section.questions.map((q) => ({
										"@type": "Question",
										name: q.q,
										acceptedAnswer: {
											"@type": "Answer",
											text: q.a,
										},
									})),
								),
							}),
						}}
					/>
					<Navbar
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
						reduce={reduce}
						theme="dark"
					/>
				</div>

				<main className="relative z-0 pt-32 pb-24 px-4">
					<div className="max-w-4xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="text-center mb-20"
						>
							<h1 className="text-[40px] md:text-[64px] font-bold font-space leading-tight mb-6">
								Preguntas <span className="text-emerald-300">Frecuentes</span>
							</h1>
							<p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
								Todo lo que necesitas saber sobre cómo GEOMODI transforma tu
								presencia en la IA.
							</p>
						</motion.div>

						<div className="space-y-16">
							{faqData.map((section, sectionIdx) => (
								<motion.section
									key={section.category}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.1 }}
									transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
									className="relative"
								>
									<div className="flex items-center gap-4 mb-8">
										<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-300">
											{section.icon}
										</div>
										<h2 className="text-2xl md:text-3xl font-bold font-space text-white">
											{section.category}
										</h2>
									</div>

									<div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 px-6 md:px-10 overflow-hidden">
										{section.questions.map((item, qIdx) => (
											<FAQItem
												key={qIdx}
												question={item.q}
												answer={item.a}
												isOpen={openItems[`${section.category}-${qIdx}`]}
												onClick={() => toggleItem(section.category, qIdx)}
											/>
										))}
									</div>
								</motion.section>
							))}
						</div>

						{/* Support CTA */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className="mt-24 p-10 md:p-12 rounded-[3rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/5 to-violet-500/5 text-center"
						>
							<h3 className="text-2xl md:text-3xl font-bold font-space mb-4">
								¿Tenés más dudas?
							</h3>
							<p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
								Estamos acá para ayudarte a escalar tu tienda con la tecnología
								de IA más avanzada.
							</p>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								onClick={() =>
									(window.location.href = "mailto:geomodi3@gmail.com")
								}
								className="bg-emerald-300 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-200 transition-colors shadow-lg shadow-emerald-400/20"
							>
								Contactar a soporte
							</motion.button>
						</motion.div>
					</div>
				</main>

				<Footer />
			</div>
		</LazyMotion>
	);
}
