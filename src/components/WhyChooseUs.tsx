"use client";

import { motion } from "framer-motion";
import { Smartphone, Search, Zap, ShieldCheck, Layout, BadgeDollarSign, HeadphonesIcon, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { name: "Mobile Responsive", icon: <Smartphone className="w-5 h-5" /> },
    { name: "SEO Optimized", icon: <Search className="w-5 h-5" /> },
    { name: "Lightning Fast", icon: <Zap className="w-5 h-5" /> },
    { name: "Highly Secure", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Clean UI/UX", icon: <Layout className="w-5 h-5" /> },
    { name: "Affordable", icon: <BadgeDollarSign className="w-5 h-5" /> },
    { name: "Ongoing Support", icon: <HeadphonesIcon className="w-5 h-5" /> },
    { name: "Fully Scalable", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">
            We don't just build websites; we build business assets. Here is what you get when you partner with us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 bg-white group-hover:bg-blue-50 rounded-full flex items-center justify-center text-gray-700 group-hover:text-primary transition-colors shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{feature.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
