import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ServicesProps {
  t: (key: string, options?: any) => string;
  getConstant: (key: string) => any;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Services: React.FC<ServicesProps> = ({ t, getConstant }) => {
  const services = getConstant('services');

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">{t('servicesTitle')}</h2>
          <p className="mt-4 text-lg text-gray-400">{t('servicesSubtitle')}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 max-w-3xl mx-auto"
        >
          {services.map((service: any) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/80 shadow-lg flex flex-col sm:flex-row items-center text-center sm:text-start gap-6 hover:border-cyan-400/50 hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="flex-shrink-0 bg-gray-900/50 text-cyan-400 p-4 rounded-full inline-block border border-cyan-400/20">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;