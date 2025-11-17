import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TrustProps {
  t: (key: string) => string;
  getConstant: (key: string) => any;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// FIX: Explicitly type itemVariants with Variants to fix type inference issue on transition.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
};

const Trust: React.FC<TrustProps> = ({ t, getConstant }) => {
  const testimonials = getConstant('testimonials');

  return (
    <section id="trust" className="py-20 bg-gray-900/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">{t('trustTitle')}</h2>
          <p className="mt-4 text-lg text-gray-400">{t('trustSubtitle')}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial: any) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/80 shadow-lg flex flex-col"
            >
              <div className="text-cyan-400 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.984 22.464q0 2.016 1.152 4.416t3.072 4.128q2.016 1.728 4.512 2.4t5.232 0.672q-1.248-4.32-3.6-7.536t-4.080-4.8q-1.728-1.584-2.832-2.448q-0.384-0.288-0.816-0.72t-0.672-1.008q-0.288-0.576-0.336-1.104q0.048-0.528 0.528-0.912t1.248-0.432q0.768 0 1.44 0.432t1.104 1.104q0.528 0.912 1.344 2.4t1.536 2.88q1.2 2.4 2.832 5.088q1.44 2.4 2.4 4.32q-3.456-0.432-6.384-2.448t-4.944-5.136-2.016-7.008q0-2.208 0.864-4.8t2.448-4.512 3.6-3.312 4.32-1.344q2.016 0.288 3.36 1.68t1.68 3.36q0.288 1.92-0.336 4.080t-1.536 4.224-2.352 3.84-2.784 2.928q-1.2 1.056-1.968 1.872t-1.104 1.488-0.432 1.008-0.096 0.624zM22.464 22.464q0 2.016 1.152 4.416t3.072 4.128q2.016 1.728 4.512 2.4t5.232 0.672q-1.248-4.32-3.6-7.536t-4.080-4.8q-1.728-1.584-2.832-2.448q-0.384-0.288-0.816-0.72t-0.672-1.008q-0.288-0.576-0.336-1.104q0.048-0.528 0.528-0.912t1.248-0.432q0.768 0 1.44 0.432t1.104 1.104q0.528 0.912 1.344 2.4t1.536 2.88q1.2 2.4 2.832 5.088q1.44 2.4 2.4 4.32q-3.456-0.432-6.384-2.448t-4.944-5.136-2.016-7.008q0-2.208 0.864-4.8t2.448-4.512 3.6-3.312 4.32-1.344q2.016 0.288 3.36 1.68t1.68 3.36q0.288 1.92-0.336 4.080t-1.536 4.224-2.352 3.84-2.784 2.928q-1.2 1.056-1.968 1.872t-1.104 1.488-0.432 1.008-0.096 0.624z"></path>
                </svg>
              </div>
              <p className="text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;