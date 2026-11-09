import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { value: '4+', label: 'Major Projects', sub: 'Production Ready Solutions' },
  { value: '20+', label: 'Technologies', sub: 'MERN, Mobile, AI & Tools' },
  { value: '500+', label: 'Git Commits', sub: 'Continuous Code Activity' },
  { value: '100%', label: 'Responsive Design', sub: 'Desktop & Mobile Optimized' },
];

const Stats = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="card stat-card p-5 sm:p-7 text-center cursor-default group relative overflow-hidden"
          >
            {/* Glowing Top Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 group-hover:opacity-100 group-hover:scale-x-110 transition-all duration-300" />
            <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1 transition-all duration-300 group-hover:scale-105">
              {stat.value}
            </div>
            <div className="text-sm font-bold text-white mb-0.5">{stat.label}</div>
            <div className="text-[11px] text-slate-400">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
