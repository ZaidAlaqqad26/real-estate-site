import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, DollarSign, FileText, Home } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Contact Us",
    description: "Fill out our simple form or give us a call. Tell us about your property and situation.",
    icon: <PhoneCall className="w-8 h-8" />,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    id: 2,
    title: "Get Your Offer",
    description: "We'll analyze your property and present you with a fair, no-obligation cash offer within 24 hours.",
    icon: <DollarSign className="w-8 h-8" />,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
  },
  {
    id: 3,
    title: "Choose Closing Date",
    description: "You pick the closing date that works for you. We can close in as little as 7 days or on your timeline.",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
  },
  {
    id: 4,
    title: "Get Paid",
    description: "Walk away with cash in hand. No repairs, no fees, no commissions.",
    icon: <Home className="w-8 h-8" />,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our simple 4-step process makes selling your house quick and hassle-free
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative mb-8">
                <div className={`w-20 h-20 rounded-full ${step.color} mx-auto flex items-center justify-center`}>
                  {step.icon}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-x-10">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-gray-300 dark:border-gray-700 transform rotate-45"></div>
                  </div>
                )}
                
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-700 dark:bg-blue-600 text-white flex items-center justify-center font-bold">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;