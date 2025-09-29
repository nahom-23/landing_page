import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-black via-slate-900 to-gray-900 py-12 lg:py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-bold text-text-white leading-tight animate-slide-in-left">
            Discover, Book & Enjoy <span className="text-primary-blue animate-pulse">Events</span> with Ease
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed animate-fade-in" style={{animationDelay: '300ms'}}>
            EventEase is your go-to platform for discovering amazing events, booking tickets seamlessly, and managing your event experiences all in one place. From concerts to cultural gatherings, we've got you covered.
          </p>
          <button className="bg-primary-blue text-text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-in" style={{animationDelay: '600ms'}}>
            Find Events
          </button>
        </div>
        
        <div className="relative animate-slide-in-right" style={{animationDelay: '400ms'}}>
          <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 shadow-lg hover:shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
              alt="Event booking illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;