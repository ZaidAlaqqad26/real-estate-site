import React from 'react';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet-async';

const TestimonialsPage: React.FC = () => {
  const extendedTestimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      location: "Los Angeles, CA",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "I needed to sell my house quickly due to a job relocation. FastCash Homes gave me a fair offer and closed in just 8 days. The process was smooth and stress-free!",
      fullStory: "When I received a job offer in another state, I knew I needed to sell my house quickly. The thought of listing with a realtor, staging the home, and dealing with showings while trying to plan a move was overwhelming. A friend recommended FastCash Homes, and I'm so glad they did. From the first phone call to closing day, the team was professional, transparent, and efficient. They gave me a fair cash offer, and we closed in just 8 days. This allowed me to focus on my new job and relocation without the stress of a traditional home sale.",
      rating: 5,
      date: "March 15, 2023"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "San Diego, CA",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "After inheriting my parent's home, I didn't want to deal with repairs or listing it traditionally. FastCash Homes made it easy - no repairs needed and cash in hand within 2 weeks.",
      fullStory: "After my parents passed away, I inherited their home which needed significant repairs and updates. Living out of state made it difficult to manage renovations or a traditional sale. FastCash Homes provided the perfect solution. They purchased the house as-is, handling all the paperwork remotely, and deposited the funds directly into my account. Their compassionate approach during a difficult time in my life made all the difference. I would recommend them to anyone in a similar situation who needs a hassle-free way to sell an inherited property.",
      rating: 5,
      date: "January 8, 2023"
    },
    {
      id: 3,
      name: "David Wilson",
      location: "Riverside, CA",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "I was facing foreclosure and needed to sell quickly. FastCash Homes gave me a fair cash offer that allowed me to pay off my mortgage and still walk away with money in my pocket.",
      fullStory: "After losing my job, I fell behind on mortgage payments and was facing foreclosure. The stress was unbearable, and I didn't know where to turn. A neighbor suggested calling FastCash Homes, and it was the best decision I could have made. They understood my situation and worked quickly to make me a fair offer. Not only was I able to pay off my mortgage and avoid foreclosure, but I also walked away with enough money to get back on my feet. The team was respectful and never made me feel judged about my financial situation. They truly helped me get a fresh start.",
      rating: 4,
      date: "February 20, 2023"
    },
    {
      id: 4,
      name: "Jennifer Martinez",
      location: "Orange County, CA",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Divorce is hard enough without the stress of selling a house. FastCash Homes made it simple for us to liquidate our property and move forward with our lives.",
      fullStory: "During our divorce, my ex and I needed to sell our house quickly to divide the assets. Neither of us wanted the lengthy process of a traditional sale with showings and negotiations. FastCash Homes provided a straightforward solution. They gave us a fair offer, handled all the paperwork efficiently, and closed in just 12 days. Their professional approach made a difficult situation much easier to navigate. We were both able to get our fair share and move on with our lives without the added stress of a complicated home sale hanging over our heads.",
      rating: 5,
      date: "April 3, 2023"
    },
    {
      id: 5,
      name: "Robert Thompson",
      location: "San Bernardino, CA",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "My rental property had terrible tenants who left it in horrible condition. FastCash Homes bought it as-is and saved me from spending thousands on repairs.",
      fullStory: "As a landlord, I've dealt with many tenants over the years, but nothing prepared me for the damage my last renters would leave behind. The property needed at least $30,000 in repairs, and I simply didn't have the time, energy, or funds to fix it up. After getting quotes from contractors, I decided to explore selling as-is. FastCash Homes inspected the property and made me a fair offer based on its current condition. They didn't flinch at the damage or try to lowball me. The transaction was simple and closed within two weeks. I was relieved to be free of the property and the financial burden of repairs.",
      rating: 5,
      date: "May 17, 2023"
    },
    {
      id: 6,
      name: "Emily Chen",
      location: "Los Angeles, CA",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "My family home needed too many updates to sell traditionally. FastCash Homes offered a fair price and helped me avoid thousands in renovation costs.",
      fullStory: "My childhood home had been in our family for over 40 years, but when it came time to sell, it needed significant updating. The kitchen was straight out of the 1970s, the electrical needed to be completely redone, and there were foundation issues. Real estate agents estimated I would need to spend $75,000-100,000 on renovations before listing it. FastCash Homes offered a solution that saved me from taking out loans for renovations or selling below market value in its current condition. They made a fair offer based on the home's potential, not its current state, and I was able to sell without the headache of major renovations. Their team was respectful of the sentimental value the home held for me while providing a practical solution.",
      rating: 4,
      date: "June 10, 2023"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Customer Success Stories | FastCash Homes</title>
        <meta name="description" content="Read real testimonials from homeowners who sold their houses to FastCash Homes quickly and hassle-free." />
      </Helmet>
      
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-900 dark:to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Customer Success Stories</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-blue-100 dark:text-gray-300">
            Real stories from real homeowners who sold their houses to us
          </p>
        </div>
      </div>
      
      <Testimonials />
      
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            More Customer Stories
          </h2>
          
          <div className="space-y-12">
            {extendedTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="p-6 flex flex-col justify-between bg-blue-50 dark:bg-gray-800">
                    <div>
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-900 dark:text-white italic mb-4">"{testimonial.quote}"</p>
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2 p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Their Story</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {testimonial.fullStory}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default TestimonialsPage;