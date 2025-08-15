import React from 'react';
import { Eye, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Medieval Castle Complex',
      category: 'Custom Build',
      description: 'A massive medieval castle with intricate details, multiple towers, and a surrounding village.',
      image: 'https://images.pexels.com/photos/161154/castle-hohenzollern-baden-wurttemberg-germany-161154.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-stone-500 to-gray-600'
    },
    {
      id: 2,
      title: 'PvP Arena Plugin',
      category: 'Plugin Development',
      description: 'Advanced PvP arena system with matchmaking, spectator mode, and custom game mechanics.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Cyberpunk Texture Pack',
      category: 'Texture Pack',
      description: 'Futuristic 32x texture pack with neon colors and cyberpunk aesthetics.',
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-cyan-500 to-purple-500'
    },
    {
      id: 4,
      title: 'Skyblock Server Setup',
      category: 'Server Setup',
      description: 'Complete skyblock server with custom islands, challenges, and economy system.',
      image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 5,
      title: 'Fantasy RPG World',
      category: 'Custom Build',
      description: 'Expansive fantasy world with multiple biomes, dungeons, and quest locations.',
      image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 6,
      title: 'Economy Management Plugin',
      category: 'Plugin Development',
      description: 'Comprehensive economy system with shops, auctions, and banking features.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See What We've Created - A gallery of our proudest projects. This page is regularly updated with our latest work.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold mb-3`}>
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see your project featured here?
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-xl font-semibold">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;