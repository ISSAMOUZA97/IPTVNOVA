import React from 'react';
import { Star } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white text-dark-900 py-4 border-b-4 border-primary-600">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base font-medium">
        <span>Rated Best <strong>IPTV Provider</strong> by customers <span className="font-bold">Excellent</span></span>
        <div className="flex items-center gap-1 text-green-500">
           <div className="bg-green-500 p-1 text-white"><Star size={16} fill="white" /></div>
           <div className="bg-green-500 p-1 text-white"><Star size={16} fill="white" /></div>
           <div className="bg-green-500 p-1 text-white"><Star size={16} fill="white" /></div>
           <div className="bg-green-500 p-1 text-white"><Star size={16} fill="white" /></div>
           <div className="bg-green-500 p-1 text-white"><Star size={16} fill="white" /></div>
        </div>
        <span>4.8 out of 5 based on <span className="font-bold underline decoration-primary-600">+1,200 reviews</span> on Trustpilot</span>
      </div>
    </div>
  );
};

export default TrustBar;