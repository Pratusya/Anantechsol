const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-[var(--border-color)]/80 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Content */}
          <div className="lg:col-span-7 reveal active">
            <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">About AnanTechsol</span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mt-4 mb-6 font-heading leading-tight">
              Small studio. Direct access. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">No handoffs.</span>
            </h2>

            <div className="space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
              <p className="text-justify">
                AnanTechsol is a software development studio building websites, e-commerce stores and management systems for small and growing businesses.
              </p>
              <p className="text-justify">
                We work directly with each client from the first sketch to the day the site goes live — no account managers, no layers in between. Every project we show is real, shipped work: a live industrial site with an interactive 3D model, a working e-commerce store, and the systems we've built alongside them. We'd rather show fewer projects done properly than a long list of half-finished ones.
              </p>
            </div>

            {/* Mission Callout Quote */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-blue-500/30 relative">
              <div className="text-blue-400 text-3xl font-serif absolute top-3 left-4 opacity-30">“</div>
              <p className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-main)] relative z-10 italic pl-4">
                "Build it to fit the business, not the other way around."
              </p>
              <span className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mt-3 pl-4">— AnanTechsol Studio Philosophy</span>
            </div>
          </div>

          {/* Right Studio Identity Card */}
          <div className="lg:col-span-5 reveal active">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[var(--border-color)]/80 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[var(--border-color)]">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-[1px]">
                  <div className="w-full h-full bg-[var(--bg-main)] rounded-[15px] flex items-center justify-center text-blue-400 text-2xl font-bold font-heading">
                    A
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] font-heading">AnanTechsol Studio</h3>
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5 mt-0.5">
                    <i className="fa-solid fa-location-dot text-red-400"></i> Surat, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Core Principles list */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[var(--bg-card)]/80 border border-[var(--border-color)]/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-comments"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-main)]">Direct Founder Access</h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 text-justify">Talk straight to the engineers designing and building your actual code.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-card)]/80 border border-[var(--border-color)]/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-gauge-high"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-main)]">Performance First</h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 text-justify">Zero bloated code or slow templates. High speed load on all devices.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-card)]/80 border border-[var(--border-color)]/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-main)]">Post-Launch Support</h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 text-justify">We remain by your side for updates, training, and smooth ongoing operations.</p>
                  </div>
                </div>
              </div>

              {/* Surat Map visual element */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5"><i className="fa-solid fa-clock text-blue-400"></i> IST (UTC +5:30)</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Accepting New Projects</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
