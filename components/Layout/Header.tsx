import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Tv } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (section: string) => void;
  currentView?: 'home' | 'blog-post';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      // Fallback for default behavior
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || currentView === 'blog-post'
          ? 'bg-dark-900/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'root')}
          className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-white cursor-pointer"
        >
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-red-500/20 shadow-lg">
            <Tv size={20} />
          </div>
          <span>IPTV<span className="text-primary-600">NOVA</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-8 font-medium text-sm transition-colors ${isScrolled || currentView === 'blog-post' ? 'text-gray-300' : 'text-gray-200'}`}>
          <a href="#root" onClick={(e) => handleNavClick(e, 'root')} className="hover:text-white transition-colors">Home</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="hover:text-white transition-colors">Pricing</a>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="hover:text-white transition-colors">Features</a>
          <a href="#setup" onClick={(e) => handleNavClick(e, 'setup')} className="hover:text-white transition-colors">Setup Guide</a>
          <a href="#blog" onClick={(e) => handleNavClick(e, 'blog')} className="hover:text-white transition-colors">Blog</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`transition-colors ${isScrolled || currentView === 'blog-post' ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}>
            <Search size={20} />
          </button>
          <a 
            href="#pricing"
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-primary-600/25"
          >
            Free Trial
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-t border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          <a href="#root" className="text-gray-300 hover:text-white py-2" onClick={(e) => handleNavClick(e, 'root')}>Home</a>
          <a href="#pricing" className="text-gray-300 hover:text-white py-2" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
          <a href="#features" className="text-gray-300 hover:text-white py-2" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
          <a href="#setup" className="text-gray-300 hover:text-white py-2" onClick={(e) => handleNavClick(e, 'setup')}>Setup Guide</a>
          <a href="#blog" className="text-gray-300 hover:text-white py-2" onClick={(e) => handleNavClick(e, 'blog')}>Blog</a>
          <button onClick={(e) => handleNavClick(e as any, 'pricing')} className="bg-primary-600 w-full py-3 rounded-lg font-bold text-white mt-2">
            Get Free Trial
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;