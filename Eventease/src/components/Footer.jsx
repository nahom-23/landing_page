import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus('');

    // Simulate newsletter subscription
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'Facebook', icon: 'f', href: '#' },
    { name: 'Twitter', icon: 't', href: '#' }
  ];

  const quickLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Events', href: '#events' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const features = [
    { name: 'Event Discovery', href: '#' },
    { name: 'Secure Payment Processing', href: '#' },
    { name: 'Digital Ticket Management', href: '#' },
    { name: 'Event Organization Tools', href: '#' },
    { name: 'Social Media Integration', href: '#' },
    { name: 'Analytics and Insights', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-slate-900 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="px-6 lg:px-20 py-12 border-b border-gray-700 bg-gradient-to-r from-transparent via-gray-800/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="bg-light-gray p-8 lg:p-12 rounded-3xl border-2 border-primary-blue">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-text-white mb-4">
                  Subscribe to our newsletter
                </h3>
                <p className="text-text-white text-lg">
                  Stay updated with the latest events, exclusive early-bird offers, and event industry insights delivered straight to your inbox.
                </p>
              </div>
              
              <div>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-primary-blue focus:border-primary-blue focus:outline-none transition-colors text-text-white bg-dark"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="bg-primary-blue text-text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                  
                  {subscribeStatus === 'success' && (
                    <p className="text-green-600 font-medium">
                      Successfully subscribed! Thank you for joining our newsletter.
                    </p>
                  )}
                  
                  {subscribeStatus === 'error' && (
                    <p className="text-red-600 font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-primary-blue mb-6">
                EventEase
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted platform for event discovery and booking. We connect event-goers with amazing experiences across Ethiopia.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-text-white font-bold hover:bg-opacity-80 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary-blue mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-blue transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-primary-blue mb-6">Features</h4>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature.name}>
                    <a
                      href={feature.href}
                      className="text-gray-300 hover:text-primary-blue transition-colors"
                    >
                      {feature.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-primary-blue mb-6">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:hello@eventease.et" className="hover:text-primary-blue transition-colors">
                    hello@eventease.et
                  </a>
                </div>
                <div>
                  <p className="font-medium">Phone:</p>
                  <a href="tel:+251911123456" className="hover:text-primary-blue transition-colors">
                    +251 911 123 456
                  </a>
                </div>
                <div>
                  <p className="font-medium">Address:</p>
                  <p>Bole Road<br />Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 px-6 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 EventEase. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;