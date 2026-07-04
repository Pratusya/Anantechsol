import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [projects, setProjects] = useState(0);
  const [services, setServices] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounter(setProjects, 5, 2000);
        animateCounter(setServices, 5, 2000);
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (setter, target, duration) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setter(target);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section ref={sectionRef} className="py-16 relative z-10 border-y border-[var(--border-color)]/80 bg-[var(--bg-main)]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]">
          
          {/* Stat 1 */}
          <div className="pt-4 md:pt-0 reveal active flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 mb-2">
              <span className="counter">{projects}</span>+
            </div>
            <div className="text-[var(--text-muted)] font-semibold text-base text-center">Projects Delivered</div>
            <div className="text-[var(--text-muted)] text-xs mt-1 text-center">Live in active client production</div>
          </div>

          {/* Stat 2 */}
          <div className="pt-4 md:pt-0 reveal active flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2">
              <span className="counter">{services}</span>
            </div>
            <div className="text-[var(--text-muted)] font-semibold text-base text-center">Core Services</div>
            <div className="text-[var(--text-muted)] text-xs mt-1 text-center">Web, E-Com, ERP & HR Systems</div>
          </div>

          {/* Stat 3 */}
          <div className="pt-4 md:pt-0 reveal active flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-2">
              100%
            </div>
            <div className="text-[var(--text-muted)] font-semibold text-base text-center">Custom-built, not templated</div>
            <div className="text-[var(--text-muted)] text-xs mt-1 text-center">Tailored code & high performance</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
