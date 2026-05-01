"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  
  // Mouse position values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth following
  const springConfig = { damping: 40, stiffness: 120, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)
    
    // Set initial position to center of screen
    mouseX.set(window.innerWidth / 2 - 200)
    mouseY.set(window.innerHeight / 2 - 200)

    const handleMouseMove = (e: MouseEvent) => {
      // Update glow position (offset by half its size to center it on cursor)
      mouseX.set(e.clientX - 200)
      mouseY.set(e.clientY - 200)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background select-none">
      
      {/* Primary glowing cursor tracking orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary/8 dark:bg-primary/5 blur-[70px]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      
      {/* Ambient slow wanders - CSS hardware accelerated */}
      <div className="absolute top-[20%] right-[15%] w-[350px] h-[350px] bg-accent/15 dark:bg-primary/5 rounded-full blur-[70px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] bg-primary/8 dark:bg-primary/5 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Very clean static decorative node particles */}
      <div className="absolute top-[25%] left-[20%] w-1.5 h-1.5 bg-primary/30 rounded-full blur-[1px]" />
      <div className="absolute top-[65%] right-[25%] w-2 h-2 bg-primary/20 rounded-full blur-[1px]" />
      <div className="absolute bottom-[20%] left-[35%] w-1 h-1 bg-primary/40 rounded-full blur-[1px]" />

      {/* Static premium grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23a78bfa' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
