import React from 'react';
import { Palette, Monitor, Layout, Users } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Brand Identity',
      description: 'Creating unique and memorable brand identities that stand out.'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Digital Design',
      description: 'Crafting engaging digital experiences for web and mobile.'
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Print Design',
      description: 'Delivering high-quality print materials that make an impact.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Art Direction',
      description: 'Guiding creative projects from concept to completion.'
    }
  ];

  return (
    <div id="about" className="py-16  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-800 mb-4">About Me</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            With over 8 years of experience in graphic design, I help brands tell their 
            stories through meaningful and impactful visual communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-zinc-900 text-white rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                {service.title}
              </h3>
              <p className="text-zinc-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;