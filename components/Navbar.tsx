import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-joyx-blue to-joyx-cyan">
            JOYX
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
          <a href="/technology.html" className="hover:text-joyx-blue transition-colors">Technology</a>
          <a href="/solutions.html" className="hover:text-joyx-blue transition-colors">Solutions</a>
          <a href="/partners.html" className="hover:text-joyx-blue transition-colors">Partners</a>
          <a href="/about.html" className="hover:text-joyx-blue transition-colors">About Us</a>
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-gradient-to-r from-joyx-blue to-joyx-cyan text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all transform duration-200">
          Request Demo
        </button>

        {/* Mobile Menu Icon (Simplified for this demo) */}
        <button className="md:hidden text-slate-800 text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;