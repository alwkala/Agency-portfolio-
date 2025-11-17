import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  t: (key: string) => string;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = (): Partial<typeof formData> => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = t('validationNameRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('validationEmailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('validationEmailInvalid');
    }
    if (formData.phone && !/^[\d\s()+-]*$/.test(formData.phone)) {
      newErrors.phone = t('validationPhoneInvalid');
    }
    if (!formData.subject.trim()) newErrors.subject = t('validationSubjectRequired');
    if (!formData.message.trim()) newErrors.message = t('validationMessageRequired');
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setIsSubmitted(false);
    }
  };

  const inputClass = "w-full bg-gray-800/50 border border-gray-700 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(6,182,212,0.5)]";

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">{t('contactTitle')}</h2>
          <p className="mt-4 text-lg text-gray-400">{t('contactSubtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">{t('contactName')}</label>
                  <input type="text" name="name" id="name" placeholder={t('contactName')} value={formData.name} onChange={handleChange} className={inputClass} aria-invalid={!!errors.name} aria-describedby="name-error" />
                  {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1 text-start">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">{t('contactEmail')}</label>
                  <input type="email" name="email" id="email" placeholder={t('contactEmail')} value={formData.email} onChange={handleChange} className={inputClass} aria-invalid={!!errors.email} aria-describedby="email-error" />
                  {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1 text-start">{errors.email}</p>}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label htmlFor="phone" className="sr-only">{t('contactPhone')}</label>
                  <input type="tel" name="phone" id="phone" placeholder={t('contactPhone')} value={formData.phone} onChange={handleChange} className={inputClass} aria-invalid={!!errors.phone} aria-describedby="phone-error" />
                  {errors.phone && <p id="phone-error" className="text-red-400 text-sm mt-1 text-start">{errors.phone}</p>}
              </div>
              <div>
                  <label htmlFor="subject" className="sr-only">{t('contactSubject')}</label>
                  <input type="text" name="subject" id="subject" placeholder={t('contactSubject')} value={formData.subject} onChange={handleChange} className={inputClass} aria-invalid={!!errors.subject} aria-describedby="subject-error" />
                  {errors.subject && <p id="subject-error" className="text-red-400 text-sm mt-1 text-start">{errors.subject}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{t('contactMessage')}</label>
              <textarea name="message" id="message" rows={4} placeholder={t('contactMessage')} value={formData.message} onChange={handleChange} className={inputClass} aria-invalid={!!errors.message} aria-describedby="message-error"></textarea>
              {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1 text-start">{errors.message}</p>}
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  translateY: -5,
                  boxShadow: "0px 10px 20px rgba(6, 182, 212, 0.4)",
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-cyan-500/30"
              >
                {t('contactSend')}
              </motion.button>
            </div>
          </form>
          <AnimatePresence>
            {isSubmitted && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-md text-center"
                >
                    {t('contactSuccess')}
                </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;