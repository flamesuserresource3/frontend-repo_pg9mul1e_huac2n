import { motion } from 'framer-motion';

const plans = [
  { title: '1 Month', price: '₹1,999', features: ['Gym Access', 'Locker', '1 PT Session'] },
  { title: '3 Months', price: '₹4,999', features: ['Gym Access', 'Locker', '3 PT Sessions'], best: true },
  { title: '6 Months', price: '₹8,999', features: ['Gym Access', 'Locker', '5 PT Sessions'] },
  { title: '1 Year', price: '₹15,999', features: ['Gym Access', 'Locker', '10 PT Sessions'] },
];

const Card = ({ plan }) => {
  const isBest = plan.best;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`relative rounded-xl p-6 bg-white dark:bg-neutral-900 border transition shadow-sm hover:shadow-xl ${
        isBest ? 'border-[1.5px]' : 'border'
      }`}
      style={isBest ? { borderColor: '#FFD700', boxShadow: '0 0 28px rgba(255,215,0,0.25)' } : {}}
    >
      {isBest && (
        <div className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black" style={{ backgroundColor: '#FFD700' }}>
          Best Value
        </div>
      )}
      <h3 className="text-xl font-extrabold uppercase text-neutral-900 dark:text-white">{plan.title}</h3>
      <p className="mt-2 text-3xl font-black text-neutral-900 dark:text-white">{plan.price}</p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FFD700' }} />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-semibold uppercase tracking-wider text-sm text-black"
        style={{ backgroundColor: '#FFD700', boxShadow: isBest ? '0 0 22px rgba(255,215,0,0.45)' : '0 0 12px rgba(255,215,0,0.25)' }}
      >
        Buy Now
      </a>
    </motion.div>
  );
};

const Plans = () => {
  return (
    <section id="plans" className="relative py-20 bg-neutral-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-neutral-900 dark:text-white">Membership Plans</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Choose a plan that matches your grind. Upgrade anytime.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <Card key={p.title} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
