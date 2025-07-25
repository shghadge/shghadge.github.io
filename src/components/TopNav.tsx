import { navItems } from '../constants';

interface TopNavProps {
  activeSection: string;
}

const TopNav = ({ activeSection }: TopNavProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-slate-900 z-50 flex items-center justify-center font-mono">
      <ul className="flex space-x-8 text-sm">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`lowercase tracking-wide font-normal px-1 pb-1  ${
                activeSection === item.id
                  ? 'text-orange-400 underline underline-offset-5'
                  : 'text-gray-400 border-transparent'
              }`}
              style={{ background: 'none', margin: 0, padding: 0 , border: 'none' }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
