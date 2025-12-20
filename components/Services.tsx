import React from 'react';
import { Network, Brain, Search, Lightbulb, FileText, Compass, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    title: "Automation of Hospital Workflows",
    description: "Modernizing multi-step workflows to reduce manual hand-offs and increase operational throughput.",
    icon: <Network className="w-8 h-8" />,
    features: [
      "Referral and intake optimization",
      "Scheduling and capacity coordination",
      "Administrative task automation",
      "Cross-team workflow orchestration"
    ],
    theme: "blue"
  },
  {
    title: "Applied AI Solutions",
    description: "Artificial intelligence applied where it creates clear, auditable value for human decision-making.",
    icon: <Brain className="w-8 h-8" />,
    features: [
      "Intelligent document access",
      "Decision support for operations",
      "Information triage and prioritization",
      "Context-aware automation"
    ],
    theme: "indigo"
  },
  {
    title: "Strategic Consulting",
    description: "Strategic and technical advisory for healthcare organizations and digital health innovators.",
    icon: <Compass className="w-8 h-8" />,
    features: [
      "Workflow improvement roadmaps",
      "AI and automation strategy",
      "Secure digital architectures",
      "Innovation de-risking and pilots"
    ],
    theme: "cyan"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-kanblue-600 font-black tracking-widest uppercase text-sm mb-6">What We Do</h2>
          <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
            Modernizing how work gets done in healthcare.
          </h3>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Our focus is on operational workflows—the critical processes that sit between patients, clinicians, administrators, and digital systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group relative bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-kanblue-900/5 transition-all duration-500 flex flex-col h-full">
              <div className={`mb-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white shadow-sm group-hover:bg-slate-900 group-hover:text-white`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-kanblue-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 font-medium mb-10 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-kanblue-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Added ChevronRight icon to fix the missing import error */}
              <button className="text-slate-900 font-black text-sm flex items-center gap-2 group/btn uppercase tracking-widest">
                Learn more
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;