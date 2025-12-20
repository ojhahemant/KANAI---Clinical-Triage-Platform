
import React from 'react';
import { BarChart4, ShieldCheck, Layers, Workflow } from 'lucide-react';

const pillars = [
  {
    title: "Advanced Analytics & Models",
    description: "Sophisticated AI for unstructured clinical text analysis, sentiment tracking, and risk classification based on historical outcomes.",
    icon: <BarChart4 className="w-6 h-6" />,
    stats: "99.9% Model Uptime"
  },
  {
    title: "Security & Compliance",
    description: "Built-in auditing, SOC2 Type II compliance, and granular role-based access controls for global data protection (GDPR, HIPAA).",
    icon: <ShieldCheck className="w-6 h-6" />,
    stats: "Military-Grade AES-256"
  },
  {
    title: "Orchestration Engine",
    description: "Complex rule-based routing that adapts to specific clinic requirements, physician availability, and insurance constraints.",
    icon: <Layers className="w-6 h-6" />,
    stats: "20k+ Workflows Supported"
  },
  {
    title: "Unified Provider Interface",
    description: "A single pane of glass for clinicians to review, triage, and communicate, eliminating the need to jump between systems.",
    icon: <Workflow className="w-6 h-6" />,
    stats: "Zero-Click Automation"
  }
];

const Pillars: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">The Foundation</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl leading-tight">
            Core Technology Pillars
          </h3>
        </div>
        <div className="pb-2">
           <button className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 group">
             Download Technical Whitepaper
             <span className="w-8 h-px bg-blue-600 group-hover:w-12 transition-all"></span>
           </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="flex gap-8 p-10 bg-slate-50 rounded-[2rem] border border-slate-200/60 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group">
            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
              {pillar.icon}
            </div>
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{pillar.stats}</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
