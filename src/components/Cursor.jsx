import { useEffect, useState, useRef } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // For the trailing dot
  const trailingRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      // Check if hovering over clickable elements
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('glass-card') ||
        target.classList.contains('video-demo-tab')
      );
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Smooth animation for trailing circle
  useEffect(() => {
    const updateTrailingCursor = () => {
      trailingRef.current.x += (position.x - trailingRef.current.x) * 0.15;
      trailingRef.current.y += (position.y - trailingRef.current.y) * 0.15;
      
      const trailingEl = document.getElementById('cursor-trail');
      if (trailingEl) {
        trailingEl.style.transform = `translate3d(${trailingRef.current.x}px, ${trailingRef.current.y}px, 0)`;
      }
      
      requestRef.current = requestAnimationFrame(updateTrailingCursor);
    };
    
    requestRef.current = requestAnimationFrame(updateTrailingCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[100] transition-transform duration-100 ease-out mix-blend-screen"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isClicking ? 0.5 : (isPointer ? 1.5 : 1)})`,
        }}
      />
      <div 
        id="cursor-trail"
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[99] border transition-all duration-300 ${
          isPointer 
            ? 'w-12 h-12 border-blue-400 bg-blue-500/20 backdrop-blur-[2px]' 
            : 'w-8 h-8 border-blue-500/50 bg-transparent'
        }`}
        style={{
          marginLeft: isPointer ? '-24px' : '-16px',
          marginTop: isPointer ? '-24px' : '-16px',
        }}
      />
    </>
  );
};

export default Cursor;
