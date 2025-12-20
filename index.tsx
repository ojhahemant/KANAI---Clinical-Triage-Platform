import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Activity, ShieldCheck, Zap, Cpu, Network, Brain, 
  Compass, HeartPulse, Scale, Target, Handshake, 
  Building2, Microscope, Stethoscope, FlaskConical,
  ChevronRight, Menu, X, ArrowRight 
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-kanblue-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="bg-kanblue-600 p-1.5 rounded-lg shadow-lg">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">Kan.AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-kanblue-600 transition-colors">Overview</a>
            <a href="#about" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-kanblue-600 transition-colors">About</a>
            <a href="#whatwedo" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-kanblue-600 transition-colors">What We Do</a>
            <a href="#services" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-kanblue-600 transition-colors">Services</a>
            <a href="#principles" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-kanblue-600 transition-colors">Principles</a>
            <a href="#partners" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-kanblue-600 transition-colors">Who We Work With</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:block">
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-black transition-all shadow-lg shadow-slate-200">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600">Overview</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600">About</a>
            <a href="#whatwedo" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600">What We Do</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600">Services</a>
            <a href="#principles" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600">Principles</a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600">Who We Work With</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 lg:pt-64 lg:pb-48 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-kanblue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-8">
              Kan.AI
            </h1>
            <p className="text-2xl lg:text-4xl italic font-light text-kanblue-600 mb-12 tracking-tight">
              Intelligent workflows for modern healthcare
            </p>
            <div className="w-24 h-1 bg-slate-900 mb-12"></div>
            <p className="text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12">
              We help complex service environments move faster, operate more efficiently, and make better decisions—without compromising safety, compliance, or trust.
            </p>
            <a href="#overview" className="inline-flex items-center gap-3 text-slate-900 font-black uppercase text-sm tracking-widest group">
              Explore Overview
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-kanblue-600 mb-8">Overview</h2>
              <p className="text-xl lg:text-2xl font-semibold text-slate-800 leading-relaxed mb-8">
                Kan.AI is a technology company focused on building secure, AI-native workflow platforms for healthcare and life sciences organisations.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Our approach combines deep domain understanding with modern cloud-native engineering, applied selectively and responsibly. Kan.AI works with public and private healthcare providers, digital health innovators, and enterprise partners to modernise operations and unlock measurable efficiency gains.
              </p>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-200 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-kanblue-50 p-3 rounded-xl text-kanblue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-black text-slate-900 uppercase tracking-widest text-sm">Trust & Security</span>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed italic">
                "Our approach combines deep domain understanding with modern cloud-native engineering, applied selectively and responsibly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-kanblue-600 mb-8">About Kan.AI</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-10">
              Addressing the intersection of operational pressure and innovation.
            </h3>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Healthcare systems operate under increasing pressure—rising demand, constrained capacity, fragmented workflows, and stringent regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Rather than building isolated tools, we focus on <strong className="text-slate-900">end-to-end workflow enablement</strong>—connecting people, processes, and systems in a way that improves throughput, reduces administrative burden, and supports better outcomes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed italic">
                We believe technology should amplify clinical and operational expertise—not replace it.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "AI-native, but not AI-dependent",
                "Secure by design",
                "Interoperable with existing systems",
                "Suitable for regulated healthcare environments"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-kanblue-600"></div>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="whatwedo" className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(37,99,235,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-kanblue-400 mb-8">What We Do</h2>
              <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight mb-10">
                Helping healthcare modernise how work gets done.
              </h3>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                Our focus is on operational workflows—the processes that sit between patients, clinicians, administrators, and digital systems.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                  <span className="text-kanblue-400 font-black">01</span>
                  <span className="font-bold text-lg">Automation of Hospital and Care Workflows</span>
                </div>
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                  <span className="text-kanblue-400 font-black">02</span>
                  <span className="font-bold text-lg">Applied AI Solutions</span>
                </div>
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10">
                  <span className="text-kanblue-400 font-black">03</span>
                  <span className="font-bold text-lg">Strategic and Technical Consulting</span>
                </div>
              </div>
            </div>
            <div className="bg-kanblue-600 rounded-[3rem] p-12 lg:p-20 flex flex-col justify-center">
              <h4 className="text-3xl font-black mb-6">Workflow-first.</h4>
              <p className="text-lg text-kanblue-100 font-medium leading-relaxed">
                "Each engagement is tailored to the organisation’s context, maturity, and regulatory environment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-kanblue-600 mb-20">Services</h2>
          
          <div className="space-y-32">
            {/* 1. Automation */}
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h4 className="text-3xl lg:text-4xl font-black mb-8 leading-tight">1. Automation of Hospital Workflows</h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Healthcare delivery relies on complex, multi-step workflows involving clinicians, administrative teams, and supporting systems. Kan.AI designs automation solutions that reduce manual hand-offs and improve visibility.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Referral and intake workflows",
                    "Scheduling and capacity coordination",
                    "Administrative task automation",
                    "Cross-team workflow orchestration"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-kanblue-600 rounded-full flex-shrink-0"></div>
                      <span className="font-bold text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <p className="text-slate-500 font-medium leading-relaxed italic">
                  "We take a workflow-first approach, ensuring that automation aligns with real-world clinical and operational practices rather than forcing process change for technology’s sake."
                </p>
              </div>
            </div>

            {/* 2. AI Solutions */}
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="order-2 lg:order-1 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <p className="text-slate-500 font-medium leading-relaxed italic">
                  "We deliberately avoid “black-box” AI in favour of systems that organisations can trust, validate, and govern."
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="text-3xl lg:text-4xl font-black mb-8 leading-tight">2. AI Solutions</h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Kan.AI applies artificial intelligence where it creates clear, auditable value. Our solutions are designed to support human decision-making, particularly in regulated healthcare environments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Intelligent document access",
                    "Decision support",
                    "Information triage",
                    "Context-aware automation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-kanblue-600 rounded-full flex-shrink-0"></div>
                      <span className="font-bold text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Consulting */}
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h4 className="text-3xl lg:text-4xl font-black mb-8 leading-tight">3. Consulting</h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Strategic and technical consulting to identify high-impact workflow improvement opportunities and define AI and automation roadmaps.
                </p>
                <div className="space-y-4">
                   <div className="p-4 border-l-4 border-kanblue-600 bg-slate-50 font-bold text-slate-700">
                     Design secure, compliant digital architectures
                   </div>
                   <div className="p-4 border-l-4 border-kanblue-600 bg-slate-50 font-bold text-slate-700">
                     De-risk early-stage innovation and pilots
                   </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-12 bg-slate-900 rounded-[3rem] text-white">
                <p className="text-xl font-bold text-center leading-relaxed">
                  "We work closely with clinical, operational, and technology stakeholders."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-kanblue-600 mb-20">Our Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Healthcare-first design", desc: "Technology must fit clinical and operational realities." },
              { title: "Responsible AI", desc: "AI should be explainable, auditable, and governed." },
              { title: "Security by default", desc: "Built in from the start, not added later." },
              { title: "Pragmatic innovation", desc: "Focus on measurable outcomes, not experimentation." },
              { title: "Partnership mindset", desc: "We work with organisations, not around them." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-slate-900">{p.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-kanblue-600 mb-8">Who We Work With</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-10">
                Building for complexity and accountability.
              </h3>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                Kan.AI works with organisations operating in complex, regulated healthcare environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Public healthcare providers",
                  "Private healthcare organisations",
                  "Digital health companies",
                  "Healthcare technology partners"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700">
                    <div className="bg-kanblue-50 p-2 rounded-lg text-kanblue-600">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-12 lg:p-16 rounded-[4rem] text-white">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-kanblue-400 mb-8">Internal Alignment</h4>
              <h5 className="text-2xl font-black mb-8 leading-tight">Positioning Statement</h5>
              <div className="space-y-6 opacity-80">
                <p className="text-sm font-bold border-l-2 border-kanblue-600 pl-4">AI-native, but not AI-led hype</p>
                <p className="text-sm font-bold border-l-2 border-kanblue-600 pl-4">Operationally focused, not tool-centric</p>
                <p className="text-sm font-bold border-l-2 border-kanblue-600 pl-4">Built for regulated healthcare environments</p>
                <p className="text-sm font-bold border-l-2 border-kanblue-600 pl-4">Suitable for public-sector and enterprise adoption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <div className="bg-kanblue-600 p-1.5 rounded-lg">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">Kan.AI</span>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">
            Intelligent Workflows for Modern Healthcare
          </p>
          <div className="w-12 h-px bg-slate-200 mx-auto mb-8"></div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            &copy; {new Date().getFullYear()} Kan.AI Operations. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);