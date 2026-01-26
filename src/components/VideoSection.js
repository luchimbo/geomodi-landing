"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection({ reduce }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const ease = [0.22, 1, 0.36, 1];

    return (
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
                                loading="lazy"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
