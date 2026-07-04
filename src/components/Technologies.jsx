import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECHNOLOGIES_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'Cloud & DevOps'];

export default function Technologies({ language }) {
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
    <section id="technologies" style={{ backgroundColor: '#FFFFFF', padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }} id="tech-header">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 14px', borderRadius: 999,
            border: '1px solid #E6E6E2', marginBottom: 20,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#1A1A1A', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8C8C88', fontFamily: 'var(--font-mono)' }}>
              {t.technologies.tag}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: 16 }}>
            {t.technologies.title}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#6B6B68' }}>
            {t.technologies.sub}
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 48 }} id="tech-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px', fontSize: 13, fontWeight: 600,
                borderRadius: 999, border: '1px solid',
                cursor: 'pointer', transition: 'all 0.2s',
                backgroundColor: selectedCategory === cat ? '#1A1A1A' : 'transparent',
                color: selectedCategory === cat ? '#FFFFFF' : '#52524E',
                borderColor: selectedCategory === cat ? '#1A1A1A' : '#E6E6E2',
              }}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div layout style={{ display: 'grid', gap: 12 }} className="grid-cols-2 sm:!grid-cols-3 md:!grid-cols-4 lg:!grid-cols-5" id="tech-grid">
          <AnimatePresence mode="popLayout">
            {filteredTech.map(tech => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', padding: '28px 16px', borderRadius: 16,
                  border: '1px solid #E6E6E2', backgroundColor: '#FAFAF8',
                  textAlign: 'center', transition: 'all 0.25s ease', cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#CCCCC8'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E6E6E2'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                id={`tech-badge-${tech.name.toLowerCase().replace(/\./g, '-')}`}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 44, height: 44, borderRadius: 12,
                  backgroundColor: '#FFFFFF', border: '1px solid #E6E6E2',
                  color: '#52524E', marginBottom: 14,
                }}>
                  <LucideIcon name={tech.iconName} size={20} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1A1A1A' }}>{tech.name}</span>
                <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: '#A0A09C', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {getCategoryLabel(tech.category)}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer label */}
        <div style={{ textAlign: 'center', marginTop: 48 }} id="tech-footer-lead">
          <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#A0A09C' }}>
            {t.technologies.footerLead}
          </p>
        </div>

        {/* Engineering Specs Panel */}
        <div
          style={{
            marginTop: 64, padding: '40px 36px', borderRadius: 20,
            border: '1px solid #E6E6E2', backgroundColor: '#FAFAF8',
          }}
          id="engineering-specs-panel"
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, paddingBottom: 28, marginBottom: 32, borderBottom: '1px solid #E6E6E2' }}>
            <div>
              <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1A1A1A' }}>
                {t.technologies.qaTag}
              </span>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', color: '#1A1A1A', marginTop: 4 }}>
                {t.technologies.qaTitle}
              </h3>
              <p style={{ fontSize: 14, color: '#6B6B68', marginTop: 4 }}>
                {t.technologies.qaSub}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 12px', borderRadius: 999, fontSize: 11,
                fontFamily: 'var(--font-mono)', border: '1px solid #D4E8D8',
                backgroundColor: '#F0F8F2', color: '#2D6A4F',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
                {t.technologies.noAiClutter}
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 12px', borderRadius: 999, fontSize: 11,
                fontFamily: 'var(--font-mono)', border: '1px solid #E6E6E2',
                backgroundColor: '#FFFFFF', color: '#52524E',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#1A1A1A', display: 'inline-block' }} />
                {t.technologies.strictType}
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 32 }} className="grid-cols-1 md:!grid-cols-3">
            {[
              { icon: 'Lock', title: t.technologies.col1Title, items: [
                { t: t.technologies.col1Item1Title, d: t.technologies.col1Item1Desc },
                { t: t.technologies.col1Item2Title, d: t.technologies.col1Item2Desc },
                { t: t.technologies.col1Item3Title, d: t.technologies.col1Item3Desc },
              ]},
              { icon: 'Layers', title: t.technologies.col2Title, items: [
                { t: t.technologies.col2Item1Title, d: t.technologies.col2Item1Desc },
                { t: t.technologies.col2Item2Title, d: t.technologies.col2Item2Desc },
                { t: t.technologies.col2Item3Title, d: t.technologies.col2Item3Desc },
              ]},
              { icon: 'Globe', title: t.technologies.col3Title, items: [
                { t: t.technologies.col3Item1Title, d: t.technologies.col3Item1Desc },
                { t: t.technologies.col3Item2Title, d: t.technologies.col3Item2Desc },
                { t: t.technologies.col3Item3Title, d: t.technologies.col3Item3Desc },
              ]},
            ].map((col, ci) => (
              <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <div style={{ padding: 6, borderRadius: 8, backgroundColor: '#F0F0EC', color: '#52524E' }}>
                    <LucideIcon name={col.icon} size={14} />
                  </div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#1A1A1A' }}>
                    {col.title}
                  </h4>
                </div>
                {col.items.map((item, ii) => (
                  <div key={ii} style={{ display: 'flex', alignItems: 'start', gap: 10, fontSize: 13, lineHeight: 1.55 }}>
                    <span style={{ color: '#22C55E', flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ color: '#6B6B68' }}>
                      <strong style={{ color: '#1A1A1A', fontWeight: 600 }}>{item.t}</strong> {item.d}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
