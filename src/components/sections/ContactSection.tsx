"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Clock, Zap } from "lucide-react"
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
          className="grid lg:grid-cols-[1fr_auto] gap-12 items-start"
        >
          {/* Left: Big CTA + platform cards */}
          <div>
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
            <p className="text-foreground/65 font-sans text-base md:text-lg leading-relaxed max-w-md mb-10">
              Currently open to new opportunities. Have a question or want to collaborate? I&apos;ll get back to you.
            </p>

            {/* Social platform cards */}
            <div className="flex flex-col gap-4 max-w-sm">
              {[
                { icon: FaLinkedin, label: "LinkedIn", sub: "Professional Network", href: "https://www.linkedin.com/in/arpan-sharma-conn/" },
                { icon: FaGithub,   label: "GitHub",   sub: "Source Code & Projects", href: "https://github.com/Arpansharma7" },
                { icon: FaXTwitter, label: "X / Twitter", sub: "Tech Thoughts", href: "https://x.com/ArpanSharm33857" },
              ].map(({ icon: Icon, label, sub, href }) => (
                <div key={label} className="bg-white/40 backdrop-blur-md border border-border/80 p-4 rounded-2xl hover:border-primary/60 transition-all duration-300 flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground uppercase tracking-tight">{label}</p>
                    <p className="font-display text-[10px] font-semibold tracking-[0.15em] uppercase text-foreground/50 mt-0.5">{sub}</p>
                  </div>
                  <Button asChild size="sm" className="rounded-full h-10 w-10 p-0 bg-primary text-white hover:scale-[1.05] transition-all shadow-md">
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: decorative design cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 w-[220px] shrink-0"
          >

            {/* Response time card */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">Response Time</p>
              </div>
              <p className="font-heading font-bold text-2xl text-foreground">&lt; 24h</p>
              <p className="font-display text-[10px] tracking-wider text-foreground/40 mt-1 uppercase">Usually same day</p>
            </div>

            {/* Timezone card */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">Timezone</p>
              </div>
              <p className="font-heading font-bold text-sm text-foreground">IST (UTC+5:30)</p>
              <p className="font-display text-[10px] tracking-wider text-foreground/40 mt-1 uppercase">India Standard Time</p>
            </div>

            {/* Mini email terminal card */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-4 font-mono hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-400/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                <span className="w-2 h-2 rounded-full bg-green-400/70" />
              </div>
              <div className="space-y-1 text-[10px]">
                <p className="text-foreground/30">$ contact --send</p>
                <p><span className="text-primary/70">to:</span> <span className="text-foreground/70">arpan@dev</span></p>
                <p><span className="text-primary/70">re:</span> <span className="text-foreground/70">"Let's build"</span></p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-green-400/70">✓</span>
                  <span className="text-foreground/50">Message queued</span>
                </div>
              </div>
            </div>

            {/* Availability status */}
            <div className="bg-white/40 backdrop-blur-md border border-border/80 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <p className="font-display text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">Availability</p>
              </div>
              <p className="font-heading font-bold text-sm text-foreground">Open to Work</p>
              <p className="font-display text-[10px] tracking-wider text-foreground/40 mt-1 uppercase">Internships · Freelance</p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
