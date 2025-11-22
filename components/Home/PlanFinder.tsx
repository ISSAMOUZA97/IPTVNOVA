import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getPlanRecommendation } from '../../services/geminiService';

const PlanFinder: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const result = await getPlanRecommendation(query);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-600 to-primary-800 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform group"
      >
        <Sparkles className="animate-pulse" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-dark-800 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/10">
          Find my plan
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-dark-800 w-full max-w-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-6 bg-gradient-to-br from-dark-800 to-dark-900">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-primary-500 mb-2">
                  <Sparkles size={20} />
                  <span className="font-bold text-sm uppercase tracking-wider">AI Plan Assistant</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">✕</button>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Not sure which plan to choose?</h3>
              <p className="text-gray-400 text-sm mb-6">Tell us what you like to watch (e.g., "Premier League and Movies", "Kids shows and News") and our AI will suggest the best option.</p>

              <form onSubmit={handleSearch} className="relative mb-6">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="I watch football and action movies..."
                  className="w-full bg-dark-700 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-600 focus:outline-none transition-colors"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary-600 rounded-lg text-white hover:bg-primary-700 disabled:opacity-50 transition-colors"
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>

              {recommendation && (
                <div className="bg-primary-900/30 border border-primary-500/30 rounded-xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-primary-100 text-sm font-medium leading-relaxed">
                    "{recommendation}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanFinder;