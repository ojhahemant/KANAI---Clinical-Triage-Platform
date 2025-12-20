
import React from 'react';
import { Database, Zap, ClipboardCheck, CalendarCheck } from 'lucide-react';

const steps = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Digital Intake & Context Assembly",
    description: "Automatically gather and organize patient referral data from various sources into a unified clinical context.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI-Driven Prioritization",
    description: "Our proprietary AI analyzes incoming referrals to prioritize cases based on clinical urgency and risk factors.",
    color: "bg-sky-100 text-sky-600"
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Clinician Decision & Pathway Selection",
    description: "Provide clinicians with a clear, evidence-based view for faster, high-confidence decision-making.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Automated Scheduling & Notification",
    description: "Seamlessly schedule appointments and notify patients and providers through integrated digital channels.",
    color: "bg-emerald-100 text-emerald-600"
  }
];

const Workflow: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">The Process</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">The KANAI Triage Workflow</h3>
        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
          From referral submission to appointment confirmation, we optimize every touchpoint.
        </p>
      </div>

      <div className="relative">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-12 -z-10"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="absolute top-8 right-8 text-4xl font-black text-slate-50 select-none group-hover:text-slate-100 transition-colors">
                0{idx + 1}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 pr-6 leading-tight">
                {step.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
