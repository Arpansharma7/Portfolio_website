"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  
  // Mouse position values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth following
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)
  
  // Parallax for the grid
  const gridX = useSpring(useMotionValue(0), { damping: 40, stiffness: 50 })
  const gridY = useSpring(useMotionValue(0), { damping: 40, stiffness: 50 })

  useEffect(() => {
    setMounted(true)
    
    // Set initial position to center of screen
    mouseX.set(window.innerWidth / 2 - 250)
    mouseY.set(window.innerHeight / 2 - 250)

    const handleMouseMove = (e: MouseEvent) => {
      // Update glow position (offset by half its size to center it on cursor)
      mouseX.set(e.clientX - 250)
      mouseY.set(e.clientY - 250)
      
      // Update grid parallax (moves slightly opposite to mouse)
      gridX.set((e.clientX / window.innerWidth - 0.5) * -40)
      gridY.set((e.clientY / window.innerHeight - 0.5) * -40)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, gridX, gridY])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      
      {/* Reactive glowing orb following cursor */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      
      {/* Secondary slow wandering orb for depth */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
      />

      {/* Reactive grid pattern */}
      <motion.div 
        className="absolute inset-[-100px] opacity-[0.03] dark:opacity-[0.05]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23fbbf24' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          x: gridX,
          y: gridY,
        }}
      />
      
      {/* Vignette effect to darken edges */}
      <div className="absolute inset-0 bg-background/50 [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
    </div>
  )
}

