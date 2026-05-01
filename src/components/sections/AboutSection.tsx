"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  const pillars = [
    {
      num: "01",
      title: "Core Education",
      description: "Computer Science Engineering student specializing in AI/ML at Graphic Era Hill University.",
      highlight: "Graphic Era Hill University"
    },
    {
      num: "02",
      title: "Intelligent AI Systems",
      description: "Developing robust NLP pipelines, training predictive models, and integrating advanced generative AI.",
      highlight: "Advanced Generative AI"
    },
    {
      num: "03",
      title: "Full-Stack & Cloud",
      description: "Constructing scalable, microservices-driven backend systems and deploying seamless cloud workflows.",
      highlight: "Full-Stack Architecture"
    }
  ]

  return (
    <section id="about" className="py-24 md:py-32 select-none bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-primary" />
          <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-foreground/50">
            02 — Background
          </span>
        </div>
        <h2
          className="font-heading font-bold text-foreground tracking-tight leading-[0.9] mb-14"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          Who I Am
        </h2>

        {/* 3-col card grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#c4c4c4]/25 backdrop-blur-md border border-border/80 p-6 rounded-3xl hover:border-primary/60 transition-all duration-300 flex flex-col h-full"
            >
              <span className="font-display font-extrabold text-4xl text-primary/20 mb-4 leading-none">
                {pillar.num}
              </span>
              <h3 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight mb-3">
                {pillar.title}
              </h3>
              <p className="text-foreground/70 font-sans text-sm leading-relaxed flex-1">
                {pillar.description}
              </p>
              <div className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-primary border-t border-border/60 pt-3 mt-4">
                {pillar.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
