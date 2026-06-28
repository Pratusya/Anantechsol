import React from 'react';
import { motion } from 'motion/react';
import { INDUSTRIES_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Industries({ darkMode, language }) {
  const t = TRANSLATIONS[language];

  // Map colors for various industry badges to make them visually distinct and high-fidelity
  const getColorClasses = (colorClass) => {
    switch (colorClass) {
      case 'cyan':
        return {
          bg: 'bg-cyan-50/50 dark:bg-cyan-950/20 hover:border-cyan-500/20',
          iconBg: 'bg-cyan-100 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400',
        };
      case 'rose':
        return {
          bg: 'bg-rose-50/50 dark:bg-rose-950/20 hover:border-rose-500/20',
          iconBg: 'bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400',
        };
      case 'amber':
        return {
          bg: 'bg-amber-50/50 dark:bg-amber-950/20 hover:border-amber-500/20',
          iconBg: 'bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
        };
      case 'teal':
        return {
          bg: 'bg-teal-50/50 dark:bg-teal-950/20 hover:border-teal-500/20',
          iconBg: 'bg-teal-100 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400',
        };
      case 'violet':
        return {
          bg: 'bg-violet-50/50 dark:bg-violet-950/20 hover:border-violet-500/20',
          iconBg: 'bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400',
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50/50 dark:bg-emerald-950/20 hover:border-emerald-500/20',
          iconBg: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
        };
      case 'blue':
        return {
          bg: 'bg-blue-50/50 dark:bg-blue-950/20 hover:border-blue-500/20',
          iconBg: 'bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
        };
      case 'pink':
        return {
          bg: 'bg-pink-50/50 dark:bg-pink-950/20 hover:border-pink-500/20',
          iconBg: 'bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400',
        };
      case 'orange':
        return {
          bg: 'bg-orange-50/50 dark:bg-orange-950/20 hover:border-orange-500/20',
          iconBg: 'bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400',
        };
      case 'sky':
        return {
          bg: 'bg-sky-50/50 dark:bg-sky-950/20 hover:border-sky-500/20',
          iconBg: 'bg-sky-100 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400',
        };
      case 'fuchsia':
        return {
          bg: 'bg-fuchsia-50/50 dark:bg-fuchsia-950/20 hover:border-fuchsia-500/20',
          iconBg: 'bg-fuchsia-100 dark:bg-fuchsia-950/40 text-fuchsia-600 dark:text-fuchsia-400',
        };
      case 'slate':
        return {
          bg: 'bg-slate-50/50 dark:bg-slate-950/20 hover:border-slate-500/20',
          iconBg: 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
        };
      default: // indigo
        return {
          bg: 'bg-indigo-50/50 dark:bg-indigo-950/20 hover:border-indigo-500/20',
          iconBg: 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400',
        };
    }
  };

  const getIndustryName = (id) => {
    switch (id) {
      case 'media-entertainment': return t.industries.media;
      case 'enterprise-solution': return t.industries.enterprise;
      case 'health-care': return t.industries.healthcare;
      case 'retail-ecommerce': return t.industries.ecommerce;
      case 'telecommunication': return t.industries.telecom;
      case 'education': return t.industries.education;
      case 'accounting': return t.industries.accounting;
      case 'automotive': return t.industries.automotive;
      case 'gems-jewelry': return t.industries.gems;
      case 'sports-fantasy': return t.industries.sports;
      case 'productivity': return t.industries.productivity;
      case 'transport-logistic': return t.industries.transport;
      case 'legal-advisory': return t.industries.legal;
      case 'real-estate': return t.industries.realestate;
      case 'travel-hospitality': return t.industries.travel;
      case 'banking-fintech': return t.industries.banking;
      default: return id;
    }
  };

  return (
    <section
      id="industries"
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Background decorations */}
      <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" id="industries-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/10 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-slate-900/60 mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
              {t.industries.tag}
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t.industries.title}
          </h2>
          
          <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.industries.sub}
          </p>
        </div>

        {/* Staggered dynamic list layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" id="industries-grid">
          {INDUSTRIES_DATA.map((industry, index) => {
            const styles = getColorClasses(industry.colorClass);

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${styles.bg} ${
                  darkMode
                    ? 'border-slate-800 bg-slate-950/40 hover:bg-slate-950 hover:border-slate-700/60'
                    : 'border-slate-200 bg-slate-50/30 hover:bg-white shadow-sm hover:shadow-md'
                }`}
                id={`industry-card-${industry.id}`}
              >
                {/* Micro-Icon */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${styles.iconBg}`}>
                  <LucideIcon name={industry.iconName} size={18} />
                </div>

                {/* Name */}
                <div className="min-w-0">
                  <h3 className={`text-sm sm:text-base font-bold truncate tracking-tight ${
                    darkMode ? 'text-slate-100' : 'text-slate-800'
                  }`}>
                    {getIndustryName(industry.id)}
                  </h3>
                  <span className={`text-[10px] font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t.industries.customIntegration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
