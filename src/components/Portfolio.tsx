"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "BookEase - Smart Scheduling",
      industry: "SaaS / Booking",
      tech: ["Next.js 15", "PostgreSQL", "Framer Motion"],
      description: "A premium appointment booking platform featuring interactive calendars, admin dashboards, and AI insights.",
      color: "from-blue-600 to-indigo-900",
      link: "https://bookease-iota.vercel.app"
    },
    {
      title: "ServeFlow - Restaurant POS",
      industry: "Hospitality SaaS",
      tech: ["Next.js 15", "SQLite", "Tailwind CSS"],
      description: "Live restaurant management system with an interactive digital menu, real-time cart, and a Kanban kitchen queue.",
      color: "from-orange-500 to-red-800",
      link: "https://serverflow.vercel.app/"
    },
    {
      title: "E-commerce Store",
      industry: "Retail",
      tech: ["Shopify", "React", "Stripe"],
      description: "High-performance online store with advanced filtering, cart management, and fast checkout.",
      color: "from-purple-500 to-pink-500",
      link: "https://aura-ecommerce-ashy.vercel.app/"
    },
    {
      title: "Resume Booster AI",
      industry: "AI SaaS",
      tech: ["Next.js", "OpenAI", "PostgreSQL"],
      description: "An AI-powered application that generates and optimizes resumes to bypass ATS filters.",
      color: "from-indigo-500 to-blue-600",
      link: "#"
    },
    {
      title: "Interior Designer Portfolio",
      industry: "Design",
      tech: ["Framer Motion", "React", "GSAP"],
      description: "A visually stunning portfolio showcasing high-end interior design projects with smooth animations.",
      color: "from-amber-400 to-orange-500",
      link: "https://jd-designing-studios.vercel.app/"
    },
    {
      title: "Gym & Fitness Portal",
      industry: "Fitness",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Dynamic fitness center site featuring membership plans, class schedules, and trainer profiles.",
      color: "from-emerald-400 to-teal-500",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured SaaS Products</h2>
            <p className="text-gray-600 text-lg">
              Explore our proprietary production-ready platforms. We don't just build websites; we engineer revenue-generating software for our clients.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-semibold hover:text-blue-800 transition-colors">
            View All Projects <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full cursor-pointer hover:-translate-y-2 block"
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                <div className="text-white/30 font-bold text-4xl transform -rotate-12 group-hover:scale-110 transition-transform duration-500">
                  {project.title.split('-')[0]}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm bg-black/30">
                  <div className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    Launch Live Demo <ExternalLink size={18} />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {project.industry}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-md font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
