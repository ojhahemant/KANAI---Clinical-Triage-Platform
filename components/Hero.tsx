import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-kanblue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-kanblue-50 border border-kanblue-100 rounded-full text-sm font-bold text-kanblue-700 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-kanblue-600 rounded-full animate-pulse-slow"></span>
            Responsible AI-Native Platforms
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-10 tracking-tighter">
            Intelligent workflows for <span className="gradient-text">modern healthcare.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-12 max-w-2xl">
            Kan.AI helps complex service environments move faster, operate more efficiently, and make better decisions—without compromising safety, compliance, or trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
              Explore Our Solutions
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              View AI Roadmap
            </button>
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-x-12 gap-y-6 opacity-40">
            <span className="text-xs font-black uppercase tracking-[0.3em]">Built for</span>
            <span className="text-xl font-bold tracking-tighter italic">Public Providers</span>
            <span className="text-xl font-bold tracking-tighter italic">Life Sciences</span>
            <span className="text-xl font-bold tracking-tighter italic">Innovators</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;