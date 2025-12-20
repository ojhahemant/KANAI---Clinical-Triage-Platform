
import React from 'react';

const stats = [
  {
    value: "50%",
    label: "Reduction in Manual Tasks",
    description: "Boost operational efficiency by automating repetitive intake and sorting processes."
  },
  {
    value: "30%",
    label: "Reduction in Triage Time",
    description: "Accelerate decision-making with AI-powered insights and clear recommendations."
  },
  {
    value: "95%+",
    label: "Clinical Concordance Rate",
    description: "Ensure consistent, high-quality triage decisions aligned with clinical best practices."
  },
  {
    value: "2X",
    label: "Factor Access to Care",
    description: "Improve patient experience by reducing wait times and scheduling care sooner."
  }
];

const Value: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-3">Proven Results</h2>
      <h3 className="text-4xl font-extrabold text-white sm:text-5xl mb-20">Delivering Measurable Value</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="relative group">
            <div className="text-6xl lg:text-7xl font-black text-white mb-4 transition-transform group-hover:scale-110 duration-500">
              {stat.value}
            </div>
            <div className="h-1.5 w-12 bg-blue-300 mx-auto mb-6 rounded-full"></div>
            <h4 className="text-xl font-bold text-blue-50 mb-3 leading-tight">{stat.label}</h4>
            <p className="text-blue-100/80 leading-relaxed text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-16 border-t border-white/10 grid md:grid-cols-3 gap-8 items-center">
         <div className="text-left">
           <div className="text-3xl font-bold">Trusted by Leaders</div>
           <div className="text-blue-200">Our impact across the ecosystem.</div>
         </div>
         <div className="md:col-span-2 flex flex-wrap justify-between gap-8 opacity-40">
           {['HealthOne', 'MedPoint', 'CityGeneral', 'ValleyCare', 'BioCore'].map(name => (
             <span key={name} className="text-2xl font-black tracking-tighter italic">{name}</span>
           ))}
         </div>
      </div>
    </div>
  );
};

export default Value;
