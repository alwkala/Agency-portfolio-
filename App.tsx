import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CONTENT } from './constants';
import type { Language, PortfolioItem } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import Portfolio from './components/Portfolio';
import Trust from './components/Trust';
import TechPartners from './components/TechPartners';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioDetail from './components/PortfolioDetail';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const doc = document.documentElement;
    const body = document.body;
    doc.lang = language;
    doc.dir = language === 'ar' ? 'rtl' : 'ltr';
    body.classList.remove('font-inter', 'font-cairo');
    body.classList.add(language === 'ar' ? 'font-cairo' : 'font-inter');
  }, [language]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const t = useCallback((key: keyof typeof CONTENT['en'], options?: any) => {
    const translationData = CONTENT[language][key] || CONTENT['en'][key];

    if (Array.isArray(translationData) && options?.item) {
      return options.item;
    }
    if (typeof translationData === 'string') {
        return translationData;
    }
    return key;
  }, [language]);

  const getConstant = useCallback((key: keyof typeof CONTENT['en']) => {
    return CONTENT[language][key] || CONTENT['en'][key];
  }, [language]);


  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleSelectPortfolio = (item: PortfolioItem) => {
    setSelectedPortfolio(item);
  };

  const handleClosePortfolio = () => {
    setSelectedPortfolio(null);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0 z-20 transition duration-300 hidden md:block"
        style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.1), transparent 80%)`,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full filter blur-3xl animate-[spin_15s_linear_infinite]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full filter blur-3xl animate-[spin_20s_linear_infinite_reverse]"></div>
      </div>
      
      <div className="relative z-10">
        <Header 
          language={language} 
          toggleLanguage={toggleLanguage} 
          t={t} 
        />
        <main>
          <Hero t={t} />
          <Services t={t} getConstant={getConstant} />
          <ValueProposition t={t} getConstant={getConstant} />
          <Portfolio onSelectPortfolio={handleSelectPortfolio} language={language} t={t} />
          <Trust t={t} getConstant={getConstant} />
          <TechPartners t={t} />
          <CallToAction t={t} />
          <Contact t={t} />
        </main>
        <Footer t={t} getConstant={getConstant} />
      </div>

      <AnimatePresence>
        {selectedPortfolio && (
          <PortfolioDetail 
            item={selectedPortfolio} 
            onClose={handleClosePortfolio} 
            language={language}
            t={t}
          />
        )}
      </AnimatePresence>
      <ScrollToTopButton />
    </div>
  );
};

export default App;