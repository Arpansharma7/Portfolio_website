import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-heading text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-foreground",
        className
      )}
    >
      {children}
    </h2>
  )
}
