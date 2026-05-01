"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"

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
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading className="mb-12">Technical Arsenal</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-accent/50 border border-border p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold font-heading mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground/80 hover:border-primary hover:text-primary transition-colors cursor-default"
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
