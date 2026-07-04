import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)]/80 bg-[var(--bg-main)] py-12 relative z-10 text-[var(--text-muted)] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[var(--border-color)]/80">
          
          {/* Col 1: Studio Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="flex items-center">
              <img src={logo} alt="AnanTechsol Logo" className="h-10 sm:h-12 w-auto object-contain rounded-lg" />
            </a>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm max-w-sm leading-relaxed">
              AnanTechsol builds custom web applications, e-commerce stores, and operational management software for businesses in Surat, Gujarat and beyond.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com/anantechsol" target="_blank" rel="noopener noreferrer" aria-label="AnanTechsol Instagram" className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-pink-400 hover:border-pink-500/50 transition-colors">
                <i className="fa-brands fa-instagram text-base"></i>
              </a>
              <a href="mailto:anantechsol@gmail.com" aria-label="Email AnanTechsol" className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-blue-400 hover:border-blue-500/50 transition-colors">
                <i className="fa-solid fa-envelope text-base"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-[var(--text-main)] font-semibold text-xs uppercase tracking-wider mb-4 font-heading">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="#work" className="hover:text-blue-400 transition-colors">Featured Work</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing Packages</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Studio</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Live Portfolio Links */}
          <div className="md:col-span-4">
            <h4 className="text-[var(--text-main)] font-semibold text-xs uppercase tracking-wider mb-4 font-heading">Shipped Products</h4>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              <li><a href="https://shikshanetra.arpan.studio" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors flex items-center justify-between"><span>ShikshaNetra (School ERP)</span> <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a></li>
              <li><a href="https://naicetheprimary.in" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors flex items-center justify-between"><span>NaICE Primary School</span> <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a></li>
              <li><a href="https://skovfashion.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors flex items-center justify-between"><span>Skov Fashion</span> <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a></li>
              <li><a href="https://emallword.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors flex items-center justify-between"><span>Emallword E-Commerce</span> <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a></li>
              <li><a href="https://cnc-website-rouge.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors flex items-center justify-between"><span>Gujarat Profile (Industrial 3D)</span> <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Studio Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© <span id="year">{currentYear}</span> AnanTechsol. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <i className="fa-solid fa-code text-blue-500"></i> Built with precision in Surat, Gujarat, India.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
