"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export function ReactiveCharacter() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    setMounted(true)
    
    // Set initial position to center so eyes look forward initially
    mouseX.set(window.innerWidth / 2)
    mouseY.set(window.innerHeight / 2)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Transform global mouse coordinates to localized pupil movement (-4px to 4px)
  // This is a simple approximation assuming the window size.
  const pupilX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-6, 6])
  const pupilY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-6, 6])

  if (!mounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 drop-shadow-2xl hidden md:block">
      {/* Tooltip that appears on hover */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -top-12 right-0 bg-background border border-border text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 transition-opacity pointer-events-none"
      >
        I'm an AI companion!
      </motion.div>

      <motion.div
        className="w-20 h-20 bg-accent/90 backdrop-blur-md rounded-[1.5rem] border-2 border-primary/40 flex flex-col items-center justify-center gap-1 overflow-visible relative shadow-[0_0_30px_rgba(251,191,36,0.15)] cursor-pointer group"
        whileHover={{ scale: 1.05, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Antenna */}
        <div className="absolute -top-3 w-1 h-3 bg-primary/80 rounded-full">
          <div className="absolute -top-2 -left-1 w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
        </div>
        
        {/* Eyes container */}
        <div className="flex gap-3 mt-2">
          {/* Left Eye */}
          <div className="w-5 h-5 bg-background rounded-full flex items-center justify-center overflow-hidden border border-border shadow-inner">
            <motion.div 
              className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform"
              style={{ x: pupilX, y: pupilY }}
            />
          </div>
          
          {/* Right Eye */}
          <div className="w-5 h-5 bg-background rounded-full flex items-center justify-center overflow-hidden border border-border shadow-inner">
            <motion.div 
              className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-125 transition-transform"
              style={{ x: pupilX, y: pupilY }}
            />
          </div>
        </div>
        
        {/* Mouth */}
        <div className="w-6 h-1.5 bg-background rounded-full mt-2 border border-border overflow-hidden relative">
            <motion.div 
                className="absolute inset-0 bg-primary/20"
                animate={{
                    x: ["-100%", "100%"]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
      </motion.div>
    </div>
  )
}
