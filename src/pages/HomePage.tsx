import React from 'react';
import { Gamepad2, Headphones, Globe2 } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 mb-6">
            Your Portal to Virtual Adventures
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Dive headfirst into a universe of potential. State-of-the-art VR, made for limitless immersion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Headphones className="w-8 h-8" />,
              title: "Immersive Audio",
              description: "3D spatial audio for complete immersion"
            },
            {
              icon: <Globe2 className="w-8 h-8" />,
              title: "Virtual Worlds",
              description: "Explore endless virtual environments"
            },
            {
              icon: <Gamepad2 className="w-8 h-8" />,
              title: "Interactive",
              description: "Responsive controls and haptic feedback"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center hover:transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 text-orange-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80"
            alt="VR Experience"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Pre-order Now</h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Reserve Your Device
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;