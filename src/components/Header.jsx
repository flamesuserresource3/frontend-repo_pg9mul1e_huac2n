import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 bg-white/80 dark:bg-black/30 border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full" style={{ background: 'linear-gradient(135deg, #FFD700, #b99300)' }} />
            <span className="font-black tracking-wide text-lg uppercase text-neutral-900 dark:text-white">Unique Fitness</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="relative text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">
              <span className="after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full">About</span>
            </a>
            <a href="#plans" className="relative text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">
              <span className="after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full">Plans</span>
            </a>
            <a href="#trainers" className="relative text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">
              <span className="after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full">Trainers</span>
            </a>
            <a href="#contact" className="relative text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">
              <span className="after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full">Contact</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#plans"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md font-semibold uppercase text-xs tracking-wider text-black"
              style={{ backgroundColor: '#FFD700', boxShadow: '0 0 18px rgba(255,215,0,0.45)' }}
            >
              Join Now
            </a>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#FFD700]" />
              ) : (
                <Moon className="w-5 h-5 text-[#b99300]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
