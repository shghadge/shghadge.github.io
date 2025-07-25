interface ScrollIndicatorProps {
  activeSection: string;
}

import { sections } from '../constants';

const ScrollIndicator = ({ activeSection }: ScrollIndicatorProps) => {
  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-3 select-none font-mono text-[14px]">
      {sections.map((section) => (
        <button
          key={section}
          type="button"
          aria-label={`Go to ${section}`}
          onClick={() => handleClick(section)}
          className={`w-1.5 h-1.5 rounded-full  border-slate-800 focus:outline-none transition-all duration-150 cursor-pointer flex items-center justify-center ${
            activeSection === section ? 'bg-orange-400 border-orange-400 scale-125' : 'bg-slate-800'
          }`}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
