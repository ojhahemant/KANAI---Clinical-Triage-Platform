
import React from 'react';
import { Activity } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            KANAI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Workflow', 'Advantage', 'Capabilities', 'Value'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-blue-600 px-4 py-2 transition-colors">
            Log In
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Request a Demonstration
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
