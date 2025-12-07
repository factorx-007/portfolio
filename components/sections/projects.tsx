"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "../ui/glass-card";
import { ExternalLink, Github, FileText, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "EduCore / PIESA 2.0",
        category: "AI Educational Ecosystem",
        description: "Multi-agent AI ecosystem (7 Agents: Monitor, Risk, Tutor, Emotional, Social, Strategic, Assistant) to prevent student dropout. Features reactive & proactive intervention and mental health support. Built for Innovation Challenge Tecsup.",
        images: ["/Educore.png", "/Educore2.png", "/Educore3.png", "/Educore4.png"],
        stack: ["FastAPI", "Python", "LangChain", "Machine Learning (RF)", "7 AI Agents"],
        links: {
            demo: "https://docs.google.com/presentation/d/1Wtb_CrJJxHNviZxJbU9h0fcbOrdKpEoh/edit?slide=id.p1#slide=id.p1",
            code: "https://github.com/factorx-007/",
            doc: "https://docs.google.com/document/d/17wz6Bazk8CZUXvAxk5ZqVnA9V8F-L6W71cGPlMjtUvE/edit?tab=t.0"
        },
        buttonText: "View Presentation",
        isMobile: true
    },
    {
        title: "Protalent App",
        category: "Student/Job Matchmaking",
        description: "The frontend platform for connecting students with job offers using predictive modeling. Part of the EduCore ecosystem. Finalist in Innovation Challenge Tecsup.",
        images: ["/protalent1.png", "/protalent2.png", "/protalent3.png"],
        stack: ["React", "Vite", "Tailwind CSS", "Dashboard"],
        links: {
            demo: "https://practicas-frontend.vercel.app/",
            code: "https://github.com/factorx-007/"
        }
    },
    {
        title: "Protalent Landing",
        category: "Marketing Website",
        description: "High-conversion landing page for the Protalent platform. Showcasing features, benefits, and call-to-actions for students and companies.",
        images: ["/landing.png", "/landing2.png", "/landing3.png"],
        stack: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
        links: {
            demo: "https://protalent-landing.vercel.app/",
            code: "https://github.com/factorx-007/"
        }
    },
    {
        title: "ConfiaPe",
        category: "Service StartUp",
        description: "Connecting technical talent with clients. Full-stack marketplace with Admin Dashboard for service management and formalization of the technical sector in Peru.",
        images: ["/confiape.png", "/confiape2.png", "/confiape3.png"],
        stack: ["Next.js", "React", "Dashboard", "Marketplace"],
        links: {
            demo: "https://confia-pe-fr.vercel.app/",
            code: "https://github.com/factorx-007/"
        }
    },
    {
        title: "Restaurante Fabulosa",
        category: "Culinary Experience",
        description: "Modern web presence for 'Fabulosa', enhancing the culinary experience with a showcase of chefs, menu, and reservation system.",
        images: ["/fabuloza.png", "/fabuloza2.png"],
        stack: ["React", "HTML/CSS", "Responsive Design"],
        links: {
            demo: "https://restaurante-fabulosa-fx.netlify.app/",
            code: "https://github.com/factorx-007/"
        }
    },
    {
        title: "PharmaVida Desktop",
        category: "Admin Management System",
        description: "Desktop administration panel for inventory, sales, and client management. Complete backend solution for pharmacy operations.",
        images: ["/pharma.png", "/pharma2.png", "/pharma3.png"],
        stack: ["Java", "Swing/JavaFX", "SQL", "MVC"],
        links: {
            demo: "#",
            code: "https://github.com/factorx-007/"
        }
    },
    {
        title: "PharmaVida Web",
        category: "Web Dashboard",
        description: "Web-based interface for PharmaVida, allowing remote access to key metrics and management features.",
        images: ["/pharmaW.png", "/pharmaW2.png", "/pharmaW3.png"],
        stack: ["React", "Django", "Rest API"],
        links: {
            demo: "#",
            code: "https://github.com/factorx-007/"
        }
    },
    {
        title: "PharmaVida Mobile",
        category: "Mobile Application",
        description: "Mobile companion app for PharmaVida, enabling staff to check stock and manage orders on the go.",
        images: ["/pharmaM.png", "/pharmaM2.png", "/pharmaM3.png"],
        stack: ["React Native", "API Integration"],
        links: {
            demo: "#",
            code: "https://github.com/factorx-007/"
        },
        isMobile: true
    },
    {
        title: "Citas Médicas CDD",
        category: "Health Center System",
        description: "Appointment scheduling and management system for Ciudad de Dios Health Center. Streamlines patient flow and doctor schedules.",
        images: ["/cdd.png", "/cdd2.png", "/cdd3.png"],
        stack: ["Full Stack", "Database", "Dashboard"],
        links: {
            demo: "#",
            code: "https://github.com/factorx-007/"
        }
    }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = (e: any) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: any) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <GlassCard className="h-full flex flex-col group hover:border-neon-cyan/80 transition-all duration-300">
                <div className={cn(
                    "relative mb-6 overflow-hidden rounded-lg bg-gray-800/50 group/image",
                    project.isMobile ? "h-96" : "h-48"
                )}>
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={currentImage}
                            src={project.images[currentImage]}
                            alt={`${project.title} screenshot ${currentImage + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                                "absolute inset-0 w-full h-full",
                                project.isMobile ? "object-contain p-2" : "object-cover object-top"
                            )}
                        />
                    </AnimatePresence>

                    {/* Overlay Gradient (lighter for mobile to see content) */}
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent",
                        project.isMobile ? "opacity-30" : "opacity-60"
                    )} />

                    {/* Navigation Buttons */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-neon-cyan/50"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-neon-cyan/50"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                {project.images.map((_: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImage ? 'bg-neon-cyan' : 'bg-white/30'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                        {project.isMobile && (
                            <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-neon-purple transition-colors" />
                        )}
                    </div>
                    <p className="text-neon-cyan/60 text-sm mb-4 font-mono">{project.category}</p>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                        {project.description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.stack.map((tech: string) => (
                                <span key={tech} className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 flex-wrap items-center">
                            <a href={project.links.code} target="_blank" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors border border-transparent hover:border-white/20 px-3 py-1.5 rounded-md bg-white/5">
                                <Github className="w-4 h-4" /> Code
                            </a>
                            {project.links.demo !== "#" && (
                                <a href={project.links.demo} target="_blank" className="text-neon-cyan hover:text-white flex items-center gap-2 text-sm transition-colors border border-neon-cyan/30 hover:border-neon-cyan px-3 py-1.5 rounded-md bg-neon-cyan/10 hover:bg-neon-cyan/20">
                                    <ExternalLink className="w-4 h-4" /> {project.buttonText || "Live App"}
                                </a>
                            )}
                            {/* @ts-ignore */}
                            {project.links.doc && (
                                <a href={project.links.doc} target="_blank" className="text-neon-purple hover:text-white flex items-center gap-2 text-sm transition-colors border border-neon-purple/30 hover:border-neon-purple px-3 py-1.5 rounded-md bg-neon-purple/10 hover:bg-neon-purple/20">
                                    <FileText className="w-4 h-4" /> Proposal
                                </a>
                            )}
                            {/* @ts-ignore */}
                            {project.links.landing && (
                                <a href={project.links.landing} target="_blank" className="text-neon-purple hover:text-white flex items-center gap-2 text-sm transition-colors border border-neon-purple/30 hover:border-neon-purple px-3 py-1.5 rounded-md bg-neon-purple/10 hover:bg-neon-purple/20">
                                    <ExternalLink className="w-4 h-4" /> Landing
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        Featured <span className="text-neon-cyan">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Showcasing innovation through code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
