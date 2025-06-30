import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiesPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-rosy-navy mb-6">
        Cookie Policy
      </h1>
      <p className="text-muted-foreground space-y-4">
        <span>This is placeholder text for the cookie policy.</span>
      </p>
    </main>
    <Footer />
  </div>
);

export default CookiesPage;
