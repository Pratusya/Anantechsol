import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('loading'); // loading → exit

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          animate={phase === 'exit' ? { opacity: 0, scale: 1.02 } : { opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'var(--bg-primary)',
          }}
          id="loading-screen"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src="/logo.png"
              alt="AnanTechsol"
              style={{ height: 52, width: 'auto', objectFit: 'contain' }}
            />
          </motion.div>

          {/* Loading bar */}
          <div style={{
            marginTop: 32, width: 120, height: 2,
            backgroundColor: 'var(--border-light)', borderRadius: 2, overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              style={{
                height: '100%', backgroundColor: 'var(--text-heading)',
                borderRadius: 2,
              }}
            />
          </div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              marginTop: 16, fontSize: 10,
              fontFamily: 'var(--font-mono)', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--text-muted)',
            }}
          >
            Loading experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
