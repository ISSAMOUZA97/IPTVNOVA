import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../../types';

const faqData: FaqItem[] = [
  {
    question: "What devices support your IPTV Subscription?",
    answer: "Our IPTV Subscription is compatible with almost all devices including Smart TVs (Samsung, LG, Android TV), FireStick, Apple TV, MAG boxes, Smartphones (iOS/Android), Tablets, and PC/Mac."
  },
  {
    question: "Do I need a VPN to use your IPTV Provider service?",
    answer: "No, our service is secure and does not require a VPN. However, if your ISP throttles streaming traffic, our IPTV Subscription works seamlessly with all major VPN providers."
  },
  {
    question: "Can I watch on multiple devices simultaneously?",
    answer: "Yes! We offer flexible IPTV subscription plans supporting up to 4 simultaneous connections. You can select your desired device limit on the pricing section."
  },
  {
    question: "How fast is the activation process?",
    answer: "Activation is nearly instant. Once your payment is confirmed for your IPTV Subscription, you will receive an email with your login credentials and setup instructions typically within 5-15 minutes."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Absolutely. As a trusted IPTV Provider, we offer a 7-day money-back guarantee if you encounter technical issues that our support team cannot resolve."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 bg-dark-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked <span className="text-primary-600">Questions</span></h2>
          <p className="text-gray-400">Everything you need to know about our premium <strong>IPTV Subscription</strong> service.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === idx 
                  ? 'border-primary-600 bg-dark-900' 
                  : 'border-white/5 bg-dark-900/50 hover:border-white/10'
              }`}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-white focus:outline-none"
              >
                {item.question}
                {openIndex === idx ? <Minus className="text-primary-600" /> : <Plus className="text-gray-400" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;