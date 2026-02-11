"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection({ reduce }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const ease = [0.22, 1, 0.36, 1];

    return (
        <section className="min-h-fit md:min-h-[80vh] flex items-center justify-center px-4 mt-4 md:mt-0 pt-0 pb-16 md:py-24 relative overflow-hidden">
            {/* Background Accent for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "radial-gradient(circle at 50% 50%, #10b981 0%, transparent 50%)",
                        filter: "blur(120px)"
                    }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                onViewportEnter={() => setIsPlaying(true)}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-5xl relative z-10"
            >
                {/* Premium Container with layered effects */}
                <div className="relative group">
                    {/* Animated Glow Border */}
                    <div className="absolute -inset-[1px] rounded-[2.6rem] bg-gradient-to-r from-emerald-500/20 via-violet-500/20 to-emerald-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_80px_rgba(16,185,129,0.05)]">
                        <div className="aspect-video w-full">
                            {!isPlaying ? (
                                <div
                                    className="relative h-full w-full cursor-pointer overflow-hidden"
                                    onClick={() => setIsPlaying(true)}
                                >
                                    {/* Thumbnail Placeholder with Gradient Mesh */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-black to-emerald-900/40" />
                                    <div className="absolute inset-0 bg-black/20" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            animate={reduce ? {} : {
                                                scale: [1, 1.05, 1],
                                                boxShadow: [
                                                    "0 0 20px rgba(16,185,129,0.2)",
                                                    "0 0 40px rgba(16,185,129,0.4)",
                                                    "0 0 20px rgba(16,185,129,0.2)"
                                                ]
                                            }}
                                            transition={reduce ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400 text-black transition-transform group-hover:scale-110"
                                        >
                                            <Play className="ml-1 h-8 w-8 text-black" fill="currentColor" />
                                        </motion.div>
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    src="https://www.youtube.com/embed/DrbiO4X5Lu4?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&showinfo=0"
                                    title="GEOModi Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="h-full w-full border-0 scale-[1.01]"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </div>

                    {/* Decorative Corner Accents */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-500/10 blur-2xl rounded-full pointer-events-none" />
                </div>
            </motion.div>
        </section>
    );
}
