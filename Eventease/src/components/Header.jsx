import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black py-4 px-6 lg:px-20 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-text-white hover:scale-110 transition-transform duration-300 cursor-pointer">
          EventEase
        </div>
        
        <nav className="hidden lg:flex space-x-8">
          <a href="#about" className="text-text-white hover:text-primary-blue hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-blue after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">About us</a>
          <a href="#features" className="text-text-white hover:text-primary-blue hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-blue after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Features</a>
          <a href="#events" className="text-text-white hover:text-primary-blue hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-blue after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Events</a>
          <a href="#pricing" className="text-text-white hover:text-primary-blue hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-blue after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Pricing</a>
          <a href="#contact" className="text-text-white hover:text-primary-blue hover:scale-110 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-blue after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
        </nav>

        <button className="hidden lg:block bg-primary-blue text-text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 hover:scale-105 hover:shadow-lg transition-all duration-300">
          Get Started
        </button>

        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-text-white mb-1"></div>
          <div className="w-6 h-0.5 bg-text-white mb-1"></div>
          <div className="w-6 h-0.5 bg-text-white"></div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-text-white hover:text-primary-blue transition-colors">About us</a>
            <a href="#features" className="text-text-white hover:text-primary-blue transition-colors">Features</a>
            <a href="#events" className="text-text-white hover:text-primary-blue transition-colors">Events</a>
            <a href="#pricing" className="text-text-white hover:text-primary-blue transition-colors">Pricing</a>
            <a href="#contact" className="text-text-white hover:text-primary-blue transition-colors">Contact</a>
            <button className="bg-primary-blue text-text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-all w-fit">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;