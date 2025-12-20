
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import Advantage from './components/Advantage';
import Pillars from './components/Pillars';
import Value from './components/Value';
import AIDemo from './components/AIDemo';
import Footer from './components/Footer';

/**
 * KANAI Platform Landing Page
 * Integrates intelligent triage workflows with a modern healthcare interface.
 */
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position to adjust Navbar appearance.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar scrolled={scrolled} />
      
      <main>
        {/* Introduction and primary CTA */}
        <Hero />

        {/* Detailed process breakdown */}
        <section id="workflow" className="py-24 bg-white">
          <Workflow />
        </section>

        {/* Technical differentiation and EHR integration */}
        <section id="advantage" className="py-24 bg-slate-900 text-white overflow-hidden">
          <Advantage />
        </section>

        {/* Foundation technology and compliance */}
        <section id="capabilities" className="py-24 bg-white">
          <Pillars />
        </section>

        {/* Interactive Gemini AI demo for clinical triage */}
        <section id="demo" className="py-24 bg-slate-50 border-y border-slate-200">
          <AIDemo />
        </section>

        {/* Performance metrics and trust signals */}
        <section id="value" className="py-24 bg-blue-700 text-white">
          <Value />
        </section>
      </main>

      <Footer />
    </div>
  );
}
