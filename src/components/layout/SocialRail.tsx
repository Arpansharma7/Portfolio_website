"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const links = [
  { icon: FaGithub,   href: "https://github.com/Arpansharma7",                       label: "GitHub"   },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/arpan-sharma-conn/",         label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/ArpanSharm33857",                              label: "X"        },
]

export function SocialRail() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      {/* Vertical line top */}
      <div className="w-[1px] h-12 bg-foreground/20" />

      {links.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-8 h-8 flex items-center justify-center text-foreground/40 hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <Icon className="w-4 h-4" />
        </Link>
      ))}

      {/* Vertical line bottom */}
      <div className="w-[1px] h-12 bg-foreground/20" />
    </div>
  )
}
