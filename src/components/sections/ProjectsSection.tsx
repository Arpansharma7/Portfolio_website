"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { ExternalLink, FolderArchive } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"

const projects = [
  {
    title: "NeedFinder AI",
    description: "Core AI system for a product discovery platform using autonomous agents to aggregate and rank results from multiple marketplaces. Features review synthesis and price tracking with up to 98% confidence scoring.",
    tech: ["LLM Agents", "Backend Logic", "API Integration"],
    github: "https://github.com/Arpansharma7/needfinder",
    demo: "https://needfinder-ai.vercel.app/"
  },
  {
    title: "ParaTrace-Ai",
    description: "Full-stack AI system for plagiarism detection, paraphrasing, and AI-generated content classification. Integrated real-time web search and optimized MySQL queries for high-throughput performance.",
    tech: ["Spring Boot", "Python", "Microservices", "MySQL"],
    github: "https://github.com/Arpansharma7/ParaTrace-Ai"
  },
  {
    title: "Grievance Prioritization System",
    description: "Zero-label NLP pipeline encoding complaints via pre-trained transformer models and ranking by semantic severity. Achieved 87%+ precision in duplicate detection.",
    tech: ["Python", "Sentence-Transformers", "Scikit-learn"],
    github: "https://github.com/AshutoshRauthan/SuGriev"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading>Featured Work</SectionHeading>

          <Button asChild size="lg" className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            <Link href="https://drive.google.com/drive/folders/1wz4g9_56m7d3li8hkqjwI2IvtBpSyQaB?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FolderArchive className="w-5 h-5" />
              Academic Assignments
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-background border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold font-heading mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <Link href={project.github} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                      <FaGithub className="w-4 h-4" /> Code
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
