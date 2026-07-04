import React, { useEffect, useRef } from 'react';

export default function FloatingParticles({ count = 35 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: 1 + Math.random() * 2.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: -0.15 - Math.random() * 0.25,
          opacity: 0.08 + Math.random() * 0.18,
        });
      }
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const dotColor = isDark ? '255,255,255' : '0,0,0';

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.opacity})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    init();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 0,
        pointerEvents: 'none',
      }}
      id="floating-particles"
    />
  );
}
