"use client"

import { User, MapPin, Briefcase, Sparkles } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">About Me</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-medium">Hello There!</span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hi, I&apos;m <span className="text-primary font-bold">Ayush</span>. 
              I&apos;m a passionate developer who loves creating beautiful and functional 
              digital experiences. With a keen eye for design and a love for clean code, 
              I bring ideas to life through modern web technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in building interactive applications that combine creativity 
              with performance. When I&apos;m not coding, you&apos;ll find me exploring new 
              technologies and pushing the boundaries of what&apos;s possible on the web.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "Next.js", "TypeScript", "Three.js"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-foreground text-sm font-medium border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-8 space-y-6 shadow-xl shadow-primary/5">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="text-foreground font-semibold text-lg">Ayush</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-lg shadow-accent/30">
                  <MapPin className="w-7 h-7 text-background" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-semibold text-lg">India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="text-foreground font-semibold text-lg">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
