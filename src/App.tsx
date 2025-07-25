import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import TopNav from './components/TopNav';
import ScrollIndicator from './components/ScrollIndicator';
import BottomNav from './components/BottomNav';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { sections } from './constants';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to 'about' section on page load
  React.useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  return (
    <div className="bg-slate-900 text-gray-300 font-mono min-h-screen text-[14px] font-normal ">
      {/* Top nav: hidden on mobile */}
      <div className="hidden sm:block">
        <TopNav activeSection={activeSection} />
      </div>

      {/* Left nav: hidden on mobile and md */}
      <div className="hidden md:block">
        <Navigation activeSection={activeSection} />
      </div>

      {/* Right scroll indicator: hidden on mobile */}
      <div className="hidden sm:block">
        <ScrollIndicator activeSection={activeSection} />
      </div>

      {/* Bottom nav: only on mobile */}
      <div className="block sm:hidden">
        <BottomNav activeSection={activeSection} />
      </div>
      
      <main className="flex flex-col items-center w-full font-mono text-sm">
        <div className="w-full max-w-3xl px-4 font-mono text-sm">
          <About />
          <Skills />
          <Education />
          <WorkExperience />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
