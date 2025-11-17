import React from 'react';
import { motion } from 'framer-motion';

interface TechPartnersProps {
  t: (key: string) => string;
}

const TechPartners: React.FC<TechPartnersProps> = ({ t }) => {
  const partners = [
    { name: 'React', logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
    { name: 'Framer Motion', logo: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 21"><path d="M7 0H0v7h7V0zM0 7h7l7 7H7v7l-7-7V7z"/></svg> },
    { name: 'Tailwind CSS', logo: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><path fill="#38bdf8" d="M27 0c-7.2 0-13.5 3.6-17.4 9.3 3.9-3.9 9.3-6 15-6 6.3 0 11.7 2.4 15.9 6.6C40.5 3.6 34.2 0 27 0zM9.6 9.3C3.9 15 .3 22.5.3 30.6c0 .9.3 1.8.6 2.4 1.2-6.9 6.3-12.6 12.9-15.3-4.2-4.2-9-6.9-14.1-8.4zM44.4 9.3c-5.1 1.5-9.9 4.2-14.1 8.4 6.6 2.7 11.7 8.4 12.9 15.3.3-.6.6-1.5.6-2.4.1-8.1-3.5-15.6-9.3-21.3z"/></svg> },
    // FIX: Replaced complex SVG JSX with React.createElement to avoid parsing issues.
    { name: 'Vite', logo: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 401 401" },
        React.createElement('g', { clipPath: "url(#a)" },
          React.createElement('path', { fill: "url(#b)", d: "M380.1 74.4c-8.3-14.5-22-26-38.2-31.8-16.2-5.8-33.8-5.2-49.8.7-16.1 5.8-29.9 17.2-38.3 31.8-11.2 19.6-11.2 43.1 0 62.7l126.4 221.7c8.4 14.6 22.2 26.1 38.4 31.8 16.2 5.8 33.8 5.2 49.8-.7 16.1-5.8 29.9-17.2 38.3-31.8 11.2-19.6 11.2-43.1 0-62.7L380.1 74.4Z" }),
          React.createElement('path', { fill: "url(#c)", d: "M.9 123.5C-.4 104.9 5.8 86.8 17.5 72.3c11.7-14.5 28.5-24.5 46.9-27.5 18.4-3 37.1.6 52.2 10.3l126.3 80.9c15.1 9.7 25.8 25.1 29.7 42.4 3.9 17.3 1 35.6-8.3 50.8-11.6 15.2-28.8 25.3-47.2 28.3-18.4 3-37.1-.6-52.2-10.3L38.6 266.3c-15.1-9.7-25.8-25-29.7-42.3-3.9-17.3-1-35.6 8.3-50.8L.9 123.5Z" })
        ),
        React.createElement('defs', null,
          React.createElement('linearGradient', { id: "b", x1: "439.8", x2: "310.2", y1: "21.7", y2: "352.4", gradientUnits: "userSpaceOnUse" },
            React.createElement('stop', { stopColor: "#41D1FF" }),
            React.createElement('stop', { offset: "1", stopColor: "#BD34FE" })
          ),
          React.createElement('linearGradient', { id: "c", x1: "16.5", x2: "284.5", y1: "36.8", y2: "310.2", gradientUnits: "userSpaceOnUse" },
            React.createElement('stop', { stopColor: "#FFEA83" }),
            React.createElement('stop', { offset: ".08", stopColor: "#FFDD35" }),
            React.createElement('stop', { offset: "1", stopColor: "#FFA800" })
          ),
          React.createElement('clipPath', { id: "a" },
            React.createElement('path', { fill: "#fff", d: "M0 0h401v401H0z" })
          )
        )
      ) },
    { name: 'Node.js', logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.74 180.74"><path fill="#8CC84B" d="M174.93 90.37c0-2.3-1.12-3.48-3.4-3.48h-12.3c-2.3 0-3.48 1.18-3.48 3.48v56.7c0 2.3 1.18 3.48 3.48 3.48h12.3c2.3 0 3.4-1.18 3.4-3.48V90.37zM140.4 86.88h-11.4c-4.32 0-7.2.9-7.2 5.08v55.1c0 4.12 2.88 5.08 7.2 5.08h11.4c4.32 0 7.2-.9 7.2-5.08v-55.1c0-4.12-2.88-5.08-7.2-5.08zM103.8 86.88h-25c-2.3 0-3.4 1.18-3.4 3.48v58.9c0 2.3 1.1 3.48 3.4 3.48h25c2.3 0 3.4-1.18 3.4-3.48v-58.9c0-2.3-1.1-3.48-3.4-3.48zM57.7 150.56H38.2c-2.3 0-3.4-1.18-3.4-3.48v-39.7c0-2.3 1.1-3.48 3.4-3.48h19.5c2.3 0 3.4 1.18 3.4 3.48v39.7c0 2.3-1.1 3.48-3.4 3.48zM24.2 124.9v-13.8c0-2.3-1.1-3.48-3.4-3.48H8.6c-2.3 0-3.48 1.18-3.48 3.48v13.8c0 2.3 1.18 3.48 3.48 3.48h12.2c2.3 0 3.4-1.18 3.4-3.48zM90.37 5.8c-46.6 0-84.57 37.9-84.57 84.57s37.9 84.57 84.57 84.57 84.57-37.9 84.57-84.57S137.05 5.8 90.37 5.8zm39.14 81.08c-6.8-5.1-13.6-7.5-25.3-7.5-12.6 0-23.4 3-30.8 11.2-5.4 5.9-7.9 13.5-7.9 23.3v13.18c0 2.3-1.18 3.48-3.48 3.48h-11.4c-2.3 0-3.48-1.18-3.48-3.48v-39.7c0-9.8 2.5-17.4 7.9-23.3 7.4-8.2 18.2-11.2 30.8-11.2 7.7 0 15.3 1.2 21.3 4.2 8.3 4.2 12.1 11.1 12.1 20.3v48.6c0 2.3-1.1 3.48-3.4 3.48h-11.2c-2.3 0-3.4-1.18-3.4-3.48V98.1c0-6.1-1-10.2-4.4-11.22z"/></svg>},
  ];

  return (
    <section id="tech-partners" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t('partnersTitle')}</h2>
          <p className="mt-4 text-lg text-gray-400">{t('partnersSubtitle')}</p>
        </motion.div>

        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8 md:gap-x-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="h-16 w-16 md:h-20 md:w-20 mx-auto text-gray-500 transition-all duration-300 hover:text-white hover:scale-110"
                title={partner.name}
              >
                {partner.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPartners;