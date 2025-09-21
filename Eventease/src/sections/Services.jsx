import React from 'react';

const ServiceCard = ({ title, subtitle, bgColor, textColor }) => (
  <div className={`${bgColor} ${textColor} p-8 rounded-3xl border-2 border-primary-blue shadow-[0_5px_0_0_#1D3063] hover:shadow-[0_2px_0_0_#1D3063] transition-all duration-200`}>
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <h4 className="text-2xl font-semibold">{subtitle}</h4>
      <div className="flex items-center justify-between pt-4">
        <button className="text-text-white bg-primary-blue px-6 py-2 rounded-lg hover:bg-opacity-80 transition-all">
          Explore
        </button>
        <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center">
          <span className="text-text-white">→</span>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const features = [
    {
      title: "Event",
      subtitle: "Discovery",
      bgColor: "bg-light-gray",
      textColor: "text-text-white"
    },
    {
      title: "Secure",
      subtitle: "Payments",
      bgColor: "bg-primary-blue",
      textColor: "text-text-white"
    },
    {
      title: "Digital",
      subtitle: "Tickets",
      bgColor: "bg-primary-blue",
      textColor: "text-text-white"
    },
    {
      title: "Event",
      subtitle: "Management",
      bgColor: "bg-light-gray",
      textColor: "text-text-white"
    },
    {
      title: "Social",
      subtitle: "Sharing",
      bgColor: "bg-light-gray",
      textColor: "text-text-white"
    },
    {
      title: "Analytics &",
      subtitle: "Insights",
      bgColor: "bg-primary-blue",
      textColor: "text-text-white"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 px-6 lg:px-20 bg-gradient-to-bl from-gray-900 via-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-white mb-6">Key Features</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            EventEase offers comprehensive features for both event-goers and organizers, making event discovery, booking, and management effortless:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              bgColor={feature.bgColor}
              textColor={feature.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;