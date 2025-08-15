import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: 'Server Setup & Optimization', href: '#server-setup' },
    { name: 'Plugin Development', href: '#plugin-development' },
    { name: 'Custom Builds', href: '#custom-builds' },
    { name: 'Texture Packs', href: '#texture-packs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              CSky Developments
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200/20 py-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50 transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#hosting" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Server Hosting
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Our Work
            </a>
            <a href="#contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Contact
            </a>
            
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Discord
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Home
              </a>
              <div className="space-y-2">
                <span className="text-gray-700 font-medium">Services</span>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#hosting" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Server Hosting
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Our Work
              </a>
              <a href="#contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
                Contact
              </a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg w-fit">
                Join Discord
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;