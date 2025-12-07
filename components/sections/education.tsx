"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
    {
        school: "TECSUP",
        degree: "Software Design & Development",
        year: "2024",
        icon: GraduationCap,
        color: "text-neon-cyan"
    }
];

const certifications = [
    "English (Intermediate/Advanced)",
    "Google UX Design Professional Certificate",
    "Google IT Support Professional Certificate",
    "IBM Machine Learning with Python",
    "Cisco CyberSecurity Fundamentals",
    "DataCamp Python & R for Data Science",
];

export function Education() {
    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-orbitron font-bold text-white mb-8 border-b border-neon-cyan/30 pb-4 inline-block">
                            Education
                        </h2>
                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <div key={idx} className="flex gap-4 items-start p-4 rounded-lg hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-neon-cyan">
                                    <div className={`p-3 rounded-lg bg-white/5 ${edu.color}`}>
                                        <edu.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                        <p className="text-neon-cyan">{edu.degree}</p>
                                        <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-orbitron font-bold text-white mb-8 border-b border-neon-purple/30 pb-4 inline-block">
                            Certifications
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-neon-purple/50 transition-colors">
                                    <Award className="w-5 h-5 text-neon-purple flex-shrink-0" />
                                    <span className="text-gray-300 text-sm md:text-base">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
