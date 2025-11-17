import React from 'react';

interface FooterProps {
  t: (key: string) => string;
  getConstant: (key: string) => any;
}

const Footer: React.FC<FooterProps> = ({ t, getConstant }) => {
  const services = getConstant('services');
  const navLinks = [
    { key: 'navHome', href: '#' },
    { key: 'navServices', href: '#services' },
    { key: 'navPortfolio', href: '#portfolio' },
    { key: 'navContact', href: '#contact' },
  ];

  return (
    <footer className="py-16 bg-gray-900/50 border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-start">
          {/* Column 1: About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black tracking-wider text-white uppercase">
              AL<span className="text-cyan-400">W</span>KALA
            </h3>
            <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0">
              {t('footerAboutText')}
            </p>
            <div className="flex justify-center md:justify-start items-center gap-6 mt-6">
              <a href="#" aria-label={t('linkedinLabel')} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" aria-label={t('twitterLabel')} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.063c0 2.433 1.724 4.457 4.005 4.923-.69.188-1.426.248-2.16.084.64 2.023 2.498 3.493 4.693 3.53-1.873 1.464-4.187 2.253-6.66 2.054.671 4.36 5.093 7.5 10.123 7.5 7.643 0 11.964-6.332 11.66-12.205.823-.594 1.536-1.336 2.098-2.178z"/></svg>
              </a>
              <a href="#" aria-label={t('instagramLabel')} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">{t('footerQuickLinks')}</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">{t(link.key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">{t('footerOurServices')}</h4>
            <ul className="mt-4 space-y-2">
              {services.map((service: any) => (
                <li key={service.id}>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>{t('footerText')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;