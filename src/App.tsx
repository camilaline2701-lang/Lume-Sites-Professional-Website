import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentiators } from './components/Differentiators';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
export function App() {
  return (
    <div className="min-h-screen bg-dark flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Differentiators />
        <CtaBanner />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>);

}