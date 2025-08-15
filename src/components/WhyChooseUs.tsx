import React from 'react';
import { Users, Target, Zap, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and builders with years of Minecraft expertise.',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50'
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Services customized to your vision and specific requirements.',
      gradient: 'from-red-500 to-yellow-500',
      bgGradient: 'from-red-50 to-yellow-50'
    },
    {
      icon: Zap,
      title: 'Lag-Free Guarantee',
      description: 'Optimized for smooth performance and exceptional gaming experience.',
      gradient: 'from-green-500 to-cyan-500',
      bgGradient: 'from-green-50 to-cyan-50'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: 'Free assistance for server-related issues and ongoing support.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional results with unmatched expertise and dedication
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${benefit.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 h-full`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-xl font-semibold">
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;