import React from 'react';
import { Building2, FlaskConical, Stethoscope, Microscope } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-kanblue-600 font-black tracking-widest uppercase text-sm mb-6">Who We Work With</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-tight tracking-tighter">
              Supporting organizations in regulated environments.
            </h3>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
              Our solutions are particularly suited to organizations looking to modernize operations while maintaining high standards of safety, compliance, and accountability.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Building2 />, text: "Public healthcare providers" },
                { icon: <Stethoscope />, text: "Private healthcare organizations" },
                { icon: <Microscope />, text: "Digital health and life sciences companies" },
                { icon: <FlaskConical />, text: "Healthcare technology partners" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                  <div className="text-kanblue-600 bg-kanblue-50 p-3 rounded-xl">
                    {/* Fixed: Cast to React.ReactElement<any> to allow className injection during cloneElement */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-5 h-5" })}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-12 lg:p-20 rounded-[4rem] border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-kanblue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-slate-900 mb-8">Ready to move faster?</h4>
              <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                We work closely with clinical, operational, and technology stakeholders to ensure solutions are practical, scalable, and aligned with organizational goals.
              </p>
              
              <div className="flex flex-col gap-4">
                <button className="bg-kanblue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-kanblue-200 hover:bg-kanblue-700 transition-all flex items-center justify-center gap-2">
                  Partner with Kan.AI
                </button>
                <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  Schedule Technical Briefing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;