import React from 'react';
import { CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8 mb-6">
          <button className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Terms</button>
          <button className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Privacy Policy</button>
          <button className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Help center</button>
          <button className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Socials</button>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-black" />
            </div>
            <span className="text-lg font-bold">VoteNow</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">2025 Vote-Now. All rights reserves.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;