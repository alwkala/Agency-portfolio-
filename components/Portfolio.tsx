
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import type { Language, PortfolioItem } from '../types';
import { PortfolioCategory } from '../types';

interface PortfolioProps {
  onSelectPortfolio: (item: PortfolioItem) => void;
  language: Language;
  t: (key: string) => string;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const Portfolio: React.FC<PortfolioProps> = ({ onSelectPortfolio, language, t }) => {
  const categories = ['All', ...Object.values(PortfolioCategory)];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white">{t('portfolioTitle')}</h2>
          <p className="mt-4 text-lg text-gray-400">{t('portfolioSubtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-cyan-500 text-gray-900 border-cyan-500'
                  : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/80 hover:text-white'
              }`}
            >
              {language === 'ar' && category === 'All' ? 'الكل' : category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                onClick={() => onSelectPortfolio(item)}
                className="group relative overflow-hidden rounded-lg cursor-pointer shadow-2xl"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0px 0px 30px rgba(6, 182, 212, 0.5)"
                }}
              >
                <img src={item.image} alt={item.title[language]} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">{item.category}</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{item.title[language]}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;