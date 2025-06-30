
import React from 'react';
import { Button } from '@/components/ui/button';

const RooftopHoursSection = () => {
  return (
    <section className="py-20 gradient-sunset">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              ROOFTOP HOURS
            </h2>
            
            <div className="space-y-4 text-white font-inter text-lg">
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="font-semibold">Mon-Thu</span>
                <span>5PM-12AM</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="font-semibold">Friday</span>
                <span>5PM-1AM</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="font-semibold">Saturday</span>
                <span>12PM-1AM</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="font-semibold">Sunday</span>
                <span>12PM-12AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Happy Hour</span>
                <span>Monday-Thursday 5PM-7PM</span>
              </div>
            </div>
            
            <Button size="lg" className="mt-8 bg-white text-rosy-teal hover:bg-white/90 rounded-full px-8 py-4 font-semibold">
              RESERVE A TABLE
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-white/20 rounded-full"></div>
              <div className="absolute inset-4 bg-white/10 rounded-full"></div>
              <div className="absolute inset-8 bg-white/5 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      role="presentation"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-playfair font-semibold">Now Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RooftopHoursSection;
