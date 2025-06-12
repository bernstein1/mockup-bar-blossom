
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PrivateEventsSection from '@/components/PrivateEventsSection';
import RooftopHoursSection from '@/components/RooftopHoursSection';
import InstagramSection from '@/components/InstagramSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PrivateEventsSection />
      <RooftopHoursSection />
      <InstagramSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
