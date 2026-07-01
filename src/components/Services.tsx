"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, ShoppingCart, Store, Stethoscope, FileText, Globe } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const trustBadges = [
    "Responsive Design", "SEO Ready", "Secure", "Fast Performance", "Modern UI", "Mobile Friendly"
  ];

  const services = [
    {
      title: "Business Website",
      description: "Professional corporate websites that build trust and convert visitors into leads.",
      icon: <Globe className="w-6 h-6" />,
      slug: "business-website",
    },
    {
      title: "E-commerce Website",
      description: "High-converting online stores with secure payments and inventory management.",
      icon: <ShoppingCart className="w-6 h-6" />,
      slug: "e-commerce-website",
    },
    {
      title: "Doctor & Clinic Website",
      description: "Specialized websites for healthcare professionals with booking integrations.",
      icon: <Stethoscope className="w-6 h-6" />,
      slug: "doctor-clinic-website",
    },
    {
      title: "Portfolio Website",
      description: "Showcase your work with stunning, interactive portfolio designs.",
      icon: <MonitorSmartphone className="w-6 h-6" />,
      slug: "portfolio-website",
    },
    {
      title: "Catalogue Website",
      description: "Display your products elegantly without online checkout functionality.",
      icon: <Store className="w-6 h-6" />,
      slug: "catalogue-website",
    },
    {
      title: "Landing Page",
      description: "Optimized single-page websites designed for high conversion rates.",
      icon: <FileText className="w-6 h-6" />,
      slug: "landing-page",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Trust Section */}
        <div className="mb-24 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted by businesses to build modern digital experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
            {trustBadges.map((badge, i) => (
              <span key={i} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Web Services</h2>
          <p className="text-gray-600 text-lg">
            We provide end-to-end web development solutions tailored to your business needs. Every website is built for speed, security, and sales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More <span className="ml-2">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
