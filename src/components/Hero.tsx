"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Projects", value: "20+" },
    { label: "Responsive", value: "100%" },
    { label: "Delivery", value: "Fast" },
    { label: "Optimized", value: "SEO" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-animated-gradient min-h-screen flex items-center">
      {/* Floating Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Premium Web Development Agency
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              We Build Websites That Turn Visitors Into <span className="gradient-text">Customers</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              We create fast, modern, mobile-friendly websites for businesses that want to grow online. Partner with us for high-converting digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                View Portfolio <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
              >
                Get Free Consultation
              </motion.a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/60">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block perspective-1000"
          >
            <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 aspect-[4/3] flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                {/* Mockup Placeholder */}
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Animated Website Mockup</h3>
                  <p className="text-gray-500 text-sm mt-2">Premium Layout Interface</p>
                </div>
                
                {/* Abstract UI Elements */}
                <div className="absolute top-4 left-4 right-4 h-8 bg-white/80 backdrop-blur rounded flex items-center px-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 w-32 h-24 bg-white shadow-lg rounded-lg border border-gray-100"></div>
                <div className="absolute top-1/2 right-4 w-24 h-32 bg-white shadow-lg rounded-lg border border-gray-100 transform -translate-y-1/2"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
