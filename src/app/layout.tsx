import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Bold, geometric, techy — replaces Outfit for headings
const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Ultra-wide avant-garde display — used for large display text and section labels
const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arpan Sharma | AI & Full-Stack Developer",
  description: "Portfolio of Arpan Sharma, specializing in AI/ML and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-transparent text-foreground selection:bg-primary selection:text-primary-foreground relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Rounded viewport frame — like the Pixel Rise reference */}
          <div className="min-h-screen m-3 rounded-[20px] overflow-hidden bg-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.10),0_8px_40px_rgba(0,0,0,0.12)] relative">
            <div className="relative z-10 flex flex-col min-h-screen">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
