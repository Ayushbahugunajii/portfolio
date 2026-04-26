"use client"

import { Zap, Wrench, Brain } from "lucide-react"

const skills = [
  { name: "JavaScript", level: 90, color: "from-yellow-500 to-amber-500" },
  { name: "TypeScript", level: 85, color: "from-blue-500 to-cyan-500" },
  { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
  { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
  { name: "Python", level: 75, color: "from-blue-500 to-yellow-500" },
  { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
  { name: "PostgreSQL", level: 75, color: "from-blue-600 to-indigo-600" },
]

const tools = [
  { name: "Git", color: "from-orange-500 to-red-500" },
  { name: "Docker", color: "from-blue-500 to-cyan-500" },
  { name: "AWS", color: "from-amber-500 to-orange-500" },
  { name: "Figma", color: "from-pink-500 to-purple-500" },
  { name: "VS Code", color: "from-blue-500 to-blue-600" },
  { name: "Vercel", color: "from-gray-600 to-gray-800" },
  { name: "MongoDB", color: "from-green-500 to-emerald-600" },
  { name: "Redis", color: "from-red-500 to-red-600" },
]

const softSkills = [
  { name: "Problem Solving", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  { name: "Team Collaboration", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { name: "Communication", color: "bg-green-500/20 text-green-300 border-green-500/30" },
  { name: "Adaptability", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  { name: "Time Management", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
  { name: "Creativity", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/50 to-pink-500" />
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-pink-500" />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Skills</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-pink-500/50 to-pink-500" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Technologies</h3>
            </div>
            
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2 group">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tools & Platforms</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="group bg-card border border-border rounded-xl p-4 text-center transition-all duration-300 hover:border-primary/50 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <span className="text-white font-bold text-sm">{tool.name.charAt(0)}</span>
                    </div>
                    <span className="text-foreground font-medium text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-card via-card to-pink-500/5 border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-foreground font-bold">Soft Skills</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className={`text-sm px-4 py-2 rounded-full border ${skill.color} transition-all duration-300 hover:scale-105`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
