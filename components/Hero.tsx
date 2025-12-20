
import React from 'react';
import { ChevronRight, Play, ShieldCheck, Users, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-100 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Next-Gen Clinical Triage v4.0
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              The Intelligent Platform for <span className="gradient-text">Clinical Triage</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Elevating patient care through smarter referral management. Our AI-assisted solution replaces manual, time-consuming processes with a streamlined, evidence-based digital workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Request a Demonstration
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                See How It Works
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Users className="w-5 h-5 text-blue-600" />
                Trusted by 50+ Health Systems
              </div>
            </div>
          </div>

          <div className="relative group lg:block hidden">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-sky-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white border border-slate-200 rounded-[2rem] p-4 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/medtech/800/600" 
                alt="KANAI Platform Dashboard" 
                className="rounded-[1.5rem] w-full object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce-subtle">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Triage Efficiency</div>
                    <div className="text-2xl font-bold text-slate-900">+42% Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;