import React from 'react';
import { motion } from 'motion/react';
import { INDUSTRIES_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Industries({ language }) {
  const t = TRANSLATIONS[language];

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
    <section id="industries" style={{ backgroundColor: '#F7F7F5', padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }} id="industries-header">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 14px', borderRadius: 999,
            border: '1px solid #E6E6E2', marginBottom: 20,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#1A1A1A', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#8C8C88', fontFamily: 'var(--font-mono)' }}>
              {t.industries.tag}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: 16 }}>
            {t.industries.title}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#6B6B68' }}>
            {t.industries.sub}
          </p>
        </div>

        {/* Industry Grid */}
        <div style={{ display: 'grid', gap: 12 }} className="grid-cols-2 sm:!grid-cols-3 lg:!grid-cols-4" id="industries-grid">
          {INDUSTRIES_DATA.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '16px 20px', borderRadius: 14,
                border: '1px solid #E6E6E2', backgroundColor: '#FFFFFF',
                transition: 'all 0.25s ease', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#CCCCC8'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E6E6E2'; e.currentTarget.style.boxShadow = 'none'; }}
              id={`industry-card-${industry.id}`}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 10,
                backgroundColor: '#F7F7F5', color: '#52524E', flexShrink: 0,
              }}>
                <LucideIcon name={industry.iconName} size={16} />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1A1A1A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {getIndustryName(industry.id)}
                </h3>
                <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: '#A0A09C' }}>
                  {t.industries.customIntegration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
