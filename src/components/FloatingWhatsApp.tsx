import React from 'react';
import { MessageCircle } from 'lucide-react';
export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5541998563480?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Lume%20Sites"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp">
      
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <MessageCircle className="w-7 h-7 relative z-10" />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-sm font-medium py-2 px-4 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco agora!
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45"></div>
      </div>
    </a>);

}