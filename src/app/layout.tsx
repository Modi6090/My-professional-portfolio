import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JT Web Studio | Modern Websites That Help Businesses Grow",
  description: "We create fast, modern, mobile-friendly websites for businesses that want to grow online. Partner with JT Web Studio for premium digital experiences.",
  keywords: ["Web Developer", "Website Designer", "E-commerce Website Developer", "Portfolio Website Developer", "Business Website Developer"],
  openGraph: {
    title: "JT Web Studio | Premium Digital Agency",
    description: "Modern websites that turn visitors into customers. Fast, mobile-friendly, and SEO-optimized.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JT Web Studio | Modern Web Development",
    description: "Modern websites that turn visitors into customers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
