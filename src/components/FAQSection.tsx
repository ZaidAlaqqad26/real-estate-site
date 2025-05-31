import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does the process work?",
    answer: "Our process is simple: 1) Contact us through our form or call us directly, 2) We'll schedule a quick visit to assess your property, 3) We make a fair, no-obligation cash offer, 4) If you accept, we close on your timeline - as quickly as 7 days."
  },
  {
    question: "How quickly can you close?",
    answer: "We can close in as little as 7 days. However, we're flexible and can work with your timeline if you need more time to move or make arrangements."
  },
  {
    question: "Do I need to make repairs before selling?",
    answer: "No! We buy houses in any condition. You don't need to make any repairs, clean, or even remove unwanted items. We'll take care of everything after closing."
  },
  {
    question: "Are there any fees or commissions?",
    answer: "Absolutely none. Unlike traditional real estate transactions, we don't charge any fees or commissions. The offer we make is the amount you receive (minus any existing mortgage payoff)."
  },
  {
    question: "How do you determine your offer price?",
    answer: "We consider the location, condition, size, and current market value of your property. We then deduct repair costs and our minimum profit margin to arrive at a fair cash offer."
  },
  {
    question: "What types of properties do you buy?",
    answer: "We buy all types of residential properties: single-family homes, condos, townhouses, duplexes, multi-family units, and even some commercial properties. We also purchase properties in any condition, whether they're perfectly maintained or need major repairs."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions about selling your home to us? We've got answers.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden ${
                openIndex === index ? 'shadow-md' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div 
                  className="p-5 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Don't see your question answered?</p>
          <a 
            href="tel:+18005551234" 
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline"
          >
            Call us at (682) 554-8030
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;