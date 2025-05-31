import React from 'react';
import { Phone, Mail, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-amber-500 mr-2">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">FastCash Homes</h3>
            </div>
            <p className="text-gray-400 mb-6">
              We buy houses in any condition for cash. Get a fair offer with no obligations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Areas We Serve</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Texas</li>
              <li className="text-gray-400">Indiana</li>
              <li className="text-gray-400">Tennessee</li>
              <li className="text-gray-400">Florida</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">(682) 554-8030</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">zaidalaqqad472@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} FastCash Homes. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-gray-400 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;