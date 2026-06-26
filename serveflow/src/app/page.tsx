"use client";

import { motion } from "framer-motion";
import { Utensils, Clock, MapPin, ArrowRight } from "lucide-react";
import InteractiveMenu from "@/components/InteractiveMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif font-bold text-2xl tracking-tight text-primary">ServeFlow</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition-colors">Our Menu</a>
            <a href="#reservations" className="hover:text-primary transition-colors">Reservations</a>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          </div>
          <button className="bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-bold hover:bg-foreground/90 transition-transform active:scale-95">
            Order Online
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Utensils className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-4xl">
            Experience Culinary <br />
            <span className="text-primary italic">Excellence.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a world of flavors carefully curated by our master chefs. Order online for seamless pickup or reserve your table tonight.
          </p>
        </motion.div>

        {/* Quick Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span>Open Today: 11AM - 11PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>123 Culinary Ave, New York</span>
          </div>
        </motion.div>

        {/* Interactive Menu Section */}
        <div id="menu" className="w-full mt-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <InteractiveMenu />
          </motion.div>
        </div>

      </main>
    </div>
  );
}
