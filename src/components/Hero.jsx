import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className='md:mt-20'>
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-800 mb-6">
              Creative Design Solutions
            </h1>
            <p className="text-xl text-zinc-600 mb-8 md:leading-10">
              Transforming ideas into visually stunning experiences. Specializing in brand identity, 
              digital design, and creative direction.
            </p>
            <a
              href="#portfolio"
              className="md:mt-20 inline-flex items-center px-6 py-3 hover:bg-zinc-950 text-white rounded-lg bg-zinc-800 transition-colors"
            >
              View Work
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="relative ">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
              alt="Design workspace"
              className="rounded-2xl shadow-2xl md:h-[600px] md:w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;