"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["Scikit-learn", "PyTorch", "TensorFlow", "NLP", "Transformers", "Deep Learning", "Generative AI", "LLMs"],
  },
  {
    title: "Backend & Systems",
    skills: ["Spring Boot", "Django", "REST APIs", "Microservices", "System Design"],
  },
  {
    title: "Languages & Databases",
    skills: ["Python", "Java", "C/C++", "MySQL", "Oracle Database"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3)", "Docker", "Git", "Vercel"],
  },
]



export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 select-none bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-primary" />
          <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-foreground/50">
            03 — Expertise
          </span>
        </div>
        <h2
          className="font-heading font-bold text-foreground tracking-tight leading-[0.9] mb-14"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          Technical Arsenal
        </h2>

        <div className="grid lg:grid-cols-[1fr_220px] gap-8">

          {/* Skill chips grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/40 backdrop-blur-md border border-border/80 p-6 rounded-3xl hover:border-primary/60 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background/50 border border-border/80 hover:border-primary hover:text-primary rounded-xl font-display text-[10px] font-semibold uppercase tracking-[0.15em] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side decorative cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >

            {/* Primary tools card */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
              <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 mb-4">
                Primary Tools
              </p>
              <div className="space-y-2.5">
                {["Python", "PyTorch / TensorFlow", "Spring Boot", "React / Next.js", "Docker · AWS"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span className="font-display text-[11px] font-semibold text-foreground/70 uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus area card */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 font-mono">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-400/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                <span className="w-2 h-2 rounded-full bg-green-400/70" />
              </div>
              <div className="space-y-1 text-[11px]">
                <p className="text-foreground/30"># focus.py</p>
                <p><span className="text-primary/80">domain</span> <span className="text-foreground/40">=</span></p>
                <p className="pl-2 text-foreground/80">[</p>
                <p className="pl-4 text-foreground/70">"Generative AI",</p>
                <p className="pl-4 text-foreground/70">"LLM Pipelines",</p>
                <p className="pl-4 text-foreground/70">"Full-Stack",</p>
                <p className="pl-2 text-foreground/80">]</p>
              </div>
            </div>

            {/* Mini mode card */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
              <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 mb-3">
                Specialization
              </p>
              <div className="space-y-2">
                {["NLP & Text AI", "Agentic Systems", "REST Microservices"].map((item, i) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="font-display text-[10px] font-bold text-primary/60">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-heading text-xs font-semibold text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
