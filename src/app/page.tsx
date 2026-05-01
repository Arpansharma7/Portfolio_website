"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SocialRail } from "@/components/layout/SocialRail"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <main className="relative w-full bg-background select-none">
        <div id="home"><HeroSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="skills"><SkillsSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="contact">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
