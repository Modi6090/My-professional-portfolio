import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

// Detailed data for each service
const servicesData: Record<string, any> = {
  "business-website": {
    title: "Business Website",
    headline: "Establish Trust and Authority in Your Industry",
    description: "Your website is your digital storefront. We create premium, corporate websites designed to establish your brand's credibility, showcase your services, and generate high-quality leads.",
    features: [
      "Custom, brand-aligned design (No cheap templates)",
      "Lead capture forms & CRM integration",
      "On-page SEO to rank higher on Google",
      "Lightning-fast load times & performance",
      "Fully responsive mobile-friendly layout",
    ],
    whoIsItFor: "Perfect for corporate agencies, local businesses, B2B companies, and any service provider wanting a professional online presence.",
    gradient: "from-blue-600 to-indigo-600"
  },
  "e-commerce-website": {
    title: "E-commerce Website",
    headline: "Sell Your Products to the World, 24/7",
    description: "We build robust, secure, and easy-to-manage online stores that turn visitors into loyal customers. Whether you are selling 10 products or 10,000, we provide a seamless checkout experience.",
    features: [
      "Secure Payment Gateway Integration (Stripe, Razorpay, etc.)",
      "Easy-to-use Inventory Management Dashboard",
      "Abandoned Cart Recovery setup",
      "Mobile-first shopping experience",
      "Customer account and order tracking",
    ],
    whoIsItFor: "Perfect for retail stores, clothing brands, digital product sellers, and anyone looking to scale their sales online.",
    gradient: "from-blue-500 to-cyan-600"
  },
  "doctor-clinic-website": {
    title: "Doctor & Clinic Website",
    headline: "Grow Your Practice with a Professional Digital Presence",
    description: "Patients research online before booking an appointment. We build trustworthy websites that make it easy for patients to find you, learn about your services, and book visits instantly.",
    features: [
      "Automated Appointment Booking System",
      "Patient Testimonials & Review Integration",
      "Services & Treatments showcase",
      "Emergency Contact & Google Maps integration",
      "HIPAA-compliant data handling practices",
    ],
    whoIsItFor: "Perfect for doctors, dental clinics, dermatologists, therapists, and healthcare facilities.",
    gradient: "from-primary to-blue-700"
  },
  "portfolio-website": {
    title: "Portfolio Website",
    headline: "Showcase Your Work with Stunning, Interactive Designs",
    description: "First impressions matter. We build visually striking portfolios that highlight your best work, utilizing smooth animations and a premium aesthetic to wow your potential clients.",
    features: [
      "High-resolution image and video galleries",
      "Smooth scroll and micro-animations",
      "Downloadable Resume/CV integration",
      "Client testimonial sections",
      "Custom branding and typography",
    ],
    whoIsItFor: "Perfect for photographers, designers, freelancers, architects, and creative agencies.",
    gradient: "from-blue-600 to-purple-600"
  },
  "catalogue-website": {
    title: "Catalogue Website",
    headline: "Display Your Products Elegantly to Generate Inquiries",
    description: "Want to showcase your products without the hassle of online payments? A catalogue website allows customers to browse your offerings and contact you directly for bulk orders or quotes.",
    features: [
      "Advanced product search and filtering",
      "Detailed product specification pages",
      "WhatsApp or Email inquiry buttons per product",
      "High-quality zoomable image galleries",
      "Easy-to-manage admin panel to add/remove items",
    ],
    whoIsItFor: "Perfect for wholesalers, manufacturers, B2B suppliers, and businesses with custom-priced goods.",
    gradient: "from-indigo-500 to-blue-600"
  },
  "landing-page": {
    title: "Landing Page",
    headline: "High-Converting Single Page Websites for Your Campaigns",
    description: "Running ads? Launching a new product? You need a landing page designed for one thing: conversions. We build fast, persuasive landing pages that turn clicks into customers.",
    features: [
      "A/B tested conversion-focused layouts",
      "Persuasive copywriting structure",
      "Lead generation forms and pop-ups",
      "Ultra-fast loading speed for lower bounce rates",
      "Analytics and pixel tracking integration",
    ],
    whoIsItFor: "Perfect for marketing campaigns, new product launches, webinar registrations, and app downloads.",
    gradient: "from-blue-400 to-blue-800"
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-24 px-6 bg-gradient-to-br ${service.gradient} text-white flex-grow`}>
        <div className="container mx-auto max-w-5xl text-center">
          <Link href="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-10 transition-colors font-medium">
            ← Back to all services
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {service.headline}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 pb-24 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl shadow-gray-200/50 border border-gray-100 -mt-20 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 mb-14 leading-relaxed">
              {service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  What's Included
                </h3>
                <ul className="space-y-5">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 h-fit">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Who is this for?</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {service.whoIsItFor}
                </p>
                <Link 
                  href="/#contact" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-4 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30 text-lg"
                >
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
