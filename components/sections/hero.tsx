"use client";

import { motion } from "framer-motion";
import { NeonButton } from "../ui/neon-button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { ReactNode } from "react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#050510] to-[#050510]">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-purple/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px]"
            />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-cyan/80 font-orbitron tracking-[0.2em] mb-4 text-sm md:text-base">
                        SYSTEM ONLINE // WELCOME USER
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-neon-purple mb-6 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                        FRANCLIN<br />GONZALES
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Full-Stack Software Engineer & Creative Innovator.
                        <br />
                        Building the future with <span className="text-neon-cyan">React</span>, <span className="text-neon-purple">Node.js</span>, and <span className="text-neon-green">AI</span>.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                        <NeonButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </NeonButton>
                        <NeonButton variant="purple" onClick={() => window.open('CV Franclin Gonzales,.pdf', '_blank')}>
                            Download CV <Download className="ml-2 w-4 h-4" />
                        </NeonButton>
                    </div>

                    <div className="flex gap-6 justify-center">
                        <SocialLink href="https://github.com/factorx-007" icon={<Github />} label="GitHub" delay={0.1} />
                        <SocialLink href="https://linkedin.com/in/franclin-junior-gonzalez-alejandria-3b73a6312" icon={<Linkedin />} label="LinkedIn" delay={0.2} />
                        <SocialLink href="mailto:fgonzalezalejandria@gmail.com" icon={<Mail />} label="Email" delay={0.3} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label, delay }: { href: string; icon: ReactNode; label: string; delay: number }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + delay }}
            whileHover={{ y: -5, color: "#00f3ff" }}
            className="text-gray-400 hover:text-neon-cyan transition-colors"
            aria-label={label}
        >
            {icon}
        </motion.a>
    );
}
