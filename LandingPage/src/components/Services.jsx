import React from 'react';
import { Zap, Database, Shield, BarChart, Cloud, Users } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics engine and real-time reporting."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Growth Tracking",
      description: "Monitor your business metrics in real-time with customizable dashboards and intelligent forecasting."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work together efficiently with built-in collaboration tools and real-time synchronization."
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-black" />
            <span className="text-xs tracking-[0.3em] text-gray-600 font-medium uppercase">
              Our Services
            </span>
            <div className="h-px w-8 bg-black" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Everything you need to
            <span className="block mt-2 font-serif italic bg-black bg-clip-text text-transparent">
              scale faster
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Powerful features designed to help your business grow and succeed in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className='flex items-center justify-center'>
                 <div className="w-16 h-16 mb-6 rounded-xl bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
 
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:gap-5"
          >
            Register now for Free - No credit card required.
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;