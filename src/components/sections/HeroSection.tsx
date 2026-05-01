"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("changeSection", { detail: id }))
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden select-none w-full px-6 md:px-12 pt-28 pb-16">



      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* Eyebrow label — Syne small caps */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-[2px] bg-primary" />
          <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-foreground/50">
            01 — AI & Full-Stack Developer
          </span>
        </motion.div>

        {/* Main headline — Space Grotesk massive */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-foreground leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          Building<br />
          <span className="text-primary">Intelligent</span><br />
          AI Solutions
        </motion.h1>

        {/* Sub-headline — Inter */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-foreground/65 font-sans text-lg md:text-xl max-w-xl leading-relaxed mb-12"
        >
          CSE student at Graphic Era Hill University. I architect scalable ML systems, NLP pipelines, and full-stack cloud applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Button asChild size="lg"
            className="font-display font-bold tracking-widest uppercase text-xs h-12 px-8 rounded-full bg-primary text-white hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md">
            <Link href="#projects" onClick={(e) => handleScrollTo(e, "projects")}>
              View Work →
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg"
            className="font-display font-bold tracking-widest uppercase text-xs h-12 px-8 rounded-full bg-transparent border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all">
            <Link href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>
              Get in Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
