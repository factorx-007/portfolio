"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { Briefcase } from "lucide-react";

const experience = [
    {
        company: "Municipalidad Ciudad de Dios",
        role: "Full-Stack Developer Lead",
        period: "Dec 2024 - Mar 2025",
        description: "Led the development of a comprehensive web system for municipal services digitization.",
        stack: ["React", "Node.js", "APIs"],
    },
    {
        company: "Romero Gas",
        role: "Process Automation Engineer",
        period: "Aug 2025 - Oct 2025",
        description: "Implemented conversational chatbots and logistic management systems with real-time geolocation.",
        stack: ["React", "N8N", "SQL", "APIs"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        Professional <span className="text-neon-purple">Experience</span>
                    </h2>
                    <div className="h-1 w-24 bg-neon-purple mx-auto rounded-full" />
                </motion.div>

                <div className="relative border-l-2 border-neon-purple/30 ml-4 md:ml-1/2 space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_10px_#bc13fe] md:left-1/2 md:-ml-2" />

                            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:text-left md:ml-auto"}`}>
                                <GlassCard className="p-6 relative group hover:bg-white/5 transition-all">
                                    <div className="flex items-center gap-2 mb-2 text-neon-cyan justify-start md:justify-[inherit]">
                                        <Briefcase className="w-4 h-4" />
                                        <span className="text-sm font-mono">{exp.period}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-purple transition-colors">{exp.role}</h3>
                                    <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-start md:justify-[inherit]">
                                        {exp.stack.map(tech => (
                                            <span key={tech} className="px-2 py-1 text-xs rounded border border-neon-purple/30 text-neon-purple bg-neon-purple/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
