import React, { useState } from 'react';

const TestimonialCard = ({ quote, author, company, rating }) => (
  <div className="bg-light-gray p-8 rounded-3xl border-2 border-primary-blue shadow-[0_5px_0_0_#0147FF] min-h-[300px] flex flex-col justify-between">
    <div className="space-y-6">
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
      
      <blockquote className="text-gray-300 text-lg leading-relaxed">
        "{quote}"
      </blockquote>
    </div>
    
    <div className="pt-6 border-t border-gray-600">
      <p className="font-semibold text-text-white text-lg">{author}</p>
      <p className="text-primary-blue font-medium">{company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "We have been using EventEase for the past year and have seen a significant increase in event attendance and ticket sales. The platform is intuitive, reliable, and truly cares about the success of our events. We highly recommend EventEase to any organizer looking to streamline their event management.",
      author: "Meron Tadesse",
      company: "CEO of Addis Events Ltd",
      rating: 5
    },
    {
      quote: "EventEase has been instrumental in transforming our event management process. Their payment integration and QR code system has resulted in a 300% increase in ticket sales efficiency. The team's dedication and innovative approach make them an invaluable partner for our events.",
      author: "Hanan Bekele",
      company: "Festival Director at Ethiopian Music Events",
      rating: 5
    },
    {
      quote: "The results speak for themselves. Since partnering with EventEase, our event attendance has doubled and our community engagement has significantly improved. Their data-driven approach and seamless solutions have exceeded our expectations in every way.",
      author: "Dawit Alemayehu",
      company: "Founder of Cultural Connect Ethiopia",
      rating: 5
    },
    {
      quote: "Working with EventEase has been a game-changer for our university events. Their student-friendly interface and Telebirr integration have increased our event participation by 400% and our ticket distribution efficiency has improved dramatically. Highly professional team with exceptional results.",
      author: "Sara Mehari",
      company: "COO of Fashion Forward",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 px-6 lg:px-20 bg-gradient-to-tr from-slate-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-white mb-6">Testimonials</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from Our Happy Event Organizers: Read Our Testimonials to Learn More about EventEase
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    company={testimonial.company}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center border-2 border-primary-blue shadow-[0_3px_0_0_#1D3063] hover:shadow-[0_1px_0_0_#1D3063] transition-all"
          >
            <span className="text-text-white font-bold text-xl">‹</span>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center border-2 border-primary-blue shadow-[0_3px_0_0_#1D3063] hover:shadow-[0_1px_0_0_#1D3063] transition-all"
          >
            <span className="text-text-white font-bold text-xl">›</span>
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-primary-blue border-2 border-primary-blue' 
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;