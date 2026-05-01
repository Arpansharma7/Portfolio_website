"use client"

import * as React from "react"
import Link from "next/link"

export function Navbar() {
  const navLinks = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
  ]

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("changeSection", { detail: id }))
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-4xl flex justify-between items-center bg-[#b8b8b8]/35 backdrop-blur-xl border border-white/25 shadow-xl px-6 py-1.5 rounded-full select-none">
      <Link 
        href="#home" 
        onClick={(e) => handleScrollTo(e, "home")}
        className="font-display font-extrabold text-sm md:text-base text-foreground tracking-[0.05em] uppercase flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
        Arpan Sharma
      </Link>
      
      <nav className="hidden md:flex items-center gap-6 font-bold bg-[#c7c7c7]/30 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={`#${link.target}`}
            onClick={(e) => handleScrollTo(e, link.target)}
            className="text-foreground/75 text-[11px] hover:text-primary font-display font-semibold uppercase tracking-[0.2em] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Link 
        href="#contact"
        onClick={(e) => handleScrollTo(e, "contact")}
        className="px-5 py-2.5 bg-foreground text-background text-[11px] font-display font-bold tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md flex items-center justify-center whitespace-nowrap"
      >
        Contact Me
      </Link>
    </header>
  )
}
