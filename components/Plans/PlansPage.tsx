import React, { useState, useEffect } from 'react';
import { CheckCircle2, Wifi, ArrowLeft, Shield, Zap, Globe, Tv, Smartphone, HelpCircle } from 'lucide-react';
import { DeviceCount, PricingPlan } from '../../types';

/**
 * Note for Next.js App Router Migration:
 * In a real Next.js environment, this file would map to `app/plans/page.tsx`.
 * The Metadata API would be used instead of the client-side JSON-LD injection below.
 * Example:
 * export const metadata: Metadata = {
 *   title: 'Pricing Plans | IPTVNOVA',
 *   description: 'Choose the best IPTV subscription plan...',
 * }
 */

interface PlansPageProps {
  onBack: () => void;
  onSelectPlan: (plan: PricingPlan, deviceCount: number) => void;
}

const PlansPage: React.FC<PlansPageProps> = ({ onBack, onSelectPlan }) => {
  const [activeDevices, setActiveDevices] = useState<DeviceCount>(DeviceCount.ONE);

  // --- Pricing Logic ---
  const getMultiplier = (count: number) => {
    if (count === 1) return 1;
    if (count === 2) return 1.8;
    if (count === 3) return 2.5;
    return 3.2;
  };

  const multiplier = getMultiplier(activeDevices);

  const getFeatures = (connections: number) => [
    "+22,000 Live Channels",
    "+100,000 Movies & Series",
    "4K, FHD & HD Quality",
    "Anti-Freeze Technology",
    `${connections} Simultaneous Connection${connections > 1 ? 's' : ''}`,
    "24/7 Premium Support",
    "Instant Activation"
  ];

  const plans: PricingPlan[] = [
    {
      duration: "1 MONTH",
      price: Number((15.88 * multiplier).toFixed(2)),
      features: getFeatures(activeDevices),
      saveText: "Starter"
    },
    {
      duration: "3 MONTH",
      price: Number((35.88 * multiplier).toFixed(2)),
      saveText: "Save 15%",
      features: getFeatures(activeDevices),
    },
    {
      duration: "6 MONTH",
      price: Number((44.88 * multiplier).toFixed(2)),
      saveText: "Save 30%",
      features: getFeatures(activeDevices),
    },
    {
      duration: "12 MONTH",
      price: Number((68.88 * multiplier).toFixed(2)),
      originalPrice: Number((190.56 * multiplier).toFixed(2)),
      isPopular: true,
      saveText: "Best Value",
      features: getFeatures(activeDevices),
    }
  ];

  // --- SEO: Structured Data (JSON-LD) ---
  // This generates Rich Snippets for "Product" with multiple "Offers" in Google Search.
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `IPTVNOVA Premium Subscription (${activeDevices} Device${activeDevices > 1 ? 's' : ''})`,
      "description": "Access over 22,000 live channels and 100,000 VODs with our premium IPTV service. 4K quality, Anti-Freeze technology, and 24/7 support.",
      "brand": {
        "@type": "Brand",
        "name": "IPTVNOVA"
      },
      "sku": `IPTV-${activeDevices}-DEV`,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": Math.min(...plans.map(p => p.price)),
        "highPrice": Math.max(...plans.map(p => p.price)),
        "offerCount": plans.length,
        "offers": plans.map(plan => ({
          "@type": "Offer",
          "name": `${plan.duration} Plan`,
          "price": plan.price,
          "priceCurrency": "USD",
          "priceValidUntil": new Date(new Date().getFullYear() + 1, 0, 1).toISOString().split('T')[0],
          "availability": "https://schema.org/InStock",
          "description": `Subscription for ${plan.duration} on ${activeDevices} devices.`
        }))
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Update document title for SEO
    document.title = `Pricing Plans (${activeDevices} Devices) | IPTVNOVA`;

    return () => {
      document.head.removeChild(script);
    };
  }, [activeDevices]);

  return (
    <div className="min-h-screen bg-dark-900 pt-20 pb-12">
      {/* --- Header Section --- */}
      <div className="bg-dark-800 border-b border-white/5 pb-12 pt-8">
        <div className="container mx-auto px-4">
          <button 
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Simple, Transparent <span className="text-primary-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400">
              Choose the perfect IPTV package for your needs. No hidden fees, no contracts, just endless entertainment.
            </p>
          </div>

          {/* Device Selector */}
          <div className="flex flex-col items-center mt-10">
            <span className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">How many devices do you need?</span>
            <div className="inline-flex flex-wrap justify-center bg-dark-900 p-1.5 rounded-full border border-white/10">
              {[1, 2, 3, 4].map((count) => (
                <button
                  key={count}
                  onClick={() => setActiveDevices(count as DeviceCount)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                    activeDevices === count 
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Wifi size={18} />
                  {count} {count > 1 ? 'Devices' : 'Device'}
                </button>
              ))}
            </div>
            {activeDevices > 1 && (
              <p className="mt-3 text-green-400 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                <span className="bg-green-500/10 px-2 py-1 rounded">
                  Save up to {Math.round((1 - (multiplier / activeDevices)) * 100)}% per device
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* --- Pricing Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-6 rounded-3xl transition-all duration-300 border group ${
                plan.isPopular 
                  ? 'bg-dark-800 text-white border-primary-600 shadow-2xl shadow-primary-900/20 transform lg:-translate-y-4 z-10' 
                  : 'bg-dark-800/40 border-white/5 hover:border-white/10 hover:bg-dark-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap">
                  Most Popular Choice
                </div>
              )}
              
              <div className="mb-6 text-center pt-2">
                <h3 className="text-lg font-bold text-gray-300 uppercase tracking-widest mb-2">{plan.duration}</h3>
                <div className="flex flex-col items-center justify-center gap-1">
                   {plan.originalPrice && (
                     <span className="text-gray-500 line-through text-sm">${plan.originalPrice}</span>
                   )}
                   <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">${plan.price}</span>
                   <span className="text-gray-500 text-sm font-medium">One-time payment</span>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSelectPlan(plan, activeDevices)}
                className={`w-full py-4 rounded-xl font-bold transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2 ${
                  plan.isPopular 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/25 hover:-translate-y-1' 
                    : 'bg-white text-dark-900 hover:bg-gray-200 hover:-translate-y-1'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* --- Comparison Table --- */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Detailed Plan Comparison</h2>
            <p className="text-gray-400">Everything included in your subscription</p>
          </div>

          <div className="bg-dark-800 rounded-2xl border border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-dark-900 border-b border-white/10">
                    <th className="p-6 text-gray-400 font-medium w-1/3">Features</th>
                    <th className="p-6 text-white font-bold text-center">Standard</th>
                    <th className="p-6 text-primary-500 font-bold text-center bg-primary-900/10">Premium (All Plans)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: "Live TV Channels", standard: "10,000+", premium: "22,000+", icon: <Tv size={18} /> },
                    { name: "VOD (Movies & Series)", standard: "Limited", premium: "100,000+", icon: <Tv size={18} /> },
                    { name: "Picture Quality", standard: "SD/HD", premium: "4K/FHD/HD", icon: <Shield size={18} /> },
                    { name: "Anti-Freeze Technology", standard: "No", premium: "Included", icon: <Zap size={18} /> },
                    { name: "Global Channels", standard: "Limited", premium: "Included", icon: <Globe size={18} /> },
                    { name: "Device Support", standard: "Smart TV Only", premium: "All Devices", icon: <Smartphone size={18} /> },
                    { name: "Customer Support", standard: "Email", premium: "24/7 Priority", icon: <HelpCircle size={18} /> },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-5 text-gray-300 font-medium flex items-center gap-3">
                        <span className="text-gray-500">{row.icon}</span>
                        {row.name}
                      </td>
                      <td className="p-5 text-gray-500 text-center">{row.standard}</td>
                      <td className="p-5 text-white font-bold text-center bg-primary-900/5 shadow-[inset_0_0_20px_rgba(220,38,38,0.05)]">
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-dark-800 to-dark-900 rounded-3xl p-8 border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-8">Our support team is available 24/7 to help you choose the right package.</p>
          <a 
            href="mailto:support@iptvnova.com"
            className="inline-flex items-center gap-2 text-primary-400 font-bold hover:text-primary-300 transition-colors"
          >
            <HelpCircle size={20} />
            Contact Sales Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default PlansPage;
