import React from 'react';
import { MessageCircle, Users, Ticket, Clock } from 'lucide-react';

const Contact = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Join Our Discord',
      description: 'The primary way to get in touch and place an order.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Ticket,
      title: 'Create a Ticket',
      description: 'Open a ticket in the designated channel.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Discuss Your Project',
      description: 'Our team will review your request and get back to you as soon as possible.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Let's Build Your Dream Server!
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Follow these simple steps to begin your project with us.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg mb-6 mx-auto`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200/30 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Clock className="w-8 h-8 text-cyan-600" />
              <span className="text-lg font-semibold text-gray-700">Available 24/7 for Support</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our Discord community and create a ticket to discuss your project requirements. Our expert team is ready to bring your vision to life!
            </p>
            
            <button className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-12 py-6 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-2xl text-xl font-bold flex items-center justify-center space-x-3 mx-auto">
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Join Our Discord to Get Started</span>
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              Response time: Usually within 1-2 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;