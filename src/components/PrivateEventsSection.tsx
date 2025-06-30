
import React from 'react';
import { Button } from '@/components/ui/button';

const PrivateEventsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rosy-navy mb-6">
              PRIVATE EVENTS
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Looking for the perfect venue for your next celebration? Rosy offers an elegant waterfront setting perfect for private parties, corporate events, and special occasions. Our dedicated events team will work with you to create an unforgettable experience.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-rosy-teal rounded-full mr-3"></div>
                <span className="font-inter">Customized cocktail menus</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-rosy-teal rounded-full mr-3"></div>
                <span className="font-inter">Private bar & dining experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-rosy-teal rounded-full mr-3"></div>
                <span className="font-inter">Panoramic city views</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-rosy-teal rounded-full mr-3"></div>
                <span className="font-inter">Dedicated event coordinator</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-rosy-teal hover:bg-rosy-teal/90 text-rosy-navy rounded-full px-8 py-4">
              LEARN MORE
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/lovable-uploads/1667dc4a-2f5e-40a6-b4ad-fdc37bb0a6d9.png"
                alt="Private Events Space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEventsSection;
