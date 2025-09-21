import React, { useState } from 'react';

const ProcessStep = ({ number, title, description, isOpen, onToggle }) => (
  <div className="bg-light-gray border-2 border-primary-blue rounded-3xl shadow-[0_5px_0_0_#1D3063] overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full p-8 flex items-center justify-between hover:bg-gray-800 transition-colors"
    >
      <div className="flex items-center space-x-6">
        <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center border-2 border-primary-blue">
          <span className="text-text-white font-bold text-lg">{number}</span>
        </div>
        <h3 className="text-xl font-semibold text-text-white text-left">{title}</h3>
      </div>
      <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center border-2 border-primary-blue">
        <span className={`text-text-white font-bold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </div>
    </button>
    
    {isOpen && (
      <div className="px-8 pb-8">
        <div className="ml-18 pt-4 border-t border-gray-600">
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    )}
  </div>
);

const WorkingProcess = () => {
  const [openStep, setOpenStep] = useState(0);

  const steps = [
    {
      title: "Consultation",
      description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
      title: "Research and Strategy Development", 
      description: "We conduct thorough market research and competitor analysis to develop a comprehensive digital marketing strategy. Our team identifies key opportunities and creates a roadmap for achieving your business objectives through targeted campaigns."
    },
    {
      title: "Implementation",
      description: "Our experienced team executes the digital marketing strategy across all chosen channels. We set up campaigns, create content, optimize websites, and implement tracking systems to ensure everything runs smoothly from day one."
    },
    {
      title: "Monitoring and Optimization",
      description: "We continuously monitor campaign performance using advanced analytics tools. Our team makes data-driven adjustments to optimize results, improve ROI, and ensure your marketing efforts are always performing at their best."
    },
    {
      title: "Reporting and Communication",
      description: "We provide regular, detailed reports that showcase campaign performance, key metrics, and insights. Our team maintains open communication with you, offering strategic recommendations and updates on progress toward your goals."
    },
    {
      title: "Continual Improvement",
      description: "Digital marketing is an ongoing process. We continuously test new strategies, analyze performance data, and refine our approach to ensure your campaigns stay ahead of the competition and adapt to changing market conditions."
    }
  ];

  const handleToggle = (index) => {
    setOpenStep(openStep === index ? -1 : index);
  };

  return (
    <section id="process" className="py-16 lg:py-24 px-6 lg:px-20 bg-gradient-to-br from-slate-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-white mb-6">Our Working Process</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={String(index + 1).padStart(2, '0')}
              title={step.title}
              description={step.description}
              isOpen={openStep === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;