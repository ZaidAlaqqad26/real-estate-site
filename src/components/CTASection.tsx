import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import LeadForm from './LeadForm';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-700 dark:bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your <span className="text-amber-400">Cash Offer</span>?
            </h2>
            
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-xl">
              Fill out the form and get a fair cash offer within 24 hours. No obligation. No pressure.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No obligation to accept our offer</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sell your house in any condition - no repairs needed</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Skip the stress of traditional selling</span>
              </li>
            </ul>
            
            <div className="hidden lg:block">
              <Button variant="accent" size="xl" className="mr-4">
                Get Your Cash Offer
              </Button>
              
              <a href="tel:+18005551234" className="inline-flex items-center text-white font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (800) 555-1234
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <LeadForm 
                title="Get Your No-Obligation Cash Offer" 
                subtitle="It takes less than 2 minutes to get a fair cash offer."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;