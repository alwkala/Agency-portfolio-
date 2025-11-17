import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  t: (key: string) => string;
}

const CallToAction: React.FC<CallToActionProps> = ({ t }) => {
  return (
    <section id="cta" className="py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden border border-cyan-400/30"
        >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/30 rounded-full filter blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-500/30 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">{t('ctaTitle')}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">{t('ctaSubtitle')}</p>
                <div className="mt-8">
                    <motion.a
                        href="#contact"
                        whileHover={{
                        scale: 1.05,
                        boxShadow: '0px 10px 30px rgba(34, 211, 238, 0.4)',
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-cyan-500/30"
                    >
                        {t('ctaButton')}
                    </motion.a>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
