"use client"

import { Coffee, Heart, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CoffeeSection() {
  const email = "your.email@gmail.com"
  
  return (
    <section id="support" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
          <h2 className="text-3xl font-bold text-foreground tracking-tight">Support Me</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
        </div>
        
        <div className="bg-gradient-to-br from-card via-card to-secondary/30 border border-border rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
            <Coffee className="w-12 h-12 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Buy Me a Coffee
          </h3>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            If you enjoy my work and want to support my projects, consider buying me a coffee. 
            Your support helps me create more awesome content and open-source projects!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button 
              size="lg" 
              className="btn-gradient btn-glow gap-2 px-8 py-6 text-white font-semibold border-0 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              <Coffee className="w-5 h-5 hover-wiggle" />
              Buy me a coffee
            </Button>
            
            <Button 
              size="lg" 
              className="gap-2 px-8 py-6 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 hover:from-pink-400 hover:via-rose-400 hover:to-red-400 text-white font-semibold border-0 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Sponsor on GitHub
            </Button>
          </div>
          
          {/* Gmail Connection Section */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="bg-secondary/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Want to Connect?</h4>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Have a project in mind or just want to say hi? Reach out to me via email!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="btn-glow gap-2 px-8 py-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-400 hover:via-orange-400 hover:to-yellow-400 text-white font-semibold border-0 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href={`mailto:${email}`}>
                    <Mail className="w-5 h-5" />
                    Send me an Email
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  className="gap-2 px-8 py-6 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:via-green-400 hover:to-teal-400 text-white font-semibold border-0 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href={`mailto:${email}?subject=Let's Connect!`}>
                    <Send className="w-5 h-5" />
                    Quick Message
                  </a>
                </Button>
              </div>
              
              <p className="mt-4 text-sm text-muted-foreground">
                <a href={`mailto:${email}`} className="text-primary hover:underline font-medium">
                  {email}
                </a>
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Thank you for your support! Every contribution, no matter how small, makes a big difference.
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center gap-4 md:gap-6 flex-wrap">
          {[
            { amount: "$3", label: "Coffee", gradient: "from-amber-500 via-yellow-500 to-orange-500", shadow: "shadow-amber-500/30", hoverShadow: "hover:shadow-amber-500/50" },
            { amount: "$5", label: "Latte", gradient: "from-violet-500 via-purple-500 to-fuchsia-500", shadow: "shadow-violet-500/30", hoverShadow: "hover:shadow-violet-500/50" },
            { amount: "$10", label: "Lunch", gradient: "from-pink-500 via-rose-500 to-red-500", shadow: "shadow-pink-500/30", hoverShadow: "hover:shadow-pink-500/50" },
          ].map((tier, index) => (
            <button
              key={index}
              className={`card-hover group bg-card border-2 border-transparent rounded-2xl p-6 min-w-[130px] relative overflow-hidden hover:border-white/20 ${tier.shadow} ${tier.hoverShadow} shadow-lg`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className={`text-4xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent relative z-10`}>
                {tier.amount}
              </div>
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors relative z-10">{tier.label}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
