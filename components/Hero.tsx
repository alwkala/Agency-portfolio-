import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="py-24 md:py-36 text-center">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300 shadow-lg shadow-cyan-500/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 3a1 1 0 00-1-1h- collaborazione-2a1 1 0 100 2h.586l-3.293 3.293a1 1 0 000 1.414l2 2a1 1 0 001.414 0l3.293-3.293V7a1 1 0 102 0V4a1 1 0 00-1-1z" />
              <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9a1 1 0 10-2 0v6H5V5h6a1 1 0 100-2H5z" />
            </svg>
            {t('heroPill')}
          </div>
        </motion.div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block"
          >
            {t('heroTitle1')}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500"
          >
            {t('heroTitle2')}
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300"
        >
          {t('heroSubtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#portfolio"
            whileHover={{
              scale: 1.05,
              translateY: -5,
              boxShadow: '0px 10px 30px rgba(34, 211, 238, 0.4)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group inline-flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-cyan-500/30"
          >
            {t('heroCTA1')}
            <span className="ml-2 rtl:mr-2 rtl:ml-0 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              translateY: -5,
              boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.1)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block bg-transparent border-2 border-gray-600 hover:border-cyan-400 text-gray-200 hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            {t('heroCTA2')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;