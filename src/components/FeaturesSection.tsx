
import React from 'react';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const features = [
    {
      id: 'sunset',
      title: 'SUNSET LIBATIONS',
      description: "Watch the city come alive below while sinking into our plush seating around our outdoor fire pit. Enjoy our craft cocktails while taking in the breathtaking city views.",
      image: '/lovable-uploads/05b8a751-a6ac-486c-9bd4-6ae70ab8a119.png',
      buttonText: 'BROWSE COCKTAILS',
      buttonStyle: 'bg-rosy-teal hover:bg-rosy-teal/90'
    },
    {
      id: 'rooftop',
      title: 'ROOFTOP VIBES',
      description: "We offer spectacular waterfront views with sophisticated dining. Our menu offers fresh and inventive options along with our favorite classics for every taste.",
      image: '/lovable-uploads/28d3f1df-cef1-4af6-b8ae-417b8f7bce94.png',
      buttonText: 'EXPLORE FOOD MENU',
      buttonStyle: 'bg-rosy-coral hover:bg-rosy-coral/90'
    },
    {
      id: 'food',
      title: 'FOOD TO MATCH THE VIEW',
      description: "Our menu offers fresh and inventive options along with our favorite classics for every taste. Each dish pairs perfectly with our craft cocktails and stunning views.",
      image: '/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png',
      buttonText: 'FOOD MENU',
      buttonStyle: 'bg-rosy-pink hover:bg-rosy-pink/90'
    }
  ];

  return (
    <section className="py-20 bg-rosy-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-bold text-rosy-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-rosy-navy/80 font-inter mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button className={`${feature.buttonStyle} text-rosy-navy rounded-full px-6 py-2`}>
                  {feature.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
