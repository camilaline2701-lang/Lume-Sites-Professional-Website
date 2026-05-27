import React from 'react';
import { Lightbulb, Mail, MapPin, Phone } from 'lucide-react';
export function Footer() {
  return (
    <footer
      className="bg-dark-surface border-t border-white/10 pt-16 pb-8"
      id="contato">
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Lume Sites
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Desenvolvimento de sites empresariais modernos e estratégicos para
              ajudar empresas a fortalecer sua presença digital e atrair mais
              clientes.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
              'Início',
              'Sobre Nós',
              'Serviços',
              'Diferenciais',
              'Depoimentos'].
              map((item) =>
              <li key={item}>
                  <a
                  href={`#${item.toLowerCase().replace(' ', '-').replace('ó', 'o')}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm">
                  
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {[
              'Sites Profissionais',
              'Landing Pages',
              'Sites Institucionais',
              'Design Estratégico',
              'Otimização SEO'].
              map((item) =>
              <li key={item} className="text-gray-400 text-sm">
                  {item}
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5541998563480"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-light mt-0.5" />
                  <span className="text-sm">(41) 99856-3480</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:camilaline1994@hotmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-light mt-0.5" />
                  <span className="text-sm break-all">
                    camilaline1994@hotmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">Curitiba - PR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2026 Lume Sites. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Feito com <span className="text-primary">♥</span> para o seu
            sucesso.
          </p>
        </div>
      </div>
    </footer>);

}