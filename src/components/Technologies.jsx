import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECHNOLOGIES_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'Cloud & DevOps'];

export default function Technologies({ darkMode, language }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const t = TRANSLATIONS[language];

  const filteredTech = selectedCategory === 'All'
    ? TECHNOLOGIES_DATA
    : TECHNOLOGIES_DATA.filter(tech => tech.category === selectedCategory);

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'All': return t.technologies.categories.all;
      case 'Frontend': return t.technologies.categories.frontend;
      case 'Backend': return t.technologies.categories.backend;
      case 'Database': return t.technologies.categories.database;
      case 'Mobile': return t.technologies.categories.mobile;
      case 'Cloud & DevOps': return t.technologies.categories.devops;
      default: return cat;
    }
  };

  return (
    <section
      id="technologies"
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-955 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-1/4 left-10 w-[250px] h-[250px] bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[250px] h-[250px] bg-cyan-500/5 dark:bg-cyan-500/2 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" id="tech-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/10 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-slate-900/60 mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
              {t.technologies.tag}
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t.technologies.title}
          </h2>
          
          <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.technologies.sub}
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="tech-tabs">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 scale-[1.02]'
                  : darkMode
                    ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Grid Area */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
          id="tech-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              // Custom color scheme based on category
              const getAccentClass = (cat) => {
                switch (cat) {
                  case 'Frontend':
                    return 'text-indigo-500 border-indigo-500/10 bg-indigo-500/5';
                  case 'Backend':
                    return 'text-cyan-500 border-cyan-500/10 bg-cyan-500/5';
                  case 'Database':
                    return 'text-emerald-500 border-emerald-500/10 bg-emerald-500/5';
                  case 'Mobile':
                    return 'text-amber-500 border-amber-500/10 bg-amber-500/5';
                  default: // Cloud & DevOps
                    return 'text-rose-500 border-rose-500/10 bg-rose-500/5';
                }
              };

              const accentClass = getAccentClass(tech.category);

              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl border text-center transition-all ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-850 hover:border-slate-700 hover:bg-slate-900 shadow-md shadow-slate-950/30'
                      : 'bg-white border-slate-200/80 hover:border-indigo-200 shadow-sm hover:shadow-md'
                  }`}
                  id={`tech-badge-${tech.name.toLowerCase().replace(/\./g, '-')}`}
                >
                  {/* Icon Frame */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 border ${accentClass}`}>
                    <LucideIcon name={tech.iconName} size={22} />
                  </div>

                  {/* Name */}
                  <span className={`text-sm sm:text-base font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {tech.name}
                  </span>

                  {/* Tiny category pill */}
                  <span className={`text-[9px] font-mono uppercase tracking-wider mt-1.5 px-2 py-0.5 rounded-full ${
                    darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {getCategoryLabel(tech.category)}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Global scale indicator label */}
        <div className="mt-12 text-center" id="tech-footer-lead">
          <p className={`text-xs font-mono uppercase tracking-widest ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            {t.technologies.footerLead}
          </p>
        </div>

        {/* Manual Engineering Standards Panel */}
        <div 
          className={`mt-16 p-6 sm:p-10 rounded-2xl border transition-all ${
            darkMode 
              ? 'bg-slate-900/40 border-slate-800' 
              : 'bg-white border-slate-200/80 shadow-sm'
          }`}
          id="engineering-specs-panel"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b pb-6 mb-8" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
            <div>
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${darkMode ? 'text-cyan-400' : 'text-indigo-600'}`}>
                {t.technologies.qaTag}
              </span>
              <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {t.technologies.qaTitle}
              </h3>
              <p className={`text-sm mt-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.technologies.qaSub}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {t.technologies.noAiClutter}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                {t.technologies.strictType}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Column 1: Backend & Security */}
            <div className="space-y-4" id="spec-col-backend">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <LucideIcon name="Lock" size={16} />
                </div>
                <h4 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {t.technologies.col1Title}
                </h4>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col1Item1Title}</strong> {t.technologies.col1Item1Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col1Item2Title}</strong> {t.technologies.col1Item2Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col1Item3Title}</strong> {t.technologies.col1Item3Desc}
                  </span>
                </li>
              </ul>
            </div>

            {/* Standard Column 2: Database Performance */}
            <div className="space-y-4" id="spec-col-database">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                  <LucideIcon name="Layers" size={16} />
                </div>
                <h4 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {t.technologies.col2Title}
                </h4>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col2Item1Title}</strong> {t.technologies.col2Item1Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col2Item2Title}</strong> {t.technologies.col2Item2Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col2Item3Title}</strong> {t.technologies.col2Item3Desc}
                  </span>
                </li>
              </ul>
            </div>

            {/* Standard Column 3: Frontend Architecture */}
            <div className="space-y-4" id="spec-col-frontend">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-500">
                  <LucideIcon name="Globe" size={16} />
                </div>
                <h4 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {t.technologies.col3Title}
                </h4>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col3Item1Title}</strong> {t.technologies.col3Item1Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col3Item2Title}</strong> {t.technologies.col3Item2Desc}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">{t.technologies.col3Item3Title}</strong> {t.technologies.col3Item3Desc}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
