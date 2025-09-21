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
          <div className="bg-primary-blue/20 rounded-3xl p-8 lg:p-12 hover:scale-105 transition-transform duration-500">
            <div className="bg-light-gray rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl animate-bounce">🎟️</span>
                </div>
                <h3 className="text-xl font-semibold text-text-white mb-2">Easy Booking</h3>
                <p className="text-gray-300">Book tickets in just a few clicks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;