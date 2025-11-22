import React from 'react';
import { Play, Info } from 'lucide-react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  
  const handleNav = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    onNavigate?.(section);
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/MTCm0B0R/meilleur28-1536x808-(1).webp" 
          alt="Best IPTV Subscription Dashboard and Channel List" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium text-gray-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            #1 Rated IPTV Provider 2025
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            The Ultimate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-red-400">IPTV Subscription.</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join the world's most reliable <strong>IPTV Provider</strong>. Access over 23,000 live channels and 120,000 movies & shows. 
            Experience 4K buffer-free streaming on any device with our premium service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#pricing"
              onClick={(e) => handleNav(e, 'pricing')}
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-1"
            >
              Get Started Now
            </a>
            <a 
              href="#features"
              onClick={(e) => handleNav(e, 'features')}
              className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <Info size={20} />
              Explore Features
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1"><CheckMark /> No Contracts</span>
            <span className="flex items-center gap-1"><CheckMark /> Instant Activation</span>
            <span className="flex items-center gap-1"><CheckMark /> Money Back Guarantee</span>
          </div>
        </div>

        <div className="hidden lg:block relative">
            {/* Abstract stylistic elements representing screens */}
            <div className="relative z-10 transform rotate-y-12 hover:rotate-y-6 transition-transform duration-700">
               <div className="bg-gradient-to-br from-gray-800 to-black p-2 rounded-2xl shadow-2xl border border-gray-700">
                  <img 
                    src="https://i.postimg.cc/Ls0cpyS7/tv-1024x636-1-1.webp" 
                    alt="Live Sports Streaming on Top IPTV Provider" 
                    className="rounded-xl shadow-inner opacity-90" 
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-dark-800/90 backdrop-blur p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 animate-bounce-slow">
                     <div className="bg-primary-600 rounded-full p-2"><Play size={20} fill="white" /></div>
                     <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Currently Live</p>
                        <p className="font-bold text-white">Champions League Final</p>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/20 blur-[120px] rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

const CheckMark = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default Hero;