import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">

          {/* Left: Brand & Location */}
          <div className="text-center md:text-left">
            <a href="/index.html" className="text-2xl font-extrabold tracking-tighter text-slate-900 block mb-4">
              JOYX<span className="text-joyx-cyan">AI</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Palo Alto • Kuala Lumpur<br />
              Redefining Native Advertising with AI.
            </p>
          </div>

          {/* Right: Navigation (Consistent with Navbar) */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm font-semibold text-slate-600">
            <a href="/technology.html" className="hover:text-joyx-blue transition-colors">Technology</a>
            <a href="/solutions.html" className="hover:text-joyx-blue transition-colors">Solutions</a>
            <a href="/partners.html" className="hover:text-joyx-blue transition-colors">Partners</a>
            <a href="/about.html" className="hover:text-joyx-blue transition-colors">About Us</a>
          </div>

        </div>

        {/* Bottom: Copyright Only (No Social Media) */}
        <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          <p>© 2026 JOYX Holdings Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;