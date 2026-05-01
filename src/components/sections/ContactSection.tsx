"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 select-none bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-5 gap-10 items-center"
        >
          {/* Left: Big CTA text */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="font-display text-sm font-bold tracking-[0.2em] uppercase text-foreground/50">
                05 — Get in Touch
              </span>
            </div>
            <h2
              className="font-heading font-bold text-foreground tracking-tight leading-[0.9] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Let&apos;s Connect
            </h2>
            <p className="text-foreground/65 font-sans text-base md:text-lg leading-relaxed max-w-md">
              Currently open to new opportunities. Have a question or want to collaborate? I&apos;ll get back to you.
            </p>
          </div>

          {/* Right: Platform cards */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="bg-[#c4c4c4]/25 backdrop-blur-md border border-border/80 p-5 rounded-3xl hover:border-primary/60 transition-all duration-300 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-sm text-foreground uppercase tracking-tight">LinkedIn</p>
                <p className="font-display text-[10px] font-semibold tracking-[0.15em] uppercase text-foreground/50 mt-0.5">Professional Network</p>
              </div>
              <Button asChild size="sm" className="rounded-full h-10 w-10 p-0 bg-primary text-white hover:scale-[1.05] transition-all shadow-md">
                <Link href="https://www.linkedin.com/in/arpan-sharma-conn/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-[#c4c4c4]/25 backdrop-blur-md border border-border/80 p-5 rounded-3xl hover:border-primary/60 transition-all duration-300 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-sm text-foreground uppercase tracking-tight">GitHub</p>
                <p className="font-display text-[10px] font-semibold tracking-[0.15em] uppercase text-foreground/50 mt-0.5">Source Code & Projects</p>
              </div>
              <Button asChild variant="outline" size="sm" className="rounded-full h-10 w-10 p-0 bg-accent/40 hover:bg-accent/70 border-border/80 text-foreground hover:scale-[1.05] transition-all">
                <Link href="https://github.com/Arpansharma7" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
