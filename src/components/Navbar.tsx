import React, { useEffect, useState } from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Início',
    href: '#inicio'
  },
  {
    name: 'Sobre',
    href: '#sobre'
  },
  {
    name: 'Serviços',
    href: '#servicos'
  },
  {
    name: 'Diferenciais',
    href: '#diferenciais'
  },
  {
    name: 'Contato',
    href: '#contato'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
            <Lightbulb className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Lume Sites
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) =>
            <li key={link.name}>
                <a
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                
                  {link.name}
                </a>
              </li>
            )}
          </ul>
          <a
            href="#contato"
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm">
            
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">
          
          {isMobileMenuOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-dark-surface border-b border-white/10 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-300 hover:text-white py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                  {link.name}
                </a>
            )}
              <a
              href="#contato"
              className="bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-lg font-medium transition-colors text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                Fale Conosco
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}