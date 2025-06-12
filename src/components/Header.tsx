
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/d7fa0ba4-ec04-460a-93b4-b5f4dfbbf417.png" 
              alt="Rosy" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-foreground hover:text-rosy-teal transition-colors font-medium">
              MENU
            </a>
            <a href="#events" className="text-foreground hover:text-rosy-teal transition-colors font-medium">
              EVENTS
            </a>
            <a href="#blog" className="text-foreground hover:text-rosy-teal transition-colors font-medium">
              BLOG
            </a>
          </nav>

          <Button className="hidden md:inline-flex bg-rosy-teal hover:bg-rosy-teal/90 text-white">
            RESERVE A TABLE
          </Button>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#menu" className="text-foreground hover:text-rosy-teal transition-colors font-medium">
                MENU
              </a>
              <a href="#events" className="text-foreground hover:text-rosy-teal transition-colors font-medium">
                EVENTS
              </a>
              <a href="#blog" className="text-foreground hover:text-rosy-teal transition-colors font-medium">
                BLOG
              </a>
              <Button className="bg-rosy-teal hover:bg-rosy-teal/90 text-white w-fit">
                RESERVE A TABLE
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
