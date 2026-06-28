import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Navbar({ darkMode, toggleDarkMode, language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = TRANSLATIONS[language];

  const navLinks = [
    { name: t.navbar.home, href: '#home' },
    { name: t.navbar.about, href: '#about' },
    { name: t.navbar.industries, href: '#industries' },
    { name: t.navbar.services, href: '#services' },
    { name: t.navbar.technologies, href: '#technologies' },
    { name: t.navbar.projects, href: '#projects' },
    { name: t.navbar.whyUs, href: '#why-us' },
    { name: t.navbar.contact, href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
              ? 'bg-slate-900/95 border-b border-slate-800 backdrop-blur-md shadow-lg shadow-slate-950/20'
              : 'bg-white/95 border-b border-slate-200 backdrop-blur-md shadow-md shadow-slate-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white font-bold text-xl shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              A
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity -z-10" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-lg sm:text-xl font-bold tracking-tight leading-none ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Anan<span className="text-indigo-500">Techsol</span>
              </span>
              <span className={`text-[10px] font-mono tracking-wider uppercase mt-1 leading-none ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {language === 'en' ? 'Solutions That Work' : 'सटीक समाधान'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA, Language Selector & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2.5" id="desktop-actions">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold font-mono border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
              title={language === 'en' ? 'Switch to Hindi / हिन्दी में बदलें' : 'Switch to English'}
              id="language-toggle"
            >
              <LucideIcon name="Languages" size={14} className="text-indigo-500" />
              <span>{language === 'en' ? 'EN' : 'हि'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800'
                  : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="theme-toggle"
            >
              <LucideIcon name={darkMode ? 'Sun' : 'Moon'} size={18} />
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/15 transition-all hover:translate-y-[-1px] active:translate-y-0"
              id="nav-cta-btn"
            >
              {t.navbar.getStarted}
              <LucideIcon name="ArrowRight" size={14} className="ml-0.5" />
            </a>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold font-mono border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/80 text-slate-300'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
              id="mobile-language-toggle"
            >
              <LucideIcon name="Languages" size={12} className="text-indigo-500" />
              <span>{language === 'en' ? 'EN' : 'हि'}</span>
            </button>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400'
                  : 'border-slate-200 bg-white text-slate-500'
              }`}
              id="mobile-theme-toggle"
            >
              <LucideIcon name={darkMode ? 'Sun' : 'Moon'} size={18} />
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Toggle Menu"
              id="mobile-menu-trigger"
            >
              <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden border-b ${
              darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
            }`}
            id="mobile-nav-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/20 dark:border-slate-200/10">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/15"
                >
                  {t.navbar.getStarted}
                  <LucideIcon name="ArrowRight" size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
