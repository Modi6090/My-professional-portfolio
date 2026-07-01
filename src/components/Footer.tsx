"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              Modi Web <span className="text-primary">studios.</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              We build fast, modern, and high-converting websites for businesses that want to dominate their industry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Portfolio</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Business Websites</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> E-commerce Stores</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Portfolio Websites</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> FAQ</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Modi Web studios. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm">
            Designed & Built with passion.
          </div>
        </div>

      </div>
    </footer>
  );
}
