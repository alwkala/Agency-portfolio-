import React from 'react';
import type { Language } from '../types';
import { motion } from 'framer-motion';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, t }) => {
  const navLinks = [
    { key: 'navHome', href: '#' },
    { key: 'navServices', href: '#services' },
    { key: 'navPortfolio', href: '#portfolio' },
    { key: 'navContact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 p-4"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-black tracking-wider text-white uppercase">
              AL<span className="text-cyan-400">W</span>KALA
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleLanguage}
            className="font-bold text-sm tracking-widest bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-md transition-all duration-300"
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;