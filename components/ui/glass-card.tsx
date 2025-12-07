import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
    return (
        <div className={cn("glass rounded-xl p-6 border border-white/10 hover:border-neon-cyan/50 transition-colors duration-500", className)}>
            {children}
        </div>
    );
}
