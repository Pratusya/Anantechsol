import { motion } from 'motion/react';
import { TRANSLATIONS } from '../translations';
import LucideIcon from './LucideIcon';

export default function About({ darkMode, language }) {
  const t = TRANSLATIONS[language];

  const cardDetails = [
    {
      id: 'client-focused',
      title: t.about.card1Title,
      description: t.about.card1Desc,
      emoji: '✅',
      iconName: 'Users',
      colorClass: 'indigo',
    },
    {
      id: 'fast-delivery',
      title: t.about.card2Title,
      description: t.about.card2Desc,
      emoji: '⚡',
      iconName: 'Zap',
      colorClass: 'amber',
    },
    {
      id: 'reliable-scalable',
      title: t.about.card3Title,
      description: t.about.card3Desc,
      emoji: '🔒',
      iconName: 'Lock',
      colorClass: 'cyan',
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/2 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5" id="about-intro">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-indigo-500" />
              <span className="text-sm font-semibold tracking-wider text-indigo-500 uppercase font-mono">
                {t.about.tag}
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-6" id="about-heading">
              {t.about.title}
            </h2>
            
            <p className={`text-base sm:text-lg leading-relaxed mb-8 font-sans ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {t.about.p1}
            </p>
            <p className={`text-base leading-relaxed mb-8 font-sans ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.about.p2}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800" id="about-stats">
              <div>
                <p className="font-display text-3xl sm:text-4xl font-black text-indigo-600 dark:text-cyan-400">{t.about.qualityBadgeTitle}</p>
                <p className={`text-xs sm:text-sm font-mono uppercase tracking-wider mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t.about.qualityBadgeSub}
                </p>
              </div>
              <div>
                <p className="font-display text-3.5xl sm:text-4xl font-black text-indigo-600 dark:text-cyan-400">{t.about.alignmentBadgeTitle}</p>
                <p className={`text-xs sm:text-sm font-mono uppercase tracking-wider mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t.about.alignmentBadgeSub}
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards Block */}
          <div className="lg:col-span-7 space-y-5" id="about-cards-container">
            {cardDetails.map((card, index) => {
              // Custom colors for each card
              const getColors = (col) => {
                switch (col) {
                  case 'amber':
                    return {
                      bg: darkMode ? 'hover:border-amber-500/30 bg-slate-950/40' : 'hover:border-amber-500/20 bg-amber-50/10',
                      iconBg: 'bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
                      border: 'border-amber-500/10'
                    };
                  case 'cyan':
                    return {
                      bg: darkMode ? 'hover:border-cyan-500/30 bg-slate-950/40' : 'hover:border-cyan-500/20 bg-cyan-50/10',
                      iconBg: 'bg-cyan-100 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400',
                      border: 'border-cyan-500/10'
                    };
                  default:
                    return {
                      bg: darkMode ? 'hover:border-indigo-500/30 bg-slate-950/40' : 'hover:border-indigo-500/20 bg-indigo-50/10',
                      iconBg: 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400',
                      border: 'border-indigo-500/10'
                    };
                }
              };

              const colors = getColors(card.colorClass);

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col sm:flex-row gap-5 p-6 rounded-2xl border transition-all duration-300 ${colors.bg} ${
                    darkMode ? 'border-slate-800/80 hover:bg-slate-950/70' : 'border-slate-100 hover:bg-white shadow-sm hover:shadow-md'
                  }`}
                  id={`about-card-${card.id}`}
                >
                  {/* Icon & Emoji container */}
                  <div className="flex items-start justify-between sm:justify-start">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 ${colors.iconBg}`}>
                      <LucideIcon name={card.iconName} size={22} />
                    </div>
                    {/* Emoji for mobile */}
                    <span className="text-2xl sm:hidden">{card.emoji}</span>
                  </div>

                  {/* Info body */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-display text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {card.title}
                      </h3>
                      {/* Emoji for desktop */}
                      <span className="text-xl hidden sm:inline-block" title={card.title}>
                        {card.emoji}
                      </span>
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
