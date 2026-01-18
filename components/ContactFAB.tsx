import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactFAB: React.FC = () => {
  return (
    <button className="fixed bottom-8 right-8 bg-brand-gold hover:bg-amber-600 text-white p-4 rounded-full shadow-lg shadow-amber-600/30 transition-transform hover:scale-110 z-40 group flex items-center gap-0 hover:gap-2 pr-4 hover:pr-6">
      <MessageCircle size={24} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-semibold whitespace-nowrap">
        Quick Inquiry
      </span>
    </button>
  );
};

export default ContactFAB;