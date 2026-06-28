import { motion } from 'motion/react';
import { WHY_CHOOSE_US_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function WhyChooseUs({ darkMode, language }) {
  const t = TRANSLATIONS[language];

  const getPillarTranslation = (id) => {
    switch (id) {
      case 'fast-turnaround': return t.whyChooseUs.fastTurnaround;
      case 'clear-communication': return t.whyChooseUs.clearComm;
      case 'post-launch': return t.whyChooseUs.postLaunch;
      case 'affordable-pricing': return t.whyChooseUs.affordablePricing;
      default: return { title: '', description: '' };
    }
  };

  const mainDescription = language === 'en'
    ? 'We treat your software projects as our own. We combine robust architectural stability, rapid shipping times, clear milestones, and accessible post-production support to ensure your technology never stops serving your business growth.'
    : 'हम आपके सॉफ़्टवेयर प्रोजेक्ट को अपना समझकर काम करते हैं। हम मजबूत आर्किटेक्चर स्थिरता, त्वरित शिपिंग समय, स्पष्ट मील के पत्थर और सुलभ तकनीकी सहायता को जोड़ते हैं ताकि यह सुनिश्चित हो सके कि आपकी तकनीक आपके व्यवसाय के विकास की सेवा करना कभी न रोके।';

  return (
    <section
      id="why-us"
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Subtle Background Elements */}
      <div className={`absolute inset-0 z-0 opacity-50 bg-dot-pattern ${darkMode ? 'opacity-20 bg-dot-pattern-dark' : ''}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Box */}
          <div className="lg:col-span-4" id="why-us-intro">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-indigo-500" />
              <span className="text-sm font-semibold tracking-wider text-indigo-500 uppercase font-mono">
                {t.whyChooseUs.tag}
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              {t.whyChooseUs.title}
            </h2>
            
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {mainDescription}
            </p>
          </div>

          {/* Right Grid of 4 points */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" id="why-us-grid">
            {WHY_CHOOSE_US_DATA.map((pillar, index) => {
              // Custom colors matching the tech theme
              const getIconStyle = (pillId) => {
                switch (pillId) {
                  case 'fast-turnaround':
                    return 'bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400';
                  case 'clear-communication':
                    return 'bg-cyan-100 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400';
                  case 'post-launch':
                    return 'bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400';
                  default: // affordable-pricing
                    return 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400';
                }
              };

              const iconStyle = getIconStyle(pillar.id);
              const translation = getPillarTranslation(pillar.id);

              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className={`p-6.5 sm:p-8 rounded-2xl border transition-all duration-300 ${
                    darkMode
                      ? 'border-slate-855 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700/80'
                      : 'border-slate-200 bg-white hover:bg-white hover:border-indigo-150 shadow-sm hover:shadow-md'
                  }`}
                  id={`why-pillar-${pillar.id}`}
                >
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-11 h-11 rounded-lg mb-5 ${iconStyle}`}>
                    <LucideIcon name={pillar.iconName} size={20} />
                  </div>

                  {/* Text details */}
                  <h3 className={`font-display text-lg font-bold tracking-tight mb-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {translation.title || pillar.title}
                  </h3>
                  
                  <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {translation.description || pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
