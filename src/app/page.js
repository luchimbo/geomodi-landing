"use client";
import React from "react";
import { Play, Sparkles, Terminal, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function GeoModiLandingReplica() {
  const reduce = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const ease = [0.22, 1, 0.36, 1];


  const elegantFade = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const rollIn = {
    hidden: { opacity: 0, x: -150, rotate: -15 },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
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
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div
          className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-violet-700/35 blur-[120px]"
          animate={
            reduce
              ? { opacity: 1 }
              : { opacity: [0.75, 1, 0.75], scale: [1, 1.04, 1] }
          }
          transition={reduce ? {} : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-24 right-[-260px] h-[560px] w-[560px] rounded-full bg-emerald-500/20 blur-[120px]"
          animate={
            reduce
              ? { opacity: 1 }
              : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }
          }
          transition={reduce ? {} : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-220px] left-[-260px] h-[560px] w-[560px] rounded-full bg-violet-700/25 blur-[140px]"
          animate={
            reduce
              ? { opacity: 1 }
              : { opacity: [0.65, 0.95, 0.65], scale: [1, 1.05, 1] }
          }
          transition={reduce ? {} : { duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <div className="relative z-10">
        {/* Top bar */}
        <header className="fixed top-0 left-0 right-0 z-[100] mx-auto max-w-6xl px-4 pt-6">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-lg shadow-black/10 backdrop-blur-2xl backdrop-saturate-150"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-1 items-center">
                <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <img src="/logo.png" alt="GEOMODI" className="h-6 w-auto" />
                </a>
              </div>

              <div className="hidden md:flex flex-1 justify-center items-center gap-8">
                <Link href="/pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                  Precio
                </Link>
              </div>

              <div className="flex flex-1 justify-end">
                <Link href="/pricing">
                  <motion.button
                    whileHover={reduce ? {} : { y: -1, scale: 1.01 }}
                    whileTap={reduce ? {} : { scale: 0.99 }}
                    className="rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-300/25 hover:bg-emerald-200 cursor-pointer"
                  >
                    Comenzar ahora
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.nav>
        </header>

        <main>
          {/* Section 1: Hero & URL CTA */}
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
              <motion.div
                variants={elegantFade}
                transition={{ delay: 0.3 }}
                className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <div className="relative w-full max-w-lg">
                  <input
                    type="text"
                    placeholder="Ingresá URL de un producto de tu tienda"
                    className="w-full rounded-2xl border border-emerald-400/40 bg-white/5 px-8 py-5 text-emerald-50 text-lg placeholder-emerald-400/40 focus:border-emerald-300/80 focus:outline-none focus:ring-2 focus:ring-emerald-300/10 transition-all font-space"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-2xl bg-emerald-300 px-10 py-5 text-lg font-bold text-black shadow-xl shadow-emerald-400/20 hover:bg-emerald-200 transition-colors sm:w-auto whitespace-nowrap font-space"
                >
                  Analizar ahora
                </motion.button>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 2: Video Section */}
          <section className="min-h-screen flex items-center justify-center px-4 bg-black/20">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease }}
              className="w-full max-w-5xl"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-[0_0_100px_rgba(34,197,94,0.1)]">
                <div className="aspect-video w-full">
                  {!isPlaying ? (
                    <div
                      className="relative h-full w-full cursor-pointer group"
                      onClick={() => setIsPlaying(true)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-emerald-500/10" />
                      <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-20" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={reduce ? {} : { scale: [1, 1.08, 1] }}
                          transition={reduce ? {} : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                          className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-300 shadow-2xl shadow-emerald-300/50 transition-transform group-hover:scale-110"
                        >
                          <Play className="ml-1 h-10 w-10 text-black" fill="currentColor" />
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://www.youtube.com/embed/sc_DZoFIO5Y?autoplay=1&rel=0&modestbranding=1"
                      title="GEOModi Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Section 3: Soluciones (Images) */}
          <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-black" id="soluciones">
            {/* Neural Network Background Animation */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full opacity-60" viewBox="0 0 1000 1000">
                <defs>
                  <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Neural Network Nodes and Connections */}
                {(() => {
                  const nodes = [
                    { x: 100, y: 200 }, { x: 300, y: 150 }, { x: 500, y: 300 },
                    { x: 200, y: 450 }, { x: 400, y: 600 }, { x: 700, y: 200 },
                    { x: 850, y: 400 }, { x: 600, y: 550 }, { x: 900, y: 700 },
                    { x: 150, y: 800 }, { x: 450, y: 900 }, { x: 750, y: 850 },
                    { x: 50, y: 500 }, { x: 950, y: 100 }, { x: 300, y: 350 },
                    { x: 650, y: 550 }, { x: 800, y: 300 }, { x: 100, y: 900 }
                  ];

                  const connections = [
                    [0, 1], [1, 2], [2, 5], [5, 13], [13, 16], [16, 6], [6, 8],
                    [8, 11], [11, 10], [10, 9], [9, 17], [17, 3], [3, 12], [12, 0],
                    [1, 14], [14, 2], [14, 3], [3, 15], [15, 4], [4, 7], [7, 8],
                    [15, 11], [15, 6], [2, 6], [4, 10]
                  ];

                  return (
                    <>
                      {/* Connections */}
                      {connections.map(([start, end], i) => (
                        <motion.line
                          key={`conn-${i}`}
                          x1={nodes[start].x}
                          y1={nodes[start].y}
                          x2={nodes[end].x}
                          y2={nodes[end].y}
                          stroke="#87FDB4"
                          strokeWidth="1.5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 0.4, 0.4, 0]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                          filter="url(#neonGlow)"
                        />
                      ))}
                      {/* Nodes */}
                      {nodes.map((node, i) => (
                        <motion.circle
                          key={`node-${i}`}
                          cx={node.x}
                          cy={node.y}
                          r="4"
                          fill="#87FDB4"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.5]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: (i % 5) * 0.5,
                            ease: "easeInOut",
                          }}
                          filter="url(#neonGlow)"
                        />
                      ))}
                    </>
                  );
                })()}
              </svg>
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left text-[36px] md:text-[48px] font-bold font-space leading-tight mb-20 md:ml-[5%]"
              >
                <span className="text-emerald-300">Optimiza</span> <span className="text-white">la forma en que la IA ve tu marca</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-x-16">
                {/* Left Column - Aligned Right */}
                <motion.div
                  className="flex flex-col items-center md:items-end gap-16 md:gap-24"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <motion.div
                    variants={cardIn}
                    whileHover={{ scale: 1.02 }}
                    className="w-full max-w-[440px]"
                  >
                    <img
                      src="/group11.png"
                      alt="Solución GEOModi 1"
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                    />
                  </motion.div>
                  <motion.div
                    variants={cardIn}
                    whileHover={{ scale: 1.02 }}
                    className="w-full max-w-[500px]"
                  >
                    <img
                      src="/group13.png"
                      alt="Solución GEOModi 3"
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                    />
                  </motion.div>
                </motion.div>

                {/* Right Column - Aligned Left */}
                <motion.div
                  className="flex flex-col items-center md:items-start pt-0 md:pt-48"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <motion.div
                    variants={cardIn}
                    whileHover={{ scale: 1.02 }}
                    className="w-full max-w-[400px]"
                  >
                    <img
                      src="/group12.png"
                      alt="Solución GEOModi 2"
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* New Section: What is GEOMODI */}
          <section className="py-24 px-4 bg-black relative">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <h2 className="text-2xl md:text-3xl font-bold font-space text-white mb-6">¿Qué es GEOMODI?</h2>
                <p className="text-white/70 text-lg md:text-xl font-space leading-relaxed max-w-3xl">
                  Es el motor de Generative Engine Optimization (GEO) que traduce tu e-commerce al idioma de la IA. Transformamos tus productos en entidades de autoridad para que ChatGPT, Gemini y Claude te recomienden como la opción número uno.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold font-space text-white mb-10">¿Qué hacemos por tu marca?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                  {/* Visibilidad Generativa */}
                  <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-white/10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                      <Sparkles className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-space text-white mb-3 tracking-tight">Visibilidad Generativa</h3>
                    <p className="text-white/60 font-space text-[15px] leading-relaxed">
                      Presencia en las respuestas directas de los nuevos buscadores de IA.
                    </p>
                  </div>

                  {/* Autoridad E-E-A-T */}
                  <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-white/10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                      <Terminal className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-space text-white mb-3 tracking-tight">Autoridad E-E-A-T</h3>
                    <p className="text-white/60 font-space text-[15px] leading-relaxed">
                      Inyección de datos técnicos y fuentes externas que Google y los LLMs validan.
                    </p>
                  </div>

                  {/* Cero Alucinaciones */}
                  <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-white/10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-space text-white mb-3 tracking-tight">Cero Alucinaciones</h3>
                    <p className="text-white/60 font-space text-[15px] leading-relaxed">
                      Estructura de datos para que la IA nunca invente información de los productos.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl font-space font-medium leading-relaxed text-white/90">
                  En 2026, si la IA no cita a la marca, no existe. <span className="text-emerald-400">GEOMODI</span> otorga la ventaja del primer movimiento para <span className="text-emerald-400">dominar el mercado antes que la competencia.</span>
                </p>
              </motion.div>
            </div>
          </section>


          {/* Section 4: Email CTA & Logo */}
          <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 1.2, ease }}
              className="w-full bg-[#3110C3] py-24 md:py-32 relative overflow-hidden border-y border-white/10 shadow-[0_0_80px_rgba(49,16,195,0.3)]"
            >
              <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <h2 className="text-[36px] font-bold leading-tight text-white md:text-[52px] font-space">
                  ¿Estás listo para llevar tu marca al siguiente nivel?
                </h2>
                <p className="mt-8 text-xl text-white/80 md:text-2xl font-light">
                  Trabajá directamente con nuestro equipo experto para crear tu estrategia de contenidos.
                </p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formEmailSource = e.target.elements.email.value;
                    if (formEmailSource && !isLoading) {
                      setIsLoading(true);
                      try {
                        const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ email: formEmailSource, timestamp: new Date().toISOString() }),
                        });
                        const data = await response.json();

                        if (data.result === 'success') {
                          setIsSubmitted(true);
                          e.target.reset();
                          setTimeout(() => {
                            setIsSubmitted(false);
                            setIsLoading(false);
                          }, 3000);
                        } else {
                          alert('Hubo un error. Por favor intenta de nuevo.');
                          setIsLoading(false);
                        }
                      } catch (error) {
                        console.error('Error:', error);
                        alert('Hubo un error. Por favor intenta de nuevo.');
                        setIsLoading(false);
                      }
                    }
                  }}
                  className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row"
                >
                  <div className="relative w-full max-w-md">
                    <input
                      name="email"
                      type="email"
                      placeholder="Ingresá tu email"
                      required
                      className="w-full rounded-2xl border border-white/20 bg-white/10 px-8 py-5 text-white text-lg placeholder-white/50 backdrop-blur-xl focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/20 transition-all"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className="w-full rounded-2xl bg-emerald-300 px-10 py-5 text-lg font-bold text-black shadow-lg shadow-emerald-300/25 hover:bg-emerald-200 transition-colors sm:w-auto whitespace-nowrap disabled:opacity-50"
                  >
                    {isLoading ? 'Enviando...' : isSubmitted ? '¡Listo!' : 'Comenzar ahora'}
                  </motion.button>
                </form>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-[120px]" />
              <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
            </motion.div>

            {/* Bottom LOGO Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mt-32 w-full max-w-2xl px-8 flex justify-center"
            >
              <img
                src="/logo_high_res.png"
                alt="GEO Logo"
                className="w-full h-auto object-contain opacity-90 select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              />
            </motion.div>
          </section>
        </main>

        <footer className="border-t border-white/5 bg-black/60 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30">
            <div>
              © {new Date().getFullYear()} GeoModi • Inteligencia Generativa para Marcas
            </div>
            <div className="flex gap-8">
              <Link href="/terminos" className="hover:text-emerald-300 transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </footer>

        {/* Newsletter Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-[#111] p-10 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white font-space mb-4 leading-tight">
                      ¿Estás listo para llevar tu marca al siguiente nivel?
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed">
                      Trabajá directamente con nuestro equipo experto para crear tu estrategia de contenidos.
                    </p>
                  </div>

                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (email && !isLoading) {
                        setIsLoading(true);
                        try {
                          const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
                          });
                          const data = await response.json();

                          if (data.result === 'success') {
                            setIsSubmitted(true);
                            setTimeout(() => {
                              setIsModalOpen(false);
                              setIsSubmitted(false);
                              setEmail("");
                              setIsLoading(false);
                            }, 2500);
                          } else {
                            alert('Hubo un error. Por favor intenta de nuevo.');
                            setIsLoading(false);
                          }
                        } catch (error) {
                          console.error('Error:', error);
                          alert('Hubo un error. Por favor intenta de nuevo.');
                          setIsLoading(false);
                        }
                      }
                    }}
                    className="space-y-5"
                  >
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresá tu email"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-white/40 focus:border-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/20 transition-all text-lg"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={isLoading ? {} : { scale: 1.02 }}
                      whileTap={isLoading ? {} : { scale: 0.98 }}
                      className="w-full rounded-2xl bg-emerald-300 px-6 py-4 font-bold text-black shadow-lg shadow-emerald-300/25 hover:bg-emerald-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-3 text-lg"
                    >
                      {isLoading ? 'Enviando...' : 'Comenzar ahora'}
                    </motion.button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-300/20"
                  >
                    <svg className="w-10 h-10 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white font-space mb-2">
                    ¡Gracias por suscribirte!
                  </h3>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
