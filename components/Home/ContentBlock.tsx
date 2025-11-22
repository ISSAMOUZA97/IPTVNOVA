import React from 'react';

interface ContentBlockProps {
  title: string;
  highlight: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
  ctaText: string;
  onAction?: () => void;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, highlight, description, imageUrl, imageAlt, reversed, ctaText, onAction }) => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-12 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {title} <span className="text-primary-600">{highlight}</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
            <p className="text-lg text-gray-400 leading-relaxed">
              {description}
            </p>
            <button 
              onClick={onAction}
              className="bg-white text-dark-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl"
            >
              {ctaText}
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary-600/20 blur-[80px] rounded-full -z-10"></div>
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="rounded-2xl shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500" 
            />
            
            {/* Stylized Elements */}
            <div className={`absolute -bottom-6 ${reversed ? '-left-6' : '-right-6'} w-24 h-24 bg-dots-pattern opacity-30`}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentBlock;