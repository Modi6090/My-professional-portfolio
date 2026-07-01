"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Pallavi Sharma",
      business: "SmileCare Dental Clinic",
      review: "Modi Web studios transformed our clinic's online presence. We've seen a 40% increase in online appointments since the new website launched. Highly professional and fast.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      business: "FitLife Gym",
      review: "The website they built for our gym is incredible. The design is modern, fast, and works flawlessly on mobile. We get so many compliments from our members.",
      rating: 5,
    },
    {
      name: "Anjali Desai",
      business: "Desai Interior Designs",
      review: "As a designer, I am very particular about aesthetics. They nailed the luxury feel I wanted. It's a premium experience from start to finish. Highly recommended.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. See what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12 rotate-180 group-hover:text-blue-50 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">
                "{t.review}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 overflow-hidden shrink-0">
                  {/* Photo Placeholder */}
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
