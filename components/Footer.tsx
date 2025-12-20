
import React from 'react';
import { Activity, Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Ready to Optimize Your Referral Process?</h2>
            <p className="text-xl text-blue-50 mb-10 opacity-90">
              Join leading health systems in delivering faster, smarter care. Our team is ready to show you the impact of KANAI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:-translate-y-1">
                Request a Demonstration
              </button>
              <button className="w-full sm:w-auto bg-blue-700/50 text-white border border-blue-400/30 hover:bg-blue-700 px-10 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2">
                Connect with our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">KANAI</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-xs">
              Smarter patient referral management for the modern health system. Built on proprietary AI to elevate clinical standards.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#workflow" className="hover:text-blue-600 transition-colors">Triage Workflow</a></li>
              <li><a href="#capabilities" className="hover:text-blue-600 transition-colors">AI Engine</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@kanai.ai</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-400">
          <div>&copy; {new Date().getFullYear()} KANAI Inc. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
