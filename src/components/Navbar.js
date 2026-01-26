"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar({ isMenuOpen, setIsMenuOpen, reduce, theme = "dark" }) {
    const ease = [0.22, 1, 0.36, 1];

    const bgColor = theme === "dark" ? "bg-white/10" : "bg-[#1A0B5E]";
    const textColor = theme === "dark" ? "text-white/70" : "text-white/70";
    const hoverColor = theme === "dark" ? "hover:text-white" : "hover:text-white";
    const borderColor = theme === "dark" ? "border-white/20" : "border-white/10";
    const logoBrightness = theme === "dark" ? "" : "brightness-200";

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] mx-auto max-w-6xl px-3 pt-4 md:px-4 md:pt-6 z-40">
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className={`mx-auto flex items-center justify-between rounded-[2rem] border ${borderColor} ${bgColor} px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 md:rounded-full md:px-6 ${isMenuOpen ? "rounded-[2rem] bg-black/90" : ""}`}
            >
                <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex flex-1 items-center">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <img src="/logo.png" alt="GEOMODI" className={`h-5 w-auto md:h-6 ${logoBrightness}`} loading="eager" />
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center items-center gap-8">
                        <Link href="/#soluciones" className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors`}>
                            Soluciones
                        </Link>
                        <Link href="/pricing" className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors`}>
                            Planes
                        </Link>
                        <Link href="/faq" className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors`}>
                            FAQ
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 md:flex-1 md:justify-end">
                        <Link href="/pricing" className="hidden sm:block">
                            <motion.button
                                whileHover={reduce ? {} : { y: -1, scale: 1.01 }}
                                whileTap={reduce ? {} : { scale: 0.99 }}
                                className="rounded-full bg-emerald-300 px-4 py-1.5 text-xs font-semibold text-black shadow-lg shadow-emerald-300/25 hover:bg-emerald-200 cursor-pointer md:px-5 md:py-2 md:text-sm"
                            >
                                Comenzar ahora
                            </motion.button>
                        </Link>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white md:hidden"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-[2rem] border border-white/10 bg-black/95 p-6 shadow-2xl backdrop-blur-3xl md:hidden"
                        >
                            <div className="flex flex-col gap-6">
                                <Link
                                    href="/#soluciones"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    Soluciones
                                </Link>
                                <Link
                                    href="/pricing"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    Planes
                                </Link>
                                <Link
                                    href="/faq"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                                >
                                    FAQ
                                </Link>
                                <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                                    <button className="w-full rounded-2xl bg-emerald-300 py-4 font-bold text-black shadow-lg">
                                        Comenzar ahora
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    );
}
