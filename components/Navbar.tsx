import React from 'react';
import { Activity } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-kanblue-600 p-1.5 rounded-lg shadow-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            Kan.AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-kanblue-600 transition-colors">About</a>
          <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-kanblue-600 transition-colors">Services</a>
          <a href="#principles" className="text-sm font-semibold text-slate-600 hover:text-kanblue-600 transition-colors">Principles</a>
          <a href="#partners" className="text-sm font-semibold text-slate-600 hover:text-kanblue-600 transition-colors">Partners</a>
        </div>

        <div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-0.5">
            Partner with Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;