"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Ideal for personal portfolios and small businesses.",
      price: "₹25,000",
      features: ["Custom UI Design", "Responsive Layout", "5 Pages", "Basic SEO setup", "Contact Form", "1 Month Support"],
      recommended: false,
    },
    {
      name: "Business",
      description: "Ideal for growing companies wanting to scale.",
      price: "₹65,000",
      features: ["Premium UI/UX Design", "10 Pages + Blog", "Advanced SEO setup", "CMS Integration", "Performance Optimized", "3 Months Support"],
      recommended: true,
    },
    {
      name: "Premium",
      description: "Ideal for e-commerce and custom solutions.",
      price: "₹1.5L+",
      features: ["Custom Web App / E-commerce", "Unlimited Pages", "Payment Gateway", "User Authentication", "Admin Dashboard", "6 Months Support"],
      recommended: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">
            Invest in a website that pays for itself. Choose the plan that fits your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.recommended 
                  ? "border-primary shadow-2xl shadow-blue-500/10 md:-translate-y-4" 
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                  RECOMMENDED
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <Check className={`w-5 h-5 shrink-0 ${plan.recommended ? "text-primary" : "text-gray-400"}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.recommended 
                    ? "bg-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30" 
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
