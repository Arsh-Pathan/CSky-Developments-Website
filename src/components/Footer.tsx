import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Server Hosting', href: '#hosting' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Rules', href: '#rules' },
    { name: 'Terms & Conditions', href: '#terms' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CS</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                CSky Developments
              </span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Your one-stop solution for custom plugins, stunning builds, and flawless server performance. Creating dream Minecraft servers since day one.
            </p>
            
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Join Discord</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="font-semibold text-cyan-400 mb-2">Discord Support</h4>
                <p className="text-gray-300 text-sm">24/7 community support and project discussions</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <h4 className="font-semibold text-green-400 mb-2">Response Time</h4>
                <p className="text-gray-300 text-sm">Usually within 1-2 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 CSky Developments. All Rights Reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded"></div>
                <span className="text-cyan-400 font-semibold">ArialNodes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;