import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 dark:bg-black dark:text-white selection:bg-[#FFD700] selection:text-black">
      <Header />
      <main>
        <Hero />
        {/* About preview section */}
        <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Why Choose Us</h2>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                Elite training environment with certified coaches, modern equipment, and personalized plans that drive real results. Our philosophy is simple: discipline, intensity, and consistency.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {['Certified Trainers', 'Modern Equipment', 'Personalized Plans', 'Performance Focused'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                    <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FFD700' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <a href="#plans" className="inline-flex items-center px-5 py-3 rounded-md font-semibold uppercase tracking-wider text-xs text-black" style={{ backgroundColor: '#FFD700', boxShadow: '0 0 18px rgba(255,215,0,0.45)' }}>
                  View Plans
                </a>
                <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md border border-black/10 dark:border-white/10 text-xs uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
                alt="Athlete training at Unique Fitness"
                className="w-full h-full object-cover hover:scale-[1.02] transition"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wider text-white">
                Performance • Discipline • Results
              </div>
            </div>
          </div>
        </section>

        <Plans />

        {/* Contact preview */}
        <section id="contact" className="py-20 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase">Get In Touch</h2>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300">Morning: 6 AM – 10 AM • Evening: 5 PM – 9:30 PM</p>
              <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                <p>Mumbai, Maharashtra, India</p>
                <p>Phone: +91 90000 00000</p>
                <p>Email: hello@uniquefitness.com</p>
              </div>
            </div>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2"
                style={{ caretColor: '#FFD700' }}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2"
                style={{ caretColor: '#FFD700' }}
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-md px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2"
                style={{ caretColor: '#FFD700' }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-bold uppercase tracking-widest text-sm text-black hover:brightness-110"
                style={{ backgroundColor: '#FFD700', boxShadow: '0 0 18px rgba(255,215,0,0.45)' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
