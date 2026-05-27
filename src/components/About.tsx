import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Clock } from 'lucide-react';
export function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-dark-surface relative overflow-hidden">
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

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
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.7
          }}
          className="max-w-3xl mx-auto text-center">
          
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light border border-primary/30 text-sm font-medium mb-6">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre a <span className="text-primary-light">Lume Sites</span>
          </h2>

          <div className="space-y-5 text-gray-300 text-lg leading-relaxed mb-12">
            <p>
              A Lume Sites nasceu com um propósito claro: transformar a presença
              digital de empresas e profissionais que não abrem mão da
              qualidade. Sabemos que um site não é apenas um cartão de visitas,
              é o motor de credibilidade do seu negócio.
            </p>
            <p>
              Nossa filosofia central é simples:{' '}
              <strong className="text-white font-semibold">
                Qualidade e relacionamento duradouro são fundamentais para o
                sucesso.
              </strong>{' '}
              Não entregamos apenas código; entregamos soluções estratégicas
              pensadas para o seu crescimento.
            </p>
          </div>

          <div className="border-l-4 border-secondary pl-5 text-gray-200 italic text-left md:text-center md:border-l-0 md:border-t-0 md:px-8 max-w-2xl mx-auto mb-12">
            <p className="text-lg">
              "Cada site é desenvolvido de forma personalizada, alinhado à
              identidade e aos objetivos de cada empresa, com atendimento
              próximo e foco em transmitir profissionalismo."
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
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
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {[
          {
            icon: Clock,
            label: '+3 Anos',
            desc: 'de experiência'
          },
          {
            icon: Users,
            label: '+50 Clientes',
            desc: 'atendidos'
          },
          {
            icon: Award,
            label: '100%',
            desc: 'de satisfação'
          },
          {
            icon: Target,
            label: 'Foco Total',
            desc: 'em conversão'
          }].
          map((stat, idx) =>
          <div
            key={idx}
            className="bg-dark border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors">
            
              <div className="bg-primary/10 p-3 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-primary-light" />
              </div>
              <h4 className="text-white font-bold text-xl leading-tight mb-1">
                {stat.label}
              </h4>
              <span className="text-gray-400 text-sm">{stat.desc}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

}