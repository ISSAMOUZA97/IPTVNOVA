import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Home/Hero';
import TrustBar from './components/Home/TrustBar';
import ContentBlock from './components/Home/ContentBlock';
import Pricing from './components/Home/Pricing';
import Features from './components/Home/Features';
import FAQ from './components/Home/FAQ';
import Footer from './components/Layout/Footer';
import PlanFinder from './components/Home/PlanFinder';
import Blog from './components/Home/Blog';
import BlogPostPage from './components/Blog/BlogPostPage';
import SetupGuidePage from './components/Setup/SetupGuidePage';
import LegalPage, { LegalDocType } from './components/Legal/LegalPage';
import PlansPage from './components/Plans/PlansPage';
import { BlogPost, PricingPlan } from './types';

type ViewState = 'home' | 'blog-post' | 'setup' | 'legal' | 'plans';

function App() {
  const [view, setView] = useState<ViewState>('home');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('privacy');

  const handleReadPost = (post: BlogPost) => {
    setActivePost(post);
    setView('blog-post');
  };

  const handleBackToHome = () => {
    setView('home');
    setActivePost(null);
    window.scrollTo(0, 0);
  };

  const handleNavigate = (sectionId: string) => {
    // Handle specific pages
    if (sectionId === 'setup') {
      setView('setup');
      return;
    }
    
    // Explicit Plans Page Navigation
    if (sectionId === 'plans-page') {
      setView('plans');
      return;
    }

    // Handle Legal Pages
    if (['privacy-policy', 'terms-of-service', 'refund-policy', 'dmca', 'contact-support'].includes(sectionId)) {
      if (sectionId === 'privacy-policy') setActiveLegalDoc('privacy');
      if (sectionId === 'terms-of-service') setActiveLegalDoc('terms');
      if (sectionId === 'refund-policy') setActiveLegalDoc('refund');
      if (sectionId === 'dmca') setActiveLegalDoc('dmca');
      if (sectionId === 'contact-support') setActiveLegalDoc('contact');
      setView('legal');
      return;
    }

    if (view !== 'home') {
      setView('home');
      // Wait for render then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan, deviceCount: number = 1) => {
    const deviceText = deviceCount === 1 ? '1 device' : `${deviceCount} devices`;
    const message = `Hello, I am interested in the ${plan.duration} subscription plan for ${deviceText}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=447391350989&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden font-sans">
      <Header onNavigate={handleNavigate} currentView={view === 'home' ? 'home' : 'blog-post'} />
      
      <main>
        {view === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <TrustBar />
            
            <div className="space-y-0">
              <ContentBlock 
                title="Experience Every Major"
                highlight="Sporting Event"
                description="Never miss a match again. As the premier IPTV Provider for sports, we provide front-row access to the world's biggest events with our stable IPTV Subscription in crystal clear HD and 4K quality."
                imageUrl="https://picsum.photos/800/600?random=1"
                imageAlt="Watch Live Sports Events with High Quality IPTV Subscription"
                ctaText="View Sports Schedule"
                onAction={() => handleNavigate('pricing')}
                reversed={true}
              />
              
              <Pricing onSelectPlan={handleSelectPlan} />
              
              <div className="flex justify-center pb-12 bg-dark-900 -mt-6">
                <button 
                  onClick={() => setView('plans')}
                  className="text-gray-400 hover:text-white underline decoration-primary-600 underline-offset-4 text-sm font-bold transition-colors"
                >
                  Compare All Plans & Features
                </button>
              </div>
              
              <ContentBlock 
                title="Cinema Quality"
                highlight="In Your Living Room"
                description="Access a massive library of VOD content including the latest blockbusters and series updated daily. It's like having a cinema in your pocket with your IPTVNOVA IPTV Subscription."
                imageUrl="https://i.postimg.cc/W40jYYX7/Screens-removebg-preview.png"
                imageAlt="Huge VOD Library Movies and Series from Best IPTV Provider"
                ctaText="Browse Library"
                onAction={() => handleNavigate('pricing')}
                reversed={false}
              />

              <Features />
              <Blog onReadPost={handleReadPost} />
              <FAQ />
              
              {/* CTA Bottom */}
              <section className="py-16 container mx-auto px-4">
                <div className="bg-gradient-to-r from-primary-900 to-dark-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                   <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern opacity-10"></div>
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Transform Your TV?</h2>
                   <p className="text-gray-200 mb-8 max-w-2xl mx-auto relative z-10">Join thousands of satisfied customers and start streaming premium content today with our risk-free IPTV Subscription.</p>
                   <button 
                    onClick={() => handleNavigate('pricing')}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary-600/30 transition-all relative z-10 hover:-translate-y-1"
                   >
                     Get Your Subscription Now
                   </button>
                </div>
              </section>
            </div>
            <PlanFinder />
          </>
        )}

        {view === 'plans' && (
          <PlansPage onBack={handleBackToHome} onSelectPlan={handleSelectPlan} />
        )}
        
        {view === 'blog-post' && activePost && (
          <BlogPostPage post={activePost} onBack={handleBackToHome} />
        )}

        {view === 'setup' && (
          <SetupGuidePage onBack={handleBackToHome} />
        )}

        {view === 'legal' && (
          <LegalPage type={activeLegalDoc} onBack={handleBackToHome} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;