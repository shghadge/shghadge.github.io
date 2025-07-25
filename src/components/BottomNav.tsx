import { useState } from 'react';
import { navItems } from '../constants';

interface BottomNavProps {
  activeSection: string;
}


const BottomNav = ({ activeSection }: BottomNavProps) => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger button, only visible on mobile */}
      <button
        className="fixed bottom-4 right-4 z-50 md:hidden bg-slate-800 text-orange-400 p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {/* Pop-up menu from bottom */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-end md:hidden bg-black/40 backdrop-blur-xs"
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        >
          <nav
            className="w-full rounded-t-2xl bg-slate-900 border-t border-slate-800 p-4 pb-8 animate-slideUp"
            style={{ maxHeight: '60vh' }}
            onClick={e => e.stopPropagation()}
            aria-label="Mobile navigation menu"
          >
            <ul className="flex flex-col gap-2 items-center">
              {navItems.map((item) => (
                <li key={item.id} className="w-full flex justify-center">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-lg lowercase px-4 py-3 rounded font-mono font-normal tracking-wide transition-colors duration-150 text-center w-auto ${
                      activeSection === item.id
                        ? 'text-orange-400 underline underline-offset-8' : 'text-gray-300 bg-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default BottomNav;
