
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Language, PortfolioItem } from '../types';

interface PortfolioDetailProps {
  item: PortfolioItem;
  onClose: () => void;
  language: Language;
  t: (key: string) => string;
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ item, onClose, language, t }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative bg-gray-900/80 border border-gray-700 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 end-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="h-80 md:h-96 w-full overflow-hidden">
            <img src={item.gallery[0] || item.image} alt={item.title[language]} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 md:p-10">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">{item.category}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{item.title[language]}</h2>
            <p className="mt-4 text-gray-300">{item.description[language]}</p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-cyan-400 text-lg">{t('detailGoal')}</h3>
                    <p className="mt-2 text-gray-400">{item.details.goal[language]}</p>
                </div>
                <div>
                    <h3 className="font-bold text-cyan-400 text-lg">{t('detailProcess')}</h3>
                    <p className="mt-2 text-gray-400">{item.details.process[language]}</p>
                </div>
                <div>
                    <h3 className="font-bold text-cyan-400 text-lg">{t('detailResult')}</h3>
                    <p className="mt-2 text-gray-400">{item.details.result[language]}</p>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="font-bold text-cyan-400 text-xl mb-4">{t('detailGallery')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.gallery.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`${item.title[language]} gallery image ${index + 1}`} className="w-full h-auto rounded-md object-cover" />
                    ))}
                </div>
            </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default PortfolioDetail;
