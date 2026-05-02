"use client";

import { ExternalLink, Github, Folder, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://mdfachion.ayushbahuguna.in/",
    live: "https://mdfachion.ayushbahuguna.in/",
    gradient: "from-purple-500 to-indigo-500",
    href: "https://mdfachion.ayushbahuguna.in/",
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent conversational AI application featuring natural language processing, context awareness, and seamless user experience.",
    tags: ["React", "AI SDK", "Tailwind CSS", "Node.js"],
    github: "#",
    live: "#",
    gradient: "from-cyan-500 to-teal-500",
    href: "",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "A comprehensive analytics dashboard for tracking investments, visualizing market trends, and managing financial portfolios.",
    tags: ["Next.js", "Chart.js", "REST API", "MongoDB"],
    github: "#",
    live: "#",
    gradient: "from-pink-500 to-rose-500",
    href: "#",
  },
  {
    title: "Social Media App",
    description:
      "A modern social platform with real-time messaging, content sharing, and community features built for scale.",
    tags: ["React Native", "Firebase", "Redux", "WebSocket"],
    github: "#",
    live: "#",
    gradient: "from-amber-500 to-orange-500",
    href: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-accent" />
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-accent" />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Projects
            </h2>
          </div>
          
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/50 to-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1" onClick={() => window.open(project.href, "_blank")}
            >
              <div className="flex items-start justify-between mb-4" >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                >
                  <Folder className="w-7 h-7 text-white" />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-xl hover:bg-accent/10 hover:text-accent"
                    onClick={() => window.open(project.live, "_blank")}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}

              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 ">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
