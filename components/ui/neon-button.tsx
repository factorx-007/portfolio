"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "cyan" | "purple";
}

export function NeonButton({ children, className, variant = "cyan", ...props }: NeonButtonProps) {
    const hex = variant === "cyan" ? "#00f3ff" : "#bc13fe";

    return (
        <motion.button
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${hex}` }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-6 py-3 font-orbitron font-bold uppercase tracking-wider transition-colors duration-300 border-2",
                variant === "cyan" ? "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10" : "border-neon-purple text-neon-purple hover:bg-neon-purple/10",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
