import React from 'react';
import { Server, MapPin, CreditCard, ExternalLink, MessageCircle } from 'lucide-react';

const ServerHosting = () => {
  const plans = [
    { name: 'Dirt', ram: '2GB', cores: '1 vCore', disk: '10GB', price: '69' },
    { name: 'Wood', ram: '4GB', cores: '2 vCores', disk: '20GB', price: '149' },
    { name: 'Coal', ram: '5GB', cores: '2 vCores', disk: '20GB', price: '169' },
    { name: 'Stone', ram: '6GB', cores: '2 vCores', disk: '30GB', price: '199' },
    { name: 'Iron', ram: '8GB', cores: '3 vCores', disk: '40GB', price: '299' },
    { name: 'Gold', ram: '10GB', cores: '3 vCores', disk: '40GB', price: '349' },
    { name: 'Diamond', ram: '12GB', cores: '3 vCores', disk: '50GB', price: '399' },
    { name: 'Netherite', ram: '16GB', cores: '4 vCores', disk: '50GB', price: '499' }
  ];

  const getGradient = (planName: string) => {
    const gradients: { [key: string]: string } = {
      'Dirt': 'from-amber-600 to-yellow-600',
      'Wood': 'from-amber-700 to-orange-600',
      'Coal': 'from-gray-700 to-gray-900',
      'Stone': 'from-gray-500 to-gray-700',
      'Iron': 'from-gray-400 to-gray-600',
      'Gold': 'from-yellow-400 to-yellow-600',
      'Diamond': 'from-cyan-400 to-blue-500',
      'Netherite': 'from-purple-600 to-pink-600'
    };
    return gradients[planName] || 'from-gray-500 to-gray-700';
  };

  return (
    <section id="hosting" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Server className="w-12 h-12 text-cyan-600" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Server Hosting
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Reliable and Affordable Server Hosting
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In partnership with ArialNodes, we offer a range of high-performance server plans to fit your needs.
          </p>
        </div>

        {/* Hosting Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${index === 6 ? 'border-cyan-200 ring-4 ring-cyan-100' : 'border-gray-100'}`}>
              {index === 6 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getGradient(plan.name)} flex items-center justify-center shadow-lg mx-auto mb-4`}>
                  <Server className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name} Plan</h3>
                
                <div className="text-4xl font-bold mb-6">
                  <span className={`bg-gradient-to-r ${getGradient(plan.name)} bg-clip-text text-transparent`}>
                    ₹{plan.price}
                  </span>
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">RAM</span>
                    <span className="font-semibold text-gray-900">{plan.ram}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">CPU</span>
                    <span className="font-semibold text-gray-900">{plan.cores}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Storage</span>
                    <span className="font-semibold text-gray-900">{plan.disk}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Server Information */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/30 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Server Locations</h3>
              <p className="text-gray-600">India 🇮🇳, Germany 🇩🇪</p>
            </div>
            
            <div className="text-center">
              <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Methods</h3>
              <p className="text-gray-600">UPI, PayPal (extra charges), Crypto (Litecoin, 10% extra)</p>
            </div>
            
            <div className="text-center">
              <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">High Performance</h3>
              <p className="text-gray-600">99.9% uptime guarantee with premium hardware</p>
            </div>
          </div>
        </div>

        {/* How to Order */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">How to Order</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            To order a server, join the ArialNodes Discord to create a ticket or visit their official site: arialnodes.in
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-lg font-semibold">
              <MessageCircle className="w-5 h-5" />
              <span>Join Discord to Order</span>
            </button>
            
            <button className="group bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center space-x-2 text-lg font-semibold">
              <ExternalLink className="w-5 h-5" />
              <span>Visit ArialNodes Website</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerHosting;