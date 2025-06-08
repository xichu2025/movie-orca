"use client";

import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <Features />
        <Testimonials />
        <CTA />
        <FAQSection />
        <InfoSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
