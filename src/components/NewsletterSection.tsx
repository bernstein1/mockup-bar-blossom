
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', { name, email });
    // Handle newsletter signup
    setName('');
    setEmail('');
  };

  return (
    <section className="py-20 gradient-sunset">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            DON'T MISS A SUNSET - JOIN OUR MAILING LIST
          </h2>
          <p className="text-xl text-white/90 mb-8 font-inter">
            Be the first to know about special events, promotions, new menu specials, and exclusive perks. 
            We'll bring the sunshine, you just check your inbox!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 bg-white/90 border-white/20 text-rosy-navy placeholder:text-rosy-navy/60"
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/90 border-white/20 text-rosy-navy placeholder:text-rosy-navy/60"
              required
            />
            <Button 
              type="submit" 
              className="bg-rosy-teal hover:bg-rosy-teal/90 text-rosy-navy px-8 py-2 rounded-md font-semibold whitespace-nowrap"
            >
              SIGN UP
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
