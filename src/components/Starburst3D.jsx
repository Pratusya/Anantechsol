import React, { useRef, useEffect, useCallback } from 'react';

// Exact Antimetal palette
const COLORS = [
  '#1A1A1A', '#1A1A1A', '#1A1A1A', '#1A1A1A', '#1A1A1A',  // black (dominant)
  '#E8734A', '#E8734A', '#E8734A',                          // coral/orange
  '#A09830', '#A09830', '#9E9A2E',                          // olive
  '#DAA520', '#D4A020',                                      // golden yellow
];

function generateNodes(count) {
  const nodes = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.18 + Math.random() * 0.82; // normalized 0-1

    // Random size distribution
    const sizeRand = Math.random();
    let size;
    if (sizeRand > 0.92) size = 14 + Math.random() * 16;     // large (few)
    else if (sizeRand > 0.75) size = 7 + Math.random() * 7;   // medium
    else size = 2.5 + Math.random() * 4.5;                     // small (most)

    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const delay = Math.random() * 0.6; // stagger

    nodes.push({
      angle,
      targetRadius: radius,
      currentRadius: 0.02 + Math.random() * 0.04, // start clustered
      size,
      color,
      delay,
    });
  }
  return nodes;
}

export default function Starburst3D() {
  const canvasRef = useRef(null);
  const nodesRef = useRef(null);
  const animStartRef = useRef(null);
  const rafRef = useRef(null);

  const ANIMATION_DURATION = 2800; // ms
  const NODE_COUNT = 85;

  const easeOutCubic = useCallback((t) => 1 - Math.pow(1 - t, 3), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    nodesRef.current = generateNodes(NODE_COUNT);

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Start animation after a short pause
    const startDelay = setTimeout(() => {
      animStartRef.current = performance.now();
    }, 300);

    const draw = (time) => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w * 0.5;
      const cy = h * 0.5;
      const maxSpread = Math.min(w, h) * 0.44;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      if (!nodes) { rafRef.current = requestAnimationFrame(draw); return; }

      // Update positions
      const elapsed = animStartRef.current ? time - animStartRef.current : 0;

      nodes.forEach(node => {
        if (animStartRef.current) {
          const nodeElapsed = Math.max(0, elapsed - node.delay * 1000);
          const rawProgress = Math.min(nodeElapsed / ANIMATION_DURATION, 1);
          const progress = easeOutCubic(rawProgress);
          node.currentRadius = 0.02 + (node.targetRadius - 0.02) * progress;
        }
      });

      // Draw lines first (behind circles)
      ctx.strokeStyle = 'rgba(160, 158, 148, 0.35)';
      ctx.lineWidth = 0.8;
      nodes.forEach(node => {
        const r = node.currentRadius * maxSpread;
        const x = cx + Math.cos(node.angle) * r;
        const y = cy + Math.sin(node.angle) * r;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
      });

      // Draw circles on top
      nodes.forEach(node => {
        const r = node.currentRadius * maxSpread;
        const x = cx + Math.cos(node.angle) * r;
        const y = cy + Math.sin(node.angle) * r;

        ctx.beginPath();
        ctx.arc(x, y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      // Tiny center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#C4C4BC';
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      clearTimeout(startDelay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [easeOutCubic]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      id="starburst-canvas"
    />
  );
}
