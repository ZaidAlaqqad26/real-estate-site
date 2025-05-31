import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FeatureSection from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FastCash Homes | Sell Your House Fast For Cash</title>
        <meta name="description" content="We buy houses for cash in any condition. No fees, no commissions, no repairs needed. Get a fair cash offer today." />
      </Helmet>
      
      <HeroSection />
      <HowItWorks />
      <FeatureSection />
      <Testimonials />
      <CTASection />
      <FAQSection />
    </>
  );
};

export default HomePage;