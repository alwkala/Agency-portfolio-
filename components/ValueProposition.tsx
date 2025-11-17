import React from 'react';
import { motion } from 'framer-motion';

interface ValuePropositionProps {
  t: (key: string) => string;
  getConstant: (key: string) => any;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ t, getConstant }) => {
  const valuePoints = getConstant('valuePoints');
  return (
    <section id="value-prop" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">{t('valueTitle')}</h2>
          <p className="mt-4 text-lg text-gray-400">{t('valueSubtitle')}</p>
        </motion.div>
        
        <div className="bg-gray-900/30 rounded-xl border border-gray-700/50 p-8 md:p-12 shadow-2xl">
          {valuePoints.map((point: any, index: number) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-stretch gap-6 ${index < valuePoints.length - 1 ? 'mb-8' : ''}`}
            >
              <div className="flex-1 bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
                <h3 className="font-bold text-red-400 mb-3 text-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                  {t('valueProblemTitle')}
                </h3>
                <p className="text-gray-300">{point.problem}</p>
              </div>
              <div className="flex items-center justify-center text-cyan-400 mx-4 hidden md:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
              <div className="flex-1 bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
                <h3 className="font-bold text-green-400 mb-3 text-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {t('valueSolutionTitle')}
                </h3>
                <p className="text-gray-300">{point.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
