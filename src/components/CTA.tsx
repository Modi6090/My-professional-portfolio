"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary via-blue-600 to-accent rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Build Your Business Website?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Get a stunning, high-converting website that helps you dominate your industry and scale your business.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/1234567890" // Placeholder
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 transition-colors"
              >
                <MessageCircle size={20} /> WhatsApp Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <Calendar size={20} /> Book Free Consultation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
