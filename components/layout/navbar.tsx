"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const scrollTo = (id: string) => {
        setMobileMenuOpen(false);
        if (id === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#" className="font-orbitron font-bold text-xl text-white tracking-widest">
                    FactorX<span className="text-neon-cyan">.DEV</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <button
                                onClick={() => scrollTo(item.href)}
                                className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors uppercase tracking-wide"
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-16 left-0 w-full bg-black/95 border-b border-white/10 p-4 flex flex-col gap-4"
                >
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollTo(item.href)}
                            className="text-left text-gray-300 hover:text-neon-cyan py-2 border-b border-white/5 last:border-0"
                        >
                            {item.name}
                        </button>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
}
