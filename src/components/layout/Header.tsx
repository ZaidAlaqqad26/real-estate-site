import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Phone } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-500 flex items-center">
              <div className="mr-2 text-amber-500">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-7 h-7"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span>FastCash Homes</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <nav className="mx-6">
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="tel:+16825548030" className="flex items-center text-blue-700 dark:text-blue-400 font-medium">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">(682) 554-8030</span>
              </a>
              
              <Button variant="accent" size="default">
                Get Cash Offer
              </Button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav>
                <ul className="space-y-4 py-4">
                  <li>
                    <Link 
                      to="/" 
                      className="block py-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/how-it-works" 
                      className="block py-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/testimonials" 
                      className="block py-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/faq" 
                      className="block py-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
                
                <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-800">
                  <a href="tel:+16825548030" className="flex items-center text-blue-700 dark:text-blue-400 font-medium py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>(682) 554-8030</span>
                  </a>
                  
                  <Button variant="accent" size="lg" fullWidth={true} className="mt-4">
                    Get Cash Offer
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;