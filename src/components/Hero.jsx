import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroCardRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const heroSectionRef = useRef(null);
  
  // State for delayed appearance of floating badges
  const [showBadges, setShowBadges] = useState(false);

  useEffect(() => {
    // Delay badge appearance by 0.5 seconds
    const timer = setTimeout(() => {
      setShowBadges(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const heroCard = heroCardRef.current;
    const floatBadge1 = badge1Ref.current;
    const floatBadge2 = badge2Ref.current;
    const heroSection = heroSectionRef.current;

    const handleMouseMove = (e) => {
      if (!heroSection || !heroCard) return;
      const rect = heroSection.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse offset from center (-1 to 1)
      let mouseX = (e.clientX - centerX) / (window.innerWidth / 2);
      let mouseY = (e.clientY - centerY) / (window.innerHeight / 2);
      
      // Clamp values to prevent extreme rotation when scrolling
      mouseX = Math.max(-1, Math.min(1, mouseX));
      mouseY = Math.max(-1, Math.min(1, mouseY));
      
      // Apply smooth 3D rotation to main card (max 15 degrees)
      const rotateY = mouseX * 15;
      const rotateX = -mouseY * 15;
      heroCard.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      
      // Apply parallax to floating badges (opposite direction for depth)
      if (floatBadge1) {
          floatBadge1.style.transform = `translateZ(70px) translateX(${-mouseX * 25}px) translateY(${-mouseY * 25}px)`;
      }
      if (floatBadge2) {
          floatBadge2.style.transform = `translateZ(60px) translateX(${-mouseX * 20}px) translateY(${-mouseY * 20}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (heroCard) heroCard.style.transform = `rotateY(-8deg) rotateX(5deg)`;
      if (floatBadge1) floatBadge1.style.transform = `translateZ(70px)`;
      if (floatBadge2) floatBadge2.style.transform = `translateZ(60px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Software for growing businesses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 font-heading">
              We build software your team will actually keep using.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal text-justify" style={{ color: 'var(--text-muted)' }}>
              AnanTechsol designs and builds websites, e-commerce stores, and management systems for small and mid-sized businesses — scoped to fit how you actually work.
            </p>
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#pricing" className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl bg-blue-600 text-[var(--text-main)] font-semibold text-base hover:bg-blue-500 transition-colors">
                View packages
              </a>
              <a href="#contact" className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl btn-secondary font-semibold text-base">
                Get a quote
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-[var(--border-color)] w-full grid grid-cols-3 gap-4 text-[var(--text-muted)] text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-blue-500"></i>
                <span>100% Custom Built</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-rocket text-blue-500"></i>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-headset text-blue-500"></i>
                <span>Direct Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful 3D Mouse-Tracking Showcase (Hidden on Mobile) */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center hero-perspective" ref={heroSectionRef}>
            
            {/* Rich Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/10 blur-[100px] rounded-full -z-10"></div>

            {/* Main 3D Browser Card (Mouse Tracking) */}
            <div className="relative w-full max-w-lg hero-tilt-card" ref={heroCardRef} style={{ transform: 'rotateY(-8deg) rotateX(5deg)' }}>
              
              {/* Animated Gradient Border */}
              <div className="gradient-border-wrapper shadow-2xl">
                <div className="gradient-border-inner">
                  {/* Browser Header */}
                  <div className="px-4 py-3 flex items-center justify-between border-b" style={{ background: 'var(--bg-main)', borderColor: 'var(--border-color)' }}>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <div className="rounded-md px-3 py-1 flex items-center gap-2" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                        <i className="fa-solid fa-lock text-[10px]" style={{ color: 'var(--text-muted)' }}></i>
                        <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>anan-tech-solutions.app</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-emerald-500 flex items-center gap-1.5 font-semibold bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live System
                      </span>
                    </div>
                  </div>

                  {/* Dark App Area */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: 'var(--bg-main)' }}>
                    {/* Clean black/dark area instead of a video */}
                    <div className="w-full h-full bg-[var(--bg-main)]"></div>
                    
                    {/* Professional Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent"></div>
                    
                    {/* Main Floating Badge inside card (Animated) */}
                    <div 
                      className={`absolute bottom-6 left-6 right-6 transition-all duration-[1500ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${showBadges ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} 
                      style={{ transform: showBadges ? 'translateZ(40px) translateY(0)' : 'translateZ(40px) translateY(20px)' }}
                    >
                      <div className="rounded-xl p-4 flex items-center gap-4 shadow-2xl backdrop-blur-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-[var(--text-main)] shadow-lg shadow-blue-600/30">
                          <i className="fa-solid fa-rocket text-lg"></i>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[var(--text-main)]">High-Performance Build</div>
                          <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Optimized for speed & scale</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Top Right (Uptime) - Animated */}
              <div 
                className={`absolute -right-8 top-20 z-20 hidden sm:block hero-float-badge transition-all duration-1000 delay-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${showBadges ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'}`} 
                ref={badge1Ref} 
                style={{ transform: showBadges ? 'translateZ(70px) translateY(0)' : 'translateZ(70px) translateY(40px)' }}
              >
                <div className={`rounded-xl p-3 flex items-center gap-3 shadow-2xl backdrop-blur-xl ${showBadges ? 'animate-float-delayed' : ''}`} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                    <i className="fa-solid fa-server"></i>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--text-main)]">99.9% Uptime</div>
                    <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Enterprise Reliability</div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Bottom Left (Deploy) - Animated */}
              <div 
                className={`absolute -left-8 bottom-28 z-20 hidden sm:block hero-float-badge transition-all duration-1000 delay-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${showBadges ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'}`} 
                ref={badge2Ref} 
                style={{ transform: showBadges ? 'translateZ(60px) translateY(0)' : 'translateZ(60px) translateY(40px)' }}
              >
                <div className={`rounded-xl p-3 flex items-center gap-3 shadow-2xl backdrop-blur-xl ${showBadges ? 'animate-float' : ''}`} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                    <i className="fa-solid fa-code-branch"></i>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--text-main)]">Deployed</div>
                    <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Production Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
