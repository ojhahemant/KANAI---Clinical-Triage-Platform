
import React from 'react';
import { BrainCircuit, Cpu, Globe } from 'lucide-react';

const Advantage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <Cpu className="w-96 h-96 text-blue-500" />
      </div>

      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Strategic Edge</h2>
          <h3 className="text-4xl font-extrabold text-white sm:text-5xl mb-8 leading-tight">
            AI-Driven & System-Agnostic Infrastructure
          </h3>
          <p className="text-xl text-slate-400 leading-relaxed mb-12">
            Our platform is built on two core principles: leveraging proprietary AI for unmatched clinical insight and ensuring universal integration to fit seamlessly into your existing ecosystem.
          </p>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">The Power of Proprietary AI</h4>
                <p className="text-slate-400 leading-relaxed">
                  Engineered specifically for healthcare, our ML models excel at referral analysis, risk stratification, and detecting clinical nuances often missed by standard systems.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-900">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Universal Integration</h4>
                <p className="text-slate-400 leading-relaxed">
                  Built to be system-agnostic. We connect via FHIR/HL7 to Epic, Cerner, Meditech, and all major EHRs, ensuring zero disruption to your current clinical workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-blue-600/5 rounded-[4rem] p-8 border border-white/5 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.1),transparent)]"></div>
            
            <div className="grid grid-cols-2 gap-6 w-full relative z-10">
              <div className="space-y-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl transform hover:-translate-y-1 transition-transform">
                  <div className="text-blue-500 font-black text-[10px] mb-1 uppercase tracking-[0.2em]">Connectivity</div>
                  <div className="text-lg font-black text-white">Standard FHIR</div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl transform hover:-translate-y-1 transition-transform translate-x-4">
                  <div className="text-sky-400 font-black text-[10px] mb-1 uppercase tracking-[0.2em]">Analytics</div>
                  <div className="text-lg font-black text-white">NLP Extraction</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl transform hover:-translate-y-1 transition-transform -translate-x-4">
                  <div className="text-indigo-400 font-black text-[10px] mb-1 uppercase tracking-[0.2em]">Decision</div>
                  <div className="text-lg font-black text-white">Risk Scoring</div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl transform hover:-translate-y-1 transition-transform">
                  <div className="text-emerald-400 font-black text-[10px] mb-1 uppercase tracking-[0.2em]">Automation</div>
                  <div className="text-lg font-black text-white">Smart Routing</div>
                </div>
              </div>
            </div>

            {/* Subtle glow instead of the confusing icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
