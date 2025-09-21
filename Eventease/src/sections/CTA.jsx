import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-20 bg-gradient-to-br from-black via-slate-900 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="bg-primary-blue p-8 lg:p-12 rounded-3xl border-2 border-primary-blue shadow-[0_5px_0_0_#1D3063] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-light-gray rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-light-gray rounded-full"></div>
            <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-light-gray rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-light-gray rounded-full"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-white leading-tight">
                Let's make things happen
              </h2>
              <p className="text-lg text-text-white leading-relaxed">
                Contact us today to learn more about how EventEase can help your events reach more people and succeed beyond expectations.
              </p>
              <button className="bg-light-gray text-text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center space-x-2">
                <span>Start Your Event Journey</span>
                <span className="text-xl">→</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-light-gray/20 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-light-gray rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl text-text-white">🎉</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-white">Ready to Launch?</h3>
                  <p className="text-text-white">
                    Join 100+ event organizers that have transformed their events with EventEase
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text-white">100+</div>
                      <div className="text-sm text-text-white/80">Events Hosted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text-white">5K+</div>
                      <div className="text-sm text-text-white/80">Tickets Sold</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-text-white">4.9★</div>
                      <div className="text-sm text-text-white/80">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;