'use client';

import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CorporateFeaturesSection from '../components/CorporateFeaturesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CustomBouquetBuilder from '../components/CustomBouquetBuilder';

export default function Home() {
  const [showCustomBouquet, setShowCustomBouquet] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection onCustomBouquetClick={() => setShowCustomBouquet(true)} />
      <CorporateFeaturesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      <CustomBouquetBuilder 
        isOpen={showCustomBouquet} 
        onClose={() => setShowCustomBouquet(false)} 
      />
    </div>
  );
}