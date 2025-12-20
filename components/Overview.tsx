import React from 'react';
import { ShieldCheck, Zap, Cpu, Settings } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-kanblue-600 font-black tracking-widest uppercase text-sm mb-6">About Kan.AI</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Bridging the gap between operational pressure and digital capability.
            </h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
              Healthcare systems operate under increasing pressure—rising demand, constrained capacity, fragmented workflows, and stringent regulatory requirements.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              We design and deliver intelligent workflow solutions that sit at the intersection of healthcare operations, secure digital platforms, and applied artificial intelligence. We focus on end-to-end enablement—connecting people, processes, and systems.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="text-kanblue-600 bg-kanblue-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">AI-Native</h4>
                <p className="text-sm text-slate-500">Built with intelligence at the core, not as a bolt-on.</p>
              </div>
              <div className="space-y-3">
                <div className="text-emerald-600 bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Secure by Design</h4>
                <p className="text-sm text-slate-500">Zero-compromise approach to data and compliance.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden relative shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                alt="Healthcare Workflow" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl">
                <p className="text-slate-800 font-bold italic text-lg leading-relaxed">
                  "Technology should amplify clinical and operational expertise—not replace it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;