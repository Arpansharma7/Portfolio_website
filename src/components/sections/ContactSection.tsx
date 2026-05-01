"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"

import { FaLinkedin, FaGithub } from "react-icons/fa"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <SectionHeading className="mb-6">Let&apos;s Connect</SectionHeading>
          <p className="text-xl text-muted-foreground mb-12">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="icon" className="rounded-full w-14 h-14 bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Link href="https://www.linkedin.com/in/arpan-sharma-conn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="h-6 w-6" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full w-14 h-14 bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Link href="https://github.com/Arpansharma7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
