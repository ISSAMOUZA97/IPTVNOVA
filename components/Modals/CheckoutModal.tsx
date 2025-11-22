import React, { useState } from 'react';
import { X, Lock, Check, CreditCard } from 'lucide-react';
import { PricingPlan } from '../../types';

interface CheckoutModalProps {
  plan: PricingPlan;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="bg-dark-800 w-full max-w-md rounded-2xl border border-white/10 p-8 text-center shadow-2xl">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-green-500/50">
            <Check size={40} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Order Confirmed!</h3>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            Your subscription for <span className="text-white font-bold">{plan.duration}</span> has been reserved. 
            Please check your email for payment instructions and login credentials.
          </p>
          <button onClick={onClose} className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-bold w-full transition-all hover:shadow-lg hover:shadow-primary-600/25">
            Close Window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-dark-800 w-full max-w-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-dark-900/50">
          <h3 className="font-bold text-white flex items-center gap-2 text-lg">
            <Lock size={18} className="text-primary-500" /> Secure Checkout
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-dark-700/50 to-dark-800/50 p-5 rounded-xl border border-white/5">
            <div>
              <p className="text-xs font-bold text-primary-500 uppercase tracking-wider mb-1">Selected Plan</p>
              <p className="font-bold text-white text-xl">{plan.duration} Access</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">Total Price</p>
              <p className="font-bold text-white text-3xl">${plan.price}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-primary-500">*</span></label>
              <input 
                required 
                type="email" 
                className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-all" 
                placeholder="name@example.com" 
              />
              <p className="text-xs text-gray-500 mt-2">Your login credentials will be sent here.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-all" 
                  placeholder="John" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-all" 
                  placeholder="Doe" 
                />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-600/20 flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <span className="flex items-center gap-2">Processing <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div></span>
                ) : (
                  <>
                    Proceed to Payment <CreditCard size={20} className="group-hover:scale-110 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-500 mt-5 flex items-center justify-center gap-2">
                <Lock size={12} /> 256-bit SSL Encrypted Payment
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;