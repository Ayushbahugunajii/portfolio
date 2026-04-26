"use client"

import dynamic from "next/dynamic"
import Navbar from "@/components/portfolio/navbar"
import AboutSection from "@/components/portfolio/about-section"
import ProjectsSection from "@/components/portfolio/projects-section"
import SkillsSection from "@/components/portfolio/skills-section"
import CoffeeSection from "@/components/portfolio/coffee-section"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Scene3D = dynamic(() => import("@/components/portfolio/scene-3d"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-foreground text-lg">Loading 3D Scene...</span>
      </div>
    </div>
  ),
})

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="relative">
        <Scene3D />
        
        {/* Title and CTA overlay on 3D scene */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center space-y-6 pointer-events-auto">
            <p className="text-lg md:text-xl text-muted-foreground tracking-widest uppercase">
              Creative Developer
            </p>
            <h1 className="sr-only">Ayush - Portfolio</h1>
            <p className="text-muted-foreground max-w-md mx-auto px-6 text-sm md:text-base">
              Building beautiful digital experiences with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="btn-gradient btn-glow gap-2 text-white font-semibold px-8 py-6 border-0 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                asChild
              >
                <a href="#about" className="flex items-center gap-2">
                  Explore My Work
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                size="lg" 
                className="gap-2 px-8 py-6 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:via-teal-400 hover:to-emerald-400 text-white font-semibold border-0 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:your.email@gmail.com">
                  Connect With Me
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </section>
      
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CoffeeSection />
      
      <footer className="py-10 border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              Email
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            Made with care by <span className="text-primary font-medium">Ayush</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
