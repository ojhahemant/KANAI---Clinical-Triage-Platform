import React from 'react';
import { Activity, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-16 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-kanblue-600 p-2 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-slate-900">Kan.AI</span>
            </div>
            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm mb-10">
              Intelligent workflow platforms for complex, regulated healthcare and life science environments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-kanblue-600 hover:border-kanblue-600 transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-kanblue-600 hover:border-kanblue-600 transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.3em] mb-8">Solutions</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><a href="#" className="hover:text-kanblue-600 transition-colors">Hospital Automation</a></li>
              <li><a href="#" className="hover:text-kanblue-600 transition-colors">Applied AI</a></li>
              <li><a href="#" className="hover:text-kanblue-600 transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.3em] mb-8">Company</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><a href="#" className="hover:text-kanblue-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-kanblue-600 transition-colors">Principles</a></li>
              <li><a href="#" className="hover:text-kanblue-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.3em] mb-8">Clinical HQ</h4>
            <ul className="space-y-5 text-slate-500 font-bold text-sm">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-kanblue-600" /> partners@kan.ai</li>
              <li className="flex items-start gap-3">
                <span className="w-4 h-4 text-kanblue-600 mt-0.5">📍</span>
                San Francisco, London, Sydney
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          <div>&copy; {new Date().getFullYear()} Kan.AI Operations. AI-Native Workflow Platform.</div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;