import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Services({ darkMode, language }) {
  const t = TRANSLATIONS[language];

  const getServiceTranslation = (id) => {
    switch (id) {
      case 'web-dev': return t.services.webDev;
      case 'e-com': return t.services.ecom;
      case 'mobile-dev': return t.services.mobileDev;
      case 'school-management': return t.services.schoolMgmt;
      case 'employee-management': return t.services.employeeMgmt;
      case 'store-inventory': return t.services.storeInventory;
      case 'appointment-booking': return t.services.appointmentBooking;
      default: return { title: '', description: '' };
    }
  };

  return (
    <section
      id="services"
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Dot Grid */}
      <div className={`absolute inset-0 z-0 opacity-50 bg-grid-pattern ${darkMode ? 'opacity-20' : ''}`} />

      {/* Glow Orbs */}
      <div className="absolute right-10 bottom-10 w-[200px] h-[200px] bg-indigo-500/10 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" id="services-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/10 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-slate-900/60 mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
              {t.services.tag}
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
            {t.services.title}
          </h2>
          
          <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.services.sub}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="services-grid">
          {SERVICES_DATA.map((service, index) => {
            const translation = getServiceTranslation(service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                  darkMode
                    ? 'border-slate-850 bg-slate-900/45 hover:bg-slate-900 hover:border-slate-700/80 shadow-md shadow-slate-950/20'
                    : 'border-slate-200/80 bg-white hover:bg-white hover:border-indigo-200 shadow-sm hover:shadow-lg'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Card Gradient Glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 to-cyan-400/0 group-hover:from-indigo-500/10 group-hover:to-cyan-400/10 transition-colors duration-300 -z-10" />

                {/* Service Icon Container */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-6 transition-all duration-300 ${
                  darkMode
                    ? 'bg-slate-800 text-cyan-400 group-hover:bg-indigo-600 group-hover:text-white'
                    : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                }`}>
                  <LucideIcon name={service.iconName} size={24} />
                </div>

                {/* Service Details */}
                <h3 className={`font-display text-xl font-bold tracking-tight mb-3 transition-colors ${
                  darkMode ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-indigo-600'
                }`}>
                  {translation.title || service.title}
                </h3>
                
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {translation.description || service.description}
                </p>

                {/* Decorative Subtle Line Arrow */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className={`text-xs font-mono tracking-wider uppercase ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {language === 'en' ? 'Tailored System' : 'अनुकूलित सिस्टम'}
                  </span>
                  <LucideIcon
                    name="ArrowRight"
                    size={14}
                    className={`transform group-hover:translate-x-1.5 transition-transform duration-300 ${
                      darkMode ? 'text-cyan-400' : 'text-indigo-500'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
