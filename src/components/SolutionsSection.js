"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SolutionsSection({ stagger, cardIn }) {
    return (
        <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-black">
            {/* Neural Network Background Animation */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full opacity-60" viewBox="0 0 1000 1000">
                    <defs>
                        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Neural Network Nodes and Connections - Optimized for mobile */}
                    {(() => {
                        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

                        const allNodes = [
                            { x: 100, y: 200 }, { x: 300, y: 150 }, { x: 500, y: 300 },
                            { x: 200, y: 450 }, { x: 400, y: 600 }, { x: 700, y: 200 },
                            { x: 850, y: 400 }, { x: 600, y: 550 }, { x: 900, y: 700 },
                            { x: 150, y: 800 }, { x: 450, y: 900 }, { x: 750, y: 850 },
                            { x: 50, y: 500 }, { x: 950, y: 100 }, { x: 300, y: 350 },
                            { x: 650, y: 550 }, { x: 800, y: 300 }, { x: 100, y: 900 }
                        ];

                        const allConnections = [
                            [0, 1], [1, 2], [2, 5], [5, 13], [13, 16], [16, 6], [6, 8],
                            [8, 11], [11, 10], [10, 9], [9, 17], [17, 3], [3, 12], [12, 0],
                            [1, 14], [14, 2], [14, 3], [3, 15], [15, 4], [4, 7], [7, 8],
                            [15, 11], [15, 6], [2, 6], [4, 10]
                        ];

                        // Reduce complexity on mobile
                        const nodes = isMobile ? allNodes.slice(0, 8) : allNodes;
                        const connections = isMobile ? allConnections.slice(0, 10) : allConnections;

                        return (
                            <>
                                {/* Connections */}
                                {connections.map(([start, end], i) => (
                                    <motion.line
                                        key={`conn-${i}`}
                                        x1={nodes[start]?.x || 0}
                                        y1={nodes[start]?.y || 0}
                                        x2={nodes[end]?.x || 0}
                                        y2={nodes[end]?.y || 0}
                                        stroke="#87FDB4"
                                        strokeWidth={isMobile ? "1" : "1.5"}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{
                                            pathLength: [0, 1, 1, 0],
                                            opacity: [0, 0.3, 0.3, 0]
                                        }}
                                        transition={{
                                            duration: isMobile ? 7 : 5,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                            ease: "easeInOut",
                                        }}
                                        filter={isMobile ? "none" : "url(#neonGlow)"}
                                    />
                                ))}
                                {/* Nodes */}
                                {nodes.map((node, i) => (
                                    <motion.circle
                                        key={`node-${i}`}
                                        cx={node.x}
                                        cy={node.y}
                                        r={isMobile ? "3" : "4"}
                                        fill="#87FDB4"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: [0, 0.8, 0],
                                            scale: [0.5, 1.1, 0.5]
                                        }}
                                        transition={{
                                            duration: isMobile ? 6 : 4,
                                            repeat: Infinity,
                                            delay: (i % 5) * 0.6,
                                            ease: "easeInOut",
                                        }}
                                        filter={isMobile ? "none" : "url(#neonGlow)"}
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
                    className="text-center md:text-left text-[28px] md:text-[48px] font-bold font-space leading-tight mb-12 md:mb-16 md:ml-[5%]"
                >
                    <span className="text-emerald-300">Optimiza</span> <span className="text-white">la forma en que la IA ve tu marca</span>
                </motion.h2>

                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24 md:mb-32 px-4 md:px-8"
                >
                    <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 100px rgba(16, 185, 129, 0.15)'
                        }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-emerald-500/20 pointer-events-none" />

                        {/* Video container */}
                        <div className="relative p-2 md:p-4">
                            <video
                                className="w-full h-auto rounded-xl"
                                autoPlay
                                muted
                                playsInline
                                style={{
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                                }}
                            >
                                <source src="/videos/AnimacionComparacion.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                    </div>
                </motion.div>

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
                                loading="lazy"
                                decoding="async"
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
                                loading="lazy"
                                decoding="async"
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
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
