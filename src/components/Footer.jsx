import React from 'react';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Footer({ darkMode, language }) {
  const currentYear = new Date().getFullYear();
  const t = TRANSLATIONS[language];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { name: t.navbar.home, href: '#home' },
    { name: t.navbar.about, href: '#about' },
    { name: t.navbar.industries, href: '#industries' },
    { name: t.navbar.services, href: '#services' },
    { name: t.navbar.technologies, href: '#technologies' },
    { name: t.navbar.projects, href: '#projects' },
    { name: t.navbar.whyUs, href: '#why-us' },
    { name: t.navbar.contact, href: '#contact' },
  ];

  return (
    <footer
      id="footer"
      className={`border-t transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Brand block (Span 5) */}
          <div className="md:col-span-5 space-y-4" id="footer-brand">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-50 to-cyan-400 text-white font-bold text-lg shadow-md shadow-indigo-500/10">
                A
              </div>
              <span className={`font-display text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Anan<span className="text-indigo-500">Techsol</span>
              </span>
            </a>
            
            <p className="text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links Column (Span 4) */}
          <div className="md:col-span-4" id="footer-links-container">
            <h4 className={`text-xs font-mono uppercase tracking-widest font-bold mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {t.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm hover:underline transition-colors ${
                    darkMode ? 'hover:text-cyan-300' : 'hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social block (Span 3) */}
          <div className="md:col-span-3 space-y-4 md:text-right" id="footer-socials">
            <h4 className={`text-xs font-mono uppercase tracking-widest font-bold mb-3 md:mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {language === 'en' ? 'Social Channels' : 'सोशल चैनल'}
            </h4>
            
            <div className="flex gap-3 justify-start md:justify-end">
              <a
                href="https://instagram.com/anantechsol"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-750'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
                aria-label="Instagram Profile"
                title="Follow @anantechsol on Instagram"
              >
                <LucideIcon name="Instagram" size={18} />
              </a>
            </div>

            <p className="text-xs font-mono text-slate-500">
              Surat, Gujarat, India
            </p>
          </div>

         </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-250/20 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono tracking-tight" id="footer-copyright">
            &copy; {currentYear} AnanTechsol. {t.footer.rights}
          </p>
          <p className="text-[10px] font-mono text-slate-500">
            {language === 'en' ? 'Design & Engineering by AnanTechsol' : 'डिज़ाइन और इंजीनियरिंग AnanTechsol द्वारा'}
          </p>
        </div>
      </div>
    </footer>
  );
}
