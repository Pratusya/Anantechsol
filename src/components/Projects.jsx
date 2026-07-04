import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Projects({ language }) {
  const t = TRANSLATIONS[language];

  const getProjectTranslation = (id) => {
    switch (id) {
      case 'skov-fashion': return t.projects.skovFashion;
      case 'shiksha-netra': return t.projects.shikshaNetra;
      case 'naice-primary': return t.projects.naicePrimary;
      default: return { name: '', description: '', tag: '', stats: '' };
    }
  };

  const getMockupGradient = (id) => {
    switch (id) {
      case 'skov-fashion': return 'linear-gradient(135deg, #F5E6D3, #E8D5C4, #DCC6B4)';
      case 'shiksha-netra': return 'linear-gradient(135deg, #D3E4F5, #C4D5E8, #B4C6DC)';
      case 'naice-primary': return 'linear-gradient(135deg, #E8F5D3, #D5E8C4, #C6DCB4)';
      default: return 'linear-gradient(135deg, #E8E8E4, #D4D4D0)';
    }
  };

  const getMockupLabel = (id) => {
    switch (id) {
      case 'skov-fashion': return 'E-COMMERCE';
      case 'shiksha-netra': return 'SAAS PLATFORM';
      case 'naice-primary': return 'SCHOOL PORTAL';
      default: return 'PROJECT';
    }
  };

  return (
    <section id="projects" style={{ backgroundColor: '#F7F7F5', padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', marginBottom: 64 }} id="projects-header">
          <div style={{ maxWidth: 560 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ height: 1, width: 32, backgroundColor: '#D4D4D0', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8C8C88', fontFamily: 'var(--font-mono)' }}>
                {t.projects.tag}
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: 12 }}>
              {t.projects.title}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#6B6B68' }}>{t.projects.sub}</p>
          </div>

          <div style={{ marginTop: 16 }} id="projects-lead">
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontFamily: 'var(--font-mono)', color: '#8C8C88' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
              {language === 'en' ? '3 LIVE PORTALS DEPLOYED' : '3 लाइव पोर्टल तैनात'}
            </span>
          </div>
        </div>

        {/* Project Cards */}
        <div style={{ display: 'grid', gap: 20 }} className="grid-cols-1 lg:!grid-cols-3" id="projects-grid">
          {PROJECTS_DATA.map((project, index) => {
            const translation = getProjectTranslation(project.id);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                style={{
                  display: 'flex', flexDirection: 'column', borderRadius: 20, overflow: 'hidden',
                  border: '1px solid #E6E6E2', backgroundColor: '#FFFFFF',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#CCCCC8'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E6E6E2'; e.currentTarget.style.boxShadow = 'none'; }}
                id={`project-card-${project.id}`}
              >
                {/* Visual Mockup Area */}
                <div style={{
                  background: getMockupGradient(project.id),
                  padding: 24, minHeight: 180,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  position: 'relative',
                }}>
                  {/* Browser chrome */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.12)' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.08)' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.06)' }} />
                    <div style={{ flex: 1, marginLeft: 8, padding: '3px 12px', borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'var(--font-mono)', color: 'rgba(0,0,0,0.35)' }}>
                      {project.url.replace('https://', '')}
                    </div>
                  </div>

                  {/* Center label */}
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(0,0,0,0.3)' }}>
                      {getMockupLabel(project.id)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <span style={{
                        display: 'inline-flex', padding: '3px 10px', borderRadius: 999,
                        fontSize: 11, fontWeight: 600, backgroundColor: '#F0F0EC',
                        color: '#52524E',
                      }}>
                        {translation.tag || project.tag}
                      </span>
                      <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#A0A09C' }}>
                        {translation.stats || project.stats}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A', marginBottom: 10, letterSpacing: '-0.01em' }}>
                      {translation.name || project.name}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: '#6B6B68', marginBottom: 20 }}>
                      {translation.description || project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                      {project.techStack.map(tech => (
                        <span key={tech} style={{
                          fontSize: 10, fontFamily: 'var(--font-mono)', padding: '3px 8px',
                          borderRadius: 6, backgroundColor: '#F7F7F5', color: '#6B6B68',
                          border: '1px solid #E6E6E2',
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        fontSize: 13, fontWeight: 600, color: '#1A1A1A',
                        textDecoration: 'none', transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                      id={`project-link-${project.id}`}
                    >
                      {language === 'en' ? 'View Project' : 'प्रोजेक्ट देखें'}
                      <LucideIcon name="ArrowUpRight" size={14} />
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
