
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/7cb26fe8-e325-48ac-9ed5-b6404609ab84.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/d7fa0ba4-ec04-460a-93b4-b5f4dfbbf417.png" 
            alt="Rory's Rooftop" 
            className="h-24 sm:h-32 md:h-40 w-auto mx-auto mb-8 drop-shadow-2xl"
          />
        </div>
        
        <div className="bg-rosy-cream/95 text-rosy-navy p-8 sm:p-12 rounded-2xl max-w-5xl mx-auto shadow-2xl backdrop-blur-sm">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            ELEVATE YOUR<br/>
            <span className="text-rosy-teal">EXPERIENCE</span>
          </h1>
          
          <p className="text-lg sm:text-xl font-inter mb-8 max-w-4xl mx-auto leading-relaxed">
            Elevate your experience at Rory's Rooftop, the Meatpacking District's premier rooftop bar and brunch destination, 
            perfectly situated just steps from the High Line's 14th St entrance. Our indoor-outdoor rooftop bar features 
            award-winning craft cocktails, local beer, and an incredible weekend brunch menu. Soak in panoramic views of 
            cobblestone streets, Hudson River sunsets, and the iconic Whitney Museum.
          </p>
          
          <Button size="lg" className="bg-rosy-teal hover:bg-rosy-teal/90 text-rosy-navy text-lg px-8 py-4 rounded-full font-semibold">
            RESERVE A TABLE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
