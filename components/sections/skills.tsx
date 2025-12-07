"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
    {
        id: "frontend",
        label: "Frontend",
        skills: [
            { name: "React / Next.js", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "React Native / Flutter", level: 80 },
            { name: "Three.js / Fiber / Framer", level: 75 },
            { name: "Figma / UI Design", level: 85 },
        ]
    },
    {
        id: "backend",
        label: "Backend",
        skills: [
            { name: "Node.js (Express/Nest)", level: 90 },
            { name: "Python (FastAPI/Django)", level: 85 },
            { name: "SQL (Postgres/MySQL)", level: 85 },
            { name: "Redis / MongoDB", level: 80 },
            { name: "WebSockets / Socket.IO", level: 85 },
        ]
    },
    {
        id: "ai",
        label: "AI & Innovation",
        skills: [
            { name: "Machine Learning (RF/Scikit)", level: 80 },
            { name: "LLM Integration / Agents", level: 85 },
            { name: "Data Analysis (Pandas)", level: 85 },
            { name: "Bot Development", level: 90 },
        ]
    },
    {
        id: "cloud",
        label: "Cloud & DevOps",
        skills: [
            { name: "AWS (S3/EC2/Lambda)", level: 70 },
            { name: "Docker / Containers", level: 75 },
            { name: "CI/CD (GitHub Actions)", level: 85 },
            { name: "N8N Automation", level: 90 },
            { name: "Linux / Bash", level: 75 },
        ]
    },
    {
        id: "soft",
        label: "Soft Skills",
        skills: [
            { name: "Leadership / Team Lead", level: 95 },
            { name: "Agile / Scrum", level: 90 },
            { name: "Problem Solving", level: 95 },
            { name: "Communication (ES/EN)", level: 90 },
        ]
    }
];

export function Skills() {
    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <section id="skills" className="py-20 bg-dark-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        Technical <span className="text-neon-green">Arsenal</span>
                    </h2>
                    <p className="text-gray-400">Powered by modern tech stack.</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={cn(
                                "px-6 py-2 rounded-full border transition-all duration-300 font-orbitron text-sm md:text-base",
                                activeTab === cat.id
                                    ? "border-neon-green bg-neon-green/20 text-neon-green shadow-[0_0_15px_rgba(10,255,153,0.3)]"
                                    : "border-white/10 text-gray-400 hover:border-white/30"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {categories.find(c => c.id === activeTab)?.skills.map((skill, index) => (
                            <div key={skill.name} className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-neon-green/30 transition-colors">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-bold font-orbitron">{skill.name}</span>
                                    <span className="text-neon-green">{skill.level}%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-neon-green shadow-[0_0_10px_#0aff99]"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
