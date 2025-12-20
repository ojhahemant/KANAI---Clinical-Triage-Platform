
import React, { useState } from 'react';
import { analyzeReferral } from '../services/gemini';
import { Sparkles, Loader2, AlertCircle, CheckCircle2, Clock, Zap } from 'lucide-react';
import { DemoAnalysis } from '../types';

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
      setError("Failed to process analysis. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch(urgency.toLowerCase()) {
      case 'emergency': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Live Experience</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Test the KANAI Intelligence</h3>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
          Paste a mock clinical referral note below to see how our AI performs risk stratification in real-time.
        </p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row min-h-[500px]">
        <div className="lg:w-1/2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
          <div className="flex items-center gap-2 mb-6 text-blue-600 font-bold">
            <Sparkles className="w-5 h-5" />
            Clinical Input Engine
          </div>
          
          <div className="space-y-4 mb-8">
             <label className="block text-sm font-bold text-slate-700">Paste Clinical Note</label>
             <textarea 
               className="w-full h-48 p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-800 placeholder:text-slate-400"
               placeholder="E.g. Patient presents with acute abdominal pain, rebound tenderness..."
               value={input}
               onChange={(e) => setInput(e.target.value)}
             />
          </div>

          <div className="mb-8">
             <p className="text-xs font-bold text-slate-400 uppercase mb-3">Try Example:</p>
             <div className="flex flex-wrap gap-2">
               {MOCK_REFERRALS.map((m, i) => (
                 <button 
                   key={i} 
                   onClick={() => setInput(m)}
                   className="text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 px-3 py-1.5 rounded-full transition-colors border border-transparent hover:border-blue-100"
                 >
                   Case {i+1}
                 </button>
               ))}
             </div>
          </div>

          <button 
            onClick={handleAnalyze}
            disabled={loading || !input.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5 fill-current" />}
            Run Triage Analysis
          </button>
        </div>

        <div className="lg:w-1/2 bg-slate-50 p-8 lg:p-12 flex flex-col justify-center">
          {!analysis && !loading && !error && (
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <Clock className="w-10 h-10" />
              </div>
              <p className="text-slate-500 font-medium">Awaiting input for analysis...</p>
            </div>
          )}

          {loading && (
            <div className="text-center animate-pulse">
               <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
               </div>
               <p className="text-blue-600 font-bold">KANAI AI is analyzing clinical data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl flex gap-4 text-red-700">
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="font-bold">Analysis Failed</p>
                <p className="text-sm opacity-90">{error}</p>
              </div>
            </div>
          )}

          {analysis && !loading && (
            <div className="animate-fade-in-up space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-bold text-slate-900">Triage Results</h4>
                <div className={`px-4 py-1.5 rounded-full text-sm font-bold border ${getUrgencyColor(analysis.urgency)} flex items-center gap-2`}>
                   <div className="w-2 h-2 rounded-full bg-current"></div>
                   Priority: {analysis.urgency}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                   <div className="text-xs font-bold text-slate-400 uppercase mb-2">Clinical Reasoning</div>
                   <p className="text-slate-800 leading-relaxed">{analysis.reasoning}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="text-xs font-bold text-slate-400 uppercase mb-2">Suggested Pathway</div>
                      <p className="text-slate-800 font-bold">{analysis.suggestedPathway}</p>
                   </div>
                   <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="text-xs font-bold text-slate-400 uppercase mb-2">Patient Risk</div>
                      <p className="text-slate-800 font-bold">{analysis.patientRisk}</p>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-green-600 text-sm font-bold pt-4">
                <CheckCircle2 className="w-5 h-5" />
                Evidence-based recommendation ready for clinician review.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDemo;
