"use client"

import { motion } from "framer-motion"
import { SiPython, SiTensorflow } from "react-icons/si"
import { MapPin } from "lucide-react"

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

        {/* Main grid: pillars + side design cards */}
        <div className="grid lg:grid-cols-[1fr_220px] gap-8">

          {/* Pillar cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/40 backdrop-blur-md border border-border/80 p-6 rounded-3xl hover:border-primary/60 transition-all duration-300 flex flex-col h-full"
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

          {/* Side decorative cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* Education timeline card */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
              <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 mb-4">
                Education
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1 shrink-0" />
                    <div className="w-[1px] flex-1 bg-border/60 mt-1" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-foreground leading-tight">B.Tech CSE</p>
                    <p className="font-display text-[10px] text-foreground/50 tracking-wide mt-0.5">2022 – 2026</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-foreground/20 mt-1 shrink-0" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-foreground/50 leading-tight">Graphic Era Hill Univ.</p>
                    <p className="font-display text-[10px] text-foreground/35 tracking-wide mt-0.5">Dehradun, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location badge */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">Based In</p>
              </div>
              <p className="font-heading font-bold text-sm text-foreground">Dehradun</p>
              <p className="font-display text-[10px] tracking-wider text-foreground/50 mt-1 uppercase">India · IST (UTC+5:30)</p>
            </div>

            {/* Currently learning card */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                />
                <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">Learning</p>
              </div>
              <div className="space-y-2">
                {[
                  { icon: SiTensorflow, label: "LLM Fine-tuning" },
                  { icon: SiPython,     label: "Agentic AI" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-3 h-3 text-primary/70" />
                    <span className="font-display text-[11px] font-semibold text-foreground/70">{label}</span>
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
