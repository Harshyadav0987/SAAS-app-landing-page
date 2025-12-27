import React, { useState } from 'react';
import Logo from "./Logo"


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 px-4 md:px-8 py-4">
      <nav className="max-w-6xl mx-auto bg-white rounded-full shadow-lg px-6 md:px-8 py-3 md:py-4 border border-gray-200">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-gray-700 hover:text-black font-medium transition-colors">
              Pricing
            </a>
            
            <div className="flex items-center gap-4">
              <a href="#signin" className="text-gray-700 hover:text-black font-medium transition-colors">
                Sign in
              </a>
              <a 
                href="#getstarted" 
                className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-4">
            <a href="#pricing" className="text-gray-700 hover:text-black font-medium transition-colors">
              Pricing
            </a>
            <a href="#signin" className="text-gray-700 hover:text-black font-medium transition-colors">
              Sign in
            </a>
            <a 
              href="#getstarted" 
              className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors text-center"
            >
              Get started
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;