import React from 'react';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet-async';

const HowItWorksPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | FastCash Homes</title>
        <meta name="description" content="Learn how our simple 4-step process works to sell your house fast for cash." />
      </Helmet>
      
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-900 dark:to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">How It Works</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-blue-100 dark:text-gray-300">
            Our simple 4-step process makes selling your house quick and hassle-free
          </p>
        </div>
      </div>
      
      <HowItWorks />
      
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Detailed Process</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-400">1. Initial Contact</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The process begins when you reach out to us. You can fill out our simple form or call us directly. We'll ask for basic information about your property and your situation. This initial conversation is completely confidential and comes with no obligation.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  During this step, we'll also answer any questions you might have about our process and how we can help with your specific situation.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-400">2. Property Assessment</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  After our initial conversation, we'll schedule a time to view your property. This is a casual walkthrough that typically takes less than 30 minutes. We assess the condition, size, and features of your home to determine our cash offer.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Don't worry about cleaning or making repairs before our visit - we buy houses in any condition! Unlike traditional buyers, we're not looking for perfection.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-400">3. Receive Your Cash Offer</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Based on our assessment, we'll present you with a fair, no-obligation cash offer - often within 24 hours of seeing your property. Our offers are straightforward with no hidden fees or commissions.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Take as much time as you need to consider our offer. We're happy to explain how we arrived at our number and answer any questions you might have.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-400">4. Close On Your Timeline</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you accept our offer, we'll set a closing date that works for you. We can close in as little as 7 days or on your timeline if you need more time. We work with reputable title companies to ensure a smooth transaction.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  At closing, you'll receive your cash payment. There's no need to worry about repair costs, closing costs, or real estate commissions - we handle all of that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </>
  );
};

export default HowItWorksPage;