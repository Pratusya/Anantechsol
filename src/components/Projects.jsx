import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Projects({ darkMode, language }) {
  const t = TRANSLATIONS[language];

  const getProjectTranslation = (id) => {
    switch (id) {
      case 'skov-fashion': return t.projects.skovFashion;
      case 'shiksha-netra': return t.projects.shikshaNetra;
      case 'naice-primary': return t.projects.naicePrimary;
      default: return { name: '', description: '', tag: '', stats: '' };
    }
  };

  // Let's render custom visual web browser simulator mockups for each project
  const renderProjectMockup = (projectId) => {
    switch (projectId) {
      case 'skov-fashion':
        return (
          <div className="w-full h-44 bg-rose-50/50 dark:bg-rose-950/20 flex flex-col p-3 relative overflow-hidden font-sans">
            {/* Saree shop mockup */}
            <div className="flex items-center justify-between border-b border-rose-100 dark:border-rose-900/30 pb-2 mb-2 text-[10px] font-mono text-rose-600 dark:text-rose-400">
              <span className="font-bold tracking-widest font-display">SKOV BOUTIQUE</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span>SURAT, GJ</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 flex-1">
              <div className="col-span-1 rounded-lg border border-rose-100/50 dark:border-rose-900/10 bg-white dark:bg-slate-900 p-1.5 flex flex-col justify-between">
                <div className="w-full h-12 rounded bg-gradient-to-tr from-amber-200 to-rose-400 opacity-80" />
                <div className="h-2 w-10 bg-slate-200 dark:bg-slate-800 rounded mt-1.5" />
                <div className="h-1.5 w-7 bg-slate-100 dark:bg-slate-850 rounded mt-1" />
              </div>
              <div className="col-span-1 rounded-lg border border-rose-100/50 dark:border-rose-900/10 bg-white dark:bg-slate-900 p-1.5 flex flex-col justify-between">
                <div className="w-full h-12 rounded bg-gradient-to-tr from-purple-400 to-rose-500 opacity-80" />
                <div className="h-2 w-10 bg-slate-200 dark:bg-slate-800 rounded mt-1.5" />
                <div className="h-1.5 w-6 bg-slate-100 dark:bg-slate-850 rounded mt-1" />
              </div>
              <div className="col-span-1 rounded-lg border border-rose-100/50 dark:border-rose-900/10 bg-white dark:bg-slate-900 p-1.5 flex flex-col justify-between">
                <div className="w-full h-12 rounded bg-gradient-to-tr from-red-400 to-indigo-500 opacity-80" />
                <div className="h-2 w-10 bg-slate-200 dark:bg-slate-800 rounded mt-1.5" />
                <div className="h-1.5 w-8 bg-slate-100 dark:bg-slate-850 rounded mt-1" />
              </div>
            </div>

            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-rose-400/10 blur-xl pointer-events-none" />
          </div>
        );

      case 'shiksha-netra':
        return (
          <div className="w-full h-44 bg-cyan-50/50 dark:bg-cyan-950/20 flex flex-col p-3 relative overflow-hidden font-sans">
            {/* Dashboard Mockup */}
            <div className="flex items-center justify-between border-b border-cyan-100 dark:border-cyan-900/30 pb-2 mb-2 text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
              <span className="font-bold tracking-tight flex items-center gap-1">
                <LucideIcon name="GraduationCap" size={10} />
                SHIKSHANETRA DASHBOARD
              </span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/60 font-semibold text-[8px]">
                {language === 'en' ? 'SAAS CLIENT ACTIVE' : 'सक्रिय SaaS क्लाइंट'}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 flex-1">
              <div className="col-span-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg p-1.5 flex flex-col justify-between">
                <span className="text-[7px] font-mono text-slate-400">ATTENDANCE</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">94.2%</span>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[94%]" />
                </div>
              </div>
              <div className="col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg p-1.5 flex flex-col justify-between">
                <span className="text-[7px] font-mono text-slate-400">FEE ANALYSIS</span>
                <div className="flex gap-1 items-end h-6 pb-1">
                  <div className="w-2 bg-indigo-500 h-[60%] rounded-t-sm" />
                  <div className="w-2 bg-indigo-500 h-[80%] rounded-t-sm" />
                  <div className="w-2 bg-cyan-400 h-[100%] rounded-t-sm" />
                  <div className="w-2 bg-cyan-400 h-[40%] rounded-t-sm" />
                </div>
                <div className="h-1 w-12 bg-slate-100 dark:bg-slate-850 rounded" />
              </div>
              <div className="col-span-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-805 rounded-lg p-1.5 flex flex-col justify-between">
                <span className="text-[7px] font-mono text-slate-400">REVENUE</span>
                <span className="text-xs font-bold text-indigo-500">₹8.4L</span>
                <span className="text-[6px] text-emerald-500 font-mono">+12% MoM</span>
              </div>
            </div>

            <div className="absolute -left-6 -bottom-6 w-20 h-20 rounded-full bg-indigo-500/10 blur-lg pointer-events-none" />
          </div>
        );

      case 'naice-primary':
        return (
          <div className="w-full h-44 bg-amber-50/50 dark:bg-amber-950/20 flex flex-col p-3 relative overflow-hidden font-sans">
            {/* Friendly Primary School Layout */}
            <div className="flex items-center justify-between border-b border-amber-100 dark:border-amber-900/30 pb-2 mb-2 text-[10px] text-amber-700 dark:text-amber-400">
              <span className="font-bold tracking-wide">🏫 NaICE Primary Portal</span>
              <div className="flex items-center gap-1 text-[8px] font-mono px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60">
                <span>{language === 'en' ? 'ADMISSIONS OPEN' : 'प्रवेश प्रारंभ'}</span>
              </div>
            </div>

            <div className="flex flex-col flex-1 justify-between">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-full border-2 border-amber-400 flex items-center justify-center bg-white overflow-hidden text-lg">
                  👶
                </div>
                <div className="space-y-1">
                  <div className="h-2 w-28 bg-slate-700 dark:bg-slate-200 rounded" />
                  <div className="h-1.5 w-36 bg-slate-400 dark:bg-slate-400 rounded" />
                  <div className="h-1.5 w-16 bg-slate-300 dark:bg-slate-500 rounded" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="bg-white dark:bg-slate-900/80 rounded p-1 text-center text-[7px] font-medium border border-slate-100 dark:border-slate-800">
                  🎨 CREATIVE
                </div>
                <div className="bg-white dark:bg-slate-900/80 rounded p-1 text-center text-[7px] font-medium border border-slate-100 dark:border-slate-800">
                  ⚽ SPORTS
                </div>
                <div className="bg-white dark:bg-slate-900/80 rounded p-1 text-center text-[7px] font-medium border border-slate-100 dark:border-slate-800">
                  📚 SCIENCE
                </div>
              </div>
            </div>

            <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-amber-400/10 blur-lg pointer-events-none" />
          </div>
        );

      default:
        return <div className="w-full h-44 bg-slate-200 dark:bg-slate-800" />;
    }
  };

  return (
    <section
      id="projects"
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="absolute left-10 top-1/3 w-[300px] h-[300px] bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20" id="projects-header">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-indigo-500" />
              <span className="text-sm font-semibold tracking-wider text-indigo-500 uppercase font-mono">
                {t.projects.tag}
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {t.projects.title}
            </h2>
            
            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.projects.sub}
            </p>
          </div>

          <div className="mt-6 md:mt-0" id="projects-lead">
            <span className={`text-sm font-mono flex items-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-ping" />
              {language === 'en' ? '3 ROBUST PORTALS DEPLOYED' : '3 मजबूत पोर्टल तैनात'}
            </span>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="projects-grid">
          {PROJECTS_DATA.map((project, index) => {
            const translation = getProjectTranslation(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-950/60 hover:bg-slate-950 hover:border-slate-700 shadow-xl shadow-slate-950/40'
                    : 'border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-indigo-200 shadow-sm hover:shadow-xl'
                }`}
                id={`project-card-${project.id}`}
              >
                {/* Browser Window Chrome simulator */}
                <div className={`px-4 py-2.5 border-b flex items-center justify-between gap-4 shrink-0 ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}>
                  {/* Dots */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  
                  {/* Address Bar */}
                  <div className={`flex-1 max-w-xs sm:max-w-md px-3 py-0.5 rounded text-[10px] font-mono text-center truncate ${
                    darkMode ? 'bg-slate-950 text-slate-400 border border-slate-850' : 'bg-white text-slate-500 border border-slate-250/50'
                  }`}>
                    {project.url.replace('https://', '')}
                  </div>

                  {/* External Indicator */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`shrink-0 p-1 rounded hover:bg-indigo-500/10 ${
                      darkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-indigo-600'
                    }`}
                    title="Open live project in a new tab"
                  >
                    <LucideIcon name="ArrowUpRight" size={13} />
                  </a>
                </div>

                {/* Simulated Page Content Preview */}
                {renderProjectMockup(project.id)}

                {/* Card Meta Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-cyan-300">
                        {translation.tag || project.tag}
                      </span>
                      <span className={`text-[11px] font-mono tracking-tight font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {translation.stats || project.stats}
                      </span>
                    </div>

                    <h3 className={`font-display text-xl font-bold tracking-tight mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {translation.name || project.name}
                    </h3>

                    <p className={`text-sm sm:text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {translation.description || project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technology badging */}
                    <div className="flex flex-wrap gap-1.5 mb-6" id={`project-tech-${project.id}`}>
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                            darkMode ? 'bg-slate-900 text-slate-300 border border-slate-800' : 'bg-white text-slate-600 border border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit Action Link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-sm font-semibold group-hover:underline ${
                        darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-indigo-600 hover:text-indigo-500'
                      }`}
                      id={`project-link-${project.id}`}
                    >
                      {language === 'en' ? 'Launch Live Project' : 'लाइव प्रोजेक्ट खोलें'}
                      <LucideIcon name="ArrowUpRight" size={15} className="ml-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
