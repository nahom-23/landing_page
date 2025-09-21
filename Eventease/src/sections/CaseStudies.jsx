import React from 'react';

const CaseStudyCard = ({ title, description, metrics, bgColor, textColor }) => (
  <div className={`${bgColor} ${textColor} p-8 rounded-3xl border-2 border-primary-blue shadow-[0_5px_0_0_#1D3063] hover:shadow-[0_2px_0_0_#1D3063] hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full cursor-pointer group`}>
    <div className="space-y-6">
      <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      <p className="text-base opacity-90">{description}</p>
      
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm opacity-80">{metric.label}</span>
            <span className="text-lg font-bold">{metric.value}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-4">
        <button className="text-text-white bg-primary-blue px-6 py-2 rounded-lg hover:bg-opacity-80 hover:scale-110 transition-all duration-200 font-medium group-hover:shadow-lg">
          View Event
        </button>
        <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
          <span className="text-text-white font-bold">→</span>
        </div>
      </div>
    </div>
  </div>
);

const CaseStudies = () => {
  const eventShowcases = [
    {
      title: "Addis Jazz Festival 2024 - Sold out in just 3 days with over 5,000 attendees",
      description: "Ethiopia's premier jazz festival used EventEase for seamless ticket management and real-time sales tracking.",
      metrics: [
        { label: "Tickets Sold", value: "5,000+" },
        { label: "Sales Time", value: "3 days" },
        { label: "Attendee Rating", value: "4.9/5" }
      ],
      bgColor: "bg-light-gray",
      textColor: "text-text-white"
    },
    {
      title: "Ethiopian Cultural Week - Connected 15+ venues across Addis Ababa for a city-wide celebration",
      description: "Multi-venue cultural festival with integrated ticketing, QR code entry, and real-time analytics across all locations.",
      metrics: [
        { label: "Venues", value: "15+" },
        { label: "Total Attendees", value: "12,000" },
        { label: "Event Rating", value: "4.8/5" }
      ],
      bgColor: "bg-primary-blue",
      textColor: "text-text-white"
    },
    {
      title: "University Sports Championships - Streamlined student ticket distribution with mobile-first approach",
      description: "Student-friendly booking system with Telebirr integration made ticket access easy for the entire university community.",
      metrics: [
        { label: "Student Tickets", value: "8,500" },
        { label: "Mobile Bookings", value: "95%" },
        { label: "Check-in Speed", value: "<30sec" }
      ],
      bgColor: "bg-light-gray",
      textColor: "text-text-white"
    }
  ];

  return (
    <section id="events" className="py-16 lg:py-24 px-6 lg:px-20 bg-gradient-to-tr from-black via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-white mb-6">Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how EventEase has transformed event experiences across Ethiopia, from intimate gatherings to large-scale festivals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventShowcases.map((showcase, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CaseStudyCard
                title={showcase.title}
                description={showcase.description}
                metrics={showcase.metrics}
                bgColor={showcase.bgColor}
                textColor={showcase.textColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;