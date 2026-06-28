import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Hero({ darkMode, language }) {
  const handleScrollTo = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const t = TRANSLATIONS[language];

  return (
    <section
      id="home"
      className={`relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pb-24 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Grid Pattern */}
      <div className={`absolute inset-0 z-0 opacity-70 bg-dot-pattern ${darkMode ? 'bg-dot-pattern-dark opacity-30' : ''}`} />

      {/* Decorative Interactive/Floating Background Orbs */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Orb 1 */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[10%] left-[10%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full filter blur-[70px] opacity-25 dark:opacity-15 bg-indigo-500"
        />
        {/* Orb 2 */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 60, -80, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[15%] right-[10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full filter blur-[90px] opacity-25 dark:opacity-15 bg-cyan-400"
        />
        {/* Orb 3 (Secondary Glow) */}
        <motion.div
          animate={{
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[40%] left-[45%] w-[180px] h-[180px] rounded-full filter blur-[60px] opacity-15 dark:opacity-10 bg-pink-500"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline / Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4.5 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-sm backdrop-blur-sm bg-gradient-to-r"
          style={{
            borderColor: darkMode ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.15)',
            backgroundColor: darkMode ? 'rgba(15,23,42,0.6)' : 'rgba(255,255,255,0.7)',
            color: darkMode ? '#cbd5e1' : '#475569'
          }}
          id="welcome-badge"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-indigo-600 dark:text-cyan-400 font-semibold tracking-wide uppercase text-[10px] sm:text-xs">
            {t.hero.tag}
          </span>
          <span className="text-slate-400">|</span>
          <span className="font-mono text-[10px] sm:text-xs">{language === 'en' ? 'Surat, Gujarat' : 'सूरत, गुजरात'}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.15] max-w-5xl mx-auto mb-6 sm:mb-8 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
          id="hero-heading"
        >
          {t.hero.titleFirst}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400">
            {t.hero.titleAccent}
          </span>{' '}
          {t.hero.titleLast}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12 font-sans ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
          id="hero-subtext"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          id="hero-ctas"
        >
          <button
            onClick={() => handleScrollTo('#projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.02] shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-all cursor-pointer"
            id="hero-view-work-btn"
          >
            {t.hero.viewWork}
            <LucideIcon name="Sparkles" size={18} className="animate-spin-slow" />
          </button>
          <button
            onClick={() => handleScrollTo('#contact')}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ${
              darkMode
                ? 'border-slate-800 bg-slate-900/40 text-slate-100 hover:bg-slate-800'
                : 'border-slate-300 bg-white/70 text-slate-700 hover:bg-slate-50 shadow-sm'
            }`}
            id="hero-contact-btn"
          >
            {t.hero.ctaBtn}
            <LucideIcon name="ArrowRight" size={18} />
          </button>
        </motion.div>

        {/* Floating tech pill indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:flex items-center justify-center gap-8 mt-24 text-xs font-mono text-slate-500 dark:text-slate-400"
          id="hero-capabilities-pills"
        >
          <span className="flex items-center gap-2">
            <LucideIcon name="Globe" size={14} className="text-indigo-500" />
            {language === 'en' ? 'WEB APPLICATION ECOSYSTEM' : 'वेब एप्लीकेशन इकोसिस्टम'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span className="flex items-center gap-2">
            <LucideIcon name="ShoppingCart" size={14} className="text-cyan-400" />
            {language === 'en' ? 'SECURE E-COMMERCE STORES' : 'सुरक्षित ई-कॉमर्स स्टोर'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span className="flex items-center gap-2">
            <LucideIcon name="Lock" size={14} className="text-indigo-500" />
            {language === 'en' ? 'ENTERPRISE MANAGEMENT SOFTWARE' : 'एंटरप्राइज MANAGEMENT सॉफ्टवेयर'}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
