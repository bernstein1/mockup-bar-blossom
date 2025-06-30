
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-rosy-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/d7fa0ba4-ec04-460a-93b4-b5f4dfbbf417.png" 
              alt="Rosy" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <div className="space-y-2 text-sm">
              <p>216 W 5th St.</p>
              <p>Austin, TX 78701</p>
              <p className="mt-4">hello@rosyrooftopbar.com</p>
              <p>rosyrooftopbar.com</p>
              <p className="mt-4">Privacy Policy</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Mon-Thu</span>
                <span>5PM-12AM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>5PM-1AM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>12PM-1AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12PM-12AM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rosy-teal transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  role="presentation"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.750-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-rosy-teal transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  role="presentation"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact</h4>
            <p className="text-sm mb-2">For reservations and inquiries:</p>
            <p className="text-rosy-teal font-semibold">512-555-ROSY</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Rosy Rooftop Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
