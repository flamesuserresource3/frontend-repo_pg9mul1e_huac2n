import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-[92vh] min-h-[580px] w-full overflow-hidden bg-white dark:bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent dark:from-black/80 dark:via-black/20" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-bold text-neutral-900 dark:text-neutral-200">Premium Gym • Mumbai</p>
          <h1 className="mt-4 font-black uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl text-neutral-900 dark:text-white">
            Build. <span className="text-[#FFD700]">Sweat</span>. Conquer.
          </h1>
          <p className="mt-5 text-neutral-700 dark:text-neutral-300 max-w-xl">
            Train with certified coaches, world‑class equipment, and programs engineered for peak performance.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#plans"
              className="inline-flex items-center px-6 py-3 rounded-md font-extrabold uppercase tracking-widest text-sm text-black"
              style={{ backgroundColor: '#FFD700', boxShadow: '0 0 28px rgba(255,215,0,0.55)' }}
            >
              Join Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 rounded-md border border-black/10 dark:border-white/15 text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              Explore
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
