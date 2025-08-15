import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-yellow-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-medium text-gray-700">Professional Minecraft Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Create Your Dream
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Minecraft Server
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your one-stop solution for custom plugins, stunning builds, and flawless server performance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 text-lg font-semibold">
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-white/70 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/30 text-lg font-semibold">
            View Portfolio
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-600 font-medium">Uptime Guarantee</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;