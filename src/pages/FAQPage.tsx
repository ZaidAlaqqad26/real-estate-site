import React from 'react';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet-async';

const FAQPage: React.FC = () => {
  const additionalFaqs = [
    {
      question: "Do you buy houses with tenants?",
      answer: "Yes, we can purchase properties with existing tenants. We'll handle all communication and arrangements with the tenants after closing, making the process hassle-free for you."
    },
    {
      question: "Can you help with inherited properties?",
      answer: "Absolutely. We specialize in helping heirs sell inherited properties quickly. We can work with executors, handle properties in probate (depending on the stage), and purchase homes that need extensive repairs or updating."
    },
    {
      question: "What if I'm behind on payments or facing foreclosure?",
      answer: "We can help! Many of our clients are facing foreclosure or are behind on mortgage payments. By selling to us, you can avoid foreclosure, protect your credit score, and possibly walk away with cash in your pocket depending on your equity position."
    },
    {
      question: "Do I need a real estate agent to sell to you?",
      answer: "No. When you sell directly to us, there's no need for a real estate agent. This means you don't pay any real estate commissions, which typically run 5-6% of the sale price."
    },
    {
      question: "How is selling to you different from listing with a realtor?",
      answer: "When listing with a realtor: you'll need to prepare your home for showings, wait for buyer financing approval, pay commissions, and potentially make repairs requested after inspection. With us: no showings, no waiting for financing, no commissions, no repair requests, and a guaranteed close on your timeline."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily purchase properties in Texas, Indiana, Tennessee, and Florida. However, we may be able to help in other areas as well. Contact us to find out if we serve your location."
    },
    {
      question: "Do I have to clean out the house before selling?",
      answer: "No. You can take what you want and leave the rest. We'll handle cleaning out any unwanted items at no cost to you."
    },
    {
      question: "Are there any hidden fees when selling to you?",
      answer: "No. The price we offer is the amount you receive (minus any existing mortgage or liens that need to be paid off). We pay all closing costs associated with the transaction."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | FastCash Homes</title>
        <meta name="description" content="Find answers to commonly asked questions about selling your house fast for cash to FastCash Homes." />
      </Helmet>
      
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-900 dark:to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-blue-100 dark:text-gray-300">
            Find answers to common questions about selling your house to FastCash Homes
          </p>
        </div>
      </div>
      
      <FAQSection />
      
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
            More Questions & Answers
          </h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalFaqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 dark:text-gray-300 mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:+16825548030" 
                className="flex items-center text-blue-700 dark:text-blue-400 font-medium hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call us at (682) 554-8030
              </a>
              
              <a 
                href="mailto:zaidalaqqad472@gmail.com" 
                className="flex items-center text-blue-700 dark:text-blue-400 font-medium hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email us at zaidalaqqad472@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default FAQPage;