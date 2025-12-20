import React, { useState } from 'react';
import { analyzeReferral } from '../services/gemini.ts';
import { Sparkles, Loader2, AlertCircle, CheckCircle2, FileText, Zap } from 'lucide-react';
import { DemoAnalysis } from '../types.ts';

const MOCK_REFERRALS = [
  "Patient 45M, presenting with sudden onset left-sided chest pain radiating to jaw. History of hypertension. Diaphoretic.",
  "Female 32Y, routine follow up for thyroid nodules. No new symptoms. Labs within normal limits last visit.",
  "Child 8Y, persistent cough for 2 weeks, low grade fever, mild wheezing on exertion. No history of asthma."
];

const AIDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState<DemoAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeReferral(input);
      setAnalysis(result);
    } catch (err) {
      setError("Failed to process analysis. Our secure gateway might be unavailable.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch(urgency.toLowerCase()) {
      case 'emergency': return 'text-red-700 bg-red-50 border-red-200';
      case 'high': return 'text-orange-700 bg-orange-50 border-orange-200';
      case 'medium': return 'text-blue-700 bg-blue-50 border-blue-200';
      default: return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <h2 className="text-kanblue-600 font-black tracking-widest uppercase text-sm mb-6">Decision Support Demo</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
          Applied AI in Operational Triage
        </h3>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          See how Kan.AI can identify risk factors and prioritize information in regulated clinical environments. This demo highlights our commitment to explainable, auditable AI.
        </p>
      </div>

      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row min-h-[600px]">
        <div className="lg:w-1/2 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col">
          <div className="flex items-center gap-2 mb-8 text-kanblue-600 font-black uppercase text-xs tracking-widest">
            <Sparkles className="w-4 h-4" />
            Decision Engine Input
          </div>
          
          <div className="flex-grow flex flex-col">
             <label className="block text-sm font-black text-slate-700 uppercase tracking-widest mb-4">Referral Context</label>
             <textarea 
               className="flex-grow w-full p-6 rounded-3xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-kanblue-100 focus:border-kanblue-400 transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium resize-none mb-8"
               placeholder="Enter a referral clinical note..."
               value={input}
               onChange={(e) => setInput(e.target.value)}
             />
          </div>

          <div className="mb-10">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Standard Clinical Mockups:</p>
             <div className="flex flex-wrap gap-2">
               {MOCK_REFERRALS.map((m, i) => (
                 <button 
                   key={i} 
                   onClick={() => setInput(m)}
                   className="text-xs bg-white border border-slate-200 hover:border-kanblue-300 hover:bg-kanblue-50 hover:text-kanblue-700 text-slate-600 px-4 py-2 rounded-xl font-bold transition-all shadow-sm"
                 >
                   Case {i+1}
                 </button>
               ))}
             </div>
          </div>

          <button 
            onClick={handleAnalyze}
            disabled={loading || !input.trim()}
            className="w-full bg-slate-900 hover:bg-black disabled:bg-slate-300 text-white font-black py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Zap className="w-6 h-6" />}
            Analyze Workflow Prioritization
          </button>
        </div>

        <div className="lg:w-1/2 bg-slate-50/50 p-8 lg:p-16 flex flex-col justify-center relative">
          {!analysis && !loading && !error && (
            <div className="text-center opacity-40">
              <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <FileText className="w-12 h-12 text-slate-400" />
              </div>
              <p className="text-slate-500 font-black uppercase text-sm tracking-[0.2em]">Ready for Analysis</p>
            </div>
          )}

          {loading && (
            <div className="text-center">
               <div className="w-24 h-24 bg-kanblue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                 <Loader2 className="w-12 h-12 text-kanblue-600 animate-spin" />
               </div>
               <p className="text-kanblue-700 font-black uppercase text-sm tracking-[0.2em]">Executing Applied AI Model...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 p-8 rounded-[2rem] flex gap-5 text-red-700 shadow-sm">
              <AlertCircle className="w-8 h-8 flex-shrink-0" />
              <div>
                <p className="font-black text-lg uppercase tracking-tight mb-2">Gatekeeper Blocked</p>
                <p className="font-medium opacity-80">{error}</p>
              </div>
            </div>
          )}

          {analysis && !loading && (
            <div className="animate-fade-in space-y-8">
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-3xl font-black text-slate-900 tracking-tight">Audit Result</h4>
                <div className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-[0.2em] border shadow-sm ${getUrgencyColor(analysis.urgency)}`}>
                   {analysis.urgency}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                   <div className="text-[10px] font-black text-kanblue-600 uppercase tracking-widest mb-4">Reasoning & Evidence</div>
                   <p className="text-slate-700 leading-relaxed font-medium italic">"{analysis.reasoning}"</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Suggested Pathway</div>
                      <p className="text-slate-900 font-black text-lg leading-tight">{analysis.suggestedPathway}</p>
                   </div>
                   <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Risk Profile</div>
                      <p className="text-slate-900 font-black text-lg leading-tight">{analysis.patientRisk}</p>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-emerald-600 text-xs font-black uppercase tracking-[0.2em] pt-6 opacity-80">
                <CheckCircle2 className="w-5 h-5" />
                Explainable Audit Completed
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDemo;