import React from 'react';

const Logo = () => {
  return (
    <a href="#" className="flex items-center gap-2.5 group">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-600 rounded-lg transform group-hover:scale-105 transition-transform"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      
      <span className="text-2xl font-bold text-gray-900 tracking-tight">
        Nexus<span className="text-black">Flow</span>
      </span>
    </a>
  );
};

export default Logo;