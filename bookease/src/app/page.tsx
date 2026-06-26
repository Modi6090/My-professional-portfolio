"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Zap, CheckCircle2 } from "lucide-react";
import BookingCalendar from "@/components/BookingCalendar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      
      {/* Navigation Placeholder */}
      <nav className="w-full glass fixed top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">BookEase</div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          </div>
          <button className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-foreground/90 transition-transform active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 w-full pt-32 pb-20 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          BookEase 2.0 is now live
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Simple Scheduling. <br className="hidden md:block" />
          <span className="text-muted-foreground">Better Business.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground max-w-2xl mb-10"
        >
          The elegant booking platform designed for modern professionals. Manage your calendar, reduce no-shows, and grow your business with zero friction.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group active:scale-95">
            Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 active:scale-95">
            View Live Demo
          </button>
        </motion.div>

        {/* Abstract App Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-4xl bg-card rounded-2xl border shadow-2xl overflow-hidden"
        >
          {/* Mac window controls */}
          <div className="h-12 border-b bg-muted/30 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-8 text-left bg-gradient-to-b from-card to-secondary/20 min-h-[400px]">
            <div className="space-y-6">
              <div className="h-4 w-24 bg-muted rounded"></div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 w-full bg-background rounded-xl border flex items-center px-4 gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Calendar className="w-5 h-5"/></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-3 w-1/2 bg-muted rounded"></div>
                      <div className="h-2 w-1/3 bg-muted/50 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 border rounded-xl bg-background p-6 shadow-sm flex flex-col">
               <div className="flex justify-between items-center mb-6">
                 <div className="h-5 w-32 bg-muted rounded"></div>
                 <div className="h-8 w-24 bg-primary/10 rounded-full"></div>
               </div>
               <div className="flex-1">
                 <BookingCalendar />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Features Preview */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 w-full max-w-5xl text-left" id="features">
           <div className="space-y-3">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4"><Zap className="w-6 h-6"/></div>
             <h3 className="text-xl font-bold">Lightning Fast</h3>
             <p className="text-muted-foreground">Built on Next.js 15 for zero-lag scheduling and instant updates across all devices.</p>
           </div>
           <div className="space-y-3">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4"><Users className="w-6 h-6"/></div>
             <h3 className="text-xl font-bold">Team Management</h3>
             <p className="text-muted-foreground">Easily manage multiple staff members, unique schedules, and localized time zones.</p>
           </div>
           <div className="space-y-3">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4"><CheckCircle2 className="w-6 h-6"/></div>
             <h3 className="text-xl font-bold">Automated Reminders</h3>
             <p className="text-muted-foreground">Reduce no-shows with intelligent email and SMS reminders for all your clients.</p>
           </div>
        </div>
      </main>
    </div>
  );
}
