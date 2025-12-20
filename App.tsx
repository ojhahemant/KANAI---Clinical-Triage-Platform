import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Overview from './components/Overview.tsx';
import Services from './components/Services.tsx';
import Principles from './components/Principles.tsx';
import Partners from './components/Partners.tsx';
import AIDemo from './components/AIDemo.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-900 bg-[#f8fafc]">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Overview />
      <Services />
      <Principles />
      <Partners />
      <section id="demo" className="py-24 border-t border-slate-200">
        <AIDemo />
      </section>
      <Footer />
    </div>
  );
}