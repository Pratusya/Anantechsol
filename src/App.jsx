import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('web');

  const switchPricingTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSelectPackage = (packageName) => {
    const selectElem = document.getElementById('contact-project');
    if (selectElem) {
      selectElem.value = packageName;
    }
  };

  useEffect(() => {
    // Intersection Observer for Scroll Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(elem => {
        revealObserver.observe(elem);
    });

    return () => {
        revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="antialiased selection:bg-blue-600 selection:text-[var(--text-main)] relative overflow-x-hidden">
      {/* Target Top Anchor */}
      <div id="top"></div>
      
      <Navbar />
      <Hero />
      <Services switchPricingTab={switchPricingTab} />
      <Work />
      <Stats />
      <Pricing 
        activeTab={activeTab} 
        switchPricingTab={switchPricingTab} 
        handleSelectPackage={handleSelectPackage} 
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
