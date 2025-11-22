import React, { useState } from 'react';
import { CheckCircle2, Wifi } from 'lucide-react';
import { DeviceCount, PricingPlan } from '../../types';

interface PricingProps {
  onSelectPlan?: (plan: PricingPlan, deviceCount: number) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [activeDevices, setActiveDevices] = useState<DeviceCount>(DeviceCount.ONE);

  // Base price multiplier based on device count
  const getMultiplier = (count: number) => {
    if (count === 1) return 1;
    if (count === 2) return 1.8; // Discount for 2
    if (count === 3) return 2.5;
    return 3.2;
  };

  const multiplier = getMultiplier(activeDevices);

  // Common features list from reference image
  const getFeatures = (connections: number) => [
    "+22,000 channels",
    "+100,000 movies",
    "+20,000 series",
    "4K, FHD, HD and SD quality",
    "EPG and logos included",
    "99% Stable",
    `${connections} connexion${connections > 1 ? 's' : ''}`,
    "Support 24/7"
  ];

  const plans: PricingPlan[] = [
    {
      duration: "12 MONTH",
      price: Number((68.88 * multiplier).toFixed(2)),
      originalPrice: Number((190.56 * multiplier).toFixed(2)), // Fake original price for visual discount
      isPopular: true,
      saveText: "Best Value",
      features: getFeatures(activeDevices),
    },
    {
      duration: "6 MONTH",
      price: Number((44.88 * multiplier).toFixed(2)),
      saveText: "Save 30%",
      features: getFeatures(activeDevices),
    },
    {
      duration: "ONE MONTH",
      price: Number((15.88 * multiplier).toFixed(2)),
      features: getFeatures(activeDevices),
    },
    {
      duration: "3 MONTH",
      price: Number((35.88 * multiplier).toFixed(2)),
      saveText: "Save 15%",
      features: getFeatures(activeDevices),
    }
  ];

  return (
    <section id="pricing" className="py-12 relative bg-dark-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-primary-500 font-bold tracking-wider uppercase text-sm">Flexible IPTV Subscription Plans</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">Choose Your <span className="text-primary-600">IPTV Provider</span> Package</h2>
          <p className="text-gray-400 text-lg">Get the best value with our premium <strong>IPTV Subscription</strong>. Unlock thousands of channels instantly with no hidden fees.</p>
        </div>

        {/* Device Toggles */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((count) => (
            <button
              key={count}
              onClick={() => setActiveDevices(count as DeviceCount)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeDevices === count 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 scale-105' 
                  : 'bg-dark-700 text-gray-400 hover:bg-dark-600 shadow-sm'
              }`}
            >
              <Wifi size={18} />
              {count} Device{count > 1 ? 's' : ''}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 border ${
                plan.isPopular 
                  ? 'bg-dark-800 text-white border-primary-600 shadow-2xl shadow-primary-900/20 transform md:-translate-y-4 z-10' 
                  : 'bg-dark-800/50 border-white/5 hover:border-white/10 shadow-none'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              {plan.saveText && !plan.isPopular && (
                <div className="absolute top-4 right-4 bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded">
                  {plan.saveText}
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">{plan.duration}</h3>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-900/50 border-4 border-dark-700">
                     <span className="text-2xl font-bold text-white">${plan.price}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm ${plan.isPopular ? 'text-gray-300' : 'text-gray-400'}`}>
                    <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSelectPlan?.(plan, activeDevices)}
                className={`w-full py-3 rounded-xl font-bold transition-all uppercase tracking-wider text-sm ${
                  plan.isPopular 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/25 hover:-translate-y-1' 
                    : 'bg-white/10 hover:bg-white/20 text-white hover:-translate-y-1'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;