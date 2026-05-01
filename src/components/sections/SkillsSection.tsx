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
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#c4c4c4]/25 backdrop-blur-md border border-border/80 p-6 rounded-3xl hover:border-primary/60 transition-all duration-300"
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
      </div>
    </section>
  )
}
