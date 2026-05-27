import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Rocket,
  Building2,
  Palette,
  Smartphone,
  MessageCircle,
  ArrowRight } from
'lucide-react';
const services = [
{
  icon: Monitor,
  title: 'Sites Profissionais',
  desc: 'Acabe com a falta de presença online. Criamos sites responsivos que transmitem confiança e autoridade para sua marca.'
},
{
  icon: Rocket,
  title: 'Landing Pages',
  desc: 'Páginas focadas em alta conversão para campanhas. Ideal para negócios que precisam atrair clientes e gerar vendas rápidas.'
},
{
  icon: Building2,
  title: 'Sites Institucionais',
  desc: 'Apresente sua empresa de forma impecável. Supere a baixa credibilidade com um portal moderno e atualizado.'
},
{
  icon: Palette,
  title: 'Design Estratégico',
  desc: 'Layouts modernos alinhados à sua identidade visual, projetados para guiar o usuário e facilitar a tomada de decisão.'
},
{
  icon: Smartphone,
  title: 'Otimização SEO & Mobile',
  desc: 'Seu site rápido e bem posicionado no Google, funcionando perfeitamente em qualquer celular ou tablet.'
},
{
  icon: MessageCircle,
  title: 'Integração WhatsApp',
  desc: 'Facilite o contato direto. Botões e formulários integrados com WhatsApp e redes sociais para não perder nenhuma oportunidade.'
}];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-dark">
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
              Serviços e Soluções
            </h2>
            <p className="text-gray-400 text-lg">
              Resolvemos os principais desafios da sua presença digital com
              soluções sob medida para atrair, engajar e converter.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-dark-surface border border-white/5 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group flex flex-col h-full">
            
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary-light" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>

              <a
              href="https://wa.me/5541998563480"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:text-secondary-hover transition-colors mt-auto w-fit group/btn">
              
                Saiba Mais
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}