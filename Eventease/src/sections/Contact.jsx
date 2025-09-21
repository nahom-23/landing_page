import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const inquiryTypes = [
    'Event Organization',
    'Ticket Sales Support', 
    'Partnership Opportunities',
    'Technical Support',
    'Marketing & Promotion',
    'General Inquiry'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setSelectedService('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 px-6 lg:px-20 bg-gradient-to-bl from-gray-900 via-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-white mb-6">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get in Touch: Let's Discuss Your Event Booking and Management Needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-light-gray p-8 rounded-3xl border-2 border-primary-blue shadow-[0_5px_0_0_#1D3063]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-primary-blue focus:border-primary-blue focus:outline-none focus:scale-105 transition-all duration-300 bg-dark text-text-white hover:shadow-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-primary-blue focus:border-primary-blue focus:outline-none focus:scale-105 transition-all duration-300 bg-dark text-text-white hover:shadow-lg"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-text-white font-medium mb-2">Inquiry Type</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {inquiryTypes.map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type}
                        checked={selectedService === type}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-5 h-5 text-primary-blue border-2 border-primary-blue focus:ring-primary-blue"
                      />
                      <span className="text-text-white">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-text-white font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary-blue focus:border-primary-blue focus:outline-none transition-colors resize-none bg-dark text-text-white"
                  placeholder="Tell us about your event or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-blue text-text-white py-4 rounded-lg font-medium hover:bg-opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-center text-green-600 font-medium">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center text-red-600 font-medium">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-primary-blue p-8 rounded-3xl border-2 border-primary-blue shadow-[0_5px_0_0_#1D3063] hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-light-gray rounded-full flex items-center justify-center">
                    <span className="text-text-white text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-text-white">Email</p>
                    <p className="text-gray-200">hello@eventease.et</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-light-gray rounded-full flex items-center justify-center">
                    <span className="text-text-white text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-text-white">Phone</p>
                    <p className="text-gray-200">+251 911 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-light-gray rounded-full flex items-center justify-center">
                    <span className="text-text-white text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-text-white">Address</p>
                    <p className="text-gray-200">Bole Road, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-light-gray p-8 rounded-3xl border-2 border-primary-blue shadow-[0_5px_0_0_#1D3063] hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;