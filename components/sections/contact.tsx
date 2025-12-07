"use client";

import { motion } from "framer-motion";
import { NeonButton } from "../ui/neon-button";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        Ready to <span className="text-neon-cyan">Innovate?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        I am available for freelance projects and full-time opportunities.
                        Let's build something extraordinary together.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
                        <NeonButton onClick={() => window.location.href = 'mailto:fgonzalezalejandria@gmail.com'}>
                            <Mail className="mr-2 w-4 h-4" /> Send Email
                        </NeonButton>
                        <NeonButton variant="purple" onClick={() => window.open('https://linkedin.com/in/franclin-junior-gonzalez-alejandria-3b73a6312', '_blank')}>
                            <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                        </NeonButton>
                        <NeonButton variant="cyan" onClick={() => window.open('https://github.com/factorx-007', '_blank')}>
                            <Github className="mr-2 w-4 h-4" /> GitHub
                        </NeonButton>
                    </div>

                    <div className="text-gray-500 text-sm font-mono border-t border-white/10 pt-8 mt-12">
                        <p>&copy; {new Date().getFullYear()} Franclin Gonzales. All systems operational.</p>
                        <p className="mt-2 text-xs opacity-50">Designed with Next.js, Tailwind & Framer Motion.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
