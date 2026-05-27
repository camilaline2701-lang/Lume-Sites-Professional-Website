import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
export function CtaBanner() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Pronto para dar mais credibilidade e autoridade à sua marca?
          </h2>

          <p className="text-primary-light text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium text-white/90">
            Não perca mais clientes por falta de uma presença digital
            profissional. Fale com nossa equipe hoje mesmo e solicite um
            orçamento sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
              
              Quero Saber Mais!
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/5541998563480"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
              
              <MessageCircle className="w-5 h-5" />
              WhatsApp: (41) 99856-3480
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}