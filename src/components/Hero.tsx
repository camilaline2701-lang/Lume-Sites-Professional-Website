import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80"
          alt="Desenvolvimento de sites profissionais"
          className="w-full h-full object-cover object-center opacity-30" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut'
            }}>
            
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light border border-primary/30 text-sm font-medium mb-6">
              Desenvolvimento Web Profissional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Mais credibilidade e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
                autoridade
              </span>{' '}
              para a sua marca
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ajudamos empresas e profissionais que buscam qualidade a construir
              uma presença digital forte, atrair mais clientes e transmitir
              confiança através de sites modernos e estratégicos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#contato"
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
                
                Quero Saber Mais!
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#servicos"
                className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                
                Ver Serviços
              </a>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.5,
              duration: 0.8
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl mx-auto">
            
            {[
            'Projetos Personalizados',
            'Suporte Dedicado',
            'Foco em Resultados'].
            map((stat, index) =>
            <div
              key={index}
              className="flex items-center justify-center gap-2 text-gray-400">
              
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="font-medium text-sm md:text-base">{stat}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}