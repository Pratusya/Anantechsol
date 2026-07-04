import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WHY_CHOOSE_US_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function WhyChooseUs({ language }) {
  const t = TRANSLATIONS[language];
  const [openIndex, setOpenIndex] = useState(0);

  const getPillarTranslation = (id) => {
    switch (id) {
      case 'fast-turnaround': return t.whyChooseUs.fastTurnaround;
      case 'clear-communication': return t.whyChooseUs.clearComm;
      case 'post-launch': return t.whyChooseUs.postLaunch;
      case 'affordable-pricing': return t.whyChooseUs.affordablePricing;
      default: return { title: '', description: '' };
    }
  };

  const faqItems = WHY_CHOOSE_US_DATA.map(pillar => {
    const translation = getPillarTranslation(pillar.id);
    return {
      id: pillar.id,
      question: translation.title || pillar.title,
      answer: translation.description || pillar.description,
      icon: pillar.iconName,
    };
  });

  return (
    <section
      id="why-us"
      style={{ backgroundColor: '#0C0C0C', color: '#E8E8E4', padding: '100px 0', position: 'relative', overflow: 'hidden' }}
    >
      <div className="bg-dot-pattern-dark" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }} id="why-us-intro">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 14px', borderRadius: 999,
            border: '1px solid #2A2A28', marginBottom: 20,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A7A76', fontFamily: 'var(--font-mono)' }}>
              {t.whyChooseUs.tag}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#F5F5F3', marginBottom: 16 }}>
            {t.whyChooseUs.title}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#7A7A76', maxWidth: 560, margin: '0 auto' }}>
            {language === 'en'
              ? 'What teams want to know before trusting AnanTechsol with their project.'
              : 'टीम्स AnanTechsol पर भरोसा करने से पहले क्या जानना चाहती हैं।'}
          </p>
        </div>

        {/* Accordion FAQ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }} id="why-us-grid">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                style={{
                  borderRadius: 14, overflow: 'hidden',
                  border: '1px solid', borderColor: isOpen ? '#3A3A38' : '#2A2A28',
                  backgroundColor: isOpen ? '#161616' : '#111111',
                  transition: 'all 0.3s ease',
                }}
                id={`why-pillar-${item.id}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '20px 24px', background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left', color: isOpen ? '#F5F5F3' : '#A0A09C',
                    transition: 'color 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 36, height: 36, borderRadius: 10,
                      backgroundColor: isOpen ? '#222220' : '#1A1A1A',
                      color: isOpen ? '#E8E8E4' : '#6B6B68',
                    }}>
                      <LucideIcon name={item.icon} size={16} />
                    </div>
                    <span style={{ fontSize: 16, fontWeight: 600 }}>{item.question}</span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <LucideIcon name="X" size={16} style={{ color: isOpen ? '#A0A09C' : '#5A5A58' }} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        padding: '0 24px 24px 74px', fontSize: 14,
                        lineHeight: 1.7, color: '#7A7A76',
                      }}>
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
