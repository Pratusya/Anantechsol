import { useState } from 'react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target['contact-name'].value;
    const email = event.target['contact-email'].value;
    const project = event.target['contact-project'].value;
    const message = event.target['contact-message'].value;

    const mailtoSubject = encodeURIComponent(`Project Inquiry: ${project} - ${name}`);
    const mailtoBody = encodeURIComponent(
        `Hello AnanTechsol Studio,\n\nName: ${name}\nEmail: ${email}\nSelected Package / Project Type: ${project}\n\nProject Scope & Message:\n${message}\n\nBest regards,\n${name}`
    );

    // Open mailto URL
    window.location.href = `mailto:anantechsol@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Show modal
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Overview */}
            <div className="lg:col-span-5 reveal active">
              <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Let's Connect</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mt-4 font-heading leading-tight">
                Have a project in mind? <br />Let's scope it out.
              </h2>
              <p className="text-[var(--text-muted)] mt-4 text-base leading-relaxed">
                Tell us what you're trying to build — we'll tell you honestly what it takes and what it costs.
              </p>

              {/* Direct Contact Buttons */}
              <div className="mt-8 space-y-4">
                <a href="mailto:anantechsol@gmail.com" className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider block font-medium">Email Us Directly</span>
                    <span className="text-[var(--text-main)] font-semibold text-sm sm:text-base group-hover:text-blue-400 transition-colors">anantechsol@gmail.com</span>
                  </div>
                </a>

                <a href="https://instagram.com/anantechsol" target="_blank" rel="noopener noreferrer" className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-pink-500/50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider block font-medium">Follow / DM on Instagram</span>
                    <span className="text-[var(--text-main)] font-semibold text-sm sm:text-base group-hover:text-pink-400 transition-colors">instagram.com/anantechsol</span>
                  </div>
                </a>

                <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center text-lg">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider block font-medium">Studio Base</span>
                    <span className="text-[var(--text-main)] font-semibold text-sm sm:text-base">Surat, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 reveal active">
              <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[var(--border-color)]/80 shadow-2xl relative">
                
                <h3 className="text-xl font-bold text-[var(--text-main)] font-heading mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-paper-plane text-blue-400 text-base"></i> Send Project Scope
                </h3>

                <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-5">
                  
                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">Your Name *</label>
                      <input type="text" id="contact-name" name="contact-name" required placeholder="e.g. Rahul Patel" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)]/80 border border-[var(--border-color)] text-[var(--text-main)] placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">Email Address *</label>
                      <input type="email" id="contact-email" name="contact-email" required placeholder="name@company.com" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)]/80 border border-[var(--border-color)] text-[var(--text-main)] placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm" />
                    </div>
                  </div>

                  {/* Selected Package / Project Type */}
                  <div>
                    <label htmlFor="contact-project" className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">Project Type or Package *</label>
                    <select id="contact-project" name="contact-project" required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)]/90 border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-blue-500 transition-colors text-sm">
                      <option value="" disabled>Select service or package...</option>
                      <optgroup label="Web Development">
                        <option value="Web Dev - Starter">Web Dev - Starter</option>
                        <option value="Web Dev - Business">Web Dev - Business</option>
                        <option value="Web Dev - Premium">Web Dev - Premium</option>
                      </optgroup>
                      <optgroup label="E-Commerce Store">
                        <option value="E-Commerce - Starter">E-Commerce - Starter</option>
                        <option value="E-Commerce - Growth">E-Commerce - Growth</option>
                        <option value="E-Commerce - Enterprise">E-Commerce - Enterprise</option>
                      </optgroup>
                      <optgroup label="School ERP (ShikshaNetra)">
                        <option value="School ERP - Basic">School ERP - Basic</option>
                        <option value="School ERP - Super">School ERP - Super</option>
                        <option value="School ERP - Enterprise">School ERP - Multi-Branch Enterprise</option>
                      </optgroup>
                      <optgroup label="HR Software">
                        <option value="HR Software - Small Business">HR - Small Business</option>
                        <option value="HR Software - Business">HR - Business</option>
                        <option value="HR Software - Enterprise">HR - Enterprise</option>
                      </optgroup>
                      <optgroup label="Custom Dev">
                        <option value="Custom Dev - MVP Build">Custom MVP Build</option>
                        <option value="Custom Dev - Full Product">Custom Full Product</option>
                        <option value="Custom Dev - Enterprise Quote">Custom Enterprise Build</option>
                      </optgroup>
                      <option value="Other / General Query">Other / Custom Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">Message / Scope Details *</label>
                    <textarea id="contact-message" name="contact-message" required rows="4" placeholder="Describe what you want to build, timeline, or any specific requirements..." className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)]/80 border border-[var(--border-color)] text-[var(--text-main)] placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-[var(--text-main)] font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2">
                    <span>Get My Quote & Scope</span>
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                  </button>

                  <p className="text-center text-[11px] text-[var(--text-muted)]">
                    Submitting opens your email client directly pre-filled with anantechsol@gmail.com.
                  </p>
                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SUCCESS CONFIRMATION MODAL */}
      {showModal && (
        <div id="success-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-main)]/90 backdrop-blur-md">
          <div className="glass-card rounded-2xl max-w-md w-full p-8 border border-[var(--border-color)] text-center relative">
            <button onClick={closeModal} aria-label="Close modal" className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-main)] text-lg">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 text-3xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading mb-2">Quote Request Prepared!</h3>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              Your mail client has been opened pre-filled with your project specifications. You can also contact us directly at <span className="text-blue-500 font-semibold">anantechsol@gmail.com</span>.
            </p>
            <div className="flex gap-3">
              <button onClick={closeModal} className="w-full py-3 rounded-xl bg-blue-600 text-[var(--text-main)] font-semibold text-xs hover:bg-blue-500 transition-all">Done</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
