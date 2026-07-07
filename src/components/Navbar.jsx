import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="navbar" className="sticky top-0 z-50 transition-all duration-300 border-b border-[var(--border-color)] backdrop-blur-md bg-[var(--bg-main)]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <a href="#top" className="flex items-center group">
          <img src={logo} alt="AnanTechsol Logo" className="h-12 sm:h-14 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
          <a href="#services" className="hover:text-[var(--text-main)] transition-colors">Services</a>
          <a href="#work" className="hover:text-[var(--text-main)] transition-colors">Work</a>
          <a href="#pricing" className="hover:text-[var(--text-main)] transition-colors">Packages</a>
          <a href="#about" className="hover:text-[var(--text-main)] transition-colors">About</a>
          <a href="#contact" className="hover:text-[var(--text-main)] transition-colors">Contact</a>
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-blue-500 hover:border-blue-500/30 transition-colors"
            aria-label="Toggle Theme"
          >
            <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
          </button>
          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-blue-600 text-[#ffffff] text-sm font-semibold hover:bg-blue-500 transition-colors">
            Get a Quote
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleTheme} 
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
          </button>
          <button 
            id="menu-btn" 
            aria-label="Toggle Navigation Menu" 
            className="text-[var(--text-muted)] hover:text-[var(--text-main)] p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} id="menu-icon"></i>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        id="mobile-menu" 
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-[var(--bg-main)] border-b border-[var(--border-color)] px-6 py-6 transition-all`}
      >
        <nav className="flex flex-col gap-4 text-base font-medium text-[var(--text-muted)]">
          <a href="#services" className="mobile-link hover:text-[var(--text-main)] py-1 border-b border-[var(--border-color)]" onClick={closeMenu}>Services</a>
          <a href="#work" className="mobile-link hover:text-[var(--text-main)] py-1 border-b border-[var(--border-color)]" onClick={closeMenu}>Work</a>
          <a href="#pricing" className="mobile-link hover:text-[var(--text-main)] py-1 border-b border-[var(--border-color)]" onClick={closeMenu}>Packages</a>
          <a href="#about" className="mobile-link hover:text-[var(--text-main)] py-1 border-b border-[var(--border-color)]" onClick={closeMenu}>About</a>
          <a href="#contact" className="mobile-link hover:text-[var(--text-main)] py-1" onClick={closeMenu}>Contact</a>
          
          <div className="pt-4 flex flex-col gap-3">
            <a href="#contact" className="mobile-link text-center py-2.5 rounded-xl bg-blue-600 text-[var(--text-main)] font-semibold hover:bg-blue-500" onClick={closeMenu}>Get a Quote</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
