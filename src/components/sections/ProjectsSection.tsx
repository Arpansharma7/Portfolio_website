"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ExternalLink, FolderArchive, GitCommitHorizontal } from "lucide-react"
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
    title: "Grievance Prioritization",
    description: "Zero-label NLP pipeline encoding complaints via pre-trained transformer models and ranking by semantic severity. Achieved 87%+ precision in duplicate detection.",
    tech: ["Python", "Sentence-Transformers", "Scikit-learn"],
    github: "https://github.com/AshutoshRauthan/SuGriev"
  }
]

const commits = [
  { hash: "a3f91c", msg: "feat: add LLM agent orchestration",  time: "2d ago"  },
  { hash: "b72e4a", msg: "fix: optimize MySQL query pipeline",  time: "5d ago"  },
  { hash: "c18d3f", msg: "feat: NLP grievance ranker v2",       time: "2w ago"  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 select-none bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-foreground/50">
                04 — Portfolio
              </span>
            </div>
            <h2
              className="font-heading font-bold text-foreground tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Featured Work
            </h2>
          </div>

          <Button asChild size="lg" className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 self-start md:self-auto">
            <Link href="https://drive.google.com/drive/folders/1wz4g9_56m7d3li8hkqjwI2IvtBpSyQaB?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="font-display font-bold tracking-[0.15em] uppercase text-[11px]">
              <FolderArchive className="w-4 h-4" />
              Academic Assignments
            </Link>
          </Button>
        </div>

        {/* Git commit log decorative card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-4 mb-8 font-mono"
        >
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/40">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/30 ml-2">git log --oneline</span>
          </div>
          <div className="space-y-2">
            {commits.map((c) => (
              <div key={c.hash} className="flex items-center gap-3 text-[11px]">
                <GitCommitHorizontal className="w-3.5 h-3.5 text-primary/50 shrink-0" />
                <span className="text-primary/70 font-bold">{c.hash}</span>
                <span className="text-foreground/60 flex-1 truncate">{c.msg}</span>
                <span className="text-foreground/30 shrink-0">{c.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group bg-white/40 backdrop-blur-md border border-border/80 p-6 rounded-3xl hover:border-primary/60 hover:bg-background/80 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 uppercase leading-tight tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-5 flex-1 font-sans text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5 select-none">
                  {project.tech.map((tech) => (
                    <span key={tech}
                      className="font-display text-[9px] font-bold uppercase tracking-[0.15em] text-primary bg-primary/10 hover:bg-primary/20 transition-all px-2.5 py-1 rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 mt-auto pt-3 border-t border-border/60">
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-all flex items-center gap-1.5 font-display text-[10px] font-bold uppercase tracking-[0.2em]">
                      <FaGithub className="w-3.5 h-3.5" /> Code
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-all flex items-center gap-1.5 font-display text-[10px] font-bold uppercase tracking-[0.2em]">
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
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
