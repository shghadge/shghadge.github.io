import { navItems } from '../constants';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <nav className="fixed left-10 top-0 h-dvh w-48 bg-slate-900 z-40 hidden lg:flex flex-col justify-center font-mono text-sm">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-left w-full text-sm font-normal ${
                activeSection === item.id
                  ? 'text-orange-400 underline underline-offset-5'
                  : 'text-gray-400'
              }`}
              style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
