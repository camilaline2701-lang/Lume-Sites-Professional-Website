import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  PenTool,
  Zap,
  Search,
  Layout,
  HeadphonesIcon } from
'lucide-react';
const differentiators = [
{
  icon: HeartHandshake,
  title: 'Atendimento Personalizado',
  desc: 'Cada projeto é único, alinhado à identidade e aos objetivos da sua empresa.'
},
{
  icon: PenTool,
  title: 'Design Sob Medida',
  desc: 'Foco total em transmitir profissionalismo e autoridade para sua marca.'
},
{
  icon: Zap,
  title: 'Desenvolvimento Rápido',
  desc: 'Entregas ágeis sem comprometer a qualidade ou os detalhes do projeto.'
},
{
  icon: Search,
  title: 'Otimizado para Google',
  desc: 'Estrutura pensada para SEO desde o primeiro dia de desenvolvimento.'
},
{
  icon: Layout,
  title: '100% Responsivo',
  desc: 'Experiência perfeita em celulares, tablets e computadores.'
},
{
  icon: HeadphonesIcon,
  title: 'Suporte Pós-Entrega',
  desc: 'Acompanhamento contínuo para garantir que tudo funcione perfeitamente.'
}];

export function Differentiators() {
  return (
    <section
      id="diferenciais"
      className="py-24 bg-dark-surface border-y border-white/5">
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a Lume Sites?
            </h2>
            <p className="text-gray-400 text-lg">
              Nosso compromisso vai além do código. Entregamos uma parceria
              estratégica para o seu sucesso digital.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-dark border border-white/5 hover:border-white/10 transition-colors">
            
              <div className="bg-primary/20 p-3 rounded-full shrink-0">
                <item.icon className="w-6 h-6 text-primary-light" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}