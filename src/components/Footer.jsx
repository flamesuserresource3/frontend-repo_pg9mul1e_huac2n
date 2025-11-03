import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full" style={{ background: 'linear-gradient(135deg, #FFD700, #b99300)' }} />
              <span className="font-black uppercase tracking-wide text-neutral-900 dark:text-white">Unique Fitness</span>
            </div>
            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 max-w-sm">
              Premium training environment designed for athletes and high performers.
            </p>
          </div>
          <div className="sm:justify-self-center">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-black dark:hover:text-white text-neutral-700 dark:text-neutral-300" href="#about">About</a></li>
              <li><a className="hover:text-black dark:hover:text-white text-neutral-700 dark:text-neutral-300" href="#plans">Plans</a></li>
              <li><a className="hover:text-black dark:hover:text-white text-neutral-700 dark:text-neutral-300" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="sm:justify-self-end">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-flex w-10 h-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
                <Instagram className="w-5 h-5" style={{ color: '#FFD700' }} />
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex w-10 h-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
                <Twitter className="w-5 h-5" style={{ color: '#FFD700' }} />
              </a>
              <a href="#" aria-label="YouTube" className="inline-flex w-10 h-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition">
                <Youtube className="w-5 h-5" style={{ color: '#FFD700' }} />
              </a>
            </div>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md px-3 py-2 text-sm bg-transparent border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white focus:outline-none focus:ring-2"
                style={{ outline: 'none', boxShadow: 'none' }}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wider text-black hover:brightness-110"
                style={{ backgroundColor: '#FFD700', boxShadow: '0 0 16px rgba(255,215,0,0.45)' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/5 dark:border-white/5 text-xs text-neutral-600 dark:text-neutral-400 flex justify-between">
          <span>© {new Date().getFullYear()} UNIQUE FITNESS. All rights reserved.</span>
          <span className="uppercase tracking-wider" style={{ color: '#FFD700' }}>Build • Sweat • Conquer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
