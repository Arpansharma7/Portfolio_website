"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { SiPython, SiPytorch, SiReact, SiSpringboot, SiDocker, SiMysql } from "react-icons/si"

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
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden select-none w-full px-6 md:px-12 pt-28 pb-24">

      {/* Main content — 2 col: left text, right design cards */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">

        {/* LEFT: Headline block */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[2px] bg-primary" />
            <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-foreground/50">
              [1/5] — AI & Full-Stack Developer
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-foreground leading-[0.9] tracking-tight mb-8"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}
          >
            Building<br />
            <span className="text-primary">Intelligent</span><br />
            AI Solutions
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-foreground/60 font-sans text-base md:text-lg max-w-lg leading-relaxed mb-10"
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

        {/* RIGHT: 3 decorative design cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden md:flex flex-col gap-4 w-[200px]"
        >

          {/* Card 1: Availability status */}
          <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              {/* Animated pulse ring */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/50">Status</span>
            </div>
            <p className="font-heading font-bold text-sm text-foreground leading-tight">
              Open to<br />Opportunities
            </p>
          </div>

          {/* Card 2: Mini terminal */}
          <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-4 font-mono overflow-hidden hover:border-primary/50 transition-all duration-300">
            <div className="flex gap-1.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="space-y-1 text-[11px] leading-relaxed">
              <p className="text-foreground/30">// initialize</p>
              <p>
                <span className="text-primary/80">const</span>
                <span className="text-foreground/70"> dev </span>
                <span className="text-foreground/40">= </span>
                <span className="text-foreground/70">new</span>
              </p>
              <p className="text-foreground/90 font-bold pl-2">Arpan<span className="text-primary">()</span></p>
              <p>
                <span className="text-foreground/70">dev</span>
                <span className="text-foreground/40">.</span>
                <span className="text-primary/80">build</span>
                <span className="text-foreground/40">(ai)</span>
              </p>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-[6px] h-[13px] bg-primary/70 align-middle ml-0.5"
              />
            </div>
          </div>

          {/* Card 3: Tech stack icons */}
          <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
            <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40 mb-3">Stack</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { Icon: SiPython,     label: "Python"     },
                { Icon: SiPytorch,    label: "PyTorch"    },
                { Icon: SiReact,      label: "React"      },
                { Icon: SiSpringboot, label: "Spring"     },
                { Icon: SiDocker,     label: "Docker"     },
                { Icon: SiMysql,      label: "MySQL"      },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 group">
                  <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-background/50 border border-border/60 group-hover:border-primary/50 group-hover:text-primary transition-all">
                    <Icon className="w-4 h-4 text-foreground/60 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-display text-[8px] text-foreground/40 uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-display text-[10px] font-semibold tracking-[0.25em] uppercase text-foreground/40">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-foreground/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
