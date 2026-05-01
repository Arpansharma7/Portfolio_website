"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading className="mb-12">About Me</SectionHeading>
          
          <div className="max-w-4xl space-y-6 text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              I am a Computer Science Engineering student specializing in AI/ML at Graphic Era Hill University. My passion lies at the intersection of artificial intelligence and scalable software engineering.
            </p>
            <p>
              I focus on building end-to-end intelligent systems, from developing NLP pipelines and training models to integrating generative AI into robust full-stack architectures.
            </p>
            <p>
              Recently, I was recognized as a Top 10 Finalist in the AWS Jam 2025, where I demonstrated my skills in cloud architecture, systems automation, and generative AI deployment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
