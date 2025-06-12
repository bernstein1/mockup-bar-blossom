
import React from 'react';
import { Button } from '@/components/ui/button';

const InstagramSection = () => {
  const instagramImages = [
    '/lovable-uploads/05b8a751-a6ac-486c-9bd4-6ae70ab8a119.png',
    '/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png',
    '/lovable-uploads/28d3f1df-cef1-4af6-b8ae-417b8f7bce94.png',
    '/lovable-uploads/1667dc4a-2f5e-40a6-b4ad-fdc37bb0a6d9.png',
    '/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png',
    '/lovable-uploads/e35d06d6-2f7c-4043-a60a-6bc928f0b403.png',
    '/lovable-uploads/7cb26fe8-e325-48ac-9ed5-b6404609ab84.png',
    '/lovable-uploads/502499cf-340b-4a8b-b1e1-887ba25bbb02.png'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rosy-teal mb-4">
            FOLLOW US ON INSTAGRAM
          </h2>
          <p className="text-lg text-muted-foreground">
            @rosyrooftop
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {instagramImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-rosy-teal hover:bg-rosy-teal/90 text-white rounded-full px-8 py-4">
            FOLLOW US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
