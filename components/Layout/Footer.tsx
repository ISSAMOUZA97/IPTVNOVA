import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Tv } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleLinkClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <footer className="bg-black pt-12 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-white mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <Tv size={16} />
              </div>
              <span>IPTV<span className="text-primary-600">NOVA</span></span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed text-sm">
              Experience the future of television. Premium channels, reliable service, and customer support you can count on.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#root" onClick={(e) => handleLinkClick(e, 'root')} className="hover:text-primary-500 transition-colors">Home</a></li>
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e, 'pricing')} className="hover:text-primary-500 transition-colors">Pricing Plans</a></li>
              <li><a href="#features" onClick={(e) => handleLinkClick(e, 'features')} className="hover:text-primary-500 transition-colors">Features</a></li>
              <li><a href="#setup" onClick={(e) => handleLinkClick(e, 'setup')} className="hover:text-primary-500 transition-colors">Installation Guide</a></li>
              <li><a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')} className="hover:text-primary-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal & Help</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#privacy" onClick={(e) => handleLinkClick(e, 'privacy-policy')} className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => handleLinkClick(e, 'terms-of-service')} className="hover:text-primary-500 transition-colors">Terms of Service</a></li>
              <li><a href="#refund" onClick={(e) => handleLinkClick(e, 'refund-policy')} className="hover:text-primary-500 transition-colors">Refund Policy</a></li>
              <li><a href="#support" onClick={(e) => handleLinkClick(e, 'contact-support')} className="hover:text-primary-500 transition-colors">Contact Support</a></li>
              <li><a href="#dmca" onClick={(e) => handleLinkClick(e, 'dmca')} className="hover:text-primary-500 transition-colors">DMCA</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary-600 mt-0.5" />
                <a href="mailto:support@iptvnova.com" className="hover:text-white transition-colors">support@iptvnova.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary-600 mt-0.5" />
                <span>+1 (661) 214-7467</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-600 mt-0.5" />
                <span>14 445th Avenue, United States</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2025 IPTVNOVA Premium. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Pay for IPTV Subscription with Visa" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Pay for IPTV Provider Service with Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;