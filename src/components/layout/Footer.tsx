export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground/40">
          © {new Date().getFullYear()} Arpan Sharma. All rights reserved.
        </p>
        <p className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground/40">
          Built with Next.js, Tailwind CSS &amp; Framer Motion.
        </p>
      </div>
    </footer>
  )
}
