import React from 'react';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-semibold text-lg tracking-tight text-gray-900">
            Lumina
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-gray-900 transition">
            How it works
          </a>
          <a href="#templates" className="hover:text-gray-900 transition">
            Templates
          </a>
        </div>

        <a
          href="#cta"
          className="px-5 py-2 rounded-full bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition shadow-sm hover:shadow-md"
        >
          Start Free
        </a>
      </div>
    </nav>
  );
};

export default Navbar;