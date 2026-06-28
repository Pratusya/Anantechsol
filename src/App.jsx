import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Industries from './components/Industries.jsx';
import Services from './components/Services.jsx';
import Technologies from './components/Technologies.jsx';
import Projects from './components/Projects.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  // Manage language state, default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'hi') return 'hi';
    return 'en';
  });

  // Check if dark mode preference is saved in localStorage, default to dark theme
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to modern professional Dark Theme
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero darkMode={darkMode} language={language} />

        {/* About Us Section */}
        <About darkMode={darkMode} language={language} />

        {/* Industries We Serve Section */}
        <Industries darkMode={darkMode} language={language} />

        {/* Services Section */}
        <Services darkMode={darkMode} language={language} />

        {/* Technologies We Work With Section */}
        <Technologies darkMode={darkMode} language={language} />

        {/* Projects / Portfolio Section */}
        <Projects darkMode={darkMode} language={language} />

        {/* Why Choose Us Section */}
        <WhyChooseUs darkMode={darkMode} language={language} />

        {/* Contact Section */}
        <Contact darkMode={darkMode} language={language} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} language={language} />

      {/* Floating Interactive WhatsApp Chat Button */}
      <WhatsAppButton />
    </div>
  );
}
