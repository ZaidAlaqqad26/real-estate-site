import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Percent, Calendar, Home, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Quick Closing",
    description: "Close in as little as 7 days or on your timeline. No waiting months to sell."
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Cash Offer",
    description: "Get a fair, honest cash offer with no obligation to accept."
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "No Fees or Commissions",
    description: "Keep more money in your pocket without paying realtor fees."
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Sell As-Is",
    description: "No repairs or cleaning needed. We buy houses in any condition."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Flexible Closing",
    description: "Choose the closing date that works for your schedule."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Trusted Local Buyers",
    description: "We're local real estate professionals with experience in your market."
  }
];

const FeatureSection: React.FC = () => {
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
            Why Choose FastCash Homes?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We make selling your home simple, fast and hassle-free
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-700 dark:text-blue-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;