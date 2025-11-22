import React from 'react';
import { Tv, Film, Smartphone, ShieldCheck, Globe, Zap } from 'lucide-react';
import { Feature } from '../../types';

const featureList: Feature[] = [
  {
    title: "Live TV Streaming",
    description: "Excellent image quality (FHD/4K). No latency or buffering. Daily channel updates.",
    icon: <Tv size={32} className="text-primary-500" />
  },
  {
    title: "Premium VOD",
    description: "Over 120,000 movies and series on demand. From classic cinema to the latest releases.",
    icon: <Film size={32} className="text-primary-500" />
  },
  {
    title: "Compatible Everywhere",
    description: "Watch on Smart TV, Android, iOS, FireStick, Windows, and MAG boxes effortlessly.",
    icon: <Smartphone size={32} className="text-primary-500" />
  },
  {
    title: "Safe & Secure",
    description: "Encrypted connections ensuring your privacy. Safe checkout process.",
    icon: <ShieldCheck size={32} className="text-primary-500" />
  },
  {
    title: "Global Coverage",
    description: "Channels from UK, USA, Canada, Europe, and beyond in local languages.",
    icon: <Globe size={32} className="text-primary-500" />
  },
  {
    title: "Instant Setup",
    description: "Get your credentials immediately after payment. Easy step-by-step guides included.",
    icon: <Zap size={32} className="text-primary-500" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-12 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose IPTVNOVA As Your <span className="text-primary-600">IPTV Provider</span>?</h2>
          <p className="text-gray-400">We combine cutting-edge technology with a massive content library to deliver the ultimate <strong>IPTV Subscription</strong> experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-primary-600/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-dark-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;