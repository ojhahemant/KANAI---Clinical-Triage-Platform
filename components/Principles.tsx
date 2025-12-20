import React from 'react';
import { HeartPulse, Scale, ShieldCheck, Target, Handshake } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: <HeartPulse />,
    title: "Healthcare-first design",
    description: "Technology must fit clinical and operational realities, not the other way around."
  },
  {
    icon: <Scale />,
    title: "Responsible AI",
    description: "AI should be explainable, auditable, and governed to ensure safety."
  },
  {
    icon: <ShieldCheck />,
    title: "Security by default",
    description: "Privacy and compliance are built in from the start, never added later."
  },
  {
    icon: <Target />,
    title: "Pragmatic innovation",
    description: "Focus on measurable outcomes, not experimentation for its own sake."
  },
  {
    icon: <Handshake />,
    title: "Partnership mindset",
    description: "We work with organizations as trusted long-term strategic partners."
  }
];

const Principles: React.FC = () => {
  return (
    <section id="principles" className="py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(37,99,235,0.05),transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-kanblue-400 font-black tracking-widest uppercase text-sm mb-6">Our Principles</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Guided by a commitment to healthcare excellence.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {PRINCIPLES.map((p, idx) => (
            <div key={idx} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="text-kanblue-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                {/* Fixed: Cast to React.ReactElement<any> to allow className injection during cloneElement */}
                {React.cloneElement(p.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
              </div>
              <h4 className="text-lg font-black mb-4 leading-tight">{p.title}</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;