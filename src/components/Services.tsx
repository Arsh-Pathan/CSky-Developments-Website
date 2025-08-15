import React from 'react';
import { Server, Code, Building, Palette, ArrowRight, Clock, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'server-setup',
      icon: Server,
      title: 'Server Setup & Optimization',
      subtitle: 'Flawless Performance, Guaranteed.',
      description: 'We build and configure your Minecraft server from the ground up. Our expert team ensures a smooth, lag-free gaming experience by using the latest software and tailoring every detail to your specific needs.',
      price: '179 INR',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
      factors: [
        'Server Type (Game, Network, Modded, SMP)',
        'Software (Paper, Velocity, BungeeCord, Forge)',
        'Version Compatibility',
        'Custom Features & Personalization',
        'Sounds & Effects',
        'Estimated Time'
      ],
      versions: '1.8.8, 1.16–1.21.5',
      cta: 'Order Your Server Setup'
    },
    {
      id: 'plugin-development',
      icon: Code,
      title: 'Plugin Development',
      subtitle: 'Unlock Your Server\'s Full Potential.',
      description: 'From unique gameplay mechanics to powerful administrative tools, our developers code custom plugins tailored to your specific requests. We bring your most ambitious ideas to life, as long as they are within technical reason.',
      price: '179 INR',
      gradient: 'from-red-500 to-yellow-500',
      bgGradient: 'from-red-50 to-yellow-50',
      factors: [
        'Plugin Type (Minigames, Core Systems, APIs)',
        'Complexity & Logic',
        'Commands & GUIs',
        'Performance Requirements',
        'External Integrations (MySQL, Discord)',
        'Estimated Time'
      ],
      versions: '1.8.8, 1.16–1.21.5',
      cta: 'Request a Custom Plugin'
    },
    {
      id: 'custom-builds',
      icon: Building,
      title: 'Custom Builds',
      subtitle: 'Bring Your Vision to Life, Block by Block.',
      description: 'Our skilled builders collaborate with you to create breathtaking landscapes and intricate structures. From sprawling cities to detailed dungeons, we design unique worlds that will leave your players in awe.',
      price: '119 INR',
      gradient: 'from-green-500 to-cyan-500',
      bgGradient: 'from-green-50 to-cyan-50',
      factors: [
        'Build Size (e.g., 1000x1000)',
        'Required Time',
        'Version Compatibility',
        'Level of Detail'
      ],
      versions: '1.8.8, 1.16–1.21.5',
      cta: 'Order a Custom Build'
    },
    {
      id: 'texture-packs',
      icon: Palette,
      title: 'Texture Packs',
      subtitle: 'A Visually Captivating Minecraft Experience.',
      description: 'Immerse your players in a unique world with our custom texture packs. We design everything from individual items to complete UI overhauls, matching your desired atmosphere and style.',
      price: '119 INR',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      factors: [
        'Resolution (16x, 32x, 64x)',
        'Pack Type (PvP, RPG, Vanilla+)',
        'Number of Assets',
        'Style & Complexity',
        'Version Compatibility'
      ],
      versions: '1.8, 1.16–1.21.5',
      cta: 'Order a Custom Texture Pack'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional Minecraft development services tailored to your vision
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-lg text-gray-600 font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-semibold text-gray-900">Starting at {service.price}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600">Versions: {service.versions}</span>
                  </div>
                </div>

                <button className={`group bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center space-x-2 text-lg font-semibold w-fit`}>
                  <span>{service.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Pricing Factors */}
              <div className="flex-1">
                <div className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-xl border border-white/50`}>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Pricing Factors</h4>
                  <ul className="space-y-4">
                    {service.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;