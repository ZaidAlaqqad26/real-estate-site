import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-900 dark:to-blue-900 text-white pt-32 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L100 50 M50 0 L50 100" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Sell Your House <span className="text-amber-500">Fast</span> For Cash
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 dark:text-gray-300 mb-8 max-w-xl">
              No repairs, no fees, no commissions. Get a fair cash offer and close on your timeline.
            </p>
            
            <div className="hidden lg:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Fast Closing</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg">Fair Cash Offer</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8 mt-10">
              <p className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Close in as little as 7 days</span>
              </p>
              
              <p className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No hidden fees</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="white" className="dark:fill-gray-800">
          <path d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1440,37.3L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;