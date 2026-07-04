import React from 'react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const phoneNumber = '919081460314';
  const textMessage = 'Hello AnanTechsol, I visited your portfolio website and am interested in discussing a software project!';
  const encodedMessage = encodeURIComponent(textMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 52, height: 52, borderRadius: '50%',
          backgroundColor: '#1A1A1A', color: '#FFFFFF',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          transition: 'background 0.2s', cursor: 'pointer', textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#333'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1A1A1A'}
        aria-label="Contact AnanTechsol on WhatsApp"
        id="whatsapp-fab"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ width: 24, height: 24 }}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Notification dot */}
        <span style={{
          position: 'absolute', top: -2, right: -2,
          width: 14, height: 14, borderRadius: '50%',
          backgroundColor: '#22C55E', border: '2px solid #F7F7F5',
        }} />
      </motion.a>
    </div>
  );
}
